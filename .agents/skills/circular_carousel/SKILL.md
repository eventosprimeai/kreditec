---
name: Carrusel Circular Infinito (React & Tailwind)
description: Implementación de un carrusel circular infinito utilizando posicionamiento absoluto y cálculos matemáticos (modulo) para garantizar que jamás queden espacios vacíos a los costados, manteniendo animaciones fluidas.
---

# Implementación de Carrusel Circular Infinito

Este workflow describe cómo crear un componente de React (Next.js idealmente) que funciona como un Coverflow/Carrusel infinito mediante el uso experto de estilos y matemáticas puras, sin depender de librerías externas pesadas (como Swiper o Slick).

## 1. Lógica Central (El Método Offset)

En lugar de mover un contenedor con `transform: translateX()`, calculamos la posición relativa (offset) geométrica de cada elemento con respecto al elemento que actualmente está activo en el centro de la pantalla.

```typescript
// Calcula la distancia desde el elemento activo, asegurando un efecto circular continuo
function getOffset(index: number, activeIndex: number, total: number) {
  let diff = index - activeIndex;
  const half = Math.floor(total / 2);
  
  if (diff > half) diff -= total;
  else if (diff < -half) diff += total;
  
  return diff;
}
```

## 2. Estructura del Componente

```tsx
import React, { useState } from 'react';

export function InfiniteCarousel({ data }) {
  const [activeIndex, setActiveIndex] = useState(1);

  const prev = () => setActiveIndex((p) => (p <= 0 ? data.length - 1 : p - 1));
  const next = () => setActiveIndex((p) => (p >= data.length - 1 ? 0 : p + 1));

  return (
    <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-16 flex items-center justify-center carousel-infinite">
      
      {/* Definición de ancho responsivo mediante CSS Variables */}
      <style>{`
        .carousel-infinite { --item-width: 100vw; }
        @media (min-width: 768px) { .carousel-infinite { --item-width: 360px; } }
        @media (min-width: 1024px) { .carousel-infinite { --item-width: 420px; } }
        @media (min-width: 1280px) { .carousel-infinite { --item-width: 460px; } }
      `}</style>

      {/* Track que agrupa los items (Debe ser relative y flex center) */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {data.map((item, idx) => {
          const offset = getOffset(idx, activeIndex, data.length);
          const isActive = offset === 0;
          // Mostramos solo la activa (0) y las adyacentes (-1 y 1)
          const isVisible = Math.abs(offset) <= 1;

          return (
            <div 
              key={item.id} 
              className="absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex justify-center"
              style={{
                width: 'var(--item-width)',
                transform: `translateX(calc(${offset} * var(--item-width)))`,
                zIndex: isActive ? 30 : 20,
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'auto' : 'none'
              }}
              onClick={() => {
                 if (!isActive && isVisible) setActiveIndex(idx);
              }}
            >
               {/* CONTENIDO DE LA TARJETA */}
               <div className={`
                 w-full mx-4 p-8 rounded-3xl transition-all duration-700 relative overflow-hidden group
                 ${isActive 
                   ? 'bg-green-900 shadow-2xl scale-100 cursor-default' 
                   : 'bg-white shadow-md scale-95 opacity-60 hover:opacity-100 cursor-pointer'
                 }
               `}>
                 {/* Degradado lateral de desvanecimiento para items inactivos */}
                 {!isActive && (
                    <div className={`hidden md:block absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-700 z-30
                      ${offset < 0 ? 'bg-gradient-to-l from-white/10 to-white/90' : ''}
                      ${offset > 0 ? 'bg-gradient-to-r from-white/10 to-white/90' : ''}
                      group-hover:opacity-0
                    `} />
                 )}
                 {/* ... Detalles UI de la tarjeta ... */}
                 Item {item.id}
               </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
```

## Beneficios
1. **Infinitud visual:** Permite navegación ininterrumpida desplazando matemáticamente al hijo del DOM en lugar de modificar el array original, lo que conserva completamente la estabilidad de Next.js y los estados de React.
2. **Alta Performance:** Al basarse completamente en `transform` puro, la animación es delegada a la GPU ofreciendo consistencia de 60fps constantes incluso en dispositivos móviles de gama baja.
3. **Escalabilidad:** Funciona perfecto tanto para 3 elementos visuales como si introducimos 20 elementos distintos.

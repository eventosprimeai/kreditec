"use client";

import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export interface Testimonio {
  id: string;
  autor: string;
  cargo: string;
  texto: string;
}

export const defaultTestimonios: Testimonio[] = [
  {
    id: "1",
    autor: "Carlos Ramírez",
    cargo: "Gerente Comercial, Institución Financiera Progreso",
    texto: "Desde que implementamos el ecosistema operativo de Kreditec, nuestra originación de crédito creció un 45% en el primer semestre. Su trazabilidad es invaluable."
  },
  {
    id: "2",
    autor: "Mónica Torres",
    cargo: "Directora de Riesgos, Finanzas Activas",
    texto: "La integración técnica fue rápida y sin fricción. No son un simple call center; son un brazo operativo estratégico que cuida celosamente los datos de nuestros socios."
  },
  {
    id: "3",
    autor: "Javier Villalobos",
    cargo: "VP de Operaciones B2B, Mutualista Trust",
    texto: "Pasamos de tener procesos manuales a un embudo completamente digital. La gestión en tiempo real con HubSpot nos dio el control absoluto que buscábamos."
  }
];

// Calcula la distancia desde el elemento activo, asegurando un efecto circular continuo
function getOffset(index: number, activeIndex: number, total: number) {
  let diff = index - activeIndex;
  const half = Math.floor(total / 2);
  if (diff > half) diff -= total;
  else if (diff < -half) diff += total;
  return diff;
}

export function TestimoniosCarousel() {
  const [data, setData] = useState<Testimonio[]>([]);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const load = () => {
      const saved = localStorage.getItem('kreditec_testimonios');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.length > 0) {
              setData(parsed);
              return;
          }
        } catch(e) {}
      }
      setData(defaultTestimonios);
      setActiveIndex(1);
      localStorage.setItem('kreditec_testimonios', JSON.stringify(defaultTestimonios));
    };
    
    load();
    window.addEventListener('storage', load);
    const interval = setInterval(load, 2000);
    return () => {
        window.removeEventListener('storage', load);
        clearInterval(interval);
    }
  }, []);

  const handlePrev = () => setActiveIndex((prev) => (prev <= 0 ? data.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev >= data.length - 1 ? 0 : prev + 1));

  let touchStartX = 0;
  const onTouchStart = (e: React.TouchEvent) => { touchStartX = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 40) handleNext();
    else if (diff < -40) handlePrev();
  };

  if (data.length === 0) return null;

  return (
    <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-16 min-h-[500px] flex items-center justify-center carousel-infinite" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <style>{`
        .carousel-infinite {
          --item-width: 100vw;
        }
        @media (min-width: 768px) {
          .carousel-infinite { --item-width: 360px; }
        }
        @media (min-width: 1024px) {
          .carousel-infinite { --item-width: 420px; }
        }
        @media (min-width: 1280px) {
          .carousel-infinite { --item-width: 460px; }
        }
      `}</style>

      {/* Flechas para usar solo en móvil, ya que en PC será con interacciones de clic */}
      <div className="w-full flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4 z-40 pointer-events-none md:hidden">
          <button onClick={handlePrev} className="pointer-events-auto bg-white shadow-lg text-[#002d14] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00bc4c] hover:text-white transition-colors">
              <ChevronLeft size={24} />
          </button>
          <button onClick={handleNext} className="pointer-events-auto bg-white shadow-lg text-[#002d14] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#00bc4c] hover:text-white transition-colors">
              <ChevronRight size={24} />
          </button>
      </div>

      <div className="relative w-full h-[400px] flex items-center justify-center">
        {data.map((item, idx) => {
          const offset = getOffset(idx, activeIndex, data.length);
          const isActive = offset === 0;
          const isLeft = offset === -1;
          const isRight = offset === 1;
          // Mostramos solo la activa y las inmediatamente adyacentes para la estética 3-column.
          const isVisible = Math.abs(offset) <= 1;

          return (
            <div 
              key={item.id} 
              className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex justify-center`}
              style={{
                width: 'var(--item-width)',
                transform: `translateX(calc(${offset} * var(--item-width)))`,
                zIndex: isActive ? 30 : 20,
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'auto' : 'none'
              }}
              onClick={() => {
                 if (!isActive && isVisible) {
                   setActiveIndex(idx);
                 }
              }}
            >
              <div 
                className={`w-full mx-4 md:mx-6 p-8 md:p-10 rounded-3xl transition-all duration-700 relative overflow-hidden group
                  ${isActive 
                    ? 'bg-[#002d14] shadow-[0_20px_50px_rgba(0,45,20,0.4)] border border-[#00bc4c]/30 scale-100 md:scale-105 cursor-default' 
                    : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 scale-95 opacity-60 hover:opacity-100 cursor-pointer pointer-events-auto'
                  }`}
              >
                 {/* Efecto visual de desvanecimiento hacia los bordes en elementos inactivos */}
                 {!isActive && (
                    <div className={`hidden md:block absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-700 z-30
                      ${offset < 0 ? 'bg-gradient-to-l from-white/10 to-white/90' : ''}
                      ${offset > 0 ? 'bg-gradient-to-r from-white/10 to-white/90' : ''}
                      group-hover:opacity-0
                    `} />
                 )}

                 <Quote className={`absolute top-8 right-8 transition-colors duration-500 ${isActive ? 'text-white/5' : 'text-gray-100'}`} size={60} />
                  
                 <div className="flex gap-1 text-[#00bc4c] mb-6 relative z-10">
                   {[1,2,3,4,5].map(star => <Star key={star} className="fill-current" size={18} />)}
                 </div>
                  
                 <p className={`leading-relaxed mb-8 relative z-20 italic text-sm md:text-base transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-600'}`}>
                   "{item.texto}"
                 </p>
                  
                 <div className={`flex items-center gap-4 pt-6 border-t transition-colors duration-500 ${isActive ? 'border-white/10' : 'border-gray-100'}`}>
                   <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0 transition-colors duration-500
                     ${isActive ? 'bg-white/10 text-[var(--color-accent)] border border-[var(--color-accent)]' : 'bg-[#002d14] text-white'}`}>
                     {item.autor.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase()}
                   </div>
                   <div className="relative z-20 transition-colors duration-500">
                     <h4 className={`font-bold ${isActive ? 'text-white' : 'text-[#002d14]'}`}>{item.autor}</h4>
                     <p className={`text-xs md:text-sm ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>{item.cargo}</p>
                   </div>
                 </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Indicadores de página */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-40">
         {data.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#00bc4c] w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Ir al testimonio ${idx + 1}`}
            />
         ))}
      </div>

    </div>
  );
}

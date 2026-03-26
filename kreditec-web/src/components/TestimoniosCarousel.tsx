"use client";

import React, { useState } from 'react';
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
    autor: "Julio César Pazmiño Játiva",
    cargo: "Gerente General, Broker de Seguros Pazmiño Játiva",
    texto: "En Pazmiño Játiva valoramos los aliados que resuelven. Kreditec puso a salvo múltiples operaciones complejas gracias a su capacidad de respuesta inmediata y una gestión impecable. Destacamos la visión de su CEO, Valentina Barrera, quien ha logrado imprimir un sello de empatía y agilidad en cada proceso. Trabajar con ellos es sinónimo de eficiencia y tranquilidad financiera."
  },
  {
    id: "2",
    autor: "Luis Maldonado",
    cargo: "Gerente General, ASSISTCOM",
    texto: "Assistcom identifica en Kreditec un aliado estratégico con el cual es posible construir una propuesta conjunta de valor en el mercado financiero. La integración de servicios asistenciales dentro de los productos de crédito permite diferenciar la oferta, mejorar la experiencia del cliente y fortalecer la relación con el usuario final. Más que una relación proveedor-cliente, se plantea un trabajo conjunto, enfocado en crecimiento, escalabilidad y generación de valor para ambas partes."
  },
  {
    id: "3",
    autor: "Yeferson Torres",
    cargo: "Gerente General, Tikee",
    texto: "Como aliados en el sector tecnológico, en Tikee validamos y recomendamos la especialización de Kreditec. Su enfoque en la ingeniería de procesos eleva el estándar de las soluciones financieras actuales. La gestión comercial de Kreditec destaca por entender la complejidad técnica y transformarla en procesos ágiles, seguros y altamente efectivos."
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
  const data = defaultTestimonios;
  const [activeIndex, setActiveIndex] = useState(1);

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

      <div className="relative w-full h-[450px] flex items-center justify-center">
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
                    ? 'bg-[#002d14] border border-[#00bc4c]/30 scale-100 md:scale-105 cursor-default' 
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
      
      

    </div>
  );
}

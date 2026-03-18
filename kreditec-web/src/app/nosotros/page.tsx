"use client";
import React from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export default function NosotrosPage() {
  return (
    <div className="bg-white min-h-screen">
      <InnerHero title="Nosotros" bgImage="/about-team.png" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Especialistas en ingeniería de procesos orientada al sector financiero popular y solidario ecuatoriano.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <AnimatedSection className="flex-1 w-full order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-[#002d14] mb-6">Misión</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Proporcionar soluciones tecnológicas y gestiones comerciales B2B altamente eficientes que permitan a las cooperativas e instituciones escalar su capacidad operativa, asegurando control absoluto y trazabilidad en la colocación de cartera.
            </p>
            
            <h2 className="text-3xl font-bold text-[#002d14] mb-6">Visión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Convertirnos en el aliado tecnológico y comercial más confiable del ecosistema financiero ecuatoriano para el 2028, liderando la transformación digital de procesos de captación y cierre crediticio con ética y transparencia.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="flex-1 w-full order-1 lg:order-2">
             <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image src="/value-prop.png" alt="Equipo Kreditec" fill className="object-cover" />
             </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

function InnerHero({ title, bgImage }: { title: string, bgImage: string }) {
  return (
    <section className="relative h-[30vh] md:h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden w-full mt-16 md:mt-20">
      <div className="absolute inset-0 z-0">
        <Image src={bgImage} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>
      <div className="relative z-20 text-center px-4">
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">{title}</h1>
      </div>
    </section>
  );
}

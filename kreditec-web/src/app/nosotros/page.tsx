"use client";
import React from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export default function NosotrosPage() {
  return (
    <div className="bg-white min-h-screen">
      <InnerHero title="Nosotros" bgImage="/about-team-expamdido.webp" />

      {/* Timeline de Historia */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#002d14] mb-4 tracking-tight">Nuestra Trayectoria</h2>
            <p className="text-lg text-gray-600 font-medium">Más de dos décadas transformando la gestión comercial sólida y transparente.</p>
          </AnimatedSection>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-[1.5px] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#002d14] before:via-[var(--color-accent)] before:to-[#002d14]/20 pt-4 pb-4">
            
            {/* 1998 */}
            <AnimatedSection delay={0.1} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#002d14] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 transition-transform group-hover:scale-110">
                 <div className="w-3 h-3 bg-[var(--color-accent)] rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3.5rem)] text-left md:group-odd:text-right bg-white md:bg-transparent shadow-sm md:shadow-none p-5 md:p-0 rounded-2xl md:rounded-none group-hover:-translate-y-1 transition-transform">
                <span className="text-3xl font-black text-[#002d14] mb-2 block tracking-tight">1998</span>
                <h3 className="text-lg md:text-xl font-bold text-gray-800">Fundación</h3>
              </div>
            </AnimatedSection>

            {/* 2008 */}
            <AnimatedSection delay={0.2} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#00bc4c] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 transition-transform group-hover:scale-110">
                 <div className="w-3 h-3 bg-[#002d14] rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3.5rem)] text-left md:group-odd:text-right bg-white md:bg-transparent shadow-sm md:shadow-none p-5 md:p-0 rounded-2xl md:rounded-none group-hover:-translate-y-1 transition-transform">
                <span className="text-3xl font-black text-[#002d14] mb-2 block tracking-tight">2008</span>
                <h3 className="text-lg md:text-xl font-bold text-gray-800">Primer cliente cooperativo</h3>
              </div>
            </AnimatedSection>

            {/* 2023 */}
            <AnimatedSection delay={0.3} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#002d14] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 transition-transform group-hover:scale-110">
                 <div className="w-3 h-3 bg-[var(--color-accent)] rounded-full animate-pulse"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3.5rem)] text-left md:group-odd:text-right bg-white md:bg-transparent shadow-sm md:shadow-none p-5 md:p-0 rounded-2xl md:rounded-none group-hover:-translate-y-1 transition-transform">
                <span className="text-3xl font-black text-[var(--color-accent)] mb-2 block tracking-tight">2023</span>
                <h3 className="text-lg md:text-xl font-bold text-gray-800">Nueva identidad</h3>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002d14] mb-4 tracking-tight">ADN de la Empresa</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Seguridad de grado internacional, transparencia absoluta y mitigación de riesgo técnico.
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
                <Image src="/value-prop.webp" alt="Equipo Kreditec" fill className="object-cover" />
             </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

function InnerHero({ title, bgImage }: { title: string, bgImage: string }) {
  return (
    <section 
      className="relative h-[40vh] md:h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden w-full mt-16 md:mt-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center px-4">
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">{title}</h1>
      </div>
    </section>
  );
}

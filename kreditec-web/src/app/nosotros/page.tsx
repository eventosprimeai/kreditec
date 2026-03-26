"use client";
import React from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PhoneCall, Zap, BarChart3, Lock, ShieldCheck, Cloud } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <div className="bg-white min-h-screen">
      <InnerHero title="Nosotros" bgImage="/about-team-expamdido.webp" />

      {/* Sección Timeline de Historia eliminada temporalmente y respaldada en Recursos/Respaldo_Nuestra_Trayectoria.md */}

      {/* SECCIÓN QUIÉNES SOMOS */}
      <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <AnimatedSection className="flex-1 w-full order-2 text-left">
              <h2 className="text-[var(--color-accent)] font-bold tracking-widest uppercase mb-6 text-sm md:text-base">
                ¿Quiénes Somos?
              </h2>
              
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#002d14] tracking-tight leading-[1.15] mb-8">
                KREDITEC es una empresa de <span className="text-[#002d14] block mt-2">Gestión Comercial</span> <span className="text-[var(--color-accent)] block mt-2">Especializada</span>
              </h3>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-8">
                Diseñada para ser el motor de ventas de las Instituciones financieras en Ecuador. No solo contactamos socios; estructuramos, contactamos y gestionamos operaciones listas para desembolso.
              </p>

              <div className="border-l-4 border-[var(--color-accent)] pl-6 py-2">
                <p className="italic text-gray-500 text-lg leading-relaxed">
                  "Replicamos la experiencia de atención presencial en un ecosistema 100% digital, integrando tecnología, verificación y seguridad."
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="flex-1 w-full order-1">
               <div className="relative aspect-square md:aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                  <Image src="/about-team.webp" alt="Equipo Kreditec Operaciones" fill className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out" />
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
              Facilitar el acceso al crédito mediante logística eficiente e ingeniería de procesos. Desarrollamos ecosistemas comerciales altamente escalables que dotan a las instituciones financieras de control absoluto y trazabilidad total en la colocación de cartera.
            </p>
            
            <h2 className="text-3xl font-bold text-[#002d14] mb-6">Visión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser el aliado Fintech estratégico número uno en Ecuador, liderando el análisis de datos y la originación de crédito. Impulsamos el futuro corporativo garantizando escalabilidad absoluta, procesos éticos y máxima transparencia para el 2028.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="flex-1 w-full order-1 lg:order-2">
             <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image src="/value-prop.webp" alt="Equipo Kreditec" fill className="object-cover" />
             </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ¿POR QUÉ KREDITEC? */}
      <section 
        className="py-32 relative bg-black overflow-hidden bg-fixed bg-[center_top] bg-cover"
        style={{ backgroundImage: 'url(/services-bg.webp)' }}
      >
        <div className="absolute inset-0 bg-black/75 z-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <AnimatedSection className="text-center mb-16 max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 font-medium mb-4">¿Por qué?</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              KREDITEC
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <AnimatedSection delay={0.1} className="h-full">
              <div className="h-full flex flex-col bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 text-center">
                <PhoneCall className="text-[var(--color-accent)] mb-6 mx-auto drop-shadow-[0_0_12px_rgba(0,188,76,0.6)]" size={56} />
                <h3 className="text-2xl font-bold text-white mb-3">Atención Multicanal</h3>
                <p className="text-gray-300 leading-relaxed">Comunicación inmediata y eficiente donde el socio se encuentre.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="h-full">
              <div className="h-full flex flex-col bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 text-center">
                <Zap className="text-[var(--color-accent)] mb-6 mx-auto drop-shadow-[0_0_12px_rgba(0,188,76,0.6)]" size={56} />
                <h3 className="text-2xl font-bold text-white mb-3">Eficiencia Operativa</h3>
                <p className="text-gray-300 leading-relaxed">Automatización de procesos repetitivos para acelerar el desembolso.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="h-full">
              <div className="h-full flex flex-col bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 text-center">
                <BarChart3 className="text-[var(--color-accent)] mb-6 mx-auto drop-shadow-[0_0_12px_rgba(0,188,76,0.6)]" size={56} />
                <h3 className="text-2xl font-bold text-white mb-3">Análisis de Datos</h3>
                <p className="text-gray-300 leading-relaxed">Dashboards de calidad, métricas de call center y reportes de estructura para una toma de decisiones informada.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SEGURIDAD Y CUMPLIMIENTO */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#002d14] mb-6 tracking-tight">Seguridad y Cumplimiento</h2>
            <p className="text-xl text-gray-500 font-medium">
              Entendemos la sensibilidad de la información financiera. Nuestra arquitectura está diseñada bajo estándares internacionales.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="h-full">
              <div className="h-full flex flex-col bg-[var(--color-accent)] p-8 rounded-[2rem] text-center hover:-translate-y-2 transition-all duration-300 shadow-lg">
                <Lock className="text-white mb-6 mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" size={56} />
                <h3 className="text-2xl font-bold text-white mb-3">Conectividad Cifrada</h3>
                <p className="text-white/90 leading-relaxed">Integración segura mediante túneles VPN y protocolos de cifrado de datos en tránsito y en reposo.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="h-full">
              <div className="h-full flex flex-col bg-[#002d14] p-8 rounded-[2rem] text-center hover:-translate-y-2 transition-all duration-300 shadow-lg">
                <ShieldCheck className="text-white mb-6 mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" size={56} />
                <h3 className="text-2xl font-bold text-white mb-3">Trazabilidad y Auditoría</h3>
                <p className="text-white/90 leading-relaxed">Registro inalterable de quién, cuándo y cómo se accedió a la información de cada socio.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="h-full">
              <div className="h-full flex flex-col bg-[#002d14] p-8 rounded-[2rem] text-center hover:-translate-y-2 transition-all duration-300 shadow-lg">
                <Cloud className="text-white mb-6 mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" size={56} />
                <h3 className="text-2xl font-bold text-white mb-3">Alojamiento en la Nube</h3>
                <p className="text-white/90 leading-relaxed">Infraestructura respaldada por servidores con certificaciones de seguridad, garantizando disponibilidad 8/5 de lunes a viernes en horario de operaciones.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PLAN DE IMPLEMENTACIÓN */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 max-w-4xl mx-auto">
            <p className="text-[var(--color-accent)] font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Plan de implementación</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#002d14] tracking-tight">De 0 a Producción en 28 Días</h2>
            <p className="text-xl text-gray-500 font-medium mt-6">
              Nuestra infraestructura está diseñada para la transparencia y la escalabilidad:
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-10">
            <AnimatedSection delay={0.1}>
              <div>
                <p className="text-lg font-bold text-[#002d14] mb-3">Semana 1: Infraestructura y Seguridad</p>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#002d14] rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <p className="text-lg font-bold text-[#002d14] mb-3">Semana 2: Integración y Calidad de Datos</p>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#002d14] rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div>
                <p className="text-lg font-bold text-[#002d14] mb-3">Semana 3: Automatización y Marketing</p>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#002d14] rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div>
                <p className="text-lg font-bold text-[#002d14] mb-3">Semana 4: Pruebas, Reportes y Salida a Producción</p>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--color-accent)] rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 7. ALIADOS (Fondo blanco limpio, logos corporativos) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Aliados Estratégicos y Stack Tecnológico</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
               <div className="relative w-48 h-12 md:h-14 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                  <Image src="/HubSpot_Logo.svg" alt="HubSpot" fill className="object-contain" />
               </div>
               <div className="relative w-48 h-12 md:h-14 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                  <Image src="/nuatalker-logo.png" alt="NUA Talker" fill className="object-contain" />
               </div>
               <div className="relative w-48 h-12 md:h-14 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                  <Image src="/broker-institucional-logo.png" alt="Broker Institucional" fill className="object-contain" />
               </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.3} className="text-center bg-gray-50 rounded-3xl p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h2 className="text-3xl font-bold text-[#002d14] mb-6 tracking-tight">Escale de forma segura hoy mismo.</h2>
            <Link href="/contacto">
              <Button size="lg" className="w-full sm:w-auto text-lg py-5 px-10 font-semibold text-white">
                Despliegue nuestro equipo
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
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

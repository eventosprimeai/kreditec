"use client";
import React from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TrendingUp, PhoneCall, Users, Database, Activity, CalendarDays, CheckCircle2, Building, Trophy, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ServiciosPage() {
  return (
    <div className="bg-white min-h-screen">
      <InnerHero title="Servicios" bgImage="/services-bg.webp" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* PROCESO DE TRABAJO (Timeline Section) */}
        <AnimatedSection className="mb-24 w-full relative">
           <div className="bg-[#001108] rounded-[2.5rem] p-10 md:p-16 text-center border border-white/5 relative overflow-hidden shadow-2xl">
             {/* Glows de fondo interactivo */}
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-accent)] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00bc4c] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
             
             <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-16 tracking-tight">Proceso de Trabajo</h2>
             
             <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-4 relative z-10 w-full px-4">
                {/* Horizontal line for desktop connecting the dots */}
                <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent z-0" />
                
                {[
                  { id: 1, text: "Entendemos tu modelo" },
                  { id: 2, text: "Analizamos tu necesidad" },
                  { id: 3, text: "Co-creamos el producto" },
                  { id: 4, text: "Acompañamos el lanzamiento" },
                  { id: 5, text: "Analizamos resultados" }
                ].map((step, idx) => (
                  <div key={step.id} className="relative z-10 flex flex-col items-center flex-1 w-full group cursor-default">
                     {/* Number Circle */}
                     <div className="w-20 h-20 rounded-full bg-[#001f0e] border-2 border-[var(--color-accent)] flex items-center justify-center text-3xl font-black text-white mb-6 group-hover:-translate-y-2 group-hover:bg-[var(--color-accent)] group-hover:shadow-[0_0_25px_rgba(0,188,76,0.6)] transition-all duration-300">
                        {step.id}
                     </div>
                     <p className="text-lg font-bold text-gray-300 max-w-[160px] leading-tight group-hover:text-white transition-colors">
                        {step.text}
                     </p>
                     
                     {/* Mobile Arrow Connector */}
                     {idx < 4 && (
                       <div className="lg:hidden mt-8 text-[var(--color-accent)]/50">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                       </div>
                     )}
                  </div>
                ))}
             </div>
           </div>
        </AnimatedSection>

        <AnimatedSection className="text-center mb-20 pt-10 border-t border-gray-100">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002d14] mb-4 tracking-tight">Infraestructura Exclusiva</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Plataformas modulares integradas para resolver todos los frentes de su embudo comercial.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-24">
          <ServiceRow 
             id="gestion-comercial"
             title="Gestión Comercial Especializada" 
             desc="Transformamos el proceso telemarketing tradicional en un flujo corporativo. No contactamos al azar; perfilamos y maduramos leads hasta que son operaciones listas para la firma, liberando a su equipo interno." 
             icon={<TrendingUp size={48} />}
             image="/value-prop.webp"
             reverse={false}
          />
          <ServiceRow 
             id="contactabilidad"
             title="Contactabilidad e Integración" 
             desc="Operamos nativamente con plataformas líderes como HubSpot y centrales NUA Talker. Esto asegura cero caídas, monitoreo garantizado y registros de cada interacción en la ficha del posible socio." 
             icon={<PhoneCall size={48} />}
             image="/tech-security.webp"
             reverse={true}
          />
          <ServiceRow 
             id="filtro-masivo"
             title="Verificación y Filtro Masivo" 
             desc="Aseguramos una calidad óptima antes de pasar expedientes a sus oficiales de crédito. Evaluamos capacidad de pago superficial conectando diversas bases para maximizar la efectividad en originación." 
             icon={<Database size={48} />}
             image="/about-team.webp"
             reverse={false}
          />
          <ServiceRow 
             id="trazabilidad"
             title="Reportes y Trazabilidad IAM" 
             desc="Transparencia absoluta en tiempo real. Proporcionamos tableros de control y reportes de auditoría tecnológica para que su equipo monitoree cada fase del embudo y el avance comercial de las campañas de forma corporativa." 
             icon={<Activity size={48} />}
             image="/metodologia.jpg"
             reverse={true}
          />
        </div>

        {/* 4 WEEK ROLLOUT SCHEDULE (Mobile First, Dark Animated Gradient) */}
        <section className="mt-24 relative bg-[#001108] border-t border-[var(--color-accent)]/20 py-20 px-4 sm:px-8 rounded-[2rem] overflow-hidden shadow-2xl">
          {/* Animated Gradients (Same as Footer) */}
          <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] bg-[var(--color-accent)]/20 rounded-full filter blur-[100px] opacity-0 animate-fade-in-out pointer-events-none" style={{ animationDelay: '0s' }} />
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[#006028]/30 rounded-full filter blur-[100px] opacity-0 animate-fade-in-out pointer-events-none" style={{ animationDelay: '4s' }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[var(--color-accent)]/20 rounded-full filter blur-[100px] opacity-0 animate-fade-in-out pointer-events-none" style={{ animationDelay: '8s' }} />
          <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[var(--color-accent)] font-bold text-sm tracking-widest uppercase mb-6">
                <CalendarDays size={18} /> Plan de Despliegue en 28 Días
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Cronograma de Ejecución Técnica</h2>
              <p className="text-lg text-gray-400 font-medium">Desde el kick-off hasta la salida a producción. No dejamos nada al azar.</p>
            </AnimatedSection>

            {/* Vertical Timeline Mobile First */}
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-accent)] before:via-white/20 before:to-transparent">
              
              {/* Semana 1 */}
              <AnimatedSection delay={0.1} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#001108] bg-[var(--color-accent)] text-[#001108] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(0,188,76,0.3)] z-10">
                  <span className="font-bold text-lg">1</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl group-hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-4">Infraestructura y Seguridad</h3>
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 1-3:</strong> Auditoría de red y configuración de túneles VPN seguros.</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 4-5:</strong> Definición de la arquitectura de datos en HubSpot (campos de crédito, score y estatus financiero).</span></li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* Semana 2 */}
              <AnimatedSection delay={0.2} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#001108] bg-[#006028] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-[var(--color-accent)] group-hover:text-[#001108] transition-colors">
                  <span className="font-bold text-lg">2</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl group-hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-4">Integración y Calidad de Datos</h3>
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 8-10:</strong> Mapeo técnico y limpieza de base de datos (eliminación de duplicados y errores).</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 11-12:</strong> Pruebas de sincronización API/ETL para asegurar un flujo de datos íntegro.</span></li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* Semana 3 */}
              <AnimatedSection delay={0.3} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#001108] bg-[#006028] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-[var(--color-accent)] group-hover:text-[#001108] transition-colors">
                  <span className="font-bold text-lg">3</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl group-hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-4">Automatización y Marketing</h3>
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 15-17:</strong> Configuración de Pipelines de crédito y Workflows de seguimiento.</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 18-19:</strong> Montaje de campañas, plantillas de correo y segmentación de audiencias.</span></li>
                  </ul>
                </div>
              </AnimatedSection>

              {/* Semana 4 */}
              <AnimatedSection delay={0.4} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#001108] bg-white text-[#001108] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-lg">
                  <span className="font-bold text-lg">4</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 backdrop-blur-sm border border-[var(--color-accent)]/30 p-6 rounded-2xl group-hover:bg-[#002d14]/40 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-20"><Activity size={60} className="text-[var(--color-accent)]" /></div>
                  <h3 className="text-xl font-bold text-[var(--color-accent)] mb-4 relative z-10">Pruebas, Reportes y Salida</h3>
                  <ul className="space-y-3 text-sm text-gray-300 relative z-10">
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-white">Día 22-24:</strong> Pruebas de usuario (UAT) con un grupo de control y ajuste de errores.</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-white">Día 25-26:</strong> Creación de Dashboards gerenciales (conversión y ROI).</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-white">Día 27-28:</strong> Capacitación final al equipo y Salida a Producción.</span></li>
                  </ul>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>
      </div>


      {/* 7. ALIADOS (Fondo blanco limpio, logos corporativos) */}
      <section className="py-16 bg-white">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.3} className="text-center bg-gray-50 rounded-3xl p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h2 className="text-3xl font-bold text-[#002d14] mb-6 tracking-tight">Escale de forma segura hoy mismo.</h2>
          <Link href="/contacto">
            <Button size="lg" className="w-full sm:w-auto text-lg py-5 px-10 font-semibold">
              Despliegue nuestro equipo
            </Button>
          </Link>
        </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

function ServiceRow({ id, title, desc, icon, image, reverse }: { id?: string, title: string, desc: string, icon: React.ReactNode, image: string, reverse: boolean }) {
  return (
    <div id={id} className={`scroll-mt-32 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
      <AnimatedSection className="flex-1 w-full order-2 lg:order-1">
         <div className="w-16 h-16 bg-[#002d14] text-[var(--color-accent)] rounded-xl flex items-center justify-center mb-8 shadow-md">
            {icon}
         </div>
         <h2 className="text-3xl font-bold text-[#002d14] mb-6">{title}</h2>
         <p className="text-lg text-gray-700 leading-relaxed font-medium">
            {desc}
         </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2} className="flex-1 w-full order-1 lg:order-2">
         <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden shadow-xl group border border-gray-100">
            <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
         </div>
      </AnimatedSection>
    </div>
  );
}

function InnerHero({ title, bgImage }: { title: string, bgImage: string }) {
  return (
    <section 
      className="relative h-[40vh] md:h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden w-full mt-16 md:mt-20 bg-fixed bg-[center_top] bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center px-4">
         <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl">{title}</h1>
      </div>
    </section>
  );
}

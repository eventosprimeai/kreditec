"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TrendingUp, PhoneCall, Users, Database, Play, X, ShieldCheck, Lock, Trophy, Building, Star, Quote, Handshake, Lightbulb, Scale, Briefcase, BarChart, DollarSign, Zap, Globe, Award, HeartHandshake, Banknote, Target, Rocket, UsersRound, HandCoins } from 'lucide-react';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (Video Background) */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-black mt-20 md:mt-0">
        <div className="absolute inset-0 z-0">
          <video 
             autoPlay 
             muted 
             loop 
             playsInline 
             poster="/hero-bg.png" 
             className="absolute inset-0 w-full h-full object-cover hidden sm:block"
          >
             <source src="/hero-video-2.mp4" type="video/mp4" />
          </video>
          {/* Mobile Fallback */}
          <Image src="/hero-bg.png" alt="Kreditec Hero Mobile" fill className="object-cover sm:hidden" priority />
          {/* Overlay: Negro 40-50% recomendado */}
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection className="max-w-4xl pt-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white tracking-tight text-shadow-lg">
              Transformación Digital<br />
              en la Gestión Comercial<br />
              para el Sector Financiero.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 font-medium drop-shadow-md max-w-3xl">
              No solo contactamos socios; gestionamos operaciones listas para desembolso con tecnología de élite.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <Link href="/contacto" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-lg py-5 px-10 shadow-[0_4px_30px_rgba(0,188,76,0.3)] hover:shadow-[0_4px_40px_rgba(0,188,76,0.5)] transition-shadow duration-300">
                  Optimice su colocación hoy mismo
                </Button>
              </Link>
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-4 text-white font-semibold py-4 px-8 rounded-xl border border-white/20 hover:bg-white/10 hover:border-[var(--color-accent)] backdrop-blur-sm transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/50 flex items-center justify-center pl-1 group-hover:bg-[var(--color-accent)] group-hover:shadow-[0_0_20px_rgba(0,188,76,0.6)] transition-all duration-300">
                   <Play size={20} className="text-white fill-white" />
                </div>
                Ver Video Corporativo
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. PROPUESTA DE VALOR (Fondo Blanco Base, Layout 2 columnas) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <AnimatedSection className="flex-1 w-full order-2 lg:order-1">
               <h2 className="text-[var(--color-accent)] font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Propuesta de Valor</h2>
               <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002d14] mb-8 leading-tight tracking-tight">
                  Más que llamadas,<br />Construimos <span className="text-[var(--color-accent)]">Operaciones</span>.
               </h3>
               <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                  Somos una empresa de <strong className="font-bold text-[#002d14]">Gestión Comercial Especializada</strong> que replica la experiencia presencial en un ecosistema <strong className="font-bold text-[#002d14]">100% digital</strong>, integrando seguridad y verificación.
               </p>
               <div className="pl-6 border-l-4 border-[var(--color-accent)]/80">
                  <p className="text-gray-500 italic text-lg hover:text-gray-800 transition-colors">
                     "Ayudamos al sector financiero popular y solidario en Ecuador a ser más eficientes mediante ingeniería de procesos y captación proactiva de microcrédito y consumo."
                  </p>
               </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="flex-1 w-full order-1 lg:order-2">
               <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl group">
                  <Image src="/value-prop.webp" alt="Fintech Corporate" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
               </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. Ecosistema Estratégico (Parallax Fijo) */}
      <section 
        className="py-32 relative bg-black overflow-hidden bg-fixed bg-[center_top] bg-cover"
        style={{ backgroundImage: 'url(/services-bg.webp)' }}
      >
        <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ecosistema Estratégico</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <AnimatedSection delay={0.1} className="h-full">
               <div className="h-full flex flex-col bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors duration-300">
                  <TrendingUp className="text-[var(--color-accent)] mb-6" size={48} />
                  <h3 className="text-2xl font-bold text-white mb-3">Gestión Comercial</h3>
                  <p className="text-gray-300">Colocación proactiva de microcrédito y consumo.</p>
               </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="h-full">
               <div className="h-full flex flex-col bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors duration-300">
                  <PhoneCall className="text-[var(--color-accent)] mb-6" size={48} />
                  <h3 className="text-2xl font-bold text-white mb-3">Contactabilidad Global</h3>
                  <p className="text-gray-300">Uso de herramientas de clase mundial (HubSpot y NUA Talker).</p>
               </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="h-full">
               <div className="h-full flex flex-col bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors duration-300">
                  <Users className="text-[var(--color-accent)] mb-6" size={48} />
                  <h3 className="text-2xl font-bold text-white mb-3">Captación de Leads</h3>
                  <p className="text-gray-300">Bases de datos externas y marketing masivo.</p>
               </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4} className="h-full">
               <div className="h-full flex flex-col bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors duration-300">
                  <Database className="text-[var(--color-accent)] mb-6" size={48} />
                  <h3 className="text-2xl font-bold text-white mb-3">Control & Trazabilidad</h3>
                  <p className="text-gray-300">Grabación y seguimiento total del lead preaprobado.</p>
               </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.5} className="mt-16 text-center">
             <Link href="/servicios">
                <Button variant="primary" size="lg" className="rounded-full shadow-[0_4px_20px_rgba(0,188,76,0.25)] hover:shadow-[0_4px_25px_rgba(0,188,76,0.4)] transition-all font-semibold px-10 border border-[var(--color-accent)]">
                   Más información
                </Button>
             </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. METODOLOGÍA / MÉTRICAS (Fondo blanco, Imagen encima del título) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-[#002d14] text-4xl font-extrabold mb-6 tracking-tight">Metodología de Impacto Inmediato</h2>
            <p className="text-xl text-gray-500 font-medium">Arquitectura comercial desplegada bajo los más estrictos estándares de agilidad institucional.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedSection delay={0.1} className="flex flex-col items-center text-center">
               <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-sm">
                  <Image src="/methodology-final.webp" alt="Apertura" fill className="object-cover" />
               </div>
               <h3 className="text-3xl font-extrabold text-[#002d14] mb-3">Disponibilidad 8/7</h3>
               <p className="text-lg text-gray-600">Atención extendida con gestión automatizada.</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="flex flex-col items-center text-center">
               <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-sm">
                  <Image src="/tech-security.webp" alt="28 Dias" fill className="object-cover" />
               </div>
               <h3 className="text-3xl font-extrabold text-[#002d14] mb-3">28 Días</h3>
               <p className="text-lg text-gray-600">Tiempo récord de implementación de 0 a producción.</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex flex-col items-center text-center">
               <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-sm">
                  <Image src="/about-team.webp" alt="Digital" fill className="object-cover" />
               </div>
               <h3 className="text-3xl font-extrabold text-[#002d14] mb-3">100% Digital</h3>
               <p className="text-lg text-gray-600">Ecosistema sin papeles, enfocado en la eficiencia operativa.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* 4.5. TECNOLOGÍA Y SEGURIDAD (Sección oscura, enfoque B2B) */}
      <section className="py-24 bg-[#001108] relative overflow-hidden border-t border-[var(--color-accent)]/20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00bc4c] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <AnimatedSection className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] font-bold text-sm tracking-widest uppercase mb-6">
                <ShieldCheck size={18} /> Protección Institucional
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Infraestructura blindada y trazabilidad con <span className="text-[var(--color-accent)]">Inteligencia Artificial</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Entendemos que el activo más valioso de su cooperativa son los datos de sus socios. Implementamos conectividad cifrada mediante túneles VPN y protocolos de seguridad de grado internacional.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Database className="text-[var(--color-accent)]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Omnicanalidad Predictiva (HubSpot & NuaTalker)</h4>
                    <p className="text-gray-400">Registramos cada interacción y maduramos clientes mediante IA hiper-personalizada. Usted tiene el control absoluto de lo que ocurre con cada operación.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Lock className="text-[var(--color-accent)]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Conectividad Restringida</h4>
                    <p className="text-gray-400">Todo flujo de datos hacia nuestros contact centers opera bajo túneles cerrados, previniendo fuga o copia no autorizada de historiales financieros.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="flex-1 w-full">
              <div className="relative aspect-square md:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,188,76,0.1)] group">
                <Image src="/services-bg.webp" alt="Seguridad Tecnologica B2B" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-[#001108]/60 to-transparent" />
                
                {/* Elemento de UI flotante simulado */}
                <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center justify-between">
                  <div>
                     <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">Estado de Conexión</p>
                     <p className="text-white text-lg font-bold flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[var(--color-accent)] animate-pulse" />
                        Túnel VPN Encriptado Activo
                     </p>
                  </div>
                  <ShieldCheck className="text-[var(--color-accent)] opacity-80" size={40} />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 5. IMPACTO EN CIFRAS */}
      <section className="relative py-20 bg-[#001108] border-y border-[var(--color-accent)]/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-5 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            
            <AnimatedSection delay={0.1} className="pt-6 md:pt-0">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mb-6">
                  <TrendingUp size={32} />
                </div>
                <h4 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter shadow-sm text-shadow-sm">+25</h4>
                <p className="text-[var(--color-accent)] font-bold tracking-widest uppercase text-sm mb-3">Años en el Mercado</p>
                <p className="text-gray-400 max-w-xs mx-auto text-sm">De trayectoria impecable respaldando instituciones a nivel nacional.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="pt-10 md:pt-0">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mb-6">
                  <Building size={32} />
                </div>
                <h4 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter shadow-sm text-shadow-sm">+500</h4>
                <p className="text-[var(--color-accent)] font-bold tracking-widest uppercase text-sm mb-3">Clientes Cooperativos</p>
                <p className="text-gray-400 max-w-xs mx-auto text-sm">Empresas e instituciones confían la colocación de su cartera en nuestras operaciones.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="pt-10 md:pt-0">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mb-6">
                  <Trophy size={32} />
                </div>
                <h4 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter shadow-sm text-shadow-sm">Top 5</h4>
                <p className="text-[var(--color-accent)] font-bold tracking-widest uppercase text-sm mb-3">Ranking Nacional</p>
                <p className="text-gray-400 max-w-xs mx-auto text-sm">Reconocidos como uno de los centros de contacto de más alta efectividad en originación B2B.</p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 6. TESTIMONIOS */}
      <section className="py-24 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        {/* Decoración sutil de fondo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10 hidden md:block" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10 hidden md:block" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-[var(--color-accent)] font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Casos de Éxito</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#002d14] tracking-tight">Lo que dicen nuestros clientes</h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <AnimatedSection delay={0.1} className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-shadow relative">
              <Quote className="absolute top-8 right-8 text-gray-100" size={60} />
              <div className="flex gap-1 text-[#00bc4c] mb-6">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10 italic">
                "Desde que implementamos el ecosistema operativo de Kreditec, nuestra originación de crédito creció un 45% en el primer semestre. Su trazabilidad es invaluable."
              </p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-[#002d14] flex items-center justify-center text-white font-bold shrink-0">CR</div>
                <div>
                  <h4 className="font-bold text-[#002d14]">Carlos Ramírez</h4>
                  <p className="text-sm text-gray-500">Gerente Comercial, Cooperativa Progreso Solidario</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Testimonio 2 */}
            <AnimatedSection delay={0.2} className="bg-[#002d14] p-10 rounded-3xl shadow-xl shadow-[#002d14]/20 border border-[#00bc4c]/20 relative transform md:-translate-y-4">
              <Quote className="absolute top-8 right-8 text-white/5" size={60} />
              <div className="flex gap-1 text-[#00bc4c] mb-6">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
              </div>
              <p className="text-white leading-relaxed mb-8 relative z-10 italic">
                "La integración técnica fue rápida y sin fricción. No son un simple call center; son un brazo operativo estratégico que cuida celosamente los datos de nuestros socios."
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full border border-[var(--color-accent)] bg-white/10 flex items-center justify-center text-[var(--color-accent)] font-bold shrink-0">MT</div>
                <div>
                  <h4 className="font-bold text-white">Mónica Torres</h4>
                  <p className="text-sm text-gray-300">Directora de Riesgos, Finanzas Activas</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Testimonio 3 */}
            <AnimatedSection delay={0.3} className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-shadow relative">
              <Quote className="absolute top-8 right-8 text-gray-100" size={60} />
              <div className="flex gap-1 text-[#00bc4c] mb-6">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10 italic">
                "Pasamos de tener procesos manuales a un embudo completamente digital. La gestión en tiempo real con HubSpot nos dio el control absoluto que buscábamos."
              </p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-[#002d14] flex items-center justify-center text-white font-bold shrink-0">JV</div>
                <div>
                  <h4 className="font-bold text-[#002d14]">Javier Villalobos</h4>
                  <p className="text-sm text-gray-500">VP de Operaciones B2B, Mutualista Trust</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 7. ALIADOS (Fondo blanco limpio, logos corporativos) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Aliados Estratégicos y Stack Tecnológico</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Logos representados en texto estético hasta tener SVGs externos oficiales */}
               <div className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-[#ff7a59]" /> HubSpot
               </div>
               <div className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border-4 border-blue-500" /> NUA Talker
               </div>
               <div className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                  <div className="w-8 h-8 rotate-45 bg-[#002d14]" /> Broker Institucional
               </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center bg-gray-50 rounded-3xl p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h2 className="text-3xl font-bold text-[#002d14] mb-6 tracking-tight">Escale de forma segura hoy mismo.</h2>
            <Link href="/contacto">
              <Button size="lg" className="w-full sm:w-auto text-lg py-5 px-10 font-semibold text-white">
                Despliegue nuestro equipo
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* MODAL DE VIDEO CORPORATIVO */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Botón de Cierre */}
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/50 hover:text-white transition-all bg-white/5 p-4 rounded-full hover:bg-[var(--color-accent)] hover:scale-110 z-50"
            >
              <X size={32} />
            </button>
            
            {/* Contenedor del reproductor de Video */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,188,76,0.2)] relative border border-white/10"
            >
              <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
                src="/hero-video.mp4"
                title="Video Corporativo Kreditec"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

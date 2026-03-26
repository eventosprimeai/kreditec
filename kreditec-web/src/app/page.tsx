"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TestimoniosCarousel } from '@/components/TestimoniosCarousel';
import { TrendingUp, PhoneCall, Users, Database, Play, X, ShieldCheck, Lock, Trophy, Building, Star, Quote, Handshake, Lightbulb, Scale, Briefcase, BarChart, BarChart3, DollarSign, Zap, Globe, Award, HeartHandshake, Banknote, Target, Rocket, UsersRound, HandCoins, CalendarDays, CheckCircle2, Activity, Cloud } from 'lucide-react';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isTimelineModalOpen, setIsTimelineModalOpen] = useState(false);

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
          <AnimatedSection className="max-w-4xl pt-32 pb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6 text-white tracking-tight text-shadow-lg">
              Transformación Digital<br />
              en la Gestión Comercial<br />
              para las Instituciones<br />
              del Sistema Financiero.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 font-medium drop-shadow-md max-w-3xl">
              No solo contactamos socios; estructuramos, contactamos y gestionamos operaciones listas para desembolso.
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
                  Somos una empresa de <strong className="font-bold text-[#002d14]">Gestión Comercial Especializada</strong> que replica la experiencia presencial en un ecosistema 100% digital, <strong className="font-bold text-[#002d14]">integrando tecnología, verificación y seguridad</strong>.
               </p>
               <div className="pl-6 border-l-4 border-[var(--color-accent)]/80">
                  <p className="text-gray-500 italic text-lg hover:text-gray-800 transition-colors">
                     "Ayudamos a las instituciones del sistema financiero en Ecuador a ser más eficientes mediante transformación digital, ingeniería de procesos y captación pro-activa de micro-crédito y consumo."
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
          <AnimatedSection className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-accent)] mb-6 tracking-tight">
              Ecosistema KREDITEC
            </h2>
            <p className="text-xl text-gray-300 font-medium">
              ¿Por qué somos diferentes? Mientras otros llaman, nosotros construimos la operación
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <AnimatedSection delay={0.1} className="h-full">
               <div className="h-full flex flex-col justify-center bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-white/20 hover:-translate-y-2 transition-all duration-300">
                  <Briefcase className="text-[var(--color-accent)] mb-6 mx-auto md:mx-0 drop-shadow-[0_0_12px_rgba(0,188,76,0.6)]" size={56} />
                  <h3 className="text-2xl font-bold text-white mb-3 text-center md:text-left">Ingeniería de Paquetes Crediticios</h3>
                  <p className="text-gray-300 text-center md:text-left leading-relaxed">Perfilamiento integral y recolección de documentación.</p>
               </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="h-full">
               <div className="h-full flex flex-col justify-center bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-white/20 hover:-translate-y-2 transition-all duration-300">
                  <Globe className="text-[var(--color-accent)] mb-6 mx-auto md:mx-0 drop-shadow-[0_0_12px_rgba(0,188,76,0.6)]" size={56} />
                  <h3 className="text-2xl font-bold text-white mb-3 text-center md:text-left">Ecosistema 100% Digital</h3>
                  <p className="text-gray-300 text-center md:text-left leading-relaxed">Acceso directo a sistemas de clientes para reducir la carga operativa institucional.</p>
               </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="h-full">
               <div className="h-full flex flex-col justify-center bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] hover:bg-white/20 hover:-translate-y-2 transition-all duration-300">
                  <ShieldCheck className="text-[var(--color-accent)] mb-6 mx-auto md:mx-0 drop-shadow-[0_0_12px_rgba(0,188,76,0.6)]" size={56} />
                  <h3 className="text-2xl font-bold text-white mb-3 text-center md:text-left">Mitigación de Riesgo</h3>
                  <p className="text-gray-300 text-center md:text-left leading-relaxed">Validación técnica rigurosa para garantizar la calidad de la cartera y reducir la morosidad.</p>
               </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.5} className="mt-16 text-center">
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link href="/servicios">
                  <Button variant="primary" size="lg" className="rounded-full shadow-[0_4px_20px_rgba(0,188,76,0.25)] hover:shadow-[0_4px_25px_rgba(0,188,76,0.4)] transition-all font-semibold px-10 border border-[var(--color-accent)]">
                     Más información
                  </Button>
               </Link>
               <Button onClick={() => setIsTimelineModalOpen(true)} variant="outline" size="lg" className="rounded-full font-semibold px-10 text-white border-white/20 hover:bg-white/10 hover:border-white/50 backdrop-blur-md">
                 Ver su Cronograma
               </Button>
             </div>
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
                  <Image src="/metodologia.jpg" alt="Apertura" fill className="object-cover" />
               </div>
               <h3 className="text-3xl font-extrabold text-[#002d14] mb-3">Disponibilidad 8/5</h3>
               <p className="text-lg text-gray-600">Atención extendida en horario de oficina, lunes a viernes de 08:00 am a 05:00 pm</p>
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
                Entendemos que el activo más valioso de su institución financiera son los datos de sus clientes. Implementamos conectividad cifrada mediante túneles VPN y protocolos de seguridad de grado internacional.
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

      {/* ¿POR QUÉ KREDITEC? */}
      <section 
        className="py-32 relative bg-black overflow-hidden bg-fixed bg-[center_top] bg-cover"
        style={{ backgroundImage: 'url(/services-bg.webp)' }}
      >
        <div className="absolute inset-0 bg-black/75 z-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <AnimatedSection className="text-center mb-16 max-w-4xl mx-auto">
            <p className="text-xl text-[var(--color-accent)] font-bold mb-3">¿Por qué?</p>
            <div className="relative w-48 sm:w-64 md:w-80 lg:w-96 h-16 sm:h-20 md:h-24 mx-auto">
              <Image src="/logo-blanco.png" alt="KREDITEC" fill className="object-contain" />
            </div>
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


      {/* 4.6. ALCANCE DE NUESTROS SERVICIOS */}
      <section 
        className="py-32 relative bg-black overflow-hidden bg-fixed bg-[center_top] bg-cover"
        style={{ backgroundImage: 'url(/services-bg.webp)' }}
      >
        <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <AnimatedSection className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-[var(--color-accent)] font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
              ALCANCE DE
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Nuestros Servicios
            </h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <AnimatedSection delay={0.1} className="h-full">
               <div className="h-full flex flex-col justify-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-8 rounded-[2rem] hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 text-center">
                  <Briefcase className="text-[var(--color-accent)] mb-6 mx-auto drop-shadow-[0_0_12px_rgba(0,188,76,0.6)]" size={48} />
                  <h3 className="text-xl font-bold text-white mb-3">Gestión Comercial</h3>
                  <p className="text-gray-300 leading-relaxed text-[15px]">Colocación proactiva de microcrédito y consumo.</p>
               </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="h-full">
               <div className="h-full flex flex-col justify-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-8 rounded-[2rem] hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 text-center">
                  <Globe className="text-[var(--color-accent)] mb-6 mx-auto drop-shadow-[0_0_12px_rgba(0,188,76,0.6)]" size={48} />
                  <h3 className="text-xl font-bold text-white mb-3">Contactabilidad</h3>
                  <p className="text-gray-300 leading-relaxed text-[15px]">Uso de herramientas de clase mundial.</p>
               </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="h-full">
               <div className="h-full flex flex-col justify-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-8 rounded-[2rem] hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 text-center">
                  <Users className="text-[var(--color-accent)] mb-6 mx-auto drop-shadow-[0_0_12px_rgba(0,188,76,0.6)]" size={48} />
                  <h3 className="text-xl font-bold text-white mb-3">Nuevos Leads</h3>
                  <p className="text-gray-300 leading-relaxed text-[15px]">Captación y colocación mediante bases de datos externas y mensajes masivos/email.</p>
               </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="h-full">
               <div className="h-full flex flex-col justify-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-8 rounded-[2rem] hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 text-center">
                  <Database className="text-[var(--color-accent)] mb-6 mx-auto drop-shadow-[0_0_12px_rgba(0,188,76,0.6)]" size={48} />
                  <h3 className="text-xl font-bold text-white mb-3">Control & Trazabilidad</h3>
                  <p className="text-gray-300 leading-relaxed text-[15px]">Grabación, alojamiento y seguimiento total del lead preaprobado.</p>
               </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="h-full">
               <div className="h-full flex flex-col justify-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-8 rounded-[2rem] hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 text-center">
                  <Activity className="text-[var(--color-accent)] mb-6 mx-auto drop-shadow-[0_0_12px_rgba(0,188,76,0.6)]" size={48} />
                  <h3 className="text-xl font-bold text-white mb-3">Disponibilidad 8/5</h3>
                  <p className="text-gray-300 leading-relaxed text-[15px]">Atención extendida con gestión automatizada en tiempo real.</p>
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
            <h2 className="text-[var(--color-accent)] font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Lo que dicen nuestros aliados</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#002d14] tracking-tight">
              Partners Estratégicos
            </h3>
          </AnimatedSection>

          <TestimoniosCarousel />
        </div>
      </section>

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
                src="/hero-video-voz-femenina-sin-subtitulo-final.mp4"
                title="Video Corporativo Kreditec"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL DEL CRONOGRAMA */}
      <AnimatePresence>
        {isTimelineModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm overflow-y-auto p-4 sm:p-8"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsTimelineModalOpen(false);
            }}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-4xl bg-[#001108] border border-[var(--color-accent)]/20 rounded-3xl overflow-hidden shadow-2xl relative mx-auto my-4 sm:my-16"
            >
              {/* Contenido del Modal (Cronograma) */}
              <div className="absolute top-4 right-4 z-50">
                 <button 
                  onClick={() => setIsTimelineModalOpen(false)}
                  className="text-white/50 hover:text-white transition-all bg-white/5 p-3 rounded-full hover:bg-[var(--color-accent)] hover:scale-110"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 sm:p-12 relative overflow-hidden">
                {/* Glows */}
                <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[#006028]/20 rounded-full filter blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[var(--color-accent)]/10 rounded-full filter blur-[100px] pointer-events-none" />

                <div className="text-center mb-16 relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[var(--color-accent)] font-bold text-sm tracking-widest uppercase mb-6">
                    <CalendarDays size={18} /> Plan de Despliegue en 28 Días
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Cronograma de Ejecución Técnica</h2>
                  <p className="text-lg text-gray-400 font-medium">Desde el kick-off hasta la salida a producción. No dejamos nada al azar.</p>
                </div>

                {/* Timeline */}
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-accent)] before:via-white/20 before:to-transparent z-10">
                  
                  {/* Semana 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#001108] bg-[var(--color-accent)] text-[#001108] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(0,188,76,0.3)] z-10">
                      <span className="font-bold text-lg">1</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-white mb-4">Infraestructura y Seguridad</h3>
                      <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 1-3:</strong> Auditoría de red y configuración de túneles VPN seguros.</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 4-5:</strong> Definición de la arquitectura de datos en HubSpot (campos de crédito, score y estatus financiero).</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* Semana 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#001108] bg-[#006028] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <span className="font-bold text-lg">2</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-white mb-4">Integración y Calidad de Datos</h3>
                      <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 8-10:</strong> Mapeo técnico y limpieza de base de datos (eliminación de duplicados y errores).</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 11-12:</strong> Pruebas de sincronización API/ETL para asegurar un flujo de datos íntegro.</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* Semana 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#001108] bg-[#006028] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <span className="font-bold text-lg">3</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-white mb-4">Automatización y Marketing</h3>
                      <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 15-17:</strong> Configuración de Pipelines de crédito y Workflows de seguimiento.</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 18-19:</strong> Montaje de campañas, plantillas de correo y segmentación de audiencias.</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* Semana 4 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#001108] bg-white text-[#001108] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-lg">
                      <span className="font-bold text-lg">4</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 border border-[var(--color-accent)]/30 p-6 rounded-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 opacity-20"><Activity size={60} className="text-[var(--color-accent)]" /></div>
                      <h3 className="text-xl font-bold text-[var(--color-accent)] mb-4 relative z-10">Pruebas, Reportes y Salida</h3>
                      <ul className="space-y-3 text-sm text-gray-300 relative z-10">
                        <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-white">Día 22-24:</strong> Pruebas de usuario (UAT) con un grupo de control y ajuste de errores.</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-white">Día 25-26:</strong> Creación de Dashboards gerenciales (conversión y ROI).</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-white">Día 27-28:</strong> Capacitación final al equipo y Salida a Producción.</span></li>
                      </ul>
                    </div>
                  </div>

                </div>

                {/* PopUp CTAs */}
                <div className="mt-16 text-center space-y-8 relative z-10 border-t border-white/10 pt-10">
                  <Link href="/servicios" onClick={() => setIsTimelineModalOpen(false)}>
                    <Button variant="primary" size="lg" className="rounded-full shadow-[0_4px_20px_rgba(0,188,76,0.25)] hover:shadow-[0_4px_25px_rgba(0,188,76,0.4)] transition-all font-semibold px-10 border border-[var(--color-accent)]">
                       Más información
                    </Button>
                  </Link>

                  <div className="bg-white/5 rounded-3xl p-8 border border-white/10 shadow-lg mt-8">
                    <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Escale de forma segura hoy mismo.</h2>
                    <Link href="/contacto" onClick={() => setIsTimelineModalOpen(false)}>
                      <Button size="lg" className="w-full sm:w-auto text-lg py-4 px-8 font-semibold text-[#001108] bg-white hover:bg-gray-100 border-transparent">
                        Despliegue nuestro equipo
                      </Button>
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

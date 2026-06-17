"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TestimoniosCarousel } from '@/components/TestimoniosCarousel';
import { Play, X, ShieldCheck, Lock, Quote, Briefcase, Database, Target, CalendarDays, CheckCircle2, Activity, Settings, ArrowRight, AlertCircle, RefreshCw, Server, Search, PhoneCall, Rocket, Cloud } from 'lucide-react';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isTimelineModalOpen, setIsTimelineModalOpen] = useState(false);
  const [activeMatrixTab, setActiveMatrixTab] = useState<number>(0);

  const matrixData = [
    {
      problema: "Exceso de Liquidez Improductiva",
      problemaDesc: "Capital captado que genera altos costos de intereses pasivos por pagar a los socios/clientes, pero con un despliegue lento en el mercado de colocación activa.",
      solucion: "Aceleración de Colocación (Time-to-Market)",
      solucionDesc: "Inyección inmediata de velocidad operando bases preaprobadas en volumen para transformar la liquidez estancada en cartera de crédito productiva.",
      iconProblema: <AlertCircle size={32} className="text-red-500" />,
      iconSolucion: <Rocket size={32} className="text-[var(--color-accent)]" />
    },
    {
      problema: "Bases de Datos Obsoletas y Frías",
      problemaDesc: "Pérdida masiva de contactabilidad e ineficiencia operativa en los intentos de marcado tradicionales.",
      solucion: "Enriquecimiento de Data Dinámico",
      solucionDesc: "Motor externo que actualiza y cruza la base de datos con 45 puntos de contacto clave (teléfonos vigentes, correos, ubicaciones).",
      iconProblema: <Database size={32} className="text-red-500" />,
      iconSolucion: <RefreshCw size={32} className="text-[var(--color-accent)]" />
    },
    {
      problema: "Infraestructura Tecnológica Limitada",
      problemaDesc: "Centralitas convencionales con nula trazabilidad y silos de información.",
      solucion: "Ecosistema Digital en la Nube",
      solucionDesc: "Infraestructura omnicanal robusta impulsada por la potencia e integración nativa de HubSpot y Nuatalker.",
      iconProblema: <Server size={32} className="text-red-500" />,
      iconSolucion: <Cloud size={32} className="text-[var(--color-accent)]" />
    },
    {
      problema: "Aversión al Riesgo de Contratación",
      problemaDesc: "Temor a incrementar presupuestos en equipos de ventas internos sin garantía de retorno.",
      solucion: "Modelo 100% a Éxito (Success Fee)",
      solucionDesc: "Cero mensualidades o costos fijos. Alineación absoluta de incentivos comerciales con el éxito de la institución.",
      iconProblema: <Briefcase size={32} className="text-red-500" />,
      iconSolucion: <ShieldCheck size={32} className="text-[var(--color-accent)]" />
    }
  ];

  return (
    <div className="bg-white">
      {/* 01 | PORTADA (HERO SECTION) */}
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
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection className="max-w-4xl pt-32 pb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6 text-white tracking-tight text-shadow-lg">
              Transformación Digital<br />
              en la Gestión Comercial<br />
              para el Sector Financiero.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 font-medium drop-shadow-md max-w-3xl">
              No solo contactamos socios; convertimos el exceso de liquidez ociosa en cartera productiva mediante infraestructura tecnológica avanzada, automatizaciones e ingeniería de procesos lista para desembolso.
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

      {/* 02 | PROPUESTA DE VALOR (MÓDULOS DE SOLUCIÓN) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-[var(--color-accent)] font-bold tracking-widest uppercase mb-6 text-sm md:text-base">Propuesta de Valor Única</h2>
            <div className="bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <Quote className="absolute top-6 left-6 text-[var(--color-accent)]/20" size={80} />
              <p className="text-xl md:text-3xl text-[#002d14] font-medium leading-relaxed relative z-10 italic">
                "Mientras otros realizan llamadas tradicionales, nosotros estructuramos operaciones inteligentes: Información centralizada, enriquecimiento de datos y resultados medibles bajo un modelo 100% orientado al éxito."
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="h-full">
              <div className="h-full bg-white border border-gray-100 p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,188,76,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-[1.5rem] bg-[var(--color-accent)]/10 flex items-center justify-center mb-8 group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                  <Settings className="text-[var(--color-accent)] group-hover:text-white transition-colors duration-300" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#002d14] mb-4">¿Qué hacemos?</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Somos una empresa de Gestión Comercial Especializada que replica la experiencia de colocación presencial en un ecosistema digital automatizado, integrando ingeniería financiera y verificación omnicanal.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="h-full">
              <div className="h-full bg-white border border-gray-100 p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,188,76,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-[1.5rem] bg-[var(--color-accent)]/10 flex items-center justify-center mb-8 group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                  <Target className="text-[var(--color-accent)] group-hover:text-white transition-colors duration-300" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#002d14] mb-4">¿A quién ayudamos?</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Apoyamos a instituciones del sector financiero a eliminar los cuellos de botella comerciales, acelerando la colocación efectiva de microcréditos, créditos de consumo, asistencias y tarjetas.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="h-full">
              <div className="h-full bg-white border border-gray-100 p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,188,76,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-[1.5rem] bg-[var(--color-accent)]/10 flex items-center justify-center mb-8 group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                  <ShieldCheck className="text-[var(--color-accent)] group-hover:text-white transition-colors duration-300" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#002d14] mb-4">El Modelo Risk-Free</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Operamos bajo un esquema de Success Fee (comisión a éxito por monto colocado). Eliminamos el gasto administrativo fijo: si la Institución no desembolsa, no paga.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 03 | EL DOLOR DEL MERCADO VS. LA SOLUCIÓN KREDITEC (MATRIZ INTERACTIVA) */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#002d14] mb-6 tracking-tight">El Problema vs La Solución Kreditec</h2>
            <p className="text-xl text-gray-500 font-medium">Conectamos el dolor operativo con soluciones tecnológicas inmediatas.</p>
          </AnimatedSection>

          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-8 items-center max-w-6xl mx-auto">
            {/* Headers */}
            <div className="text-center font-bold text-2xl text-red-500 mb-4 bg-red-50 py-4 rounded-xl">El Problema Actual de las Instituciones</div>
            <div className="w-12"></div>
            <div className="text-center font-bold text-2xl text-[var(--color-accent)] mb-4 bg-[#00bc4c]/10 py-4 rounded-xl">La Solución Fintech Kreditec</div>

            {matrixData.map((item, index) => (
              <React.Fragment key={index}>
                {/* Problema */}
                <AnimatedSection delay={0.1 * index} className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                      {item.iconProblema}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">{item.problema}</h4>
                  </div>
                  <p className="text-gray-600">{item.problemaDesc}</p>
                </AnimatedSection>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="text-gray-300" size={32} />
                </div>

                {/* Solución */}
                <AnimatedSection delay={0.1 * index} className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,188,76,0.08)] border border-[var(--color-accent)]/20 h-full relative overflow-hidden group">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center shrink-0">
                      {item.iconSolucion}
                    </div>
                    <h4 className="text-xl font-bold text-[#002d14]">{item.solucion}</h4>
                  </div>
                  <p className="text-gray-600 relative z-10">{item.solucionDesc}</p>
                </AnimatedSection>
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden space-y-4">
             {matrixData.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                   <button 
                     onClick={() => setActiveMatrixTab(activeMatrixTab === index ? -1 : index)}
                     className="w-full flex items-center justify-between p-6 bg-white text-left focus:outline-none"
                   >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                          {item.iconProblema}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">{item.problema}</h4>
                      </div>
                      <div className={`transform transition-transform ${activeMatrixTab === index ? 'rotate-180' : ''}`}>
                         <ArrowRight className="text-gray-400 rotate-90" />
                      </div>
                   </button>
                   <AnimatePresence>
                     {activeMatrixTab === index && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-gray-50 border-t border-gray-100"
                        >
                           <div className="p-6">
                              <p className="text-gray-600 mb-6">{item.problemaDesc}</p>
                              
                              <div className="bg-white p-6 rounded-xl border border-[var(--color-accent)]/20 shadow-sm relative overflow-hidden">
                                 <div className="absolute right-0 top-0 w-24 h-24 bg-[var(--color-accent)]/5 rounded-bl-full -mr-8 -mt-8"></div>
                                 <div className="flex items-center gap-3 mb-3 relative z-10">
                                   <div className="w-8 h-8 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center shrink-0">
                                     {item.iconSolucion}
                                   </div>
                                   <h4 className="text-lg font-bold text-[#002d14]">{item.solucion}</h4>
                                 </div>
                                 <p className="text-gray-600 text-sm relative z-10">{item.solucionDesc}</p>
                              </div>
                           </div>
                        </motion.div>
                     )}
                   </AnimatePresence>
                </div>
             ))}
          </div>

        </div>
      </section>

      {/* 04 | INFRAESTRUCTURA, TECNOLOGÍA Y SEGURIDAD */}
      <section className="py-24 bg-[#001108] relative overflow-hidden border-t border-[var(--color-accent)]/20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00bc4c] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <AnimatedSection className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] font-bold text-sm tracking-widest uppercase mb-6">
                <ShieldCheck size={18} /> Protección y Trazabilidad Institucional
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Infraestructura, Tecnología y <span className="text-[var(--color-accent)]">Seguridad B2B</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Entendemos la sensibilidad de la información. Nuestra arquitectura garantiza confidencialidad absoluta y trazabilidad en cada interacción, diseñada bajo estrictos protocolos para blindar la confianza institucional corporativa.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,188,76,0.15)]">
                    <Lock className="text-[var(--color-accent)]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Infraestructura de Datos Cifrada</h4>
                    <p className="text-gray-400">Manejo técnico de información financiera sensible mediante la implementación de conectividad blindada a través de túneles VPN dedicados y protocolos de seguridad de grado internacional.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,188,76,0.15)]">
                    <Database className="text-[var(--color-accent)]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Omnicanalidad Inteligente de Datos</h4>
                    <p className="text-gray-400">Conexión tecnológica entre el motor de enriquecimiento de 45 datos, automatizaciones asincrónicas de HubSpot (mailing masivo, mensajería) y el marcador predictivo de Nuatalker para agentes virtuales y humanos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,188,76,0.15)]">
                    <Search className="text-[var(--color-accent)]" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Trazabilidad y Control</h4>
                    <p className="text-gray-400">Garantía de auditoría con la grabación completa, seguimiento y almacenamiento del ciclo de vida del prospecto hasta el proceso de validación biométrica digital previo al desembolso físico.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="flex-1 w-full">
              <div className="relative aspect-square md:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,188,76,0.1)] group">
                <Image src="/tech-security.webp" alt="Seguridad Tecnologica B2B" fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-[#001108]/60 to-transparent" />
                
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

      {/* 05 | PROCESO DE IMPLEMENTACIÓN TÉCNICA (HOJA DE RUTA EN 28 DÍAS) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 max-w-4xl mx-auto">
            <p className="text-[var(--color-accent)] font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Proceso de Implementación Técnica</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#002d14] tracking-tight">Hoja de Ruta en 28 Días</h2>
            <p className="text-xl text-gray-500 font-medium mt-6">
              Despliegue ágil, transparente y escalable desde el kick-off hasta la salida a producción.
            </p>
          </AnimatedSection>

          {/* Timeline Horizontal Interactivo */}
          <div className="hidden md:flex justify-between items-center relative max-w-5xl mx-auto mb-16">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 z-0 rounded-full"></div>
            
            {[
              { num: 1, title: "Seguridad", desc: "Días 1 a 5" },
              { num: 2, title: "Integración", desc: "Días 8 a 12" },
              { num: 3, title: "Automatización", desc: "Días 15 a 19" },
              { num: 4, title: "Producción", desc: "Días 22 a 28" }
            ].map((step, index) => (
              <AnimatedSection delay={0.1 * index} key={index} className="relative z-10">
                <div className="flex flex-col items-center group cursor-pointer" onClick={() => setIsTimelineModalOpen(true)}>
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center font-bold text-xl text-gray-400 group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-all duration-300 shadow-sm">
                    {step.num}
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="font-bold text-[#002d14] group-hover:text-[var(--color-accent)] transition-colors">{`Semana ${step.num}`}</h4>
                    <p className="text-sm font-semibold text-gray-800">{step.title}</p>
                    <p className="text-xs text-gray-500">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={0.4} className="text-center mt-10 md:hidden">
            <Button onClick={() => setIsTimelineModalOpen(true)} size="lg" className="shadow-md">
              Ver Cronograma Detallado
            </Button>
          </AnimatedSection>
          <AnimatedSection delay={0.4} className="text-center mt-10 hidden md:block">
            <Button variant="outline" onClick={() => setIsTimelineModalOpen(true)} size="lg" className="border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white">
              Explorar Desglose Técnico
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* 06 | NOSOTROS (NARRATIVA INSTITUCIONAL FINTECH) */}
      <section 
        className="py-32 relative bg-black overflow-hidden bg-fixed bg-[center_top] bg-cover"
        style={{ backgroundImage: 'url(/services-bg.webp)' }}
      >
        <div className="absolute inset-0 bg-black/80 z-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <AnimatedSection className="text-center mb-16 max-w-4xl mx-auto">
             <div className="relative w-48 sm:w-64 md:w-80 h-16 sm:h-20 mx-auto mb-2">
                <Image src="/logo-blanco.png" alt="KREDITEC" fill className="object-contain" />
             </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="h-full">
              <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[2rem] hover:bg-white/20 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4">Misión</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Empoderar al sector financiero y cooperativo a través de infraestructura tecnológica robusta, analítica de datos avanzada y estrategias de contacto omnicanal inteligentes, optimizando la colocación de productos financieros para impulsar la inclusión y educación financiera en la región.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="h-full">
              <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[2rem] hover:bg-white/20 hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4">Visión</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Para 2031, ser el ecosistema Fintech B2B líder en América Latina, reconocido por transformar la gestión comercial financiera mediante soluciones interoperables de alta tecnología que conecten eficientemente a las instituciones financieras con poblaciones bancarizadas y no bancarizadas.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="h-full lg:col-span-1 md:col-span-2">
              <div className="h-full bg-[var(--color-accent)]/20 backdrop-blur-md border border-[var(--color-accent)]/50 p-10 rounded-[2rem] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 text-[var(--color-accent)]/20">
                  <ShieldCheck size={160} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Valores y ADN</h3>
                <p className="text-white leading-relaxed text-lg font-medium relative z-10">
                  Seguridad de grado internacional, transparencia absoluta y mitigación rigurosa del riesgo técnico.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 relative z-10">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">Seguridad</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">Transparencia</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">Mitigación de Riesgo</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 07 | RESPALDOS DE CREDIBILIDAD (SOCIOS Y ESTADÍSTICAS) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedSection className="text-center mb-16">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Aliados Estratégicos Integrados</h3>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-24">
            <AnimatedSection delay={0.1} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
               <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                 <Activity className="text-[var(--color-accent)]" size={32} />
               </div>
               <h3 className="text-4xl font-extrabold text-[#002d14] mb-2">8/5</h3>
               <p className="text-lg font-bold text-gray-800 mb-2">Disponibilidad</p>
               <p className="text-gray-600">Soporte y gestión comercial extendida en horario operativo institucional.</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
               <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                 <CalendarDays className="text-[var(--color-accent)]" size={32} />
               </div>
               <h3 className="text-4xl font-extrabold text-[#002d14] mb-2">28 Días</h3>
               <p className="text-lg font-bold text-gray-800 mb-2">Tiempo Récord</p>
               <p className="text-gray-600">Implementación técnica integral de cero a producción en menos de un mes.</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
               <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                 <Cloud className="text-[var(--color-accent)]" size={32} />
               </div>
               <h3 className="text-4xl font-extrabold text-[#002d14] mb-2">100%</h3>
               <p className="text-lg font-bold text-gray-800 mb-2">Digital</p>
               <p className="text-gray-600">Ecosistema comercial sin uso de papeles, enfocado en la máxima eficiencia operativa.</p>
            </AnimatedSection>
          </div>
          
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-[var(--color-accent)] font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Lo que dicen nuestros aliados</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#002d14] tracking-tight">
              Partners Estratégicos
            </h3>
          </AnimatedSection>

          <TestimoniosCarousel />
        </div>
      </section>

      {/* 08 | SECCIÓN DE CONTACTO Y CAPTACIÓN INTELIGENTE */}
      <section className="py-24 bg-white relative overflow-hidden" id="contacto">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-accent)]/5 rounded-l-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#001108] rounded-[3rem] p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden border border-[var(--color-accent)]/20">
            {/* Decors */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--color-accent)]/20 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#00bc4c]/20 rounded-full blur-[80px]"></div>

            <AnimatedSection className="flex-1 w-full relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Captación Institucional<br/>Inteligente</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
                Únase a las instituciones financieras que ya están transformando su liquidez ociosa en cartera productiva sin incrementar sus costos operativos fijos.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-[var(--color-accent)]" size={24} />
                  <span className="text-lg">Infraestructura Tecnológica Dedicada</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-[var(--color-accent)]" size={24} />
                  <span className="text-lg">Implementación Acelerada en 28 Días</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-[var(--color-accent)]" size={24} />
                  <span className="text-lg">Modelo 100% Orientado al Éxito</span>
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="w-full lg:w-[500px] relative z-10">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#002d14] mb-6">Solicite una Evaluación Gratuita</h3>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre de la Institución</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all" placeholder="Ej. Cooperativa Ahorro..." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Interés Principal</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all bg-white appearance-none">
                      <option>Información general de servicios Kreditec</option>
                      <option>Aceleración de Colocación (Microcrédito/Consumo)</option>
                      <option>Enriquecimiento de Bases de Datos</option>
                      <option>Modelo Success Fee</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Corporativo</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all" placeholder="director@institucion.com" />
                  </div>
                  <Button className="w-full py-4 text-lg mt-4 shadow-[0_4px_20px_rgba(0,188,76,0.3)] hover:shadow-[0_4px_25px_rgba(0,188,76,0.5)]">
                    Agendar Reunión Técnica
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
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
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/50 hover:text-white transition-all bg-white/5 p-4 rounded-full hover:bg-[var(--color-accent)] hover:scale-110 z-50"
            >
              <X size={32} />
            </button>
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
              <div className="absolute top-4 right-4 z-50">
                 <button 
                  onClick={() => setIsTimelineModalOpen(false)}
                  className="text-white/50 hover:text-white transition-all bg-white/5 p-3 rounded-full hover:bg-[var(--color-accent)] hover:scale-110"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[#006028]/20 rounded-full filter blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[var(--color-accent)]/10 rounded-full filter blur-[100px] pointer-events-none" />

                <div className="text-center mb-16 relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[var(--color-accent)] font-bold text-sm tracking-widest uppercase mb-6">
                    <CalendarDays size={18} /> Plan de Despliegue en 28 Días
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Cronograma de Ejecución Técnica</h2>
                  <p className="text-lg text-gray-400 font-medium">Desde el kick-off hasta la salida a producción. No dejamos nada al azar.</p>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-accent)] before:via-white/20 before:to-transparent z-10">
                  
                  {/* Semana 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#001108] bg-[var(--color-accent)] text-[#001108] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(0,188,76,0.3)] z-10">
                      <span className="font-bold text-lg">1</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-white mb-4">Infraestructura y Seguridad</h3>
                      <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 1-5:</strong> Auditoría de red, configuración de túneles VPN seguros y protocolos de seguridad de grado internacional.</span></li>
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
                        <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 8-12:</strong> Mapeo técnico, limpieza de base de datos y pruebas de sincronización API/ETL.</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* Semana 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#001108] bg-[#006028] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <span className="font-bold text-lg">3</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-white mb-4">Automatización y Canales</h3>
                      <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-gray-200">Día 15-19:</strong> Configuración de Pipelines, mensajería inteligente masiva y marcador predictivo en HubSpot y Nuatalker.</span></li>
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
                      <h3 className="text-xl font-bold text-[var(--color-accent)] mb-4 relative z-10">Pruebas y Salida a Producción</h3>
                      <ul className="space-y-3 text-sm text-gray-300 relative z-10">
                        <li className="flex gap-3"><CheckCircle2 className="text-[var(--color-accent)] shrink-0 mt-0.5" size={16} /><span><strong className="text-white">Día 22-28:</strong> Pruebas de usuario, creación de dashboards y Salida a Producción.</span></li>
                      </ul>
                    </div>
                  </div>

                </div>

                <div className="mt-16 text-center space-y-8 relative z-10 border-t border-white/10 pt-10">
                  <div className="bg-white/5 rounded-3xl p-8 border border-white/10 shadow-lg mt-8">
                    <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Escale de forma segura hoy mismo.</h2>
                    <Link href="#contacto" onClick={() => setIsTimelineModalOpen(false)}>
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

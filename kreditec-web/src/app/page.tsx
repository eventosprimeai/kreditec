import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Users, Clock, CheckCircle2, TrendingUp, PhoneCall, Database } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#001108]">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#002d14]/90 to-[#002d14]/40 z-10" />
          <div className="w-full h-full object-cover bg-gray-800 text-white flex items-center justify-center text-sm opacity-50">
            [HERO_VIDEO_PLACEHOLDER] (tecnología, dashboards, equipo operando)
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white text-shadow-md">
              Transformación Digital en la Gestión Comercial para el Sector Financiero.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light drop-shadow-sm">
              No solo contactamos socios; gestionamos operaciones listas para desembolso con tecnología de élite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 shadow-xl shadow-[var(--color-accent)]/10 rounded-lg max-w-fit">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto text-lg py-4 px-8">
                  Optimice su colocación hoy mismo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROPUESTA DE VALOR */}
      <section className="py-24 bg-white dark:bg-[#002d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[var(--color-accent)] font-semibold tracking-wide uppercase mb-3 text-sm md:text-base">Propuesta de Valor</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Somos una empresa de Gestión Comercial Especializada que replica la experiencia presencial en un ecosistema 100% digital, integrando seguridad y verificación.
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ayudamos al sector financiero popular y solidario en Ecuador a ser más eficientes mediante ingeniería de procesos y captación proactiva de microcrédito y consumo.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)] opacity-5 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-20 h-20 bg-[#002d14] text-[var(--color-accent)] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                <ShieldCheck size={40} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Nuestro Diferenciador Central</h4>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Mientras otros llaman, nosotros construimos la operación: <strong className="text-[#002d14] dark:text-[var(--color-accent)] font-semibold">Información centralizada y resultados medibles en tiempo real</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS (4 CARDS PREMIUM) */}
      <section className="py-24 bg-gray-50 dark:bg-[#001f0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestros Servicios Estratégicos</h2>
            <div className="w-24 h-1.5 bg-[var(--color-accent)] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<TrendingUp size={32} />} 
              title="Gestión Comercial" 
              description="Colocación proactiva de microcrédito y consumo."
            />
            <ServiceCard 
              icon={<PhoneCall size={32} />} 
              title="Contactabilidad Global" 
              description="Uso de herramientas de clase mundial (HubSpot y NUA Talker)."
            />
            <ServiceCard 
              icon={<Users size={32} />} 
              title="Captación de Leads" 
              description="Bases de datos externas y marketing masivo."
            />
            <ServiceCard 
              icon={<Database size={32} />} 
              title="Control & Trazabilidad" 
              description="Grabación y seguimiento total del lead preaprobado."
            />
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN TECNOLOGÍA Y SEGURIDAD */}
      <section className="py-24 bg-[#002d14] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-accent)] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Tecnología y Seguridad en el ADN</h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Nuestro ecosistema digital está diseñado bajo los más altos estándares corporativos. Protegemos la información de su institución financiera con infraestructura robusta.
              </p>
              
              <ul className="space-y-6">
                <TechItem title="Conectividad Cifrada" desc="Túneles VPN seguros para la transmisión de datos." />
                <TechItem title="Trazabilidad Total" desc="Auditoría y registro de cada operación gestionada." />
                <TechItem title="Centralización de la Información" desc="Arquitectura de datos estructurada en HubSpot." />
                <TechItem title="IA Aplicada" desc="Optimización de procesos sin comprometer la seguridad." />
              </ul>
            </div>
            <div className="relative">
               <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-black/40 to-black/10 border border-white/10 flex items-center justify-center text-sm text-[var(--color-accent)] font-medium shadow-2xl backdrop-blur-sm">
                  [TECH_SECURITY_IMAGE_PLACEHOLDER]
               </div>
               
               {/* Decorative elements */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-accent)]/20 rounded-full blur-3xl" />
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-accent)]/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESO (TIMELINE) */}
      <section className="py-24 bg-white dark:bg-[#021a0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[var(--color-accent)] font-semibold tracking-wide uppercase mb-3 text-sm md:text-base">Metodología de Implementación</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">28 Días: De cero a producción</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
              
              <TimelineStep week="Semana 1" title="Infraestructura y Seguridad" align="left">
                <li><strong className="text-[#002d14] dark:text-[var(--color-accent)]">Día 1-3:</strong> Auditoría de red y configuración de túneles VPN seguros.</li>
                <li><strong className="text-[#002d14] dark:text-[var(--color-accent)]">Día 4-5:</strong> Definición de la arquitectura de datos en HubSpot (campos de crédito, score y estatus financiero).</li>
              </TimelineStep>

              <TimelineStep week="Semana 2" title="Integración y Calidad de Datos" align="right">
                <li><strong className="text-[#002d14] dark:text-[var(--color-accent)]">Día 8-10:</strong> Mapeo técnico y limpieza de base de datos (eliminación de duplicados y errores).</li>
                <li><strong className="text-[#002d14] dark:text-[var(--color-accent)]">Día 11-12:</strong> Pruebas de sincronización API/ETL para asegurar flujo de datos íntegro.</li>
              </TimelineStep>

              <TimelineStep week="Semana 3" title="Automatización y Marketing" align="left">
                <li><strong className="text-[#002d14] dark:text-[var(--color-accent)]">Día 15-17:</strong> Configuración de Pipelines de crédito y Workflows de seguimiento automático.</li>
                <li><strong className="text-[#002d14] dark:text-[var(--color-accent)]">Día 18-19:</strong> Montaje de campañas (plantillas de correo y segmentación de audiencias).</li>
              </TimelineStep>

              <TimelineStep week="Semana 4" title="Pruebas, Reportes y Salida" align="right">
                <li><strong className="text-[#002d14] dark:text-[var(--color-accent)]">Día 22-24:</strong> Pruebas de usuario (UAT) con grupo de control y ajuste de errores.</li>
                <li><strong className="text-[#002d14] dark:text-[var(--color-accent)]">Día 25-26:</strong> Creación de Dashboards gerenciales (conversión y ROI).</li>
                <li><strong className="text-[#002d14] dark:text-[var(--color-accent)]">Día 27-28:</strong> Capacitación final al equipo y Salida a Producción.</li>
              </TimelineStep>

            </div>
          </div>
        </div>
      </section>

      {/* 6. SOCIOS / METRICAS */}
      <section className="py-20 bg-gray-50 dark:bg-[#002d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <MetricCard title="Disponibilidad 8/7" desc="Cobertura extendida para gestión comercial continua." />
            <MetricCard title="28 Días" desc="Tiempo récord de implementación de 0 a producción." />
            <MetricCard title="100% Digital" desc="Ecosistema sin papeles, enfocado en eficiencia operativa." />
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-16">
            <p className="text-center text-gray-500 dark:text-gray-400 font-medium mb-10 uppercase tracking-widest text-sm">Nuestros Aliados Estratégicos</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <div className="h-16 w-40 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm rounded-lg font-semibold text-gray-500">[LOGO_HUBSPOT]</div>
              <div className="h-16 w-40 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm rounded-lg font-semibold text-gray-500">[LOGO_NUA_TALKER]</div>
              <div className="h-16 w-40 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm rounded-lg font-semibold text-gray-500">[LOGO_BROKER]</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white dark:bg-[#002d14] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-2 hover:border-[var(--color-accent)]/30 transition-all duration-300 group">
      <div className="w-14 h-14 bg-gray-50 dark:bg-[#001f0e] text-[var(--color-accent)] rounded-xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:shadow-md transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">{description}</p>
    </div>
  );
}

function TechItem({ title, desc }: { title: string, desc: string }) {
  return (
    <li className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
      <div className="mt-1 text-[var(--color-accent)] shrink-0 drop-shadow-md">
        <CheckCircle2 size={24} />
      </div>
      <div>
        <h4 className="font-semibold text-lg text-white mb-1">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}

function TimelineStep({ week, title, children, align }: { week: string, title: string, children: React.ReactNode, align: 'left' | 'right' }) {
  const isLeft = align === 'left';
  
  return (
    <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
      <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-[#021a0d] bg-[var(--color-accent)] text-white shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110`}>
        <Clock size={20} />
      </div>
      <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-white dark:bg-[#002d14] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-shadow
        ${isLeft ? '' : ''}`}
      >
        <div className="flex flex-col mb-5">
          <span className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm mb-1">{week}</span>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h4>
        </div>
        <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-sm md:text-base">
          {children}
        </ul>
      </div>
    </div>
  );
}

function MetricCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="text-center p-8 bg-white dark:bg-[#002d14] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow">
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002d14] dark:text-white mb-4 drop-shadow-sm">
        {title.split(' ')[0]} <br className="md:hidden" /><span className="text-[var(--color-accent)] text-3xl md:text-4xl lg:text-5xl align-top ml-1">{title.split(' ').slice(1).join(' ')}</span>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">{desc}</p>
    </div>
  );
}

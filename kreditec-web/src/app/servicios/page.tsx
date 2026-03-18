import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { TrendingUp, PhoneCall, Users, Database } from 'lucide-react';

export default function Servicios() {
    return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">Servicios Especializados</h1>
        <div className="w-24 h-1.5 bg-[var(--color-accent)] mx-auto rounded-full mb-8" />
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Nuestra tecnología e infraestructura están diseñadas para replicar la experiencia de venta presencial, pero con resultados medibles y total seguridad de la información.
        </p>
      </div>

      <div className="space-y-24">
         <ServiceRow 
            title="Gestión Comercial y Colocación"
            desc="Colocación proactiva de microcrédito y consumo. Nos integramos a sus pipelines para asegurar que las operaciones lleguen listas para desembolso, validando requisitos bajo las políticas de su institución."
            icon={<TrendingUp size={40} />}
         />
         <ServiceRow 
            title="Contactabilidad Global"
            desc="Implementamos herramientas de clase mundial como HubSpot y NUA Talker. No perdemos rastro de ninguna comunicación, garantizando disponibilidad 8/7 para sus potenciales clientes."
            icon={<PhoneCall size={40} />}
            reverse
         />
         <ServiceRow 
            title="Captación Inteligente de Leads"
            desc="A través de bases de datos enriquecidas y marketing masivo, estructuramos un flujo continuo de prospectos calificados para su institución financiera."
            icon={<Users size={40} />}
         />
         <ServiceRow 
            title="Control & Trazabilidad Total"
            desc="Grabación y seguimiento total del lead preaprobado. Usted tendrá acceso a dashboards gerenciales para conocer el ROI y la conversión en tiempo real."
            icon={<Database size={40} />}
            reverse
         />
      </div>

      <div className="mt-32 text-center">
         <h2 className="text-3xl font-bold mb-8 dark:text-white">¿Listo para optimizar su captación?</h2>
         <Link href="/contacto">
            <Button size="lg" className="text-lg px-12 py-4">Inicie su transformación digital hoy</Button>
         </Link>
      </div>
    </div>
    );
}

function ServiceRow({ title, desc, icon, reverse = false }: { title: string, desc: string, icon: React.ReactNode, reverse?: boolean }) {
   return (
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-20 items-center`}>
         <div className="flex-1 w-full aspect-video bg-gray-100 dark:bg-[#001f0e] rounded-3xl flex items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 shadow-inner overflow-hidden relative group">
            <div className="absolute inset-0 bg-transparent group-hover:bg-[var(--color-accent)]/5 transition-colors duration-500 z-0" />
            <span className="relative z-10 px-6 py-2 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-lg">[SERVICES_IMAGE_PLACEHOLDER]</span>
         </div>
         <div className="flex-1 space-y-6">
            <div className="w-20 h-20 rounded-2xl bg-[#002d14] text-[var(--color-accent)] flex items-center justify-center shadow-lg border border-[var(--color-accent)]/20">
               {icon}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">{title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{desc}</p>
         </div>
      </div>
   );
}

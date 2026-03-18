"use client";
import React from 'react';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TrendingUp, PhoneCall, Users, Database, Activity } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ServiciosPage() {
  return (
    <div className="bg-white min-h-screen">
      <InnerHero title="Servicios" bgImage="/services-bg.png" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection className="text-center mb-20">
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
             image="/value-prop.png"
             reverse={false}
          />
          <ServiceRow 
             id="contactabilidad"
             title="Contactabilidad e Integración Global" 
             desc="Operamos nativamente con plataformas líderes como HubSpot y centrales NUA Talker. Esto asegura cero caídas, monitoreo garantizado y registros de cada interacción en la ficha del posible socio." 
             icon={<PhoneCall size={48} />}
             image="/tech-security.png"
             reverse={true}
          />
          <ServiceRow 
             id="filtro-masivo"
             title="Verificación y Filtro Masivo" 
             desc="Aseguramos una calidad óptima antes de pasar expedientes a sus oficiales de crédito. Evaluamos capacidad de pago superficial conectando diversas bases para maximizar la efectividad en originación." 
             icon={<Database size={48} />}
             image="/about-team.png"
             reverse={false}
          />
          <ServiceRow 
             id="trazabilidad"
             title="Reportes y Trazabilidad IAM" 
             desc="Transparencia absoluta en tiempo real. Proporcionamos tableros de control y reportes de auditoría tecnológica para que su equipo monitoree cada fase del embudo y el avance comercial de las campañas de forma corporativa." 
             icon={<Activity size={48} />}
             image="/methodology.png"
             reverse={true}
          />
        </div>

        <AnimatedSection delay={0.3} className="mt-24 text-center bg-gray-50 rounded-3xl p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h2 className="text-3xl font-bold text-[#002d14] mb-6 tracking-tight">Escale de forma segura hoy mismo.</h2>
          <Link href="/contacto">
            <Button size="lg" className="w-full sm:w-auto text-lg py-5 px-10 font-semibold">
              Despliegue nuestro equipo
            </Button>
          </Link>
        </AnimatedSection>
      </div>
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

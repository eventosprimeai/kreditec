"use client";
import React, { useEffect } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export default function ContactoPage() {
  useEffect(() => {
    // Evitar cargar el script múltiples veces si el componente se re-renderiza
    if (document.getElementById('hs-script-loader-contacto')) return;

    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/v2.js';
    script.id = 'hs-script-loader-contacto';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: "na1",
          portalId: "51230243",
          formId: "9395a983-3bc8-42af-87e9-bc9d360361bc",
          target: '#hubspotFormContainer'
        });
      }
    });
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 mt-10 md:mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002d14] mb-4 tracking-tight">Contacto Estratégico</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Hablemos sobre su infraestructura comercial. Agende una reunión con nuestro equipo de ingeniería operativa.
          </p>
        </AnimatedSection>
        
        <div className="flex flex-col lg:flex-row gap-12">
           <AnimatedSection delay={0.1} className="flex-1 w-full order-2 lg:order-1">
             <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden min-h-[600px]" id="hubspotFormContainer">
                {/* El formulario de HubSpot se renderizará aquí automáticamente */}
             </div>
           </AnimatedSection>
           
           <AnimatedSection delay={0.2} className="flex-1 flex flex-col gap-8 order-1 lg:order-2">
             <div className="bg-[#001f0e] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)] opacity-[0.04] rounded-bl-full group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
                <h3 className="text-2xl font-bold mb-8 relative z-10">Información de Operaciones</h3>
                <div className="space-y-6 text-gray-300 relative z-10">
                   <div>
                      <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">Responsable</span>
                      <p className="text-lg text-white font-medium">Valentina Barrera – Gerente General</p>
                   </div>
                   <div>
                      <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">Línea Corporativa</span>
                      <a href="tel:+59324529357" className="text-lg text-white font-medium hover:underline">+593 2 452 9357</a>
                   </div>
                   <div>
                      <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">WhatsApp</span>
                      <a href="https://wa.me/593963413419" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:underline flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-accent)] shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        +593 96 341 3419
                      </a>
                   </div>
                   <div>
                      <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">Correo Electrónico</span>
                      <a href="mailto:Info@kreditecsa.com" className="text-lg text-white font-medium hover:underline">Info@kreditecsa.com</a>
                   </div>
                   <div>
                      <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">Dirección Corporativa</span>
                      <p className="text-sm text-gray-300 leading-relaxed font-medium">6 DE DICIEMBRE N34-360 N35 PORTUGAL / EDF. ZYRA OF 605 / IÑAQUITO - QUITO.</p>
                   </div>
                   <div>
                      <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">Horario de Atención</span>
                      <p className="text-lg text-white font-medium mb-1">Lunes a Viernes</p>
                      <p className="text-sm text-gray-400">08:00 am - 05:00 pm</p>
                   </div>
                </div>
             </div>
             
             {/* Google Maps Embed */}
             <div className="flex-1 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                <iframe 
                  src="https://maps.google.com/maps?hl=es&q=Edificio%20Zyra,%20Quito,%20Ecuador&t=&z=16&ie=UTF8&iwloc=B&output=embed" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kreditec Ubicación"
                />
             </div>
           </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

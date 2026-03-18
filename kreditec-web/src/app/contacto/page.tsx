"use client";
import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';

export default function ContactoPage() {
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
             <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
                <form className="space-y-6 relative z-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                         <input type="text" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">Institución / Flujo</label>
                         <input type="text" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" />
                      </div>
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Correo Corporativo</label>
                      <input type="email" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" />
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Detalle su requerimiento</label>
                      <textarea rows={4} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all resize-none" />
                   </div>
                   <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <input type="checkbox" id="privacy" className="mt-1 w-4 h-4 text-[var(--color-accent)] border-gray-300 rounded focus:ring-[var(--color-accent)]" />
                      <label htmlFor="privacy" className="text-sm text-gray-600 font-medium leading-relaxed">Acepto la <a href="/politica-de-privacidad" className="text-[var(--color-accent)] hover:underline font-bold">Política de Privacidad</a> y el tratamiento de datos para uso exclusivamente B2B (Notice at Collection).</label>
                   </div>
                   <Button type="button" className="w-full py-4 text-lg mt-6 shadow-lg shadow-[var(--color-accent)]/20 hover:-translate-y-1">Agendar Llamada Inicial</Button>
                </form>
             </div>
           </AnimatedSection>
           
           <AnimatedSection delay={0.2} className="flex-1 flex flex-col gap-8 order-1 lg:order-2">
             <div className="bg-[#001f0e] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)] opacity-[0.04] rounded-bl-full group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
                <h3 className="text-2xl font-bold mb-8">Información de Operaciones</h3>
                <div className="space-y-6 text-gray-300">
                   <div>
                      <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">Desarrollo Comercial</span>
                      <p className="text-lg text-white font-medium">Valentina Barrera</p>
                   </div>
                   <div>
                      <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">Contacto Oficial</span>
                      <a href="mailto:Vbarrera@kreditecsa.com" className="text-lg text-white font-medium hover:underline">Vbarrera@kreditecsa.com</a>
                   </div>
                   <div>
                      <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">Dirección Corporativa</span>
                      <p className="text-lg text-white font-medium leading-relaxed">6 de Diciembre N34-360 y Portugal, Edif. Zyra Of. 605, Quito, Ecuador.</p>
                   </div>
                </div>
             </div>
             
             {/* Google Maps Embed */}
             <div className="flex-1 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200 min-h-[350px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.79051!2d-78.48421045!3d-0.19018699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a71675128ff%3A0xe5a3c0ae06511a5b!2sEdificio%20Zyra!5e0!3m2!1sen!2sec!4v1680000000000!5m2!1sen!2sec" 
                  width="100%" 
                  height="100%" 
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

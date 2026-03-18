"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, MapPin, Mail, Phone, Users } from 'lucide-react';

export default function Contacto() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    alert('Formulario de captación enviado (Demo)');
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Contacto Institucional</h1>
         <div className="w-24 h-1.5 bg-[var(--color-accent)] mx-auto rounded-full mb-8" />
         <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Comuníquese con nosotros para optimizar la colocación de su institución con total seguridad corporativa.
         </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        
        {/* Contact Form */}
        <div className="lg:col-span-3 bg-white dark:bg-[#001f0e] p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)] opacity-5 rounded-bl-full pointer-events-none" />
           <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">Captación Inteligente</h2>
           
           <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nombre y Apellido *</label>
                    <input required type="text" className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#002d14] dark:text-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all outline-none" />
                 </div>
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Correo Corporativo *</label>
                    <input required type="email" className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#002d14] dark:text-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all outline-none" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nombre de la Institución</label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#002d14] dark:text-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all outline-none" />
                 </div>
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Cargo</label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#002d14] dark:text-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all outline-none" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Teléfono de Contacto *</label>
                    <input required type="tel" className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#002d14] dark:text-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all outline-none" />
                 </div>
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Fecha sugerida de reunión</label>
                    <input type="date" className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#002d14] dark:text-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all outline-none" />
                 </div>
              </div>

              <div>
                 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Interés Principal</label>
                 <select className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#002d14] dark:text-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all outline-none appearance-none cursor-pointer">
                    <option>Colocación de Microcrédito</option>
                    <option>Colocación de Consumo</option>
                    <option>Ingeniería de Procesos / Consultoría</option>
                    <option>Implementación de Ecosistema Digital (HubSpot/NUA Talker)</option>
                    <option>Información general de servicios KREDITEC</option>
                    <option>Agendar una reunión virtual</option>
                 </select>
              </div>

              <div>
                 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Cuéntenos sobre sus desafíos operativos</label>
                 <textarea rows={4} className="w-full px-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#002d14] dark:text-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all outline-none resize-none"></textarea>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gray-50 dark:bg-[#002d14]/50 rounded-xl border border-gray-200 dark:border-gray-800">
                 <input 
                   type="checkbox" 
                   id="privacy" 
                   required
                   checked={agreed}
                   onChange={(e) => setAgreed(e.target.checked)}
                   className="mt-1 w-5 h-5 accent-[var(--color-accent)] border-gray-300 rounded cursor-pointer" 
                 />
                 <div className="text-sm text-gray-600 dark:text-gray-300">
                    <label htmlFor="privacy" className="cursor-pointer select-none font-medium">
                       He leído y acepto la <a href="/politica-de-privacidad" className="text-[var(--color-accent)] hover:underline">Política de Privacidad</a>.
                    </label>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-gray-800 pt-2">
                       <strong>Notice at Collection:</strong> Sus datos serán usados para contactarle respecto a nuestros servicios B2B en Ecuador. No vendemos ni compartimos su información personal a terceros no autorizados.
                    </p>
                 </div>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-5 mt-2 shadow-xl shadow-[var(--color-accent)]/10" disabled={!agreed}>
                 Optimice su colocación hoy mismo
              </Button>
           </form>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-2 space-y-8 lg:mt-6">
           <div className="bg-[#002d14] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)] opacity-20 rounded-bl-full transition-transform group-hover:scale-110 duration-500" />
             <ShieldCheck size={48} strokeWidth={1.5} className="text-[var(--color-accent)] mb-6 drop-shadow-md" />
             <h3 className="text-2xl font-bold mb-4">Su información está segura</h3>
             <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
               Implementamos conectividad cifrada mediante túneles VPN y protocolos de seguridad corporativos. 
               Garantizamos la confidencialidad absoluta de sus datos y los de su institución bajo las normativas vigentes en Ecuador.
             </p>
           </div>

           <div className="bg-white dark:bg-[#002d14] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
             <h3 className="text-xl font-bold mb-8 text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4">Detalles de Contacto</h3>
             
             <ul className="space-y-6">
               <li className="flex items-center gap-5">
                 <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-[#001f0e] text-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <Users size={20} />
                 </div>
                 <div>
                   <p className="font-bold text-gray-900 dark:text-white text-lg">Valentina Barrera</p>
                   <p className="text-sm text-[var(--color-accent)] font-medium uppercase tracking-wide">Gerente General</p>
                 </div>
               </li>
               <li className="flex items-center gap-5">
                 <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-[#001f0e] text-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                 </div>
                 <div>
                   <p className="font-semibold text-gray-900 dark:text-white text-lg">+593 98 747 1367</p>
                   <p className="text-sm text-gray-500 dark:text-gray-400">Atención Continua 8/7</p>
                 </div>
               </li>
               <li className="flex items-center gap-5">
                 <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-[#001f0e] text-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <Mail size={20} />
                 </div>
                 <div className="break-all w-full">
                   <p className="font-semibold text-gray-900 dark:text-white text-base">Vbarrera@kreditecsa.com</p>
                 </div>
               </li>
               <li className="flex items-center gap-5">
                 <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-[#001f0e] text-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                 </div>
                 <div>
                   <p className="font-semibold text-gray-900 dark:text-white">Sede Central</p>
                   <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">6 de Diciembre N34-360 y Portugal, Edif. Zyra Of. 605, Quito, Ecuador.</p>
                 </div>
               </li>
             </ul>
           </div>

           {/* Google Maps / Placeholder */}
           <div className="w-full aspect-video bg-gray-200 dark:bg-[#001f0e] rounded-3xl overflow-hidden shadow-inner flex items-center justify-center text-gray-500 border border-gray-100 dark:border-gray-800 relative group">
             <div className="text-center group-hover:scale-105 transition-transform duration-500">
                <MapPin size={32} className="mx-auto mb-3 opacity-50 text-[var(--color-accent)]" />
                <span className="text-sm font-semibold tracking-widest bg-white/50 dark:bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">[MAPS_EMBED_PLACEHOLDER]</span>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}

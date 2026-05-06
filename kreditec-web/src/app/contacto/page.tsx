"use client";
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    cargo: '',
    telefono: '',
    interes: '',
    fecha: '',
    mensaje: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  
  const interesOptions = [
    { value: "Informacion general de servicios", label: "Informacion general de servicios KREDITEC" },
    { value: "Agendar una reunion virtual", label: "Agendar una reunion virtual" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert("Por favor acepte la Política de Privacidad para continuar.");
      return;
    }

    setIsSubmitting(true);

    const HUBSPOT_PORTAL_ID = '51230243';
    const HUBSPOT_FORM_ID   = '9395a983-3bc8-42af-87e9-bc9d360361bc';

    // Separar nombre y apellido
    const nameParts = formData.name.trim().split(' ');
    const firstname = nameParts[0] || '';
    const lastname  = nameParts.slice(1).join(' ') || '';

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { name: 'firstname',  value: firstname },
              { name: 'lastname',   value: lastname  },
              { name: 'email',      value: formData.email },
              { name: 'company',    value: formData.institution },
              { name: 'jobtitle',   value: formData.cargo },
              { name: 'phone',      value: formData.telefono },
              { name: 'subject',    value: formData.interes },
              { name: 'message',    value: `Fecha preferida: ${formData.fecha}\n\n${formData.mensaje}` },
            ],
            context: {
              pageUri: 'https://kreditecsa.com/contacto',
              pageName: 'Contacto Estratégico – Kreditec',
            },
          }),
        }
      );

      if (!res.ok) throw new Error('Error al enviar');
      setIsSuccess(true);
    } catch (err) {
      alert('Ocurrió un error al enviar el formulario. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center text-center py-10 h-full">
                     <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                     </div>
                     <h3 className="text-2xl font-bold text-[#002d14] mb-3">¡Solicitud Recibida!</h3>
                     <p className="text-gray-600 text-lg mb-8">Nuestro equipo de ingeniería operativa evaluará su requerimiento y le contactaremos dentro de 24 horas hábiles.</p>
                     <Button onClick={() => { setIsSuccess(false); setFormData({name: '', email: '', institution: '', cargo: '', telefono: '', interes: '', fecha: '', mensaje: '', privacy: false}) }}>Enviar Otro Mensaje</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-2">Nombre y Apellido <span className="text-red-500">*</span></label>
                           <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" />
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico Corporativo <span className="text-red-500">*</span></label>
                           <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" />
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-2">Nombre de la Institución</label>
                           <input type="text" value={formData.institution} onChange={(e) => setFormData({...formData, institution: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" />
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-2">Cargo</label>
                           <input type="text" value={formData.cargo} onChange={(e) => setFormData({...formData, cargo: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" />
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono de Contacto <span className="text-red-500">*</span></label>
                           <input required type="tel" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all" />
                        </div>
                        <div 
                           className="relative" 
                           tabIndex={0} 
                           onBlur={(e) => {
                             if (!e.currentTarget.contains(e.relatedTarget)) {
                               setIsSelectOpen(false);
                             }
                           }}
                        >
                           <label className="block text-sm font-bold text-gray-700 mb-2">Interés Principal</label>
                           <div 
                             onClick={() => setIsSelectOpen(!isSelectOpen)}
                             className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 hover:bg-white outline-none transition-all cursor-pointer flex justify-between items-center"
                           >
                             <span className={formData.interes ? "text-gray-900" : "text-gray-500"}>
                               {formData.interes ? interesOptions.find(o => o.value === formData.interes)?.label || "Seleccione una opción" : "Seleccione una opción"}
                             </span>
                             <svg className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isSelectOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                           </div>
                           
                           {isSelectOpen && (
                             <div className="absolute z-20 w-full mt-2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2">
                               <div 
                                 className={`px-5 py-3 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between ${!formData.interes ? 'bg-green-50/50' : ''}`}
                                 onClick={() => { setFormData({...formData, interes: ''}); setIsSelectOpen(false); }}
                               >
                                 <span className="text-gray-500">Seleccione una opción</span>
                                 {!formData.interes && <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
                               </div>
                               {interesOptions.map((opt) => (
                                 <div 
                                   key={opt.value}
                                   className={`px-5 py-3 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between border-t border-gray-50 ${formData.interes === opt.value ? 'bg-green-50/50' : ''}`}
                                   onClick={() => { setFormData({...formData, interes: opt.value}); setIsSelectOpen(false); }}
                                 >
                                   <span className="text-gray-700 font-medium">{opt.label}</span>
                                   {formData.interes === opt.value && <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
                                 </div>
                               ))}
                             </div>
                           )}
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Fecha sugerida para reunión virtual</label>
                        <input type="date" value={formData.fecha} onChange={(e) => setFormData({...formData, fecha: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all text-gray-700" />
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                        <textarea rows={4} placeholder="Cuéntenos sobre los desafíos de su operación actual..." value={formData.mensaje} onChange={(e) => setFormData({...formData, mensaje: e.target.value})} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all resize-none placeholder-gray-400" />
                     </div>
                     
                     <div className="flex flex-col gap-4 mt-8">
                        <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                           <input type="checkbox" id="privacy" checked={formData.privacy} onChange={(e) => setFormData({...formData, privacy: e.target.checked})} className="mt-1 w-4 h-4 text-[var(--color-accent)] border-gray-300 rounded focus:ring-[var(--color-accent)] cursor-pointer" />
                           <label htmlFor="privacy" className="text-sm text-gray-600 font-medium leading-relaxed cursor-pointer">Acepto la <a href="/politica-de-privacidad" className="text-[var(--color-accent)] hover:underline font-bold">Política de Privacidad</a> y el tratamiento de datos para uso exclusivamente B2B (Notice at Collection).</label>
                        </div>
                        <div className="flex items-start gap-3 px-2">
                           <div className="text-green-600 mt-0.5"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                           <p className="text-xs text-gray-500 leading-relaxed font-medium"><strong>Su información está segura con nosotros.</strong> Implementamos conectividad cifrada mediante túneles VPN y protocolos de seguridad de grado internacional para el manejo de información sensible.</p>
                        </div>
                     </div>
                     
                     <Button type="submit" disabled={isSubmitting} className={`w-full py-4 text-lg mt-8 shadow-lg shadow-[var(--color-accent)]/20 hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                       {isSubmitting ? 'Procesando Requerimiento...' : 'Optimice su colocación hoy mismo'}
                     </Button>
                  </form>
                )}
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
             <div className="flex-1 w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200 min-h-[350px]">
                <iframe 
                  src="https://maps.google.com/maps?hl=es&q=Edificio%20Zyra,%20Quito,%20Ecuador&t=&z=16&ie=UTF8&iwloc=B&output=embed" 
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

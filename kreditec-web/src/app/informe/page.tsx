"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, Clock, Save, Plus, FileText, AlertCircle, Sparkles, Network } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface AdjustmentNote {
  id: string;
  ruta: string;
  titulo: string;
  ajuste: string;
  respuesta: string;
  completado: boolean;
}

export default function InformePage() {
  const [notes, setNotes] = useState<AdjustmentNote[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  // States para el nuevo ajuste
  const [newRuta, setNewRuta] = useState("");
  const [newTitulo, setNewTitulo] = useState("");
  const [newAjuste, setNewAjuste] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("kreditec_adjustments");
    if (saved) {
      try {
        setNotes(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading notes", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const saveNotesToLocal = (newNotes: AdjustmentNote[]) => {
    setNotes(newNotes);
    localStorage.setItem("kreditec_adjustments", JSON.stringify(newNotes));
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRuta || !newTitulo || !newAjuste) return;
    
    const note: AdjustmentNote = {
      id: Date.now().toString(),
      ruta: newRuta,
      titulo: newTitulo,
      ajuste: newAjuste,
      respuesta: "",
      completado: false
    };

    saveNotesToLocal([...notes, note]);
    setNewRuta("");
    setNewTitulo("");
    setNewAjuste("");
    setShowForm(false);
  };

  const updateRespuesta = (id: string, text: string) => {
    const updated = notes.map(n => n.id === id ? { ...n, respuesta: text } : n);
    saveNotesToLocal(updated);
  };

  const toggleCompletado = (id: string) => {
    const updated = notes.map(n => n.id === id ? { ...n, completado: !n.completado } : n);
    saveNotesToLocal(updated);
  };

  const activeNotes = notes.filter(n => !n.completado).length;

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans pt-24 pb-20">
      
      {/* 1. Encabezado del Informe */}
      <section className="bg-[#001108] text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[var(--color-accent)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Informe de Entrega Técnica</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">Proyecto Kreditec Web Corporativa</p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full text-sm font-bold uppercase tracking-widest border border-[var(--color-accent)]/30">
                Fase de Revisión y Ajustes
            </div>
        </div>
      </section>

      {/* 2. Resumen Técnico Profesional */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full -mt-8 relative z-20 mb-16">
        <div className="bg-white p-10 sm:p-12 rounded-[2rem] shadow-xl border border-gray-100">
           <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
              <FileText className="text-[#00bc4c]" size={32} />
              <h2 className="text-2xl font-bold text-[#002d14]">Detalles de Arquitectura y Calidad</h2>
           </div>
           
           <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
             <p>
               La presente plataforma corporativa se ha desarrollado bajo <strong>Next.js (App Router)</strong> empleando <strong>React</strong> para un rendimiento y posicionamiento SEO de alto nivel, superando el estándar actual de los gestores B2B ecuatorianos.
             </p>
             <p>
               <Sparkles className="inline text-[#00bc4c] mr-2" size={20} />
               <strong>Calidad Visual & Comunicacional:</strong> Hemos orquestado paletas cromáticas sobrias (Dark Mode y acentos esmeralda) que infunden autoridad y modernidad (brand trust). El copywriting ha sido minuciosamente distribuido con componentes "Micro-animados" que dinamizan la retención de lectura y dirigen fluidamente al usuario hacia el CTA.
             </p>
             <p>
               <CheckCircle className="inline text-[#00bc4c] mr-2" size={20} />
               <strong>Estructura Tecnológica:</strong> Diseño <em>Mobile First</em> adaptable a resoluciones 4K, arquitectura modular de CSS escalable (Tailwind CSS) y transiciones impulsadas por <em>Framer Motion</em>, logrando que el recorrido del ecosistema digital sea pulcro, ligero e intuitivo.
             </p>
           </div>
        </div>
      </section>

      {/* 2.5 Mapa Mental / Estructura del Sitio Minimalista */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full mb-16">
        <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
           
           <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
              <Network className="text-[#00bc4c]" size={32} />
              <h2 className="text-2xl font-bold text-[#002d14] tracking-tight">Estructura del Ecosistema Web</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium">
             <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-[#00bc4c]/30 hover:bg-[#00bc4c]/5 transition-all">
                <h4 className="text-[#002d14] font-bold text-lg mb-2">Inicio (Home)</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Punto de entrada enfocado en conversión, Misión operativa y Métricas B2B.</p>
             </div>
             <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-[#00bc4c]/30 hover:bg-[#00bc4c]/5 transition-all">
                <h4 className="text-[#002d14] font-bold text-lg mb-2">Nosotros (/nosotros)</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Identidad, ADN de la Empresa, Timeline histórico y Pilares Tecnológicos.</p>
             </div>
             <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-[#00bc4c]/30 hover:bg-[#00bc4c]/5 transition-all">
                <h4 className="text-[#002d14] font-bold text-lg mb-2">Servicios (/servicios)</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Propuesta de Valor, Metodología operativa y Cronograma Táctico V2.</p>
             </div>
             <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-[#00bc4c]/30 hover:bg-[#00bc4c]/5 transition-all">
                <h4 className="text-[#002d14] font-bold text-lg mb-2">Contacto (/contacto)</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Múltiples canales directos, integraciones y formulario oficial de Leads.</p>
             </div>
           </div>
        </div>
      </section>

      {/* 3. Panel de Ajustes / Feedback UI */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full mb-16">
        <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h3 className="text-3xl font-bold text-[#002d14] mb-2 tracking-tight">Registro de Ajustes y Mejoras</h3>
              <p className="text-gray-500 font-medium flex items-center gap-2">
                 <AlertCircle size={18} /> {activeNotes} tareas pendientes
              </p>
            </div>
            <Button onClick={() => setShowForm(!showForm)} variant="primary" className="rounded-full flex items-center gap-2 font-bold px-6 border-transparent">
               {showForm ? "Cancelar" : <><Plus size={20} /> Nuevo Ajuste</>}
            </Button>
          </div>

          <p className="text-sm text-gray-400 mb-8 max-w-2xl">
            Utilice esta sección para listar con total claridad las solicitudes de revisión. Su feedback será procesado y documentado con nuestras respuestas en cada tarjeta.
          </p>

          {/* Formulario Crear */}
          {showForm && (
            <AnimatedSection className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mb-12 shadow-inner">
              <form onSubmit={handleAddNote} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">URL / Ruta Afectada</label>
                    <input 
                      type="text" 
                      placeholder="Ej: /servicios o Home"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00bc4c] transition-all bg-white text-gray-900 font-medium"
                      value={newRuta}
                      onChange={e => setNewRuta(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Título de la Sección</label>
                    <input 
                      type="text" 
                      placeholder="Ej: Cronograma de Ejecución"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00bc4c] transition-all bg-white text-gray-900 font-medium"
                      value={newTitulo}
                      onChange={e => setNewTitulo(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Descripción del Ajuste</label>
                  <textarea 
                    rows={4}
                    placeholder="Detalle exactamente lo que necesita ser modificado o evaluado..."
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00bc4c] transition-all bg-white text-gray-900 font-medium resize-none"
                    value={newAjuste}
                    onChange={e => setNewAjuste(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-end pt-2">
                  <Button type="submit" variant="primary" size="lg" className="rounded-full shadow-lg font-bold px-10">Guardar Nota</Button>
                </div>
              </form>
            </AnimatedSection>
          )}

          {/* Listado de Ajustes */}
          <div className="space-y-6">
            {notes.length === 0 && !showForm && (
              <div className="py-16 text-center text-gray-400 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                 No hay ajustes registrados aún. Todo en orden.
              </div>
            )}

            {notes.map(note => (
              <div key={note.id} className={`p-8 rounded-2xl border transition-all duration-300 ${note.completado ? 'bg-gray-50 border-gray-200 opacity-60' : 'bg-white border-[#00bc4c]/30 shadow-lg shadow-[#00bc4c]/5'}`}>
                
                <div className="flex justify-between items-start gap-4 mb-5">
                  <div>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-[#002d14] font-bold text-xs uppercase tracking-widest rounded-md mb-3 border border-gray-200">
                      Ruta: {note.ruta}
                    </span>
                    <h3 className="text-xl font-bold text-[#002d14] tracking-tight">{note.titulo}</h3>
                  </div>
                  <button 
                    onClick={() => toggleCompletado(note.id)} 
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-colors ${note.completado ? 'bg-gray-200 text-gray-500 hover:bg-gray-300' : 'bg-[#00bc4c]/10 text-[#00bc4c] hover:bg-[#00bc4c]/20 border border-[#00bc4c]/30'}`}
                  >
                    {note.completado ? <CheckCircle size={18} /> : <Clock size={18} />}
                    {note.completado ? "Ajuste Completado" : "Marcar Completado"}
                  </button>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-8 bg-gray-50 p-5 rounded-xl border border-gray-100">
                  {note.ajuste}
                </p>

                {/* Respuesta Técnica (Dev) */}
                <div className="pt-6 border-t border-gray-100">
                  <label className="block text-sm font-bold text-[#00bc4c] mb-3 uppercase tracking-widest flex items-center gap-2">
                    <Save size={16} /> Nota de Ingeniería (Mi Respuesta)
                  </label>
                  <textarea 
                    rows={3}
                    className="w-full px-5 py-4 rounded-xl border border-[#00bc4c]/30 bg-[#00bc4c]/[0.02] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#00bc4c] text-gray-800 transition-all font-medium"
                    placeholder="Añadir comentario técnico, confirmación u observación sobre este ajuste..."
                    value={note.respuesta}
                    onChange={(e) => updateRespuesta(note.id, e.target.value)}
                    disabled={note.completado}
                  />
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

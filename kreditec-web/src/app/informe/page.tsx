"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, Clock, Plus, FileText, AlertCircle, Sparkles, Network, Trash2, History, Send, User, Wrench, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface ThreadMessage {
  id: string;
  from: "cliente" | "dev";
  text: string;
  timestamp: string;
}

interface AdjustmentNote {
  id: string;
  ruta: string;
  titulo: string;
  ajuste: string;
  thread: ThreadMessage[];
  completado: boolean;
}

interface DeletedRecord {
  id: string;
  ruta: string;
  titulo: string;
  ajuste: string;
  thread: ThreadMessage[];
  deletedAt: string;
}

export default function InformePage() {
  const [notes, setNotes] = useState<AdjustmentNote[]>([]);
  const [deletedHistory, setDeletedHistory] = useState<DeletedRecord[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // Auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  // States para el nuevo ajuste
  const [newRuta, setNewRuta] = useState("");
  const [newTitulo, setNewTitulo] = useState("");
  const [newAjuste, setNewAjuste] = useState("");

  // States de respuesta por nota: { [noteId]: { text: string, from: 'cliente' | 'dev' } }
  const [replyDraft, setReplyDraft] = useState<{ [id: string]: { text: string; from: "cliente" | "dev" } }>({});

  useEffect(() => {
    // Restaurar sesión de autenticación
    const authSession = sessionStorage.getItem('kreditec_informe_auth');
    if (authSession === 'true') setIsAuthenticated(true);

    const saved = localStorage.getItem("kreditec_adjustments");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Migrar notas antiguas sin thread
        const migrated = parsed.map((n: AdjustmentNote & { respuesta?: string }) => ({
          ...n,
          thread: n.thread ?? (n.respuesta ? [{ id: 'legacy', from: 'dev', text: n.respuesta, timestamp: '' }] : [])
        }));
        setNotes(migrated);
      } catch (e) { console.error(e); }
    }
    const savedHistory = localStorage.getItem("kreditec_adjustments_history");
    if (savedHistory) {
      try { setDeletedHistory(JSON.parse(savedHistory)); } catch (e) { console.error(e); }
    }
    setIsLoaded(true);
  }, []);

  const saveNotesToLocal = (newNotes: AdjustmentNote[]) => {
    setNotes(newNotes);
    localStorage.setItem("kreditec_adjustments", JSON.stringify(newNotes));
  };

  const deleteNote = (id: string) => {
    const note = notes.find(n => n.id === id);
    if (!note || note.completado) return;
    const record: DeletedRecord = {
      id: note.id, ruta: note.ruta, titulo: note.titulo, ajuste: note.ajuste,
      thread: note.thread || [],
      deletedAt: new Date().toLocaleString('es-EC', { dateStyle: 'short', timeStyle: 'short' }),
    };
    const newHistory = [record, ...deletedHistory];
    setDeletedHistory(newHistory);
    localStorage.setItem("kreditec_adjustments_history", JSON.stringify(newHistory));
    const remaining = notes.filter(n => n.id !== id);
    setNotes(remaining);
    localStorage.setItem("kreditec_adjustments", JSON.stringify(remaining));
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRuta || !newTitulo || !newAjuste) return;
    const note: AdjustmentNote = {
      id: Date.now().toString(), ruta: newRuta, titulo: newTitulo, ajuste: newAjuste,
      thread: [], completado: false
    };
    saveNotesToLocal([...notes, note]);
    setNewRuta(""); setNewTitulo(""); setNewAjuste("");
    setShowForm(false);
  };

  const sendReply = (noteId: string) => {
    const draft = replyDraft[noteId];
    if (!draft?.text.trim()) return;
    const msg: ThreadMessage = {
      id: Date.now().toString(),
      from: draft.from,
      text: draft.text.trim(),
      timestamp: new Date().toLocaleString('es-EC', { dateStyle: 'short', timeStyle: 'short' }),
    };
    const updated = notes.map(n =>
      n.id === noteId ? { ...n, thread: [...(n.thread || []), msg] } : n
    );
    saveNotesToLocal(updated);
    setReplyDraft(prev => ({ ...prev, [noteId]: { text: '', from: prev[noteId]?.from ?? 'dev' } }));
  };

  const toggleCompletado = (id: string) => {
    const updated = notes.map(n => n.id === id ? { ...n, completado: !n.completado } : n);
    saveNotesToLocal(updated);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "101810") {
      setIsAuthenticated(true);
      sessionStorage.setItem('kreditec_informe_auth', 'true');
      setAuthError("");
    } else {
      setAuthError("Código incorrecto. Acceso denegado.");
    }
  };

  const activeNotes = notes.filter(n => !n.completado).length;

  if (!isLoaded) return null;

  // Pantalla de autenticación
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#001108] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-accent)] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00bc4c] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col items-center justify-center relative z-10 text-center max-w-md w-full bg-black/40 p-12 rounded-[3rem] border border-[var(--color-accent)]/20 shadow-2xl backdrop-blur-xl">
          <div className="w-20 h-20 mb-8 rounded-full border-4 border-white/10 bg-[var(--color-accent)] text-[#001108] flex items-center justify-center shadow-[0_0_40px_rgba(0,188,76,0.3)]">
            <Lock size={40} />
          </div>
          <h2 className="text-3xl font-black mb-2 text-white tracking-tight">Zona Protegida</h2>
          <p className="text-gray-400 text-sm mb-8">Ingrese el código de acceso para consultar el Informe Técnico de Entrega.</p>
          <form onSubmit={handleLogin} className="w-full">
            <input
              type="password"
              placeholder="Código de acceso..."
              className="w-full px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all bg-white/5 text-white mb-4 text-center tracking-widest"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {authError && <p className="text-red-400 text-sm font-bold mb-4">{authError}</p>}
            <Button type="submit" size="lg" className="w-full shadow-[0_4px_20px_rgba(0,188,76,0.25)] hover:shadow-[0_4px_25px_rgba(0,188,76,0.4)] text-lg py-4 font-bold border-transparent">
              Acceder al Informe
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans pt-24 pb-20">

      {/* 1. Encabezado */}
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

      {/* 2. Resumen Técnico */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full -mt-8 relative z-20 mb-16">
        <div className="bg-white p-10 sm:p-12 rounded-[2rem] shadow-xl border border-gray-100">
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
            <FileText className="text-[#00bc4c]" size={32} />
            <h2 className="text-2xl font-bold text-[#002d14]">Detalles de Arquitectura y Calidad</h2>
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>La presente plataforma corporativa se ha desarrollado bajo <strong>Next.js (App Router)</strong> empleando <strong>React</strong> para un rendimiento y posicionamiento SEO de alto nivel, superando el estándar actual de los gestores B2B ecuatorianos.</p>
            <p><Sparkles className="inline text-[#00bc4c] mr-2" size={20} /><strong>Calidad Visual &amp; Comunicacional:</strong> Hemos orquestado paletas cromáticas sobrias (Dark Mode y acentos esmeralda) que infunden autoridad y modernidad. El copywriting ha sido distribuido con componentes micro-animados que dinamizan la retención de lectura y dirigen al usuario hacia el CTA.</p>
            <p><CheckCircle className="inline text-[#00bc4c] mr-2" size={20} /><strong>Estructura Tecnológica:</strong> Diseño <em>Mobile First</em> adaptable a resoluciones 4K, arquitectura modular de CSS escalable (Tailwind CSS) y transiciones impulsadas por <em>Framer Motion</em>, logrando un recorrido digital pulcro, ligero e intuitivo.</p>
          </div>
        </div>
      </section>

      {/* 2.5 Mapa del Sitio */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full mb-16">
        <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
            <Network className="text-[#00bc4c]" size={32} />
            <h2 className="text-2xl font-bold text-[#002d14] tracking-tight">Estructura del Ecosistema Web</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium">
            {[
              { name: "Inicio (Home)", desc: "Punto de entrada enfocado en conversión, Misión operativa y Métricas B2B." },
              { name: "Nosotros (/nosotros)", desc: "Identidad, ADN de la Empresa, Timeline histórico y Pilares Tecnológicos." },
              { name: "Servicios (/servicios)", desc: "Propuesta de Valor, Metodología operativa y Cronograma Táctico V2." },
              { name: "Contacto (/contacto)", desc: "Múltiples canales directos, integraciones y formulario oficial de Leads." },
            ].map(item => (
              <div key={item.name} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-[#00bc4c]/30 hover:bg-[#00bc4c]/5 transition-all">
                <h4 className="text-[#002d14] font-bold text-lg mb-2">{item.name}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Panel de Ajustes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full mb-16">
        <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
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
            Registre solicitudes de revisión con precisión. Cada ajuste incluye un hilo de conversación para intercambiar respuestas hasta marcarlo como completado.
          </p>

          {/* Formulario */}
          {showForm && (
            <AnimatedSection className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mb-12 shadow-inner">
              <form onSubmit={handleAddNote} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">URL / Ruta Afectada</label>
                    <input type="text" placeholder="Ej: /servicios o Home"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00bc4c] transition-all bg-white text-gray-900 font-medium"
                      value={newRuta} onChange={e => setNewRuta(e.target.value)} required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Título de la Sección</label>
                    <input type="text" placeholder="Ej: Cronograma de Ejecución"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00bc4c] transition-all bg-white text-gray-900 font-medium"
                      value={newTitulo} onChange={e => setNewTitulo(e.target.value)} required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Descripción del Ajuste</label>
                  <textarea rows={4} placeholder="Detalle exactamente lo que necesita ser modificado o evaluado..."
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00bc4c] transition-all bg-white text-gray-900 font-medium resize-none"
                    value={newAjuste} onChange={e => setNewAjuste(e.target.value)} required />
                </div>
                <div className="flex justify-end pt-2">
                  <Button type="submit" variant="primary" size="lg" className="rounded-full shadow-lg font-bold px-10">Guardar Nota</Button>
                </div>
              </form>
            </AnimatedSection>
          )}

          {/* Listado */}
          <div className="space-y-8">
            {notes.length === 0 && !showForm && (
              <div className="py-16 text-center text-gray-400 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                No hay ajustes registrados aún. Todo en orden.
              </div>
            )}

            {notes.map(note => (
              <div key={note.id} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${note.completado ? 'border-gray-200 opacity-70' : 'border-[#00bc4c]/30 shadow-lg shadow-[#00bc4c]/5'}`}>

                {/* Cabecera de la tarjeta */}
                <div className={`p-6 ${note.completado ? 'bg-gray-50' : 'bg-white'}`}>
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-[#002d14] font-bold text-xs uppercase tracking-widest rounded-md mb-3 border border-gray-200">
                        Ruta: {note.ruta}
                      </span>
                      <h3 className="text-xl font-bold text-[#002d14] tracking-tight">{note.titulo}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      {!note.completado && (
                        <button onClick={() => deleteNote(note.id)}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-full font-bold text-sm text-red-400 border border-red-200 bg-red-50 hover:bg-red-100 hover:text-red-600 transition-colors">
                          <Trash2 size={15} /> Eliminar
                        </button>
                      )}
                      <button onClick={() => toggleCompletado(note.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-colors ${note.completado ? 'bg-gray-200 text-gray-500 hover:bg-gray-300' : 'bg-[#00bc4c]/10 text-[#00bc4c] hover:bg-[#00bc4c]/20 border border-[#00bc4c]/30'}`}>
                        {note.completado ? <CheckCircle size={17} /> : <Clock size={17} />}
                        {note.completado ? "Completado" : "Marcar Completado"}
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 px-5 py-4 rounded-xl border border-gray-100 text-sm">
                    {note.ajuste}
                  </p>
                </div>

                {/* Hilo de conversación */}
                <div className="border-t border-gray-100 bg-gray-50/60 px-6 pt-5 pb-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gray-300 inline-block"></span> Hilo de Seguimiento
                  </p>

                  {/* Mensajes del hilo */}
                  {(note.thread || []).length === 0 && (
                    <p className="text-xs text-gray-400 italic mb-4">Aún no hay respuestas en este ajuste.</p>
                  )}
                  <div className="space-y-3 mb-5">
                    {(note.thread || []).map(msg => (
                      <div key={msg.id} className={`flex gap-3 items-start ${msg.from === 'dev' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.from === 'dev' ? 'bg-[#00bc4c] text-[#001108]' : 'bg-gray-200 text-gray-600'}`}>
                          {msg.from === 'dev' ? <Wrench size={14} /> : <User size={14} />}
                        </div>
                        <div className={`max-w-[80%] ${msg.from === 'dev' ? 'items-end' : 'items-start'} flex flex-col`}>
                          <div className={`px-4 py-3 rounded-2xl text-sm font-medium leading-relaxed ${msg.from === 'dev' ? 'bg-[#00bc4c] text-white rounded-tr-md' : 'bg-white text-gray-800 border border-gray-200 rounded-tl-md'}`}>
                            {msg.text}
                          </div>
                          <span className="text-[10px] text-gray-400 mt-1 px-1">
                            {msg.from === 'dev' ? 'Kreditec Dev' : 'Cliente'} · {msg.timestamp}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input para nueva respuesta */}
                  {!note.completado && (
                    <div className="flex flex-col gap-2 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                      <div className="flex gap-2 mb-2">
                        {(['cliente', 'dev'] as const).map(role => (
                          <button key={role}
                            onClick={() => setReplyDraft(prev => ({ ...prev, [note.id]: { text: prev[note.id]?.text ?? '', from: role } }))}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${(replyDraft[note.id]?.from ?? 'dev') === role ? (role === 'dev' ? 'bg-[#00bc4c] text-white' : 'bg-gray-800 text-white') : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                            {role === 'dev' ? <Wrench size={12} /> : <User size={12} />}
                            {role === 'dev' ? 'Kreditec Dev' : 'Cliente'}
                          </button>
                        ))}
                        <span className="text-xs text-gray-400 self-center ml-1">responde:</span>
                      </div>
                      <div className="flex gap-2 items-end">
                        <textarea
                          rows={2}
                          placeholder="Escribe tu respuesta o seguimiento aquí..."
                          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00bc4c] text-gray-900 text-sm resize-none transition-all bg-gray-50 focus:bg-white"
                          value={replyDraft[note.id]?.text ?? ''}
                          onChange={e => setReplyDraft(prev => ({ ...prev, [note.id]: { ...prev[note.id], text: e.target.value, from: prev[note.id]?.from ?? 'dev' } }))}
                          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendReply(note.id); } }}
                        />
                        <button onClick={() => sendReply(note.id)}
                          className="flex items-center gap-1.5 bg-[#00bc4c] hover:bg-[#009e3e] text-white px-4 py-3 rounded-xl font-bold text-sm transition-colors shadow-md shadow-[#00bc4c]/20">
                          <Send size={16} /> Enviar
                        </button>
                      </div>
                      <p className="text-[10px] text-gray-400">Pulsa Enter para enviar · Shift+Enter para nueva línea</p>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Historial de Eliminados */}
      {deletedHistory.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 w-full mb-20">
          <div className="bg-white border border-gray-100 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden">
            <button onClick={() => setShowHistory(!showHistory)}
              className="w-full flex items-center justify-between p-8 hover:bg-gray-50 transition-colors group">
              <div className="flex items-center gap-3">
                <History className="text-gray-400 group-hover:text-[#00bc4c] transition-colors" size={22} />
                <div className="text-left">
                  <p className="font-bold text-[#002d14] text-lg">Historial de Eliminados</p>
                  <p className="text-xs text-gray-400 font-medium">{deletedHistory.length} registro(s) — solo lectura, no se puede borrar</p>
                </div>
              </div>
              <span className={`text-gray-400 font-bold text-xl transition-transform duration-300 ${showHistory ? 'rotate-180' : ''}`}>↓</span>
            </button>
            {showHistory && (
              <div className="border-t border-gray-100 divide-y divide-gray-100">
                {deletedHistory.map(record => (
                  <div key={record.id} className="px-8 py-6 bg-gray-50/60">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs font-bold rounded uppercase tracking-widest">{record.ruta}</span>
                        <h4 className="font-bold text-[#002d14] text-sm">{record.titulo}</h4>
                      </div>
                      <span className="text-xs text-gray-400 font-medium">Eliminado: {record.deletedAt}</span>
                    </div>
                    {/* Texto completo del ajuste */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 bg-white p-4 rounded-xl border border-gray-100">{record.ajuste}</p>
                    {/* Hilo archivado completo */}
                    {record.thread && record.thread.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Hilo archivado ({record.thread.length} mensaje{record.thread.length > 1 ? 's' : ''})</p>
                        {record.thread.map(msg => (
                          <div key={msg.id} className={`flex gap-2 items-start ${msg.from === 'dev' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${msg.from === 'dev' ? 'bg-[#00bc4c]/20 text-[#00bc4c]' : 'bg-gray-200 text-gray-500'}`}>
                              {msg.from === 'dev' ? 'D' : 'C'}
                            </div>
                            <div className={`max-w-[80%] flex flex-col ${msg.from === 'dev' ? 'items-end' : 'items-start'}`}>
                              <p className={`text-xs px-3 py-2 rounded-xl leading-relaxed ${msg.from === 'dev' ? 'bg-[#00bc4c]/10 text-[#002d14]' : 'bg-white border border-gray-200 text-gray-700'}`}>{msg.text}</p>
                              <span className="text-[9px] text-gray-400 mt-0.5">{msg.from === 'dev' ? 'Dev' : 'Cliente'} · {msg.timestamp}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

    </div>
  );
}

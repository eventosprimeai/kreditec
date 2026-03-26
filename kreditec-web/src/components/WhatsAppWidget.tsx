"use client";

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = "593963413419";
const AGENT_NAME = "Ana";
const AGENT_ROLE = "Agente Virtual · Kreditec";

// Horario de atención: Lunes-Viernes 8:00–17:00 (hora Ecuador, UTC-5)
function isWithinBusinessHours(): boolean {
  const now = new Date();
  // Obtener hora local en Ecuador (UTC-5)
  const ecuadorOffset = -5 * 60;
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ecuadorTime = new Date(utc + ecuadorOffset * 60000);
  const hour = ecuadorTime.getHours();
  const day = ecuadorTime.getDay();
  // Lunes=1 ... Viernes=5; 8–17
  return day >= 1 && day <= 5 && hour >= 8 && hour < 17;
}

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [online, setOnline] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setOnline(isWithinBusinessHours());
    // Re-evaluar cada minuto por si cambia el horario mientras está en pantalla
    const interval = setInterval(() => setOnline(isWithinBusinessHours()), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isOpen && !sent && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, sent]);

  const handleSend = () => {
    if (!message.trim()) return;
    const encoded = encodeURIComponent(message.trim());
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessage('');
    setSent(false);
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-5 sm:right-8 z-[998] w-[330px] sm:w-[370px] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.25)] border border-white/10"
          >
            {/* Header */}
            <div className="bg-[#002d14] px-4 py-4 flex items-center gap-3">
              <div className="relative shrink-0">
                <div className="w-11 h-11 rounded-full border-2 border-white/30 overflow-hidden relative bg-white/10">
                  <img src="/whatsapp_avatar.png" alt={AGENT_NAME} className="w-full h-full object-cover" />
                </div>
                {/* Indicador de estado dinámico */}
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#002d14] ${online ? 'bg-[#00bc4c]' : 'bg-yellow-400'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-tight truncate">{AGENT_NAME}</p>
                <p className="text-white/60 text-xs mt-0.5 truncate">{AGENT_ROLE}</p>
                <p className={`text-xs font-semibold mt-0.5 flex items-center gap-1 ${online ? 'text-[#00bc4c]' : 'text-yellow-400'}`}>
                  {online ? (
                    <><span className="w-1.5 h-1.5 rounded-full bg-[#00bc4c] inline-block animate-pulse" /> En línea · Responde al instante</>
                  ) : (
                    <><Clock size={11} /> Fuera de horario · Responde a las 8am</>
                  )}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                aria-label="Cerrar chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div
              className="px-4 py-5 flex flex-col justify-end gap-3"
              style={{ background: '#e5ddd5', minHeight: '160px' }}
            >
              {/* Burbuja de saludo */}
              <div className="flex items-end gap-2 max-w-[88%]">
                <div className="w-7 h-7 rounded-full bg-white/20 overflow-hidden shrink-0 mb-1 border border-white/50">
                  <img src="/whatsapp_avatar.png" alt={AGENT_NAME} className="w-full h-full object-cover" />
                </div>
                <div className="bg-white rounded-xl rounded-tl-none px-4 py-3 shadow-sm">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    👋 ¡Hola! Soy <strong>{AGENT_NAME}</strong>. ¿En qué puedo ayudarle hoy con su institución financiera?
                  </p>
                  <p className="text-[10px] text-gray-400 text-right mt-1">ahora</p>
                </div>
              </div>

              {/* Nota de horario — sutil e informativa */}
              {!online && (
                <div className="flex items-end gap-2 max-w-[88%]">
                  <div className="w-7 h-7 shrink-0" />
                  <div className="bg-white/80 rounded-xl rounded-tl-none px-4 py-2.5 shadow-sm border-l-2 border-yellow-400">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      🕘 Atención disponible <strong>Lun–Vie, 8:00–17:00</strong>. Su mensaje llegará directo a mi WhatsApp y le responderé en cuanto esté en línea.
                    </p>
                  </div>
                </div>
              )}

              {/* Burbuja de confirmación de envío */}
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-end gap-2 max-w-[85%] self-end"
                  >
                    <div className="bg-[#dcf8c6] rounded-xl rounded-tr-none px-4 py-3 shadow-sm">
                      <p className="text-gray-800 text-sm leading-relaxed break-words">{message}</p>
                      <p className="text-[10px] text-gray-400 text-right mt-1">✓✓ enviado</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer — Input / Estado enviado */}
            <div className="bg-[#f0f0f0] px-3 py-3 flex flex-col gap-2">
              {sent ? (
                <div className="flex flex-col items-center gap-1.5 py-1">
                  <p className="text-xs text-gray-500 text-center">Tu mensaje fue abierto en WhatsApp ✅</p>
                  <button onClick={handleReset} className="text-[#002d14] font-semibold text-sm hover:underline">
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  {/* Indicador sutil de destino directo */}
                  <p className="text-[10px] text-gray-400 text-center px-2 leading-tight">
                    {online
                      ? `💬 Este mensaje llegará directo al WhatsApp de ${AGENT_NAME}`
                      : `📩 Tu mensaje quedará en WhatsApp para ${AGENT_NAME}`}
                  </p>
                  <div className="flex items-end gap-2">
                    <textarea
                      ref={inputRef}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Escribe un mensaje..."
                      rows={1}
                      className="flex-1 bg-white rounded-2xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 resize-none outline-none focus:ring-2 focus:ring-[#00bc4c]/40 border border-transparent max-h-24 overflow-y-auto leading-relaxed"
                      style={{ minHeight: '42px' }}
                    />
                    <button
                      onClick={handleSend}
                      disabled={!message.trim()}
                      className="w-10 h-10 rounded-full bg-[#00bc4c] flex items-center justify-center shrink-0 hover:bg-[#002d14] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                      aria-label="Enviar mensaje"
                    >
                      <Send size={18} className="text-white translate-x-px" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        className="fixed bottom-5 right-5 sm:right-8 z-[999] flex items-center gap-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 1.5, stiffness: 260, damping: 20 }}
      >
        {/* Label "Chat" */}
        <AnimatePresence>
          {!isOpen && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-white text-gray-800 font-bold text-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-100 select-none"
            >
              Chat
            </motion.span>
          )}
        </AnimatePresence>

        <button
          onClick={() => { setIsOpen(prev => !prev); if (sent) handleReset(); }}
          className="w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 relative"
          style={{ background: 'linear-gradient(135deg, #002d14 0%, #00bc4c 100%)' }}
          aria-label="Abrir chat de WhatsApp"
        >
          {isOpen ? (
            <X size={26} className="text-white" />
          ) : (
            <>
              <span className="absolute inset-0 rounded-full animate-ping bg-[#00bc4c] opacity-30" />
              <svg viewBox="0 0 24 24" fill="white" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.492.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.570-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12.05 2C6.495 2 2 6.495 2 12.022c0 1.76.458 3.478 1.332 4.993L2 22l5.133-1.348A9.953 9.953 0 0012.05 22C17.604 22 22 17.505 22 12.022 22 6.474 17.605 2 12.05 2zm0 18.194a8.17 8.17 0 01-4.164-1.136l-.298-.177-3.048.799.817-2.973-.198-.31A8.133 8.133 0 013.83 12.022c0-4.535 3.689-8.222 8.22-8.222 4.534 0 8.222 3.687 8.222 8.222 0 4.533-3.688 8.172-8.222 8.172z"/>
              </svg>
            </>
          )}
        </button>
      </motion.div>
    </>
  );
}

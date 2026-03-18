"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar estado inicial en localStorage
    const consent = localStorage.getItem('kreditec_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }

    // Escuchar evento desde el Footer para abrir configuracion manualmente
    const openBanner = () => setIsVisible(true);
    window.addEventListener('open_cookie_banner', openBanner);
    
    return () => window.removeEventListener('open_cookie_banner', openBanner);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('kreditec_cookie_consent', 'all');
    setIsVisible(false);
    window.dispatchEvent(new Event('cookie_consent_updated'));
  };

  const handleOnlyNecessary = () => {
    localStorage.setItem('kreditec_cookie_consent', 'necessary');
    setIsVisible(false);
    window.dispatchEvent(new Event('cookie_consent_updated'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] bg-white dark:bg-[#001f0e] border-t border-gray-200 dark:border-gray-800 shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.1)] p-5 sm:p-6 text-sm sm:text-base animate-in slide-in-from-bottom-12 duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Privacidad y Cookies Tecnológicas</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed md:pr-8">
            Utilizamos cookies técnicas necesarias para la seguridad (sin requerir consentimiento) y analizamos el tráfico B2B para perfeccionar nuestro embudo.
            No compartimos información masiva. Ver <a href="/politica-de-cookies" className="text-[var(--color-accent)] hover:underline font-semibold">Política de Cookies</a> y <a href="/politica-de-privacidad" className="text-[var(--color-accent)] hover:underline font-semibold">Política de Privacidad</a> B2B.
          </p>
        </div>
        <div className="flex flex-col flex-wrap sm:flex-row w-full md:w-auto gap-3 shrink-0">
          <Button variant="ghost" onClick={() => setIsVisible(false)} className="px-6 py-2 border-gray-200 border">Ignorar</Button>
          <Button variant="outline" onClick={handleOnlyNecessary} className="px-6 py-2">Solo Necesarias</Button>
          <Button onClick={handleAcceptAll} className="px-6 py-2 shadow-lg shadow-[var(--color-accent)]/20 hover:-translate-y-1 transition-transform">Aceptar Todo</Button>
        </div>
      </div>
    </div>
  );
}

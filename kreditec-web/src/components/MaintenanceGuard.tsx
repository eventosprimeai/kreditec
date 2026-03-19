"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ShieldAlert, RefreshCw, Lock } from 'lucide-react';

export function MaintenanceGuard({ children, LayoutWrapper }: { children: React.ReactNode, LayoutWrapper: React.ReactNode }) {
  const [isMaintenance, setIsMaintenance] = useState<boolean | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Check maintenance flag
    const flag = localStorage.getItem('kreditec_maintenance');
    setIsMaintenance(flag === 'true');

    // Escuchar cambios en otras pestañas o ventanas
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'kreditec_maintenance') {
         setIsMaintenance(e.newValue === 'true');
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [pathname]);

  if (isMaintenance === null) {
    // Evitar falsos saltos visuales mientras carga
    return <div className="min-h-screen bg-black" />;
  }

  // Bypass para la ruta privada de configuración
  if (pathname === '/privado') {
    return <>{children}</>;
  }

  if (isMaintenance) {
    return (
      <div className="min-h-screen bg-[#001108] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-accent)] opacity-[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00bc4c] opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center justify-center relative z-10 text-center max-w-2xl bg-black/40 p-12 rounded-[3rem] border border-[var(--color-accent)]/20 shadow-2xl backdrop-blur-xl">
           <div className="w-20 h-20 mb-8 rounded-full border-4 border-white/10 bg-[var(--color-accent)] text-[#001108] flex animate-pulse items-center justify-center shadow-[0_0_40px_rgba(0,188,76,0.3)]">
             <ShieldAlert size={40} className="relative z-10" />
           </div>
           <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Mantenimiento Programado</h1>
           <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
             Estamos desplegando nuevas estrategias y actualizaciones críticas en nuestro ecosistema. El sitio volverá a estar en línea en breve con novedades importantes.
           </p>
           
           <div className="inline-flex items-center gap-3 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm border border-[var(--color-accent)]/30">
              <RefreshCw className="animate-spin" size={18} /> Optimizando
           </div>

           <div className="mt-12 pt-8 border-t border-white/10 w-full flex items-center justify-center gap-2 text-white/30 text-sm font-bold tracking-widest uppercase">
              <Lock size={14} /> Kreditec Secure
           </div>
        </div>
      </div>
    );
  }

  // Wrapper regular de la app
  return <>{LayoutWrapper}</>;
}

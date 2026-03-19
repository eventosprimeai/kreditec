"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Shield, ShieldAlert, CheckCircle, Lock } from 'lucide-react';

export default function PrivadoPage() {
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Restaurar si ya se logueó en esta sesión (para que no lo pida en recargas)
    const authSession = sessionStorage.getItem('kreditec_admin_auth');
    if (authSession === 'true') {
      setIsAuthenticated(true);
    }

    const flag = localStorage.getItem('kreditec_maintenance');
    setIsMaintenance(flag === 'true');
    setIsReady(true);
  }, []);

  const toggleMaintenance = () => {
    const newVal = !isMaintenance;
    localStorage.setItem('kreditec_maintenance', newVal.toString());
    setIsMaintenance(newVal);
    
    // Forzar el disparo del evento para otras pestañas abiertas
    window.dispatchEvent(new Event('storage'));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Open+2025*") {
      setIsAuthenticated(true);
      sessionStorage.setItem('kreditec_admin_auth', 'true');
      setError("");
    } else {
      setError("Contraseña incorrecta. Acceso denegado.");
    }
  };

  if (!isReady) return null;

  return (
    <div className="min-h-screen bg-[#001108] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-accent)] opacity-[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00bc4c] opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

      {isAuthenticated ? (
        <div className="flex flex-col items-center justify-center relative z-10 text-center max-w-lg w-full bg-white/5 p-12 rounded-[3rem] border border-[var(--color-accent)]/20 shadow-2xl backdrop-blur-xl">
          <div className="w-20 h-20 mb-8 rounded-full border-4 border-white/10 bg-black text-white flex items-center justify-center">
            <Lock size={40} className="relative z-10" />
          </div>
          
          <h1 className="text-3xl font-black tracking-tight mb-2 uppercase tracking-widest text-gray-400 text-sm">Zona Cero</h1>
          <h2 className="text-4xl font-black mb-10 text-white">Control de <br/><span className="text-[var(--color-accent)]">Estado Principal</span></h2>

          <div className="w-full bg-black/50 border border-white/10 p-6 rounded-3xl mb-10 flex flex-col items-center">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">Estado Actual del Frontend</p>
            
            {isMaintenance ? (
              <div className="flex items-center gap-3 text-red-400 font-bold bg-red-400/10 px-6 py-3 rounded-full border border-red-400/20">
                <ShieldAlert size={20} /> Mantenimiento Activo
              </div>
            ) : (
              <div className="flex items-center gap-3 text-[#00bc4c] font-bold bg-[#00bc4c]/10 px-6 py-3 rounded-full border border-[var(--color-accent)]/20">
                <CheckCircle size={20} /> Sistema Operativo
              </div>
            )}
          </div>

          <Button 
             size="lg" 
             variant="outline"
             onClick={toggleMaintenance}
             className="w-full border-white/20 hover:bg-white/10 text-lg py-6 font-bold"
          >
            {isMaintenance ? "Restaurar Frontend" : "Activar Mantenimiento"}
          </Button>
        </div>
      ) : (
        /* Pantalla de Autenticación */
        <div className="flex flex-col items-center justify-center relative z-10 text-center max-w-md w-full bg-black/40 p-12 rounded-[3rem] border border-[var(--color-accent)]/20 shadow-2xl backdrop-blur-xl">
          <div className="w-20 h-20 mb-8 rounded-full border-4 border-white/10 bg-[var(--color-accent)] text-[#001108] flex items-center justify-center shadow-[0_0_40px_rgba(0,188,76,0.3)]">
            <Shield size={40} className="relative z-10" />
          </div>
          
          <h2 className="text-3xl font-black mb-2 text-white tracking-tight">Acceso Restringido</h2>
          <p className="text-gray-400 text-sm mb-8">Por favor, identifíquese para acceder al panel de la Zona Cero.</p>

          <form onSubmit={handleLogin} className="w-full">
            <input
              type="password"
              placeholder="Contraseña Maestra..."
              className="w-full px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all bg-white/5 text-white mb-4 text-center tracking-widest"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-400 text-sm font-bold mb-4">{error}</p>}
            <Button 
               type="submit"
               size="lg" 
               className="w-full shadow-[0_4px_20px_rgba(0,188,76,0.25)] hover:shadow-[0_4px_25px_rgba(0,188,76,0.4)] text-lg py-4 font-bold border-transparent"
            >
               Desbloquear Panel
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}

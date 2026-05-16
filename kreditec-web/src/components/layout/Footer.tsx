"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#001108] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Puntos focales de luz en 3 variantes de ubicación */}
      <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full filter blur-[120px] opacity-0 animate-fade-in-out" style={{ animationDelay: '0s' }} />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#006028] rounded-full filter blur-[120px] opacity-0 animate-fade-in-out" style={{ animationDelay: '6s' }} />
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full filter blur-[120px] opacity-0 animate-fade-in-out" style={{ animationDelay: '12s' }} />
      
      <div className="absolute inset-0 bg-black/40 pointer-events-none" /> {/* Overlay para mantener legibilidad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-1 border-gray-800">
             <div className="mb-6">
                <Image src="/logo-blanco.png" alt="Kreditec Logo" width={200} height={45} className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                Gestión Comercial Especializada con tecnología de élite. Información centralizada, verificación estricta y resultados comprobables.
             </p>
             <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/kreditec/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-lg hover:shadow-[var(--color-accent)]/30 group">
                   <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/kreditec?igsh=MXkxMHNqdnUyMmtieA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-lg hover:shadow-[var(--color-accent)]/30 group">
                   <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
             </div>
          </div>
          
          <div>
             <h4 className="text-white font-bold mb-4 tracking-wider uppercase text-sm">Explorar</h4>
             <ul className="space-y-3 text-gray-400 text-sm font-medium">
                <li><Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio Operativo</Link></li>
                <li><Link href="/nosotros" className="hover:text-[var(--color-accent)] transition-colors">ADN de la Empresa</Link></li>
                <li><Link href="/servicios" className="hover:text-[var(--color-accent)] transition-colors">Infraestructura Exclusiva</Link></li>
             </ul>
          </div>
          
          <div>
             <h4 className="text-white font-bold mb-4 tracking-wider uppercase text-sm">Servicios Clave</h4>
             <ul className="space-y-3 text-gray-400 text-sm font-medium">
                <li><Link href="/servicios#gestion-comercial" className="hover:text-[var(--color-accent)] transition-colors block py-0.5">Gestión Comercial Multicanal</Link></li>
                <li><Link href="/servicios#contactabilidad" className="hover:text-[var(--color-accent)] transition-colors block py-0.5">Contactabilidad (HubSpot, Nua)</Link></li>
                <li><Link href="/servicios#filtro-masivo" className="hover:text-[var(--color-accent)] transition-colors block py-0.5">Filtro de Preaprobados B2B</Link></li>
                <li><Link href="/servicios#trazabilidad" className="hover:text-[var(--color-accent)] transition-colors block py-0.5">Reportes y Trazabilidad IAM</Link></li>
             </ul>
          </div>

          {/* Columna legal — dos sub-grupos */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-4 tracking-wider uppercase text-sm">Marco Legal</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm font-medium mb-6">
              <li>
                <Link href="/politica-de-privacidad" className="hover:text-[var(--color-accent)] transition-colors block py-0.5 leading-tight">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-general-de-datos" className="hover:text-[var(--color-accent)] transition-colors block py-0.5 leading-tight">
                  Política General de Protección de Datos
                </Link>
              </li>
              <li>
                <Link href="/tratamiento-datos" className="hover:text-[var(--color-accent)] transition-colors block py-0.5 leading-tight">
                  Información sobre el Tratamiento de Datos
                </Link>
              </li>
            </ul>

            <h4 className="text-white font-bold mb-4 tracking-wider uppercase text-sm">Términos de Uso</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm font-medium">
              <li>
                <Link href="/terminos-y-condiciones" className="hover:text-[var(--color-accent)] transition-colors block py-0.5 leading-tight">
                  Términos y Condiciones del Sitio Web
                </Link>
              </li>
              <li>
                <Link href="/terminos-redes-sociales" className="hover:text-[var(--color-accent)] transition-colors block py-0.5 leading-tight">
                  Términos y Condiciones de Redes Sociales
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="hover:text-[var(--color-accent)] transition-colors block py-0.5 leading-tight">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <button onClick={() => window.dispatchEvent(new Event('open_cookie_banner'))} className="text-gray-500 hover:text-[var(--color-accent)] transition-colors border-b border-gray-700 hover:border-[var(--color-accent)] pb-0.5 outline-none cursor-pointer text-xs mt-1">
                  Reabrir Panel de Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} KREDITECONK S.A.S | Ruc: 1793235457001 | Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
             <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" /> Ecosistema Operando</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

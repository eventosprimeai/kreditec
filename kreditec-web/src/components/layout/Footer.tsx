import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#001a0c] text-white pt-16 pb-8 border-t border-[#00bc4c]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1 border-gray-800">
             <div className="mb-6">
                <Image src="/logo-blanco.png" alt="Kreditec Logo" width={200} height={45} className="h-10 w-auto" />
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Gestión Comercial Especializada con tecnología de élite. Información centralizada y verificación segura.
             </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Navegación</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors text-sm">Inicio</Link></li>
              <li><Link href="/nosotros" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors text-sm">Nosotros</Link></li>
              <li><Link href="/servicios" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors text-sm">Servicios</Link></li>
              <li><Link href="/contacto" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors text-sm">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/politica-de-privacidad" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors text-sm">Política de Privacidad</Link></li>
              <li><Link href="/politica-de-cookies" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors text-sm">Política de Cookies</Link></li>
              <li><Link href="/terminos-y-condiciones" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors text-sm">Términos y Condiciones</Link></li>
            </ul>
          </div>
          <div>
             <h4 className="font-semibold text-lg mb-4 text-white">Contacto</h4>
             <ul className="space-y-3 text-gray-400 text-sm">
                <li className="font-medium text-gray-300">Valentina Barrera - Gerente General</li>
                <li>Tel: +593 98 747 1367</li>
                <li>Email: Vbarrera@kreditecsa.com</li>
                <li>6 de Diciembre N34-360 y Portugal, Edif. Zyra Of. 605, Quito, Ecuador</li>
             </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
           <p>© {new Date().getFullYear()} KREDITEC. Todos los derechos reservados.</p>
           <div className="flex space-x-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
               <Linkedin size={20} />
             </a>
             <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
               <Instagram size={20} />
             </a>
           </div>
        </div>
      </div>
    </footer>
  );
}

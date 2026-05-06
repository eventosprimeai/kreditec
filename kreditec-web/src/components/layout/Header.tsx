"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-gray-100 ${scrolled ? 'bg-white/75 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 relative">
             <Image src="/logo-color.png" alt="Kreditec Logo" width={120} height={25} className="h-6 md:h-7 w-auto transition-all" priority />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
             <NavItem href="/">Inicio</NavItem>
             <NavItem href="/nosotros">Nosotros</NavItem>
             <NavItem href="/servicios">Servicios</NavItem>
          </nav>
          <div className="hidden md:flex">
             <Link href="/contacto">
                <Button size="sm" className="shadow-lg shadow-[var(--color-accent)]/15 hover:-translate-y-1 hover:shadow-[var(--color-accent)]/30 transition-all font-semibold px-6">
                   Contacto Rápido
                </Button>
             </Link>
          </div>
          <button className="md:hidden text-[#002d14]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-8 space-y-6 flex flex-col items-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="block text-[#002d14] font-bold text-xl hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
            <Link href="/nosotros" onClick={() => setIsOpen(false)} className="block text-[#002d14] font-bold text-xl hover:text-[var(--color-accent)] transition-colors">Nosotros</Link>
            <Link href="/servicios" onClick={() => setIsOpen(false)} className="block text-[#002d14] font-bold text-xl hover:text-[var(--color-accent)] transition-colors">Servicios</Link>
            <div className="w-full pt-6">
               <Link href="/contacto" onClick={() => setIsOpen(false)} className="block w-full">
                  <Button className="w-full justify-center py-4 text-lg">Contacto Rápido</Button>
               </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="relative text-[#002d14] font-bold transition-colors duration-300 hover:text-[var(--color-accent)] group py-1"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-full h-[2.5px] bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded-full" />
    </Link>
  );
}

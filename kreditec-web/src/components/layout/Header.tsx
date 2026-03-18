"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#002d14]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
             <div className="text-2xl font-bold tracking-tight text-[#002d14] dark:text-white flex items-center gap-2">
                <span>KREDIT</span>
                <span className="text-[var(--color-accent)]">EC</span>
             </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
             <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-[var(--color-accent)] dark:hover:text-[var(--color-accent)] font-medium transition-colors">Inicio</Link>
             <Link href="/nosotros" className="text-gray-700 dark:text-gray-200 hover:text-[var(--color-accent)] dark:hover:text-[var(--color-accent)] font-medium transition-colors">Nosotros</Link>
             <Link href="/servicios" className="text-gray-700 dark:text-gray-200 hover:text-[var(--color-accent)] dark:hover:text-[var(--color-accent)] font-medium transition-colors">Servicios</Link>
          </nav>
          <div className="hidden md:flex">
             <Link href="/contacto">
                <Button>Contacto Rápido</Button>
             </Link>
          </div>
          <div className="md:hidden flex items-center">
             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-200 focus:outline-none">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#002d14] border-t border-gray-200 dark:border-gray-800 shadow-xl">
           <div className="px-4 py-6 flex flex-col space-y-4">
             <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-gray-100 text-lg font-medium">Inicio</Link>
             <Link href="/nosotros" onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-gray-100 text-lg font-medium">Nosotros</Link>
             <Link href="/servicios" onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-gray-100 text-lg font-medium">Servicios</Link>
             <Link href="/contacto" onClick={() => setIsOpen(false)} className="text-[var(--color-accent)] font-semibold text-lg mt-4 inline-block">Contacto Rápido</Link>
           </div>
        </div>
      )}
    </header>
  );
}

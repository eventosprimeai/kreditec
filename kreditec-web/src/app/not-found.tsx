import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gray-50 dark:bg-[#001108] overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-accent)] opacity-5 rounded-full blur-[100px] pointer-events-none" />
       
       <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-8xl md:text-9xl font-extrabold text-[#002d14] dark:text-white relative inline-block mb-4">
            404
            <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent blur-2xl z-0" />
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Página No Encontrada</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mb-12">
             Parece que la ruta que está intentando acceder ya no existe o ha sido movida. Continúe descubriendo cómo podemos optimizar su gestión comercial.
          </p>
          <Link href="/">
             <Button size="lg" className="text-lg py-5 px-10 flex items-center gap-3 mx-auto shadow-xl shadow-[var(--color-accent)]/15 group">
                <Home size={22} className="group-hover:-translate-y-0.5 transition-transform" />
                Volver al Inicio
             </Button>
          </Link>
       </div>
    </div>
  );
}

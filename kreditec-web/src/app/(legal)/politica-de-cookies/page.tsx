import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, BarChart2, Bell, Globe, ExternalLink, FileText, Database, Shield, Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Cookies | KREDITEC',
  description: 'Política de uso de Cookies y tecnologías de seguimiento de KREDITECONK S.A.S. en su Sitio Web y Canales Oficiales.',
};

const cookieTypes = [
  {
    Icon: Lock,
    name: 'Cookies Estrictamente Necesarias',
    desc: 'Obligatorias para el funcionamiento seguro y técnico del Sitio Web. Incluyen protocolos de inicio de sesión o protección contra Spam/CSRF. No requieren consentimiento expreso y no pueden desactivarse.',
    badge: 'Siempre activas',
    badgeColor: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
  },
  {
    Icon: BarChart2,
    name: 'Cookies de Análisis',
    desc: 'Útiles para medir patrones de tráfico y uso de la plataforma. Permiten conocer cómo navegan los usuarios por el Sitio Web para mejorar su funcionalidad y experiencia. Solo se activan tras su consentimiento explícito.',
    badge: 'Requiere consentimiento',
    badgeColor: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400',
  },
  {
    Icon: Bell,
    name: 'Cookies de Marketing',
    desc: 'Empleadas para rastrear conversiones desde campañas publicitarias y para mostrar publicidad o promociones relevantes de KREDITEC. Supeditadas a su aprobación previa.',
    badge: 'Requiere consentimiento',
    badgeColor: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400',
  },
];

const browsers = [
  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
  { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies' },
  { name: 'Microsoft Edge', url: 'https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406' },
  { name: 'Safari', url: 'https://support.apple.com/es-es/guide/safari/sfri11471/mac' },
];

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#060f09]">
      <div className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#001a0c] to-[#002d14]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#00bc4c] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-[#00bc4c] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#00bc4c]/10 border border-[#00bc4c]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00bc4c] animate-pulse" />
            <span className="text-[#00bc4c] text-xs font-semibold tracking-widest uppercase">Documento Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Política de Cookies</h1>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mt-4">
            Información sobre el uso de cookies y tecnologías de seguimiento en el Sitio Web y Canales Oficiales de <strong>KREDITECONK S.A.S.</strong>
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-[#00bc4c]/5 to-[#002d14]/5 dark:from-[#00bc4c]/10 dark:to-[#001a0c] border border-[#00bc4c]/20 rounded-2xl p-6 mb-12">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Usted declara que conoce y acepta que <strong className="text-[#002d14] dark:text-[#00bc4c]">KREDITECONK S.A.S. (&ldquo;KREDITEC&rdquo;)</strong> podrá utilizar un sistema de seguimiento mediante la utilización de Cookies en su Sitio Web <span className="text-[#00bc4c]">https://www.kreditecsa.com/</span> y sus Canales Oficiales de Instagram y LinkedIn.
          </p>
        </div>

        <div className="space-y-12">
          {/* 1. Qué son */}
          <section id="que-son" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">¿Qué son las Cookies?</h2>
            </div>
            <div className="ml-12 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Las Cookies son definidas como pequeños archivos que se instalan en el disco duro del dispositivo del Usuario, con una duración limitada en el tiempo que ayudan a personalizar los servicios online.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Las Cookies se utilizan con el fin de conocer los intereses, el comportamiento y la demografía de quienes visitan los sitios web. A través del uso de Cookies, KREDITEC puede comprender mejor sus necesidades e intereses y darles un mejor servicio o proveerle información relacionada.</p>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 2. Tipos */}
          <section id="tipos" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Tipos de Cookies que Utilizamos</h2>
            </div>
            <div className="ml-12 grid grid-cols-1 gap-4">
              {cookieTypes.map((c, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-[#00bc4c]/10 dark:bg-[#00bc4c]/20 flex items-center justify-center flex-shrink-0">
                    <c.Icon size={20} className="text-[#00bc4c]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-bold text-[#002d14] dark:text-white">{c.name}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.badgeColor}`}>{c.badge}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 3. Gestión */}
          <section id="gestion" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Gestión y Configuración de Cookies</h2>
            </div>
            <div className="ml-12 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Si no desea permitir la instalación de cookies en su dispositivo, deberá configurar su navegador a tal efecto. La mayoría de los navegadores modernos permiten gestionar las cookies a través de su configuración de privacidad.</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {browsers.map((b, i) => (
                  <a key={i} href={b.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-white dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-lg hover:border-[#00bc4c]/50 transition-all text-sm text-[#00bc4c] font-medium group">
                    <Globe size={14} className="flex-shrink-0" />
                    <span>Gestionar en {b.name}</span>
                    <ExternalLink size={12} className="ml-auto opacity-50 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 4. Redes sociales */}
          <section id="redes-sociales" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Cookies y Redes Sociales</h2>
            </div>
            <div className="ml-12">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Los Canales Oficiales de KREDITEC en Instagram y LinkedIn utilizan las cookies y tecnologías de rastreo propias de las plataformas Meta e LinkedIn Corporation respectivamente. El tratamiento de datos dentro de dichas plataformas se rige por sus respectivas políticas de privacidad, que son independientes de la presente Política de Cookies de KREDITEC.</p>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 5. Contacto */}
          <section id="contacto" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">5</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Contacto sobre esta Política</h2>
            </div>
            <div className="ml-12">
              <div className="bg-[#002d14] dark:bg-[#001a0c] rounded-xl p-5 space-y-3">
                <p className="text-gray-300 text-sm">Para consultas sobre el uso de cookies, el tratamiento de sus datos o para ejercer sus derechos, puede contactarnos a través de:</p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:protecciondedatos@kreditecsa.com" className="flex items-center gap-2 text-[#00bc4c] hover:text-[#00e05a] transition-colors text-sm font-medium">
                    <Mail size={14} /> protecciondedatos@kreditecsa.com
                  </a>
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <Phone size={14} className="text-[#00bc4c]" /> +593 96 341 3419
                  </span>
                </div>
                <p className="text-gray-500 text-xs flex items-start gap-1.5">
                  <MapPin size={12} className="text-[#00bc4c] flex-shrink-0 mt-0.5" />
                  Av. 6 de Diciembre N34-360 N35 Portugal | Edificio Zyra | Oficina 605 | Iñaquito, Quito D.M. | Pichincha, Ecuador
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/politica-de-privacidad" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <Lock size={18} className="text-[#00bc4c]" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Política de Privacidad</p>
            </div>
          </Link>
          <Link href="/terminos-y-condiciones" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <FileText size={18} className="text-[#00bc4c]" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Términos y Condiciones</p>
            </div>
          </Link>
          <Link href="/tratamiento-datos" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <Database size={18} className="text-[#00bc4c]" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Tratamiento de Datos</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

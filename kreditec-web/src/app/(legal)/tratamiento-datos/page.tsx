import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Información sobre el Tratamiento de tus Datos Personales | KREDITEC',
  description: 'Conoce cómo KREDITECONK S.A.S. trata, protege y utiliza tus datos personales. Tus derechos y cómo ejercerlos.',
};

export default function TratamientoDatos() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#060f09]">
      <div className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#001a0c] to-[#002d14]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#00bc4c] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#00bc4c] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#00bc4c]/10 border border-[#00bc4c]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00bc4c] animate-pulse" />
            <span className="text-[#00bc4c] text-xs font-semibold tracking-widest uppercase">Documento Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Información sobre el Tratamiento
            <span className="block text-2xl md:text-3xl text-[#00bc4c] mt-1 font-medium">de tus Datos Personales</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mt-4">
            Tus datos personales son valiosos y desde <strong>KREDITECONK S.A.S. (&ldquo;KREDITEC&rdquo;)</strong> protegemos toda la información que tenemos de ti.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Intro highlight */}
        <div className="bg-gradient-to-br from-[#00bc4c]/5 to-[#002d14]/5 dark:from-[#00bc4c]/10 dark:to-[#001a0c] border border-[#00bc4c]/20 rounded-2xl p-6 mb-12">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            En cumplimiento de nuestro deber de <strong className="text-[#002d14] dark:text-[#00bc4c]">transparencia</strong> y de la normativa de protección de datos, especialmente la <strong className="text-[#002d14] dark:text-[#00bc4c]">Ley Orgánica de Protección de Datos Personales (LOPDP)</strong> de la República del Ecuador, te informamos lo siguiente:
          </p>
        </div>

        <div className="space-y-10">

          {/* Acceso a tus datos */}
          <section id="acceso" className="scroll-mt-24 p-6 bg-gray-50 dark:bg-[#0d1f13] rounded-2xl border border-gray-200 dark:border-[#1a3a22]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00bc4c] to-[#009940] flex items-center justify-center text-white text-lg">🔑</div>
              <h2 className="text-xl font-bold text-[#002d14] dark:text-white">Acceso a tus Datos</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed mb-4">
              KREDITEC solamente comparte tus datos personales a terceros con los que esté contractual o legalmente obligado a facilitarlos, así como a:
            </p>
            <div className="space-y-2">
              {[
                'Empresas de su mismo grupo o aliadas (en el caso de que sea necesario para la prestación de sus servicios y productos).',
                'Proveedores de servicios tecnológicos.',
                'Proveedores de servicios de pago o financieros.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-3 bg-white dark:bg-[#060f09] rounded-lg border border-gray-100 dark:border-[#1a3a22]">
                  <span className="text-[#00bc4c] font-bold flex-shrink-0">✔</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Base legitimadora */}
          <section id="base" className="scroll-mt-24 p-6 bg-gray-50 dark:bg-[#0d1f13] rounded-2xl border border-gray-200 dark:border-[#1a3a22]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00bc4c] to-[#009940] flex items-center justify-center text-white text-lg">⚖️</div>
              <h2 className="text-xl font-bold text-[#002d14] dark:text-white">Base Legitimadora</h2>
            </div>
            <div className="space-y-2">
              {[
                'Ejecución de un contrato o aplicación de medidas precontractuales.',
                'Consentimiento del Titular, entregado a través del checkbox.',
                'Interés legítimo, por lo que, mientras no te pronuncies favorable o negativamente a esta comunicación podremos enviar nuevamente esta comunicación, ya que KREDITEC podrá realizar el tratamiento de datos personales siempre y cuando cuente con una base legitimadora.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-3 bg-white dark:bg-[#060f09] rounded-lg border border-gray-100 dark:border-[#1a3a22]">
                  <span className="text-[#00bc4c] font-bold flex-shrink-0">✔</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Derechos */}
          <section id="derechos" className="scroll-mt-24 p-6 bg-gray-50 dark:bg-[#0d1f13] rounded-2xl border border-gray-200 dark:border-[#1a3a22]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00bc4c] to-[#009940] flex items-center justify-center text-white text-lg">👤</div>
              <h2 className="text-xl font-bold text-[#002d14] dark:text-white">Tus Derechos</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed mb-4">
              Los Titulares de datos personales pueden ejercitar sus derechos de:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Acceso', 'Eliminación', 'Rectificación', 'Actualización', 'Oposición', 'Suspensión', 'Portabilidad', 'Revocación del consentimiento'].map((right, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-white dark:bg-[#060f09] rounded-lg border border-gray-100 dark:border-[#1a3a22]">
                  <span className="w-5 h-5 rounded-full bg-[#00bc4c]/20 text-[#00bc4c] text-xs font-bold flex items-center justify-center flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{right}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 leading-relaxed">
              Para ejercer cualquiera de estos derechos, dirija su solicitud al correo electrónico indicado al final de este documento.
            </p>
          </section>

          {/* Finalidad */}
          <section id="finalidad" className="scroll-mt-24 p-6 bg-gray-50 dark:bg-[#0d1f13] rounded-2xl border border-gray-200 dark:border-[#1a3a22]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00bc4c] to-[#009940] flex items-center justify-center text-white text-lg">🎯</div>
              <h2 className="text-xl font-bold text-[#002d14] dark:text-white">Finalidad del Tratamiento</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed mb-4">
              Los datos personales que tenemos de ti se utilizan, principalmente, para las siguientes finalidades, siempre teniendo una base jurídica que nos faculta a hacer ese tratamiento:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: 'Prestación de servicios y productos contratados',
                  desc: 'Incluye la gestión de las relaciones precontractuales, la ejecución de los contratos de servicio y el soporte a través de nuestro personal de ventas, canales oficiales, sitio web y oficinas.',
                },
                {
                  title: 'Envío de comunicaciones informativas y comerciales',
                  desc: 'Para remitir información y material sobre nuestros productos y servicios a través de cualquier medio. El Titular puede retirar su consentimiento para recibir campañas de mercadotecnia directa en cualquier momento.',
                },
                {
                  title: 'Atención de consultas o reclamos',
                  desc: 'Para gestionar, responder y dar seguimiento a todas tus consultas, peticiones, quejas o reclamos de manera eficiente.',
                },
                {
                  title: 'Información sobre cambios en las condiciones',
                  desc: 'Para comunicarte oportunamente sobre cualquier actualización o modificación en las condiciones, términos y características de los productos y servicios que has contratado.',
                },
                {
                  title: 'Cumplimiento de obligaciones legales',
                  desc: 'Para cumplir con todas las obligaciones legales, fiscales y regulatorias a las que KREDITEC se encuentra sujeto ante las autoridades competentes.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-4 bg-white dark:bg-[#060f09] rounded-xl border border-gray-100 dark:border-[#1a3a22]">
                  <span className="text-[#00bc4c] font-bold flex-shrink-0 mt-0.5">✔</span>
                  <div>
                    <p className="font-semibold text-[#002d14] dark:text-white text-sm">{item.title}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Plazo de conservación */}
          <section id="conservacion" className="scroll-mt-24 p-6 bg-gray-50 dark:bg-[#0d1f13] rounded-2xl border border-gray-200 dark:border-[#1a3a22]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00bc4c] to-[#009940] flex items-center justify-center text-white text-lg">⏱️</div>
              <h2 className="text-xl font-bold text-[#002d14] dark:text-white">Plazo de Conservación</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
              Los datos personales se conservarán mientras el Titular mantenga una relación contractual o comercial con KREDITEC. Una vez finalizada dicha relación, los datos se conservarán bloqueados durante los plazos legalmente establecidos para atender posibles responsabilidades nacidas del tratamiento y solo si son necesarios para el cumplimiento de una obligación legal o la defensa de reclamaciones.
            </p>
          </section>

          {/* Protección */}
          <section id="proteccion" className="scroll-mt-24 p-6 bg-gray-50 dark:bg-[#0d1f13] rounded-2xl border border-gray-200 dark:border-[#1a3a22]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00bc4c] to-[#009940] flex items-center justify-center text-white text-lg">🛡️</div>
              <h2 className="text-xl font-bold text-[#002d14] dark:text-white">Protección</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
              Desde KREDITEC hemos implementado una serie de medidas legales, técnicas y organizativas para que los datos personales se encuentren protegidos de accesos no autorizados, pérdidas, alteraciones o divulgaciones indebidas.
            </p>
          </section>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 p-6 bg-[#002d14] dark:bg-[#001a0c] rounded-2xl">
          <p className="text-white font-semibold text-lg mb-2">¿Necesitas ejercer algún derecho?</p>
          <p className="text-gray-400 text-sm mb-4">Para más información y para ejercer cualquiera de los derechos de protección de datos, puede realizarlo dirigiendo su solicitud al correo:</p>
          <a href="mailto:protecciondedatos@kreditecsa.com" className="inline-flex items-center gap-2 bg-[#00bc4c] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#00e05a] transition-colors">
            ✉️ protecciondedatos@kreditecsa.com
          </a>
        </div>

        {/* Related links */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/politica-de-privacidad" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <span className="text-2xl">🔒</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Política de Privacidad</p>
            </div>
          </Link>
          <Link href="/politica-general-de-datos" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <span className="text-2xl">🛡️</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Política General de Datos</p>
            </div>
          </Link>
          <Link href="/terminos-y-condiciones" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <span className="text-2xl">📋</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Términos y Condiciones</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

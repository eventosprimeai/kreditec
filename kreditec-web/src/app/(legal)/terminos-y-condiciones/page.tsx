import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Uso del Sitio Web | KREDITEC',
  description: 'Términos y Condiciones de Uso del Sitio Web de KREDITECONK S.A.S. Vigentes desde el 11 de mayo de 2026.',
};

const sections = [
  {
    id: 'definiciones',
    title: 'Definiciones',
    paras: [
      'Para efectos de los presentes Términos y Condiciones se tomarán las siguientes definiciones:',
      '**Sitio Web:** La dirección https://www.kreditecsa.com/ administrada por KREDITEC.',
      '**KREDITEC:** Administrador del Sitio Web. KREDITEC promocionará, comercializará y ofertará sus propios servicios.',
      '**Servicio:** Toda actividad, prestación o labor lícita de naturaleza intangible, promocionada, ofertada y comercializada a través del Sitio Web.',
      '**Usuario y/o Cliente:** Persona natural o jurídica que accede, navega o interactúa con el contenido del Sitio Web, incluyendo a visitantes, interesados en servicios y postulantes a ofertas de empleo.',
    ],
  },
  {
    id: 'objeto-ambito',
    title: 'Objeto y Ámbito de Aplicación',
    paras: [
      'El Sitio Web de KREDITEC tiene como objeto principal informar a los Usuarios y/o Clientes sobre los servicios que presta KREDITEC, así como permitir el contacto directo entre los Usuarios y/o Clientes y KREDITEC para la cotización de los mismos.',
      'Tanto la navegación por el Sitio Web como cualquier interacción con los contenidos publicados suponen la aceptación como Usuario y/o Cliente, sin reservas de ninguna clase, de todas y cada una de estos Términos y Condiciones de Uso.',
      'KREDITEC podrá modificar, actualizar o eliminar los contenidos y funcionalidades del Sitio Web, y modificar estos Términos y Condiciones de Uso cuando lo estime conveniente para su adecuada funcionalidad y en beneficio de KREDITEC, sin necesidad de previo aviso. Se recomienda a los Usuarios y/o Clientes revisar periódicamente estos Términos y Condiciones.',
    ],
  },
  {
    id: 'propiedad-intelectual',
    title: 'Propiedad Intelectual',
    paras: [
      'El Usuario y/o Cliente se obliga a respetar los derechos de propiedad intelectual de KREDITEC, y de terceros.',
      'El Usuario y/o Cliente podrá descargarse del Sitio Web en su terminal siempre que sea para uso privado, sin ningún fin comercial, por lo que no podrá explotar, reproducir, distribuir, modificar, comunicar públicamente, ceder, transformar o usar el contenido de la web con fines públicos o comerciales. KREDITEC es el único titular de las marcas expuestas en el Sitio Web o cuenta con la autorización de los terceros titulares. Queda estrictamente prohibido el uso de las marcas que aparecen en este sitio web, salvo se otorgue una autorización de forma expresa.',
      'Las imágenes que aparecen en el Sitio Web son propiedad de KREDITEC o de terceros que han autorizado su uso, y únicamente pueden ser utilizados con el permiso expreso de esta. KREDITEC es titular del software, derechos de autor y demás elementos de propiedad intelectual que se encuentren involucrados en el Sitio Web.',
      'En caso de que considere que uno de los productos promocionados en el Sitio Web viola sus derechos de propiedad intelectual, contáctese a: **legal@kreditecsa.com**',
    ],
  },
  {
    id: 'responsabilidad',
    title: 'Responsabilidad de KREDITEC',
    paras: [
      'KREDITEC no será responsable de errores o problemas en el funcionamiento del Sitio Web debido al hardware, software, redes, conexiones IP, cableado y conectividad en general al que pueda acceder el Usuario y/o Cliente. El Sitio Web funciona con los navegadores: Microsoft Edge, Chrome, Firefox y Safari dentro de sus últimas versiones.',
      'KREDITEC no se hace responsable de los perjuicios que se pudieran derivar de interferencias, omisiones, interrupciones, virus informáticos, averías y/o desconexiones en el funcionamiento operativo del sistema electrónico.',
      'KREDITEC no se responsabiliza por la certeza de los Datos Personales proporcionados por los Usuarios y/o Clientes. El Usuario y/o Cliente es el único y exclusivo responsable de la información que sea subida al Sitio Web.',
      'Los servicios ofertados en el Sitio Web son lícitos y se encuentran conformes a la legislación ecuatoriana. En particular, KREDITEC no responde en ningún caso de que los Usuarios y/o Clientes utilicen el Sitio Web en contra de lo establecido en la ley.',
      '**Inexistencia de Relación Precontractual:** El envío del formulario de "contacto rápido" o la sugerencia de una reunión no genera una relación de confianza, profesional o contractual automática entre las partes.',
      '**Uso de Datos Corporativos:** El Usuario autoriza a KREDITEC a utilizar el correo corporativo y el teléfono para fines de prospección comercial, calificación de servicios financieros y coordinación de la agenda solicitada.',
      '**Limitación por Errores de Comunicación:** KREDITEC no se responsabiliza si la reunión no se concreta debido a errores en la información de contacto proporcionada por el Usuario o fallos en las plataformas de terceros para videoconferencias.',
    ],
  },
  {
    id: 'disponibilidad',
    title: 'Disponibilidad del Sitio Web',
    paras: [
      'KREDITEC no garantiza la disponibilidad y continuidad del funcionamiento del Sitio Web; no obstante, cuando sea razonablemente posible, esta advertirá sobre las interrupciones en su funcionamiento ya sea por motivos técnicos, de seguridad, control, mantenimiento, por fallos de suministro eléctrico o por cualquier otra causa.',
      'El acceso al Sitio Web es de duración indefinida; sin embargo, KREDITEC se reserva el derecho de suspender sin previo aviso el acceso a los Usuarios y/o Clientes que incumplan las condiciones establecidas para su utilización.',
    ],
  },
  {
    id: 'enlaces-terceros',
    title: 'Enlaces de Terceros',
    paras: [
      'Las presentes Condiciones de Uso se refieren únicamente al Sitio Web de KREDITEC y no se aplica a enlaces, páginas web y/o aplicaciones de terceros accesibles a través de este o, en general, cualquier otro servicio proporcionado por terceros.',
      'En consecuencia, no asume ningún tipo de responsabilidad que pueda derivarse de los mismos. En caso de acceder a otras redes o recursos informáticos, el Usuario y/o Cliente acepta someterse a lo dispuesto en las correspondientes políticas de uso y privacidad.',
    ],
  },
  {
    id: 'proteccion-datos',
    title: 'Protección de Datos Personales',
    paras: [
      'KREDITEC protegerá los datos personales de los Usuarios y Clientes, y los utilizará solo en la medida en que exista un medio de legitimación del tratamiento de datos personales.',
      'Para más información de cómo tratamos sus datos personales, consulte nuestra Política General de Protección de Datos, la Información sobre Tratamiento de Datos Personales y el Aviso de Privacidad disponibles en nuestro sitio web.',
    ],
  },
  {
    id: 'cookies',
    title: 'Uso de Cookies',
    paras: [
      'KREDITEC podrá utilizar cookies para mejorar la navegación en el Sitio Web, y conocer las preferencias de los Usuarios y/o Clientes. Usted podrá configurar su navegador para aceptar o rechazar las cookies; sin embargo, para conocer cómo utilizamos las cookies o configurar las mismas, deberá revisar nuestra Política de Cookies en https://www.kreditecsa.com/politica-de-cookies',
    ],
  },
  {
    id: 'legislacion',
    title: 'Legislación Aplicable',
    paras: [
      'Las presentes Condiciones de Uso se rigen por las leyes de la República del Ecuador.',
    ],
  },
  {
    id: 'modificaciones',
    title: 'Modificaciones de las Condiciones de Uso',
    paras: [
      'KREDITEC se reserva el derecho de modificar las Condiciones de Uso en cualquier momento y a su entera discreción. KREDITEC no tiene obligación alguna de notificarle cualquier modificación de las Condiciones de Uso. El uso continuado del Sitio Web después de la publicación de las modificaciones constituye la aceptación plena de las nuevas Condiciones de Uso.',
      'KREDITEC se reserva el derecho a modificar cualquier contenido o información incorporada en el Sitio Web. KREDITEC no tiene la obligación de notificar o informar respecto de cualquier cambio o modificación de la información contenida en el Sitio Web.',
    ],
  },
  {
    id: 'conflictos',
    title: 'Solución de Conflictos',
    paras: [
      'Al utilizar de cualquier manera el Sitio Web, las partes convienen irrevocablemente que, en caso de surgir disputas entre ellas, realizarán los mejores esfuerzos para buscar y encontrar una solución mutuamente aceptable.',
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#060f09]">
      <div className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#001a0c] to-[#002d14]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00bc4c] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00bc4c] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#00bc4c]/10 border border-[#00bc4c]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00bc4c] animate-pulse" />
            <span className="text-[#00bc4c] text-xs font-semibold tracking-widest uppercase">Documento Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Términos y Condiciones de Uso
            <span className="block text-2xl md:text-3xl text-[#00bc4c] mt-1 font-medium">del Sitio Web</span>
          </h1>
          <p className="text-gray-400 text-sm mt-4">
            Aprobados el <strong className="text-gray-300">11 de mayo de 2026</strong> · Última modificación: <strong className="text-gray-300">11 de mayo de 2026</strong>
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-[#00bc4c]/5 to-[#002d14]/5 dark:from-[#00bc4c]/10 dark:to-[#001a0c] border border-[#00bc4c]/20 rounded-2xl p-6 mb-12">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            El presente documento contiene los Términos y Condiciones de Uso del Sitio Web aplicables a todas las personas naturales o jurídicas, nacionales o extranjeras, que accedan, utilicen y/o interactúen con el contenido publicado por <strong className="text-[#002d14] dark:text-[#00bc4c]">KREDITECONK S.A.S. (&ldquo;KREDITEC&rdquo;)</strong> a través de su Sitio Web oficial.
          </p>
          <div className="mt-4 pt-4 border-t border-[#00bc4c]/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div>
              <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">Empresa</span>
              <p className="text-gray-800 dark:text-gray-200 font-medium">KREDITECONK S.A.S.</p>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">Teléfono</span>
              <p className="text-gray-800 dark:text-gray-200 font-medium">+593 96 341 3419</p>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">Correo legal</span>
              <p className="text-gray-800 dark:text-gray-200 font-medium">legal@kreditecsa.com</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-2xl p-6 mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">Índice</h2>
          <ol className="space-y-2">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-[#00bc4c] dark:hover:text-[#00bc4c] transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-[#00bc4c]/10 dark:bg-[#00bc4c]/20 text-[#00bc4c] text-xs font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-[#00bc4c]/30 transition-colors">
                    {i + 1}
                  </span>
                  <span className="text-sm">{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-4">
                <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">{section.title}</h2>
              </div>
              <div className="ml-12 space-y-3">
                {section.paras.map((para, j) => {
                  const isBold = para.startsWith('**') && !para.endsWith('**');
                  const isFullBold = para.startsWith('**') && para.endsWith('**');
                  if (isFullBold) {
                    return <p key={j} className="font-bold text-[#002d14] dark:text-[#00bc4c]">{para.replace(/\*\*/g, '')}</p>;
                  }
                  if (isBold) {
                    const [label, ...rest] = para.split(':** ');
                    return (
                      <p key={j} className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
                        <strong className="text-[#002d14] dark:text-white">{label.replace('**', '')}:</strong> {rest.join(': ')}
                      </p>
                    );
                  }
                  return <p key={j} className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">{para}</p>;
                })}
              </div>
              {i < sections.length - 1 && <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />}
            </section>
          ))}
        </div>

        <div className="mt-16 p-6 bg-[#002d14] dark:bg-[#001a0c] rounded-2xl text-center">
          <p className="text-gray-400 text-sm">
            Los Términos y Condiciones de Uso han sido aprobados el <strong className="text-white">11 de mayo de 2026</strong>.
            La última modificación fue realizada el <strong className="text-white">11 de mayo de 2026</strong>.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Dirección: Av. 6 de Diciembre N34-360 N35 Portugal | Edificio Zyra | Oficina 605 | Iñaquito, Quito D.M. | Pichincha, Ecuador
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/politica-de-privacidad" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <span className="text-2xl">🔒</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Política de Privacidad</p>
            </div>
          </Link>
          <Link href="/politica-de-cookies" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <span className="text-2xl">🍪</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Política de Cookies</p>
            </div>
          </Link>
          <Link href="/politica-general-de-datos" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <span className="text-2xl">🛡️</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Política General de Datos</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

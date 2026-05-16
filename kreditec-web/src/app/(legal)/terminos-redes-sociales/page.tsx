import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Linkedin, Instagram, Shield, Lock, FileText, Check, Mail, Phone, MapPin, Globe, ExternalLink, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Uso de Canales Oficiales en Redes Sociales | KREDITEC',
  description: 'Términos y Condiciones de Uso aplicables a los Canales Oficiales de KREDITEC en Instagram y LinkedIn. Vigentes desde el 11 de mayo de 2026.',
};

const obligaciones = [
  'No publicar, transmitir o difundir contenidos que sean ilícitos, nocivos, amenazantes, difamatorios, obscenos, vejatorios, violentos o discriminatorios.',
  'No utilizar los Canales Oficiales para remitir publicidad no solicitada (spam) ni realizar actividades de marketing no autorizadas.',
  'No introducir, almacenar o difundir mediante los Canales Oficiales programas informáticos, virus, macros, applets, controles ActiveX u otros dispositivos lógicos que puedan causar daño a KREDITEC.',
  'Abstenerse de publicar o transmitir información falsa o engañosa que pueda inducir a error a otros usuarios.',
  'En caso de procesos de postulación laboral, mantener la confidencialidad de cualquier credencial de acceso o información personal proporcionada para dicho proceso.',
  'No realizar actividades publicitarias o de explotación comercial a través de los Canales Oficiales.',
  'No utilizar identidades falsas, ni suplantar la identidad de otros en la utilización de los Canales Oficiales.',
  'No destruir, alterar, utilizar para su uso, inutilizar o dañar los datos, informaciones, programas o documentos electrónicos de KREDITEC, sus proveedores o terceros.',
  'No introducir, almacenar o difundir mediante los Canales Oficiales cualquier contenido que infrinja derechos de propiedad intelectual o secretos empresariales de terceros.',
];

export default function TerminosRedesSociales() {
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
            <span className="block text-2xl md:text-3xl text-[#00bc4c] mt-1 font-medium">Canales Oficiales en Redes Sociales</span>
          </h1>
          <div className="flex items-center gap-4 mt-5">
            <a href="https://www.instagram.com/kreditec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full transition-colors">
              <Instagram size={14} /> Instagram
            </a>
            <a href="https://www.linkedin.com/company/kreditec/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full transition-colors">
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Aprobados el <strong className="text-gray-300">11 de mayo de 2026</strong> · Última modificación: <strong className="text-gray-300">11 de mayo de 2026</strong>
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-[#00bc4c]/5 to-[#002d14]/5 dark:from-[#00bc4c]/10 dark:to-[#001a0c] border border-[#00bc4c]/20 rounded-2xl p-6 mb-12">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Este documento contiene los Términos y Condiciones de Uso aplicables a todas las personas naturales o jurídicas, nacionales o extranjeras, que accedan, utilicen y/o interactúen con el contenido publicado por <strong className="text-[#002d14] dark:text-[#00bc4c]">KREDITEC S.A.S. (&ldquo;KREDITEC&rdquo;)</strong> a través de sus cuentas o perfiles oficiales de Instagram y LinkedIn (los &ldquo;Canales Oficiales&rdquo;).
          </p>
        </div>

        <div className="space-y-12">

          {/* 1. Definiciones */}
          <section id="definiciones" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Definiciones</h2>
            </div>
            <div className="ml-12 space-y-3">
              {[
                { term: 'Canales Oficiales', def: 'Los perfiles o cuentas oficiales de KREDITEC en Instagram y LinkedIn, cuyo propósito principal es la publicación de información institucional, la promoción de servicios de soluciones tecnológicas y la gestión de procesos de selección de personal (postulaciones laborales).' },
                { term: 'KREDITEC', def: 'Administrador de los Canales Oficiales. KREDITEC promocionará, comercializará y ofertará sus propios servicios y publicará oportunidades de empleo.' },
                { term: 'Servicio', def: 'Toda actividad, prestación o labor lícita de naturaleza intangible, promocionada, ofertada y comercializada a través de los Canales Oficiales.' },
                { term: 'Usuario', def: 'Persona natural o jurídica que accede, navega o interactúa con el contenido de los Canales Oficiales, incluyendo a seguidores, visitantes, interesados en servicios y postulantes a ofertas de empleo.' },
              ].map((d, i) => (
                <div key={i} className="flex gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] rounded-xl border border-gray-200 dark:border-[#1a3a22]">
                  <Check size={14} className="text-[#00bc4c] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#002d14] dark:text-white text-sm">{d.term}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-relaxed">{d.def}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 2. Sobre los canales */}
          <section id="canales" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Sobre los Canales Oficiales</h2>
            </div>
            <div className="ml-12">
              <div className="p-5 bg-[#002d14] dark:bg-[#001a0c] rounded-xl space-y-3 text-sm">
                <p className="text-gray-300">La administración de los Canales Oficiales corresponde a <strong className="text-white">KREDITEC</strong>, cuyo domicilio principal se encuentra en:</p>
                <p className="text-gray-400 flex items-start gap-1.5"><MapPin size={13} className="text-[#00bc4c] flex-shrink-0 mt-0.5" /> Av. 6 de Diciembre N34-360 N35 Portugal | Edificio Zyra | Oficina 605 | Iñaquito, Quito D.M. | Pichincha, Ecuador</p>
                <div className="flex flex-wrap gap-4 pt-2 border-t border-white/10">
                  <a href="mailto:Info@kreditecsa.com" className="text-[#00bc4c] hover:underline flex items-center gap-1.5"><Mail size={13} /> Info@kreditecsa.com</a>
                  <span className="text-gray-400 flex items-center gap-1.5"><Phone size={13} className="text-[#00bc4c]" /> +593 96 341 3419</span>
                  <span className="text-gray-500 text-xs">Lunes a Viernes 08:00 - 17:00</span>
                </div>
              </div>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 3. Objeto */}
          <section id="objeto" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Objeto y Ámbito de Aplicación</h2>
            </div>
            <div className="ml-12 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Estos Términos y Condiciones de Uso tienen como objeto regular la puesta a disposición de la información suministrada en los Canales Oficiales, administrados por KREDITEC, así como la interacción de los Usuarios con el contenido y los procesos de contacto, cotización de servicios y postulación laboral que puedan surgir de dicha interacción.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Tanto la navegación por los Canales Oficiales como cualquier interacción con los contenidos publicados suponen la aceptación como Usuario, sin reservas de ninguna clase, de todas y cada una de estos Términos y Condiciones de Uso.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">KREDITEC podrá modificar, actualizar o eliminar los contenidos y funcionalidades de los Canales Oficiales, y modificar estos Términos y Condiciones de Uso cuando lo estime conveniente, sin necesidad de previo aviso.</p>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 4. Propiedad Intelectual */}
          <section id="propiedad" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Propiedad Intelectual</h2>
            </div>
            <div className="ml-12 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Todos los contenidos publicados en los Canales Oficiales y especialmente los diseños, textos, gráficos, logos, iconos, signos, botones, así como el software, los nombres comerciales, las marcas o dibujos industriales están sujetos a derechos de propiedad intelectual e industrial de KREDITEC o de terceros titulares.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Queda estrictamente prohibido el uso de los Contenidos publicados en los Canales Oficiales con fines públicos o comerciales distintos a los determinados por KREDITEC, sin la autorización expresa y por escrito de KREDITEC.</p>
              <p className="text-gray-700 dark:text-gray-300 text-[15px]">En caso de violación a derechos de propiedad intelectual, contáctese a: <a href="mailto:legal@kreditecsa.com" className="text-[#00bc4c] hover:underline font-medium">legal@kreditecsa.com</a></p>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 5. Responsabilidad */}
          <section id="responsabilidad" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">5</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Responsabilidad de KREDITEC</h2>
            </div>
            <div className="ml-12 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Los Canales Oficiales administrados por KREDITEC sirven para poner a disposición de los Usuarios información sobre sus servicios y oportunidades de empleo. Cualquier eventual contratación de servicios se regirá por un contrato separado de prestación de servicios, y no por estos Términos.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Los servicios ofertados en los Canales Oficiales son lícitos y se encuentran conformes a la legislación ecuatoriana. El acceso a los Canales Oficiales será voluntario, y, por tanto, es responsabilidad del Usuario, todo efecto directo o indirecto que por el uso que haga de los Canales Oficiales se derive.</p>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 6. Obligaciones */}
          <section id="obligaciones" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">6</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Obligaciones de los Usuarios</h2>
            </div>
            <div className="ml-12 space-y-2">
              <p className="text-gray-700 dark:text-gray-300 text-[15px] mb-4">El Usuario se compromete a utilizar los Canales Oficiales conforme a la ley. Específicamente, queda prohibido:</p>
              {obligaciones.map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-3 bg-gray-50 dark:bg-[#0d1f13] rounded-lg border border-gray-200 dark:border-[#1a3a22]">
                  <AlertCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 7. Protección datos */}
          <section id="proteccion-datos" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">7</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Protección de Datos Personales</h2>
            </div>
            <div className="ml-12 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Mediante el acceso, ingreso y utilización de los Canales Oficiales el Usuario acepta el tratamiento de los datos personales recopilados al momento de inscribirse en los Canales Oficiales y los datos de navegación.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">KREDITEC declara que no recopilará datos considerados como sensibles específicamente datos relacionados con filiación política, creencia religiosa, preferencia sexual y demás datos que las leyes ecuatorianas consideren como sensibles.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Para ejercer sus derechos de acceso, rectificación, eliminación o anulación de datos personales, el Titular deberá enviar su solicitud a: <a href="mailto:protecciondedatos@kreditecsa.com" className="text-[#00bc4c] hover:underline font-medium">protecciondedatos@kreditecsa.com</a></p>
              <div className="p-4 bg-gray-50 dark:bg-[#0d1f13] rounded-xl border border-gray-200 dark:border-[#1a3a22] text-sm">
                <p className="font-semibold text-[#002d14] dark:text-white mb-2">La solicitud deberá contener al menos:</p>
                <ol className="space-y-1.5">
                  {['Nombre del titular, su domicilio, dirección de correo electrónico y número telefónico.', 'El documento o los documentos mediante los cuales se acredite la personalidad del titular (copia de cédula o documento público).', 'Descripción clara y precisa de los datos personales respecto de los cuales el titular pretende ejercer sus derechos.'].map((req, i) => (
                    <li key={i} className="flex gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-[#00bc4c] font-bold flex-shrink-0">{i + 1}.</span>
                      {req}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 8. Legislación */}
          <section id="legislacion" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">8</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Legislación Aplicable y Solución de Conflictos</h2>
            </div>
            <div className="ml-12 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Los presentes Términos y Condiciones de Uso se rigen por las leyes de la República del Ecuador.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Al utilizar de cualquier manera o interactuar a través de los Canales Oficiales, las partes convienen irrevocablemente que en caso de surgir disputas entre ellas realizarán los mejores esfuerzos para buscar y encontrar una solución mutuamente aceptable.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Si las partes no pudieren encontrar una solución durante un plazo de <strong className="text-[#002d14] dark:text-white">10 días calendario</strong> contados a partir de la notificación del conflicto a la contraparte, toda controversia se resolverá en juicio ordinario ante el juez de lo civil del cantón Quito.</p>
            </div>
          </section>
        </div>

        <div className="mt-16 p-6 bg-[#002d14] dark:bg-[#001a0c] rounded-2xl text-center">
          <p className="text-gray-400 text-sm">Los Términos y Condiciones de Uso han sido aprobados el <strong className="text-white">11 de mayo de 2026</strong>. La última modificación fue realizada el <strong className="text-white">11 de mayo de 2026</strong>.</p>
          <p className="text-gray-500 text-xs mt-2">Dirección: Av. 6 de Diciembre N34-360 N35 Portugal | Edificio Zyra | Oficina 605 | Iñaquito, Quito D.M. | Pichincha, Ecuador</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/terminos-y-condiciones" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <Globe size={18} className="text-[#00bc4c]" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">T&C Sitio Web</p>
            </div>
          </Link>
          <Link href="/politica-de-privacidad" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <Lock size={18} className="text-[#00bc4c]" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Política de Privacidad</p>
            </div>
          </Link>
          <Link href="/politica-general-de-datos" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <Shield size={18} className="text-[#00bc4c]" />
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

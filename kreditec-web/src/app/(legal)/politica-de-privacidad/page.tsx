import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, Shield, FileText, Check, Mail, Phone, MapPin, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidad | KREDITEC',
  description: 'Política de Privacidad de Uso del Sitio Web y Canales Oficiales de KREDITECONK S.A.S. Vigente desde el 11 de mayo de 2026.',
};

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-3 items-start">
    <Check size={14} className="text-[#00bc4c] mt-0.5 flex-shrink-0" />
    <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">{text}</p>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#060f09]">
      <div className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#001a0c] to-[#002d14]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00bc4c] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#00bc4c] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#00bc4c]/10 border border-[#00bc4c]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00bc4c] animate-pulse" />
            <span className="text-[#00bc4c] text-xs font-semibold tracking-widest uppercase">Documento Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Política de Privacidad
            <span className="block text-2xl md:text-3xl text-[#00bc4c] mt-1 font-medium">Sitio Web y Canales Oficiales</span>
          </h1>
          <p className="text-gray-400 text-sm mt-4">
            Creado el <strong className="text-gray-300">11 de mayo de 2026</strong> · Última modificación: <strong className="text-gray-300">11 de mayo de 2026</strong>
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-[#00bc4c]/5 to-[#002d14]/5 dark:from-[#00bc4c]/10 dark:to-[#001a0c] border border-[#00bc4c]/20 rounded-2xl p-6 mb-12">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            El presente Aviso de Privacidad se da en cumplimiento con lo establecido en la <strong className="text-[#002d14] dark:text-[#00bc4c]">Ley Orgánica de Protección de Datos Personales (&ldquo;LOPDP&rdquo;)</strong>, demás leyes de la República del Ecuador para proteger los derechos de protección de datos personales, intimidad, confidencialidad de los datos personales y para obtener el consentimiento del Titular de los datos personales a favor de KREDITECONK S.A.S. (&ldquo;KREDITEC&rdquo;).
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
            Mediante el acceso, ingreso y navegación del Sitio Web: <span className="text-[#00bc4c] font-medium">https://www.kreditecsa.com/</span> y la interacción en los Canales Oficiales de Instagram y LinkedIn, así como, el envío de información o entrega de los datos que Usted libre y voluntariamente proporcione a través del Formulario de Contacto o Postulaciones, Usted acepta las condiciones del presente Aviso de Privacidad.
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
                { label: 'Autoridad de Protección de Datos', text: 'Hace referencia a la Superintendencia de Protección de Datos, entidad creada mediante la LOPDP.' },
                { label: 'Autorización', text: 'Hace referencia al consentimiento previo, expreso e informado del usuario para que KREDITEC pueda llevar a cabo el tratamiento de sus datos personales.' },
                { label: 'Cookies', text: 'Son definidas como pequeños archivos que se instalan en el disco duro, con una duración limitada en el tiempo que ayudan a personalizar los servicios online.' },
                { label: 'Datos Personales', text: 'Hace referencia a toda información o dato que identifique o haga identificable a una persona natural.' },
                { label: 'Sitio Web y Canal Oficial', text: 'Hace referencia a la dirección: https://www.kreditecsa.com/; y, a los Canales Oficiales de KREDITEC de Instagram y LinkedIn.' },
                { label: 'Usuario', text: 'Hace referencia a toda persona natural o jurídica que navegue o requiera en el Sitio Web.' },
              ].map((item, j) => (
                <div key={j} className="flex gap-3">
                  <Check size={14} className="text-[#00bc4c] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
                    <strong className="text-[#002d14] dark:text-white">{item.label}:</strong> {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 2. Responsable */}
          <section id="responsable" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">¿Quién es el Responsable del Tratamiento?</h2>
            </div>
            <div className="ml-12">
              <div className="bg-[#002d14] dark:bg-[#001a0c] rounded-xl p-5 text-sm space-y-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <Building size={14} className="text-[#00bc4c] flex-shrink-0" />
                  <span className="text-gray-400 text-xs uppercase tracking-wide">Nombre de la Sociedad</span>
                  <strong className="text-white ml-1">KREDITECONK S.A.S.</strong>
                </div>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin size={14} className="text-[#00bc4c] flex-shrink-0 mt-0.5" />
                  <p>Av. 6 de Diciembre N34-360 N35 Portugal | Edificio Zyra | Oficina 605 | Iñaquito, Quito D.M. | Pichincha, Ecuador</p>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone size={14} className="text-[#00bc4c] flex-shrink-0" />
                  <strong className="text-white">+593 96 341 3419</strong>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail size={14} className="text-[#00bc4c] flex-shrink-0" />
                  <a href="mailto:protecciondedatos@kreditecsa.com" className="text-[#00bc4c] hover:underline">protecciondedatos@kreditecsa.com</a>
                </div>
              </div>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 3. Datos recopilados */}
          <section id="datos-recopilados" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">¿Qué Datos Personales Recogemos?</h2>
            </div>
            <div className="ml-12 overflow-x-auto rounded-xl border border-gray-200 dark:border-[#1a3a22]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#002d14] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Categoría</th>
                    <th className="px-4 py-3 text-left font-semibold">Datos Específicos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-[#1a3a22]">
                  <tr className="bg-white dark:bg-[#0d1f13]">
                    <td className="px-4 py-3 font-medium text-[#002d14] dark:text-[#00bc4c]">Identificación y Contacto</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Nombre/s, apellido/s, correo electrónico corporativo, teléfono, nombre de la institución y cargo. <em className="text-gray-500">(Tratamiento B2B)</em></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-[#0a1a0f]">
                    <td className="px-4 py-3 font-medium text-[#002d14] dark:text-[#00bc4c]">Interacción Comercial</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Interés principal, mensaje y fecha sugerida para reunión virtual.</td>
                  </tr>
                  <tr className="bg-white dark:bg-[#0d1f13]">
                    <td className="px-4 py-3 font-medium text-[#002d14] dark:text-[#00bc4c]">Candidatos (RRHH)</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Currículum Vitae, historial académico, experiencia profesional y datos proporcionados en LinkedIn.</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-[#0a1a0f]">
                    <td className="px-4 py-3 font-medium text-[#002d14] dark:text-[#00bc4c]">Datos Técnicos</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Dirección IP, Cookies/SDKs de navegación.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 4. Base legitimación */}
          <section id="base-legitimacion" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Base de Legitimación</h2>
            </div>
            <div className="ml-12 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Usted en su calidad de Titular de los datos, al momento de registrarse en el Sitio Web o los Canales Oficiales adquiere un vínculo contractual con KREDITEC a través de la aceptación de los Términos y Condiciones de Uso. Para los tratamientos descritos a continuación la base legitimadora será la relación contractual establecida a través de los Términos y Condiciones de Uso, el interés legítimo, cumplimiento de obligaciones legales y el consentimiento del titular cuando sea necesario.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">En su calidad de Titular de sus datos personales, Usted tiene derecho a conocer la finalidad, el origen, destino y vigencia de sus datos personales en la base de datos de KREDITEC.</p>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 5. Finalidades */}
          <section id="finalidades" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">5</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">¿Por Qué y Para Qué Tratamos sus Datos Personales?</h2>
            </div>
            <div className="ml-12">
              <p className="text-gray-700 dark:text-gray-300 text-[15px] mb-4">KREDITEC podrá recabar y tratar los datos personales de los Usuarios facilitados en el Sitio Web y los Canales Oficiales para:</p>
              <ol className="space-y-2">
                {['Agendamiento: Coordinar y ejecutar reuniones virtuales solicitadas por el Usuario.',
                  'La prestación de los servicios ofrecidos en el Sitio Web y los Canales Oficiales.',
                  'Envío de comunicaciones informativas, material publicitario y comercial. El Usuario podrá retirarse en cualquier momento de las campañas de marketing.',
                  'Navegación en el Sitio Web y Canales Oficiales a través de la autorización de uso de Cookies/Tecnologías.',
                  'Gestionar solicitudes o requerimientos realizados por el Usuario a través de correos electrónicos y formulario de contacto.',
                  'Gestionar compromisos de pago con el fin del cobro pendiente y correspondiente cancelación de la obligación existente.',
                  'Gestión de Contacto: Atender consultas y requerimientos realizados a través del formulario web.',
                  'Participación en distintos tipos de encuestas mediante registros o formularios offline/online.',
                  'Comunicaciones: Promocionar servicios en nuestro Sitio Web y Canales Oficiales.',
                  'Procesos de Selección: Evaluar perfiles profesionales para vacantes actuales o futuras.',
                  'Seguridad: Prevenir y detectar fraude u otras actividades ilícitas o prohibidas.',
                  'Cumplimiento de obligaciones legales y tributarias.',
                ].map((item, j) => (
                  <li key={j} className="flex gap-3 items-start">
                    <span className="text-[#00bc4c] font-bold text-sm mt-0.5 flex-shrink-0">{String.fromCharCode(97 + j)}.</span>
                    <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 6. Conservación */}
          <section id="conservacion" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">6</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">¿Durante Cuánto Tiempo Conservamos sus Datos?</h2>
            </div>
            <div className="ml-12 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">KREDITEC podrá conservar durante el tiempo necesario para completar la transacción realizada a través del Sitio Web/Canales Oficiales o durante la prestación del servicio.</p>
              <div className="space-y-2 mt-2">
                {['Datos de contacto/comerciales: Mientras dure la relación comercial o hasta que el Titular revoque su consentimiento.',
                  'Datos de candidatos: Los CVs se conservarán por un periodo máximo de un (1) año para futuros procesos, tras el cual serán eliminados o anonimizados.',
                  'Obligaciones legales: Se conservarán según los plazos exigidos por las leyes tributarias y civiles vigentes.',
                ].map((b, j) => (
                  <div key={j} className="flex gap-2 items-start">
                    <Check size={13} className="text-[#00bc4c] mt-1 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-[15px]">{b}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 7. Compartir */}
          <section id="compartir" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">7</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">¿Con Quién Compartimos sus Datos?</h2>
            </div>
            <div className="ml-12 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">En particular, sólo tendrán acceso a los datos personales aquellos terceros a los que KREDITEC haya encomendado una prestación de servicios. Asimismo, KREDITEC podrá comunicar sus datos a empresas relacionadas, sucursales y filiales.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">En los casos que dichas comunicaciones supongan una transferencia internacional, KREDITEC exigirá a los terceros el cumplimiento de estándares adecuados de confidencialidad, protección y seguridad conforme la normativa aplicable.</p>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 8. Derechos */}
          <section id="derechos" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">8</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">¿Cuáles son sus Derechos?</h2>
            </div>
            <div className="ml-12 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Usted podrá solicitar el acceso, rectificación, cancelación, oposición, actualización, eliminación, suspensión, portabilidad y a no ser objeto de una decisión automatizada, con las limitaciones determinadas en la LOPDP.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Para ejercer estos derechos, deberá enviar una solicitud firmada al correo: <a href="mailto:protecciondedatos@kreditecsa.com" className="text-[#00bc4c] hover:underline font-medium">protecciondedatos@kreditecsa.com</a></p>
            </div>
            <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />
          </section>

          {/* 9. Modificaciones */}
          <section id="modificaciones" className="scroll-mt-24">
            <div className="flex items-start gap-4 mb-5">
              <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">9</span>
              <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">Modificaciones al Aviso de Privacidad</h2>
            </div>
            <div className="ml-12 space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">Este Aviso de Privacidad podrá sufrir modificaciones en cualquier momento. El Aviso de Privacidad estará a disposición de los titulares de datos en nuestro Sitio Web en el link: https://www.kreditecsa.com/politica-de-privacidad.</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">KREDITEC implementa medidas técnicas y organizativas para garantizar la confidencialidad y protección de sus datos, realizando evaluaciones continuas para prevenir vulneraciones.</p>
            </div>
          </section>
        </div>

        <div className="mt-16 p-6 bg-[#002d14] dark:bg-[#001a0c] rounded-2xl text-center">
          <p className="text-gray-400 text-sm">El presente Aviso de Privacidad fue creado el <strong className="text-white">11 de mayo de 2026</strong>. La última modificación fue realizada el <strong className="text-white">11 de mayo de 2026</strong>.</p>
          <p className="text-gray-500 text-xs mt-2">Para ejercer sus derechos: <a href="mailto:protecciondedatos@kreditecsa.com" className="text-[#00bc4c] hover:underline">protecciondedatos@kreditecsa.com</a></p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/terminos-y-condiciones" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <FileText size={18} className="text-[#00bc4c]" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Términos y Condiciones</p>
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

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidad | KREDITEC',
  description: 'Política de Privacidad de Uso del Sitio Web y Canales Oficiales de KREDITECONK S.A.S. Vigente desde el 11 de mayo de 2026.',
};

const sections = [
  {
    id: 'definiciones',
    title: 'Definiciones',
    items: [
      { label: 'Autoridad de Protección de Datos', text: 'Hace referencia a la Superintendencia de Protección de Datos, entidad creada mediante la LOPDP.' },
      { label: 'Autorización', text: 'Hace referencia al consentimiento previo, expreso e informado del usuario para que KREDITEC pueda llevar a cabo el tratamiento de sus datos personales.' },
      { label: 'Cookies', text: 'Son definidas como pequeños archivos que se instalan en el disco duro, con una duración limitada en el tiempo que ayudan a personalizar los servicios online.' },
      { label: 'Datos Personales', text: 'Hace referencia a toda información o dato que identifique o haga identificable a una persona natural.' },
      { label: 'Sitio Web y Canal Oficial', text: 'Hace referencia a la dirección: https://www.kreditecsa.com/; y, a los Canales Oficiales de KREDITEC de Instagram y LinkedIn.' },
      { label: 'Usuario', text: 'Hace referencia a toda persona natural o jurídica que navegue o requiera en el Sitio Web.' },
    ],
  },
  {
    id: 'responsable',
    title: '¿Quién es el Responsable del Tratamiento?',
    info: true,
  },
  {
    id: 'datos-recopilados',
    title: '¿Qué Datos Personales Recogemos?',
    table: true,
  },
  {
    id: 'base-legitimacion',
    title: 'Base de Legitimación',
    paras: [
      'Usted en su calidad de Titular de los datos, al momento de registrarse en el Sitio Web o los Canales Oficiales adquiere un vínculo contractual con KREDITEC a través de la aceptación de los Términos y Condiciones de Uso. Para los tratamientos descritos a continuación la base legitimadora será la relación contractual establecida a través de los Términos y Condiciones de Uso, el interés legítimo, cumplimiento de obligaciones legales y el consentimiento del titular cuando sea necesario.',
      'En su calidad de Titular de sus datos personales, Usted tiene derecho a conocer la finalidad, el origen, destino y vigencia de sus datos personales en la base de datos de KREDITEC.',
    ],
  },
  {
    id: 'finalidades',
    title: '¿Por Qué y Para Qué Tratamos sus Datos Personales?',
    list: [
      'Agendamiento: Coordinar y ejecutar reuniones virtuales solicitadas por el Usuario.',
      'La prestación de los servicios ofrecidos en el Sitio Web y los Canales Oficiales.',
      'Envío de comunicaciones informativas, material publicitario y comercial de los servicios ofrecidos por KREDITEC. El Usuario podrá retirarse en cualquier momento de las campañas de marketing ofrecidas por KREDITEC.',
      'Navegación en el Sitio Web y Canales Oficiales a través de la autorización de uso de Cookies/Tecnologías descrito en el presente documento.',
      'Gestionar solicitudes o requerimientos realizados por el Usuario a través de correos electrónicos y formulario de contacto.',
      'Gestionar compromisos de pago con el fin del cobro pendiente y correspondiente cancelación de la obligación existente.',
      'Gestión de Contacto: Atender consultas y requerimientos realizados a través del formulario web.',
      'Participación en distintos tipos de encuestas mediante registros o formularios offline/online.',
      'Llenado de solicitudes de suscripción, servicios online o bien para facilitar la solicitud de información puntual que nos sea requerida.',
      'Comunicaciones: Promocionar servicios en nuestro Sitio Web y Canales Oficiales.',
      'Procesos de Selección: Evaluar perfiles profesionales para vacantes actuales o futuras (aplicable a postulantes de LinkedIn).',
      'Seguridad: Prevenir y detectar fraude u otras actividades ilícitas o prohibidas.',
      'Velar por la seguridad e integridad de nuestro Sitio Web y Canales Oficiales.',
      'Para realizar análisis y evaluaciones sobre nuestro negocio; así como para analizar estrategias para afianzamiento de Clientes.',
      'Para procesar reclamos, consultas entre otros.',
      'Para llevar a cabo el análisis del crédito y su otorgamiento en caso de que sea aplicable aprobado por KREDITEC.',
      'Cumplimiento de obligaciones legales y tributarias.',
    ],
  },
  {
    id: 'conservacion',
    title: '¿Durante Cuánto Tiempo Conservamos sus Datos Personales?',
    paras: [
      'KREDITEC podrá conservar durante el tiempo necesario para completar la transacción realizada a través del Sitio Web/Canales Oficiales o durante la prestación del servicio. Adicionalmente, KREDITEC podrá conservar los datos personales necesarios para cumplir con las obligaciones legales de acuerdo con las leyes correspondientes.',
      'Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la cual fueron recabados:',
    ],
    bullets: [
      'Datos de contacto/comerciales: Mientras dure la relación comercial o hasta que el Titular revoque su consentimiento.',
      'Datos de candidatos: Los CVs se conservarán por un periodo máximo de un (1) año para futuros procesos, tras el cual serán eliminados o anonimizados.',
      'Obligaciones legales: Se conservarán según los plazos exigidos por las leyes tributarias y civiles vigentes.',
    ],
  },
  {
    id: 'compartir',
    title: '¿Con Quién Compartimos sus Datos Personales?',
    paras: [
      'En particular, sólo tendrán acceso a los datos personales aquellos terceros a los que KREDITEC haya encomendado una prestación de servicios. Asimismo, KREDITEC podrá comunicar sus datos a empresas relacionadas, sucursales y filiales, e igualmente para efectos de almacenar información en bases de datos locales y/o extranjeras.',
      'En los casos que dichas comunicaciones supongan una transferencia internacional, KREDITEC exigirá a los terceros el cumplimiento de estándares adecuados de confidencialidad, protección y seguridad de éstos conforme la normativa aplicable.',
      'Los destinatarios estarán sujetos a las mismas obligaciones y medidas de seguridad, técnicas y legales descritas en la LOPDP.',
    ],
  },
  {
    id: 'proteccion',
    title: '¿Cómo Protegemos sus Datos Personales?',
    paras: [
      'KREDITEC cuenta con políticas y procedimientos adecuados, a efecto de limitar el uso y/o divulgación de los datos personales. Así mismo, cuenta con sistemas de seguridad para resguardar, proteger y mantener la confidencialidad. Realizamos una evaluación continua de nuestros sistemas de seguridad.',
      'En caso de cualquier vulneración, KREDITEC realizará las notificaciones correspondientes de acuerdo con la LOPDP.',
    ],
  },
  {
    id: 'redes-sociales',
    title: 'Redes Sociales y Terceros',
    paras: [
      'KREDITEC utiliza perfiles en Instagram y LinkedIn para interactuar con el público. El tratamiento de datos dentro de dichas plataformas se rige por las Políticas de Privacidad de Meta (Instagram) y LinkedIn Corporation. KREDITEC es responsable del tratamiento únicamente desde el momento en que los datos son extraídos y procesados en sus propios sistemas.',
    ],
  },
  {
    id: 'derechos',
    title: '¿Cuáles son sus Derechos?',
    paras: [
      'Usted podrá solicitar el acceso, rectificación, cancelación, oposición, actualización, eliminación, suspensión, portabilidad y a no ser objeto de una decisión automatizada, con las limitaciones determinadas en la LOPDP. La respuesta estará sujeta a los plazos legales. KREDITEC se reserva el derecho de solicitar información o documentos de respaldo.',
      'Para ejercer estos derechos, deberá enviar una solicitud firmada al correo: protecciondedatos@kreditecsa.com',
    ],
  },
  {
    id: 'datos-erroneos',
    title: '¿Qué Pasa si Proporciono Datos Erróneos o No Quiera Proporcionarlos?',
    paras: [
      'En caso de que el Usuario o Cliente o potencial Cliente proporcione datos falsos o erróneos para solicitar un servicio de los descritos en el Sitio Web o Canales Oficiales, KREDITEC se reserva el derecho de no proporcionar el servicio correspondiente o continuar con la transacción solicitada por el Cliente.',
      'KREDITEC se reserva el derecho de eliminar y bloquear el perfil en caso de que se compruebe que se utilizaron datos erróneos o inexactos. Será responsabilidad del Usuario el proporcionar datos fidedignos y veraces en el Sitio Web.',
    ],
  },
  {
    id: 'cookies-aplicacion',
    title: '¿Se Aplicarán Cookies?',
    paras: [
      'Usted declara que conoce y acepta que KREDITEC podrá utilizar un sistema de seguimiento mediante la utilización de Cookies. Las Cookies se utilizan con el fin de conocer los intereses, el comportamiento y la demografía de quienes visitan los sitios web.',
      'A través del uso de Cookies, KREDITEC puede comprender mejor sus necesidades e intereses y darles un mejor servicio o proveerle información relacionada.',
      'Si no desea permitir la instalación de cookies en su dispositivo deberá configurar su navegador a tal efecto.',
    ],
  },
  {
    id: 'modificaciones',
    title: 'Modificaciones al Aviso de Privacidad',
    paras: [
      'Este Aviso de Privacidad podrá sufrir modificaciones en cualquier momento. El Aviso de Privacidad estará a disposición de los titulares de datos en nuestro Sitio Web en el link: https://www.kreditecsa.com/politica-de-privacidad.',
      'KREDITEC implementa medidas técnicas y organizativas para garantizar la confidencialidad y protección de sus datos, realizando evaluaciones continuas para prevenir vulneraciones.',
    ],
  },
];

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

        <div className="bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-2xl p-6 mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">Índice de Contenidos</h2>
          <ol className="space-y-1.5">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-[#00bc4c] transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-[#00bc4c]/10 dark:bg-[#00bc4c]/20 text-[#00bc4c] text-xs font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-[#00bc4c]/30 transition-colors">{i + 1}</span>
                  <span className="text-sm">{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-5">
                <span className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <h2 className="text-2xl font-bold text-[#002d14] dark:text-white">{section.title}</h2>
              </div>
              <div className="ml-12">
                {section.items && (
                  <div className="space-y-3">
                    {section.items.map((item, j) => (
                      <div key={j} className="flex gap-3">
                        <span className="text-[#00bc4c] mt-1 flex-shrink-0">✓</span>
                        <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
                          <strong className="text-[#002d14] dark:text-white">{item.label}:</strong> {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {section.info && (
                  <div className="bg-[#002d14] dark:bg-[#001a0c] rounded-xl p-5 text-sm space-y-2">
                    <p className="text-gray-300"><span className="text-gray-400 text-xs uppercase tracking-wide block mb-1">Nombre de la Sociedad</span><strong className="text-white">KREDITECONK S.A.S.</strong></p>
                    <p className="text-gray-300"><span className="text-gray-400 text-xs uppercase tracking-wide block mb-1">Dirección</span>Av. 6 de Diciembre N34-360 N35 Portugal | Edificio Zyra | Oficina 605 | Iñaquito, Quito D.M. | Pichincha, Ecuador</p>
                    <p className="text-gray-300"><span className="text-gray-400 text-xs uppercase tracking-wide block mb-1">Teléfono</span><strong className="text-white">+593 96 341 3419</strong></p>
                    <p className="text-gray-300"><span className="text-gray-400 text-xs uppercase tracking-wide block mb-1">Correo Electrónico</span><a href="mailto:protecciondedatos@kreditecsa.com" className="text-[#00bc4c] hover:underline">protecciondedatos@kreditecsa.com</a></p>
                  </div>
                )}
                {section.table && (
                  <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-[#1a3a22]">
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
                          <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Dirección IP, Cookies/SDKs de navegación. <em className="text-gray-500">(No permite identificar al usuario de forma individual sin información adicional)</em></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {section.paras && (
                  <div className="space-y-3">
                    {section.paras.map((para, j) => (
                      <p key={j} className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">{para}</p>
                    ))}
                  </div>
                )}
                {section.bullets && (
                  <div className="mt-3 space-y-2">
                    {section.bullets.map((b, j) => (
                      <div key={j} className="flex gap-2 items-start">
                        <span className="text-[#00bc4c] mt-1 flex-shrink-0">✓</span>
                        <p className="text-gray-700 dark:text-gray-300 text-[15px]">{b}</p>
                      </div>
                    ))}
                  </div>
                )}
                {section.list && (
                  <ol className="space-y-2 list-none">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <span className="text-[#00bc4c] font-bold text-sm mt-0.5 flex-shrink-0">{String.fromCharCode(97 + j)}.</span>
                        <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
              {i < sections.length - 1 && <div className="mt-10 border-b border-gray-100 dark:border-[#1a3a22]" />}
            </section>
          ))}
        </div>

        <div className="mt-16 p-6 bg-[#002d14] dark:bg-[#001a0c] rounded-2xl text-center">
          <p className="text-gray-400 text-sm">
            El presente Aviso de Privacidad fue creado el <strong className="text-white">11 de mayo de 2026</strong>.
            La última modificación fue realizada el <strong className="text-white">11 de mayo de 2026</strong>.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Para ejercer sus derechos: <a href="mailto:protecciondedatos@kreditecsa.com" className="text-[#00bc4c] hover:underline">protecciondedatos@kreditecsa.com</a>
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/terminos-y-condiciones" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <span className="text-2xl">📋</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Términos y Condiciones</p>
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

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política General de Protección de Datos Personales | KREDITEC',
  description: 'Política General de Protección de Datos Personales de KREDITECONK S.A.S. Marco legal y principios que rigen el tratamiento de datos personales.',
};

const principios = [
  { name: 'Confidencialidad', icon: '🔐', desc: 'KREDITEC garantiza que los datos personales tratados serán manejados con estricta confidencialidad, estando prohibida su divulgación a terceros no autorizados.' },
  { name: 'Conservación', icon: '🗃️', desc: 'Los datos personales serán conservados en una forma que permita identificar a los titulares durante no más tiempo del necesario para los fines del tratamiento.' },
  { name: 'Finalidad', icon: '🎯', desc: 'Los datos personales serán recopilados de una manera leal y lícita para una o más finalidades específicas informadas al Titular de los datos.' },
  { name: 'Lealtad', icon: '🤝', desc: 'KREDITEC se compromete a tratar los datos personales de manera leal, garantizando que los titulares sean informados sobre el uso de sus datos.' },
  { name: 'Minimización y Proporcionalidad', icon: '⚖️', desc: 'KREDITEC procesará los datos personales que sean necesarios para las finalidades informadas al Titular de los datos personales, no se recopilarán datos en exceso o que no sean necesarios para una finalidad previamente establecida.' },
  { name: 'Responsabilidad Proactiva y Demostrada', icon: '✅', desc: 'KREDITEC obtendrá los medios de verificación necesarios y correspondientes para demostrar el cumplimiento de la LOPDP. En caso de que sea necesario, KREDITEC podrá contar con un Delegado de Protección de Datos (DPD).' },
  { name: 'Seguridad', icon: '🛡️', desc: 'KREDITEC adoptará las medidas de seguridad que sean necesarias para garantizar la confidencialidad de los datos personales, tomando en consideración el tipo de datos personales a ser tratados.' },
  { name: 'Transparencia', icon: '💡', desc: 'El tratamiento de datos personales será transparente respecto del Titular de estos. KREDITEC informará y comunicará a los Titulares de los datos personales de una manera clara y sencilla todo lo que requiera saber el Titular.' },
];

const derechos = [
  { name: 'Acceso', desc: 'Conocer qué datos personales tenemos sobre ti, cómo los tratamos y con qué finalidad.' },
  { name: 'Eliminación', desc: 'Solicitar la supresión de tus datos personales cuando ya no sean necesarios para la finalidad para la que fueron recopilados.' },
  { name: 'Oposición', desc: 'Oponerte al tratamiento de tus datos personales en determinadas circunstancias.' },
  { name: 'Portabilidad', desc: 'Recibir tus datos en un formato estructurado, de uso común y lectura mecánica.' },
  { name: 'Rectificación y Actualización', desc: 'Corregir datos inexactos o incompletos que KREDITEC tenga sobre ti.' },
  { name: 'Solicitud de revisión de decisiones automatizadas', desc: 'Solicitar revisión humana de decisiones tomadas exclusivamente sobre la base de un tratamiento automatizado.' },
  { name: 'Suspensión', desc: 'Solicitar la suspensión del tratamiento de tus datos en determinados supuestos.' },
  { name: 'Transparencia de la información', desc: 'Obtener información clara sobre cómo KREDITEC realiza el tratamiento de tus datos personales.' },
];

export default function PoliticaGeneralDatos() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#060f09]">
      <div className="relative pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#001a0c] to-[#002d14]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00bc4c] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#00bc4c] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#00bc4c]/10 border border-[#00bc4c]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00bc4c] animate-pulse" />
            <span className="text-[#00bc4c] text-xs font-semibold tracking-widest uppercase">Documento Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Política General de
            <span className="block text-[#00bc4c]">Protección de Datos Personales</span>
          </h1>
          <p className="text-gray-400 text-sm mt-4">
            <strong className="text-gray-300">KREDITECONK S.A.S.</strong> · Quito - Ecuador · <strong className="text-gray-300">2026</strong>
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Intro */}
        <div className="bg-gradient-to-br from-[#00bc4c]/5 to-[#002d14]/5 dark:from-[#00bc4c]/10 dark:to-[#001a0c] border border-[#00bc4c]/20 rounded-2xl p-6 mb-12">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            En el presente documento se instrumenta la <strong className="text-[#002d14] dark:text-[#00bc4c]">Política de Protección de Datos Personales</strong> (la &ldquo;Política&rdquo;), la cual será de obligatorio cumplimiento para todos los clientes, proveedores, usuarios y trabajadores de KREDITECONK S.A.S. (&ldquo;KREDITEC&rdquo;). La presente Política establece los términos y condiciones bajo los cuales KREDITEC realiza el tratamiento de datos personales en el ejercicio de sus actividades de gestión de sistemas informáticos, procesamiento de datos, operación de portales web, consultoría empresarial, servicios de centro de atención telefónica y provisión de información crediticia.
          </p>
        </div>

        <div className="space-y-16">

          {/* Definiciones */}
          <section id="definiciones" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center">1</span>
              Definiciones
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { letter: 'a)', term: 'Dato Personal', def: 'Dato que identifica o hace identificable a una persona natural, directa o indirectamente. Por ejemplo: nombre, cédula de identidad, dirección, correo electrónico, número de teléfono, estado civil, datos de salud, huella dactilar, salario, bienes, estados financieros, etc.' },
                { letter: 'b)', term: 'Dato Sensible', def: 'Datos relativos a: etnia, identidad de género, identidad cultural, religión, ideología, filiación política, pasado judicial, condición migratoria, orientación sexual, salud, datos biométricos, datos genéticos y aquellos cuyo tratamiento indebido pueda dar origen a discriminación.' },
                { letter: 'c)', term: 'Delegado de Protección de Datos (DPD/DPO)', def: 'Persona natural encargada de informar al responsable o al encargado del tratamiento sobre sus obligaciones legales en materia de protección de datos, así como de velar o supervisar el cumplimiento normativo al respecto.' },
                { letter: 'd)', term: 'Encargado del Tratamiento', def: 'Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de Datos Personales por cuenta del Responsable del Tratamiento, como aliado o proveedor.' },
                { letter: 'e)', term: 'Titular', def: 'Persona natural cuyos datos son objeto del tratamiento.' },
                { letter: 'f)', term: 'Tratamiento', def: 'Cualquier operación o conjunto de operaciones realizadas sobre datos personales, ya sea por procedimientos técnicos de carácter automatizado, parcialmente automatizado o no automatizado, tales como: la recogida, recopilación, obtención, registro, organización, estructuración, conservación, custodia, adaptación, modificación, eliminación, indexación, extracción, consulta, elaboración, utilización, posesión, aprovechamiento, distribución, cesión, comunicación o transferencia.' },
              ].map((def, i) => (
                <div key={i} className="flex gap-4 p-4 bg-gray-50 dark:bg-[#0d1f13] rounded-xl border border-gray-200 dark:border-[#1a3a22]">
                  <span className="text-[#00bc4c] font-bold text-sm flex-shrink-0 mt-0.5">{def.letter}</span>
                  <div>
                    <p className="font-semibold text-[#002d14] dark:text-white text-sm">{def.term}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-relaxed">{def.def}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Objeto y alcance */}
          <section id="objeto" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center">2</span>
              Objeto y Alcance de la Política
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
                KREDITEC tiene como principal objetivo el cumplir con la Constitución, Ley Orgánica de Protección de Datos Personales (&ldquo;LOPDP&rdquo;) y normativa relacionada. Es por esto por lo que, KREDITEC respetará todos los derechos reconocidos a los Titulares de los datos personales y adoptará las medidas necesarias para garantizar la seguridad y protección de los mismos.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
                Esta Política aplica a todos los clientes, proveedores, usuarios, colaboradores y cualquier persona natural cuyos datos personales sean tratados por KREDITEC en el ejercicio de sus actividades.
              </p>
            </div>
          </section>

          {/* Principios */}
          <section id="principios" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center">3</span>
              Principios Aplicables
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principios.map((p, i) => (
                <div key={i} className="p-5 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/40 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{p.icon}</span>
                    <h3 className="font-bold text-[#002d14] dark:text-white text-sm">{p.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Base legitimadora */}
          <section id="base-legitimadora" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center">4</span>
              Base Legitimadora del Tratamiento
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px] mb-4">
              KREDITEC podrá utilizar cualquier base legitimadora que sea aplicable para el tratamiento de datos personales, de acuerdo con la LOPDP, incluyendo:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Consentimiento del Titular', 'Ejecución de un contrato', 'Obligación legal', 'Interés legítimo', 'Interés vital del Titular', 'Interés público'].map((base, i) => (
                <div key={i} className="flex gap-2 items-center p-3 bg-gray-50 dark:bg-[#0d1f13] rounded-lg border border-gray-200 dark:border-[#1a3a22]">
                  <span className="text-[#00bc4c] font-bold flex-shrink-0">✔</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{base}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comunicación y transferencia */}
          <section id="comunicacion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center">5</span>
              Comunicación y Transferencia de Datos Personales
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
                KREDITEC no adquirirá datos personales o bases de datos que no cuenten con los mecanismos de legitimación correspondiente, así como tampoco transferirá los datos a terceros destinatarios sin contar con la autorización o base legitimadora correspondiente.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
                En los casos en que sea necesaria una transferencia internacional de datos, KREDITEC exigirá a los terceros el cumplimiento de estándares adecuados de confidencialidad, protección y seguridad conforme la normativa aplicable.
              </p>
            </div>
          </section>

          {/* Derechos ARCO */}
          <section id="derechos" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center">6</span>
              Ejercicio de Derechos
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px] mb-5">
              Los Titulares de datos personales podrán ejercer los siguientes derechos frente a KREDITEC, de conformidad con la LOPDP:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {derechos.map((d, i) => (
                <div key={i} className="p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-[#00bc4c]/20 text-[#00bc4c] text-xs font-bold flex items-center justify-center">✓</span>
                    <h3 className="font-semibold text-[#002d14] dark:text-white text-sm">{d.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 p-4 bg-[#002d14] dark:bg-[#001a0c] rounded-xl">
              <p className="text-gray-300 text-sm">Para ejercer cualquiera de estos derechos, envíe su solicitud a: <a href="mailto:protecciondedatos@kreditecsa.com" className="text-[#00bc4c] hover:underline font-medium">protecciondedatos@kreditecsa.com</a></p>
            </div>
          </section>

          {/* Evaluación y capacitación */}
          <section id="evaluacion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center">7</span>
              Evaluación, Control y Capacitación
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
                KREDITEC realizará evaluaciones periódicas de cumplimiento de la presente Política y de las medidas de seguridad implementadas. Asimismo, KREDITEC capacitará a sus colaboradores en materia de protección de datos personales para garantizar el cumplimiento normativo.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
                En caso de requerirlo y de acuerdo con la normativa correspondiente, KREDITEC podrá contar con un Delegado de Protección de Datos (&ldquo;DPD&rdquo;), quien será responsable de generar el programa de cumplimiento de datos personales, obtener los medios de verificación correspondientes, obtener las certificaciones necesarias y comunicarse con la Autoridad de Protección de Datos.
              </p>
            </div>
          </section>

          {/* Aprobación */}
          <section id="aprobacion" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00bc4c] to-[#009940] text-white text-sm font-bold flex items-center justify-center">8</span>
              Aprobación y Entrada en Vigor
            </h2>
            <div className="p-5 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl">
              <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
                La presente Política General de Protección de Datos Personales ha sido aprobada por la Gerencia General de KREDITECONK S.A.S. y entra en vigor a partir del <strong className="text-[#002d14] dark:text-white">11 de mayo de 2026</strong>. KREDITEC se reserva el derecho de modificar la presente Política en cualquier momento para adaptarla a cambios normativos o empresariales.
              </p>
            </div>
          </section>
        </div>

        {/* Contact */}
        <div className="mt-12 p-6 bg-[#002d14] dark:bg-[#001a0c] rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Empresa</p>
              <p className="text-white font-medium">KREDITECONK S.A.S.</p>
              <p className="text-gray-400 text-xs mt-1">Av. 6 de Diciembre N34-360 N35 Portugal | Edificio Zyra | Oficina 605 | Iñaquito, Quito D.M.</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Contacto de Protección de Datos</p>
              <a href="mailto:protecciondedatos@kreditecsa.com" className="text-[#00bc4c] hover:underline text-sm">protecciondedatos@kreditecsa.com</a>
              <p className="text-gray-400 text-sm mt-1">+593 96 341 3419</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/politica-de-privacidad" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <span className="text-2xl">🔒</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Política de Privacidad</p>
            </div>
          </Link>
          <Link href="/tratamiento-datos" className="group flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#0d1f13] border border-gray-200 dark:border-[#1a3a22] rounded-xl hover:border-[#00bc4c]/50 transition-all">
            <span className="text-2xl">📊</span>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ver también</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00bc4c] transition-colors">Tratamiento de Datos</p>
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

import React from 'react';

export default function PrivacyPolicy() {
   return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">Política de Privacidad</h1>
         <div className="prose dark:prose-invert prose-lg max-w-none text-gray-600 dark:text-gray-300">
            <p className="opacity-80 text-sm font-medium tracking-wide">ÚLTIMA ACTUALIZACIÓN: {new Date().toLocaleDateString('es-EC')}</p>
            
            <p>En KREDITEC garantizamos el cumplimiento estricto de la Ley Orgánica de Protección de Datos Personales de Ecuador, aplicando principios de transparencia y minimización de datos en entornos corporativos B2B.</p>
            
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mt-12 mb-4">1. Información que recopilamos</h2>
            <p>Recopilamos información corporativa necesaria y pertinente para proveer nuestros servicios B2B, incluyendo nombre, correo corporativo, institución financiera, cargo y teléfono de contacto. No recolectamos datos sensibles ni información personal no relacionada al ejercicio profesional.</p>
            
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mt-10 mb-4">2. Finalidad del tratamiento ("Notice at Collection")</h2>
            <p>Tratamos sus datos exclusivamente para:</p>
            <ul>
               <li>Gestionar requerimientos comerciales corporativos.</li>
               <li>Agendar reuniones técnicas o de consultoría.</li>
               <li>Proveer información periódica sobre nuestros servicios y metodologías de captación.</li>
            </ul>
            <p><strong>No vendemos, rentamos ni comercializamos su información bajo ninguna circunstancia a terceros no autorizados.</strong></p>
            
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mt-10 mb-4">3. Seguridad y "Privacy by Design"</h2>
            <p>Aplicando el principio de privacidad desde el diseño y por defecto, nuestra infraestructura está asegurada mediante túneles VPN cifrados y almacenamiento estructurado (ej. HubSpot) configurado bajo controles de acceso por roles (RBAC).</p>

            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mt-10 mb-4">4. Ejercicio de Derechos ARCO+</h2>
            <p>Su consentimiento es libre y puede revocarlo en cualquier momento de manera sencilla. Usted tiene derecho al acceso, rectificación, eliminación, oposición y portabilidad de sus datos.</p>
            <p>Para ejercer estos derechos, comuníquese directamente con la Responsable de Tratamiento:</p>
            <div className="bg-gray-50 dark:bg-[#001f0e] p-6 rounded-xl border border-gray-200 dark:border-gray-800 mt-4">
               <strong>Valentina Barrera</strong> - Gerente General<br />
               Correo Electrónico: <a href="mailto:Vbarrera@kreditecsa.com" className="text-[var(--color-accent)] font-semibold">Vbarrera@kreditecsa.com</a><br />
               Dirección: 6 de Diciembre N34-360 y Portugal, Edif. Zyra Of. 605, Quito, Ecuador.
            </div>
         </div>
      </div>
   );
}

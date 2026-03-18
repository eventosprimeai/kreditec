import React from 'react';

export default function CookiePolicy() {
   return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">Política de Cookies</h1>
         <div className="prose dark:prose-invert prose-lg max-w-none text-gray-600 dark:text-gray-300">
            <p className="opacity-80 text-sm font-medium tracking-wide">ÚLTIMA ACTUALIZACIÓN: {new Date().toLocaleDateString('es-EC')}</p>
            
            <p>Este sitio web, operado por KREDITEC, utiliza cookies y tecnologías de seguimiento similares para garantizar su correcta funcionalidad operativa y, previo consentimiento, analizar el rendimiento de nuestra plataforma y optimizar estrategias comerciales.</p>
            
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mt-12 mb-4">1. ¿Qué son las cookies?</h2>
            <p>Son pequeños archivos de texto que se almacenan en su navegador cuando visita nuestro sitio web. Sirven para recordar sus preferencias de navegación y permitir flujos seguros de conectividad.</p>

            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mt-10 mb-4">2. Categoría de cookies que utilizamos</h2>
            <ul>
               <li><strong>Cookies Estrictamente Necesarias:</strong> Obligatorias para el funcionamiento seguro de la web B2B. Incluyen protocolos de inicio de sesión o protección contra Spam/CSRF. No requieren consentimiento expreso y no pueden desactivarse.</li>
               <li><strong>Cookies de Análisis (Analytics):</strong> Útiles para medir patrones de tráfico y uso de la arquitectura. <em>Sólo se activan tras su consentimiento explícito</em> en nuestro panel de gestión de cookies.</li>
               <li><strong>Cookies de Marketing:</strong> Empleadas para rastrear conversiones desde campañas. <em>Supeditadas a su aprobación previa</em>.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mt-10 mb-4">3. Gestión de Configuración y Revocación</h2>
            <p>Usted tiene el control total. Por defecto, nuestro sitio bloquea cualquier cookie no esencial hasta que haga clic en "Aceptar" en nuestro banner introductorio.</p>
            <p>Puede revocar o modificar sus preferencias en cualquier momento accediendo al enlace <strong>"Configurar cookies"</strong> disponible permanentemente en el Footer institucional.</p>

            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mt-10 mb-4">4. Contacto sobre privacidad</h2>
            <p>Si tiene dudas técnicas o legales sobre nuestra infraestructura de cookies, por favor contáctenos en <a href="mailto:Vbarrera@kreditecsa.com" className="text-[var(--color-accent)] font-semibold">Vbarrera@kreditecsa.com</a>.</p>
         </div>
      </div>
   );
}

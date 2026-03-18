import React from 'react';

export default function TermsAndConditions() {
   return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">Términos y Condiciones</h1>
         <div className="prose dark:prose-invert prose-lg max-w-none text-gray-600 dark:text-gray-300">
            <p className="opacity-80 text-sm font-medium tracking-wide">ÚLTIMA ACTUALIZACIÓN: {new Date().toLocaleDateString('es-EC')}</p>
            
            <p>Bienvenido a KREDITEC, plataforma corporativa exclusiva para la gestión comercial B2B enfocada en el sector financiero popular y solidario ecuatoriano.</p>
            
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mt-12 mb-4">1. Aceptación</h2>
            <p>El acceso y uso de este sitio web le atribuye la condición de Usuario Institucional. La navegación por la plataforma implica la aceptación expresa y plena de estas disposiciones legales y de seguridad.</p>
            
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mt-10 mb-4">2. Propiedad Intelectual e Industrial</h2>
            <p>El logotipo constituido por la "K" ascendente direccional, la paleta de colores institucionales (Verde oscuro #002d14 y Verde Brillante #00bc4c) y toda la arquitectura técnica, textos y recursos audiovisuales de este ecosistema son propiedad intelectual exclusiva de <strong>KREDITEC S.A.</strong>. Queda totalmente prohibida su manipulación, extracción, alteración en proporción o reproducción en ecosistemas de terceros no autorizados.</p>
            
            <h2 className="text-2xl font-bold text-[#002d14] dark:text-white mt-10 mb-4">3. Naturaleza del Sitio y Limitación de Responsabilidad</h2>
            <p>Este sitio tiene propósitos informativos comerciales y de captación B2B inteligente. Todas las propuestas formales, métricas de ROI y SLAs de gestión operativa descritos en el "Proceso" se formalizan y pactan mediante contratos independientes (NDA y Prestación de Servicios) suscritos con cada institución. La web en sí misma no constituye una oferta vinculante de crédito para usuario final.</p>
         </div>
      </div>
   );
}

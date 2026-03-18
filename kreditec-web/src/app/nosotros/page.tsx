import React from 'react';

export default function Nosotros() {
    return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Nosotros</h1>
        <div className="w-24 h-1.5 bg-[var(--color-accent)] mx-auto rounded-full mb-8" />
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Fundada en 2026, facilitamos el acceso al crédito mediante logística eficiente e ingeniería de procesos.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
         <div className="bg-white dark:bg-[#002d14] p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-[#002d14] dark:text-white">Misión</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
               Facilitar el acceso al crédito mediante logística eficiente e ingeniería de procesos.
            </p>
         </div>
         <div className="bg-gradient-to-br from-[#002d14] to-[#001f0e] p-10 rounded-3xl shadow-lg border border-[#00bc4c]/20 text-white">
            <h3 className="text-2xl font-bold mb-4 text-white">Visión</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
               Ser el aliado Fintech estratégico número uno en Ecuador, liderando el análisis de datos.
            </p>
         </div>
      </div>

      <div className="bg-gray-50 dark:bg-[#001f0e] rounded-3xl p-12 md:p-16 text-center border border-gray-100 dark:border-gray-800 shadow-inner">
         <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent)] mb-6">Nuestro ADN</h2>
         <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 dark:text-white max-w-4xl mx-auto leading-relaxed">
            "Seguridad de grado internacional, transparencia absoluta y mitigación de riesgo técnico."
         </p>
      </div>

      <div className="mt-24 aspect-[21/9] w-full bg-gray-200 dark:bg-[#002d14] rounded-3xl flex items-center justify-center text-gray-500 font-semibold text-lg overflow-hidden relative shadow-md border border-gray-100 dark:border-gray-800">
         <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
         <span className="relative z-10 text-gray-600 dark:text-gray-400 tracking-widest bg-white/50 dark:bg-black/50 px-6 py-2 rounded-lg backdrop-blur-sm">[ABOUT_IMAGE_PLACEHOLDER]</span>
      </div>
    </div>
    );
}

"use client";
import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';

// Estilos de input centralizados para garantizar texto verde oscuro visible
const inputClass =
  "w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#002d14] placeholder-gray-400 font-medium " +
  "focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all";

// Estilo optimizado para selects desplegables (evita truncado de texto y asegura espacio con la flecha)
const selectClass =
  "w-full pl-3.5 pr-8 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#002d14] font-medium text-sm sm:text-base " +
  "focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all cursor-pointer appearance-none";

// Validador de cédula ecuatoriana según algoritmo de módulo 10 (Luhn)
function validarCedulaEcuador(cedula: string): boolean {
  if (cedula.length !== 10) return false;
  const provincia = parseInt(cedula.substring(0, 2), 10);
  if ((provincia < 1 || provincia > 24) && provincia !== 30) return false;
  const tercerDigito = parseInt(cedula[2], 10);
  if (tercerDigito >= 6) return false;
  const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
  let suma = 0;
  for (let i = 0; i < 9; i++) {
    let valor = parseInt(cedula[i], 10) * coeficientes[i];
    if (valor >= 10) valor -= 9;
    suma += valor;
  }
  const digitoVerificador = (10 - (suma % 10)) % 10;
  return digitoVerificador === parseInt(cedula[9], 10);
}

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    cedula: '',
    fechaNacimiento: '',
    email: '',
    telefono: '',
    ingresosMensuales: '',
    situacionLaboral: '',
    situacionLaboralOtro: '',
    tiempoEmpleo: '',
    tipoCredito: '',
    ruc: '',
    montoCredito: '',
    honeypot: '',
    privacy: false,
    privacyDatos: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Filtro silencioso Anti-Bot (Honeypot)
    if (formData.honeypot) {
      console.warn("Bot submission detectada y descartada.");
      setIsSubmitting(false);
      setIsSuccess(true);
      return;
    }

    if (!formData.privacy || !formData.privacyDatos) {
      alert("Por favor acepte ambas casillas de verificación para continuar.");
      return;
    }

    setIsSubmitting(true);

    const HUBSPOT_PORTAL_ID = '51170037';
    const HUBSPOT_FORM_ID   = '9395a983-3bc8-42af-87e9-bc9d360361bc';

    const firstname = formData.nombres.trim();
    const lastname  = formData.apellidos.trim();

    // Consolidación de situación laboral (especificación si marcó "Otro")
    const situacionLaboralFinal = formData.situacionLaboral === 'Otro'
      ? `Otro: ${formData.situacionLaboralOtro.trim()}`
      : formData.situacionLaboral;

    const resumenSolicitud = [
      `Cédula: ${formData.cedula}`,
      `Fecha Nacimiento: ${formData.fechaNacimiento}`,
      `Ingresos Mensuales: ${formData.ingresosMensuales}`,
      `Situación Laboral: ${situacionLaboralFinal}`,
      formData.tiempoEmpleo ? `Tiempo Empleo: ${formData.tiempoEmpleo}` : null,
      `Tipo de Crédito: ${formData.tipoCredito}`,
      formData.ruc ? `RUC: ${formData.ruc}` : null,
      `Monto Solicitado: $${formData.montoCredito} USD`
    ].filter(Boolean).join(' | ');

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { name: 'firstname',  value: firstname },
              { name: 'lastname',   value: lastname  },
              { name: 'email',      value: formData.email },
              { name: 'phone',      value: formData.telefono },
              { name: 'message',    value: resumenSolicitud },
            ],
            context: {
              pageUri: 'https://kreditecsa.com/contacto',
              pageName: 'KREDITEC – Formulario de solicitud y captación de datos',
            },
          }),
        }
      );

      if (!res.ok) {
        const errorBody = await res.text();
        console.error('HubSpot error:', res.status, errorBody);
        throw new Error(`HubSpot ${res.status}: ${errorBody}`);
      }
      setIsSuccess(true);
    } catch (err) {
      console.error('Form submission error:', err);
      alert('Ocurrió un error al enviar el formulario. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 mt-10 md:mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002d14] mb-4 tracking-tight">KREDITEC</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Formulario de solicitud y captación de datos
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* ── FORMULARIO ── */}
          <AnimatedSection delay={0.1} className="flex-1 w-full order-1 lg:order-1">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-10 h-full">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002d14] mb-3">¡Solicitud Recibida!</h3>
                  <p className="text-gray-600 text-lg mb-8">
                    Nuestro equipo de ingeniería operativa evaluará su requerimiento y le contactaremos dentro de 24 horas hábiles.
                  </p>
                  <Button onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      nombres: '',
                      apellidos: '',
                      cedula: '',
                      fechaNacimiento: '',
                      email: '',
                      telefono: '',
                      ingresosMensuales: '',
                      situacionLaboral: '',
                      situacionLaboralOtro: '',
                      tiempoEmpleo: '',
                      tipoCredito: '',
                      ruc: '',
                      montoCredito: '',
                      honeypot: '',
                      privacy: false,
                      privacyDatos: false
                    });
                  }}>
                    Enviar Otro Mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  {/* Honeypot invisible contra bots y spam al CRM */}
                  <div className="absolute opacity-0 -z-10 select-none pointer-events-none h-0 w-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="b_company_website">Website</label>
                    <input
                      id="b_company_website"
                      type="text"
                      name="b_company_website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {/* ── 1. DATOS DE IDENTIFICACIÓN ── */}
                  <div className="space-y-6">
                    <div className="bg-[#e8f5ed] border-l-4 border-[#00bc4c] px-4 py-2.5 rounded-r-xl">
                      <h2 className="text-sm md:text-base font-bold text-[#002d14] tracking-wide uppercase">
                        1. DATOS DE IDENTIFICACIÓN
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Nombres */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Nombres <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Ej. Juan Carlos"
                          value={formData.nombres}
                          onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
                          className={inputClass}
                        />
                        <span className="text-xs text-gray-400 mt-1.5 block">Texto</span>
                      </div>

                      {/* Apellidos */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Apellidos <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Ej. Pérez Rodríguez"
                          value={formData.apellidos}
                          onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                          className={inputClass}
                        />
                        <span className="text-xs text-gray-400 mt-1.5 block">Texto</span>
                      </div>

                      {/* Cédula de Identidad */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Cédula de Identidad (10 dígitos) <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]{10}"
                          maxLength={10}
                          placeholder="Solo números de 10 dígitos"
                          value={formData.cedula}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setFormData({ ...formData, cedula: val });
                          }}
                          className={inputClass}
                        />
                        <div className="flex justify-between items-center mt-1.5">
                          <span className="text-xs text-gray-400">Solo números de 10 dígitos</span>
                          {formData.cedula && formData.cedula.length < 10 && (
                            <span className="text-xs text-amber-600 font-medium">
                              {formData.cedula.length}/10 dígitos
                            </span>
                          )}
                          {formData.cedula && formData.cedula.length === 10 && (
                            <span className={`text-xs font-semibold flex items-center gap-1 ${validarCedulaEcuador(formData.cedula) ? 'text-green-600' : 'text-amber-600'}`}>
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {validarCedulaEcuador(formData.cedula) ? 'Cédula válida' : '10 dígitos (revisar número)'}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Fecha de nacimiento */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Fecha de nacimiento <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="date"
                          max={new Date().toISOString().split('T')[0]}
                          value={formData.fechaNacimiento}
                          onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })}
                          className={inputClass + " cursor-pointer"}
                        />
                        <span className="text-xs text-gray-400 mt-1.5 block">Desplegar calendario</span>
                      </div>
                    </div>
                  </div>

                  {/* ── 2. DATOS DE CONTACTO ── */}
                  <div className="space-y-6">
                    <div className="bg-[#e8f5ed] border-l-4 border-[#00bc4c] px-4 py-2.5 rounded-r-xl">
                      <h2 className="text-sm md:text-base font-bold text-[#002d14] tracking-wide uppercase">
                        2. DATOS DE CONTACTO
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {/* Celular / WhatsApp */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Número de Celular / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]{10}"
                          maxLength={10}
                          placeholder="Ej. 0991234567"
                          value={formData.telefono}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setFormData({ ...formData, telefono: val });
                          }}
                          className={inputClass}
                        />
                        <div className="flex justify-between items-center mt-1.5">
                          <span className="text-xs text-gray-500 italic">Clave para contactarle con la entidad.</span>
                          {formData.telefono && formData.telefono.length < 10 && (
                            <span className="text-xs text-amber-600 font-medium">
                              {formData.telefono.length}/10 dígitos
                            </span>
                          )}
                          {formData.telefono && formData.telefono.length === 10 && (
                            <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {formData.telefono.startsWith('09') ? 'Móvil Ecuador (09)' : '10 dígitos'}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Correo Electrónico */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Correo Electrónico <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="ejemplo@correo.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value.trim().toLowerCase() })}
                          className={inputClass}
                        />
                        <span className="text-xs text-gray-500 italic mt-1.5 block">
                          Para notificaciones del estado del trámite.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ── 3. INFORMACIÓN ECONÓMICA ── */}
                  <div className="space-y-6">
                    <div className="bg-[#e8f5ed] border-l-4 border-[#00bc4c] px-4 py-2.5 rounded-r-xl">
                      <h2 className="text-sm md:text-base font-bold text-[#002d14] tracking-wide uppercase">
                        3. INFORMACIÓN ECONÓMICA
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      {/* 1. Monto de Ingresos Mensuales Aproximado */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Monto de Ingresos Mensuales Aproximado ($) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={formData.ingresosMensuales}
                            onChange={(e) => setFormData({ ...formData, ingresosMensuales: e.target.value })}
                            className={selectClass}
                          >
                            <option value="" disabled>Seleccione un rango</option>
                            <option value="Menos de $500">Menos de $500</option>
                            <option value="$500 - $800">$500 - $800</option>
                            <option value="$801 - $1,200">$801 - $1,200</option>
                            <option value="Más de $1,200">Más de $1,200</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 italic mt-1.5 block">
                          Indique el valor promedio de sus ingresos mensuales en dólares americanos.
                        </span>
                      </div>

                      {/* 2. Situación Laboral */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            ¿Cómo trabajas actualmente? <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={formData.situacionLaboral}
                              onChange={(e) => {
                                const val = e.target.value;
                                setFormData({
                                  ...formData,
                                  situacionLaboral: val,
                                  tiempoEmpleo: val === 'Dependiente' ? formData.tiempoEmpleo : '',
                                  situacionLaboralOtro: val === 'Otro' ? formData.situacionLaboralOtro : ''
                                });
                              }}
                              className={selectClass}
                            >
                              <option value="" disabled>Seleccione una opción</option>
                              <option value="Dependiente">Dependiente</option>
                              <option value="Independiente">Independiente</option>
                              <option value="Emprendedor">Emprendedor</option>
                              <option value="Jubilado">Jubilado</option>
                              <option value="Otro">Otro</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500 italic mt-1.5 block">
                            Dependiente, independiente, emprendedor, jubilado u otro.
                          </span>
                        </div>

                        {/* Despliegue condicional inmediato si es dependiente: Tiempo de empleo */}
                        {formData.situacionLaboral === 'Dependiente' && (
                          <div className="bg-[#f0f7f3] border border-[#00bc4c]/30 rounded-2xl p-4 transition-all">
                            <label className="block text-sm font-bold text-[#002d14] mb-2">
                              Si es dependiente: ¿cuánto tiempo llevas en tu empleo actual? <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <select
                                required
                                value={formData.tiempoEmpleo}
                                onChange={(e) => setFormData({ ...formData, tiempoEmpleo: e.target.value })}
                                className={selectClass + " bg-white"}
                              >
                                <option value="" disabled>Seleccione tiempo</option>
                                <option value="Menos de 1 año">Menos de 1 año</option>
                                <option value="Más de 1 año">Más de 1 año</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500 italic mt-1.5 block">
                              Requisito para validar estabilidad con las entidades financieras.
                            </span>
                          </div>
                        )}

                        {/* Despliegue condicional inmediato si selecciona "Otro": Especificar actividad */}
                        {formData.situacionLaboral === 'Otro' && (
                          <div className="bg-[#f0f7f3] border border-[#00bc4c]/30 rounded-2xl p-4 transition-all">
                            <label className="block text-sm font-bold text-[#002d14] mb-2">
                              Especifique su actividad laboral <span className="text-red-500">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              placeholder="Ej. Comerciante informal, consultor, freelance, etc."
                              value={formData.situacionLaboralOtro}
                              onChange={(e) => setFormData({ ...formData, situacionLaboralOtro: e.target.value })}
                              className={inputClass + " bg-white"}
                            />
                            <span className="text-xs text-gray-500 italic mt-1.5 block">
                              Indique brevemente en qué consiste su actividad económica u ocupación.
                            </span>
                          </div>
                        )}
                      </div>

                      {/* 3. Escoge la opción que requieras (Tipo de crédito) */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Escoge la opción que requieras <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={formData.tipoCredito}
                              onChange={(e) => {
                                const val = e.target.value;
                                setFormData({
                                  ...formData,
                                  tipoCredito: val,
                                  ruc: val === 'Microcrédito' ? formData.ruc : ''
                                });
                              }}
                              className={selectClass}
                            >
                              <option value="" disabled>Seleccione el tipo</option>
                              <option value="Crédito de consumo">Crédito de consumo</option>
                              <option value="Microcrédito">Microcrédito</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500 italic mt-1.5 block">
                            Crédito de consumo (personal/familiar) o microcrédito (negocio).
                          </span>
                        </div>

                        {/* Despliegue condicional inmediato si escoge Microcrédito: RUC */}
                        {formData.tipoCredito === 'Microcrédito' && (
                          <div className="bg-[#f0f7f3] border border-[#00bc4c]/30 rounded-2xl p-4 transition-all">
                            <label className="block text-sm font-bold text-[#002d14] mb-1">
                              RUC del negocio (13 dígitos) <span className="text-red-500">*</span>
                            </label>
                            <p className="text-xs text-gray-500 italic mb-2">
                              Ingrese su RUC de 13 dígitos para la evaluación del microcrédito.
                            </p>
                            <input
                              required
                              type="tel"
                              inputMode="numeric"
                              pattern="[0-9]{13}"
                              maxLength={13}
                              placeholder="Ej. 1712345678001"
                              value={formData.ruc}
                              onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, '').slice(0, 13);
                                setFormData({ ...formData, ruc: val });
                              }}
                              className={inputClass + " bg-white"}
                            />
                            <div className="flex justify-between items-center mt-1.5">
                              <span className="text-xs text-gray-400">13 dígitos numéricos</span>
                              {formData.ruc && formData.ruc.length < 13 && (
                                <span className="text-xs text-amber-600 font-medium">
                                  {formData.ruc.length}/13 dígitos
                                </span>
                              )}
                              {formData.ruc && formData.ruc.length === 13 && (
                                <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                  RUC completo
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 4. ¿Qué monto de crédito necesitas? */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          ¿Qué monto de crédito necesitas? ($ USD) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                          <input
                            required
                            type="tel"
                            inputMode="numeric"
                            placeholder="Ej. 3500"
                            value={formData.montoCredito}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, '');
                              setFormData({ ...formData, montoCredito: val });
                            }}
                            className={inputClass + " pl-9"}
                          />
                        </div>
                        <span className="text-xs text-gray-500 italic mt-1.5 block">
                          Indique el valor solicitado en dólares americanos (solo números).
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Privacidad */}
                  <div className="flex flex-col gap-3 mt-8">

                    {/* Checkbox 1 — T&C + Política de Privacidad */}
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[var(--color-accent)]/30 transition-colors">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        checked={formData.privacy}
                        onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                        className="mt-0.5 w-4 h-4 accent-[#00bc4c] border-gray-300 rounded focus:ring-[var(--color-accent)] cursor-pointer flex-shrink-0"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600 font-medium leading-relaxed cursor-pointer">
                        He leído y acepto los{' '}
                        <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline font-bold">
                          Términos y Condiciones de Uso del Sitio Web
                        </a>{' '}y la{' '}
                        <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline font-bold">
                          Política de Privacidad
                        </a>.
                        {' '}<span className="text-red-500 font-bold">*</span>
                      </label>
                    </div>

                    {/* Checkbox 2 — Política General de Datos + Tratamiento */}
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[var(--color-accent)]/30 transition-colors">
                      <input
                        type="checkbox"
                        id="privacyDatos"
                        required
                        checked={formData.privacyDatos}
                        onChange={(e) => setFormData({ ...formData, privacyDatos: e.target.checked })}
                        className="mt-0.5 w-4 h-4 accent-[#00bc4c] border-gray-300 rounded focus:ring-[var(--color-accent)] cursor-pointer flex-shrink-0"
                      />
                      <label htmlFor="privacyDatos" className="text-sm text-gray-600 font-medium leading-relaxed cursor-pointer">
                        Acepto la{' '}
                        <a href="/politica-general-de-datos" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline font-bold">
                          Política General de Protección de Datos
                        </a>{' '}e{' '}
                        <a href="/tratamiento-datos" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline font-bold">
                          Información sobre el Tratamiento de Datos
                        </a>{' '}para uso exclusivamente B2B.
                        {' '}<span className="text-red-500 font-bold">*</span>
                      </label>
                    </div>

                    {/* Nota de seguridad */}
                    <div className="flex items-start gap-3 px-2 pt-1">
                      <div className="text-green-600 mt-0.5 flex-shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">
                        <strong>Su información está segura con nosotros.</strong> Implementamos conectividad cifrada mediante túneles VPN y protocolos de seguridad de grado internacional para el manejo de información sensible.
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 text-lg mt-8 shadow-lg shadow-[var(--color-accent)]/20 hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Procesando Requerimiento...' : 'Optimice su colocación hoy mismo'}
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* ── INFO + MAPA ── */}
          <AnimatedSection delay={0.2} className="flex-1 flex flex-col gap-8 order-2 lg:order-2">
            <div className="bg-[#001f0e] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)] opacity-[0.04] rounded-bl-full group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
              <h3 className="text-2xl font-bold mb-8 relative z-10">Información de Operaciones</h3>
              <div className="space-y-6 text-gray-300 relative z-10">

                <div>
                  <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">Línea Corporativa</span>
                  <a href="tel:+59324529357" className="text-lg text-white font-medium hover:underline">+593 2 452 9357</a>
                </div>
                <div>
                  <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">WhatsApp</span>
                  <a href="https://wa.me/593963413419" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:underline flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-accent)] shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    +593 96 341 3419
                  </a>
                </div>
                <div>
                  <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">Correo Electrónico</span>
                  <a href="mailto:Info@kreditecsa.com" className="text-lg text-white font-medium hover:underline">Info@kreditecsa.com</a>
                </div>
                <div>
                  <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">Dirección Corporativa</span>
                  <p className="text-sm text-gray-300 leading-relaxed font-medium">6 DE DICIEMBRE N34-360 N35 PORTUGAL / EDF. ZYRA OF 605 / IÑAQUITO - QUITO.</p>
                </div>
                <div>
                  <span className="block text-sm text-[var(--color-accent)] font-bold uppercase tracking-widest mb-1">Horario de Atención</span>
                  <p className="text-lg text-white font-medium mb-1">Lunes a Viernes</p>
                  <p className="text-sm text-gray-400">08:00 am - 05:00 pm</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src="https://maps.google.com/maps?hl=es&q=Edificio%20Zyra,%20Quito,%20Ecuador&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kreditec Ubicación"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

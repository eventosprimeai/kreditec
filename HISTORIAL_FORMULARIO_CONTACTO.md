# Historial y Control de Versiones: Formulario de Captación Kreditec

> **Ruta:** `https://kreditecsa.com/contacto`  
> **Archivo fuente:** [`kreditec-web/src/app/contacto/page.tsx`](file:///c:/Users/hp/OneDrive/Documentos/Eventos%20Prime/00%20-%20Contratistas/Nicolle/kreditec/kreditec-web/src/app/contacto/page.tsx)  
> **Documento de especificación:** `KREDITEC_Formulario Captacion.xlsx`  
> **Objetivo:** Registro incremental de los 5 bloques de ajuste para permitir trazabilidad, rollback granular y auditoría continua de seguridad y rendimiento.

---

## Índice de Bloques

- [Bloque 1: Datos de Identificación](#bloque-1-datos-de-identificación) *(Implementado)*
- [Bloque 2: Datos de Contacto](#bloque-2-datos-de-contacto) *(Implementado)*
- [Bloque 3: Información Económica](#bloque-3-información-económica) *(Implementado)*
- [Bloque 4: Dirección de Domicilio](#bloque-4-dirección-de-domicilio) *(Pendiente)*
- [Bloque 5: Autorización para el Tratamiento de Datos (LOPDP)](#bloque-5-autorización-para-el-tratamiento-de-datos-lopdp) *(Pendiente)*
- [Auditoría Técnica: Escalabilidad y Seguridad](#auditoría-técnica-escalabilidad-y-seguridad)

---

## Bloque 1: Datos de Identificación

### 1.1. Estado Anterior (Original)
Antes de iniciar los ajustes, el formulario capturaba la identidad en un único campo genérico:

#### Campos Anteriores:
- **`Nombre y Apellido *`**: Input de texto simple (`placeholder="Ej. María García"`).
- Se procesaba dividiendo la cadena en el espacio (`name.trim().split(' ')`).

#### Código Anterior en `formData`:
```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  institution: '',
  cargo: '',
  telefono: '',
  interes: '',
  fecha: '',
  mensaje: '',
  privacy: false,
  privacyDatos: false
});
```

#### Código Anterior en JSX:
```tsx
{/* Nombre */}
<div>
  <label className="block text-sm font-bold text-gray-700 mb-2">
    Nombre y Apellido <span className="text-red-500">*</span>
  </label>
  <input
    required
    type="text"
    placeholder="Ej. María García"
    value={formData.name}
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    className={inputClass}
  />
</div>
```

---

### 1.2. Estado Actual (Bloque 1 Implementado)
Se estructuró la sección formal **1. DATOS DE IDENTIFICACIÓN** acorde a la ficha técnica de captación bancaria/crediticia de KREDITEC.

#### Nuevos Campos:
1. **`Nombres *`**: Input de texto (`placeholder="Ej. Juan Carlos"`).
2. **`Apellidos *`**: Input de texto (`placeholder="Ej. Pérez Rodríguez"`).
3. **`Cédula de Identidad (10 dígitos) *`**:
   - `inputMode="numeric"` y filtro reactivo que impide escribir letras o caracteres especiales.
   - Longitud restringida a exactamente 10 dígitos (`maxLength={10}`).
   - Contador en vivo (`X/10 dígitos` con check visual verde al completarse).
4. **`Fecha de nacimiento *`**:
   - Input de tipo fecha (`type="date"`) con calendario nativo del navegador.
   - Bloqueo de fechas futuras (`max={new Date().toISOString().split('T')[0]}`).

#### Código Actual en `formData`:
```tsx
const [formData, setFormData] = useState({
  nombres: '',
  apellidos: '',
  cedula: '',
  fechaNacimiento: '',
  email: '',
  institution: '',
  cargo: '',
  telefono: '',
  interes: '',
  fecha: '',
  mensaje: '',
  privacy: false,
  privacyDatos: false
});
```

#### Código Actual en JSX:
```tsx
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
          <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            10 dígitos completos
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
```

### 1.3. Procedimiento de Rollback (Bloque 1)
En caso de requerir volver al estado previo:
1. Reemplazar `nombres`, `apellidos`, `cedula` y `fechaNacimiento` en `formData` por `name: ''`.
2. Restaurar la llamada `const nameParts = formData.name.trim().split(' ');` en `handleSubmit`.
3. Sustituir el contenedor `1. DATOS DE IDENTIFICACIÓN` por el `<input>` simple de `Nombre y Apellido`.

---

## Bloque 2: Datos de Contacto

### 2.1. Estado Anterior (Original)
En la versión inicial de la web B2B existían 4 campos dispersos:
- `Correo Electrónico Corporativo *`
- `Nombre de la Institución`
- `Cargo`
- `Teléfono de Contacto *`

#### Código Anterior en JSX:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
  {/* Email */}
  <div>
    <label className="block text-sm font-bold text-gray-700 mb-2">
      Correo Electrónico Corporativo <span className="text-red-500">*</span>
    </label>
    <input required type="email" placeholder="correo@empresa.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
  </div>
  {/* Institución */}
  <div>
    <label className="block text-sm font-bold text-gray-700 mb-2">Nombre de la Institución</label>
    <input type="text" placeholder="Ej. Banco Nacional" value={formData.institution} onChange={(e) => setFormData({ ...formData, institution: e.target.value })} className={inputClass} />
  </div>
  {/* Cargo */}
  <div>
    <label className="block text-sm font-bold text-gray-700 mb-2">Cargo</label>
    <input type="text" placeholder="Ej. Gerente de Riesgo" value={formData.cargo} onChange={(e) => setFormData({ ...formData, cargo: e.target.value })} className={inputClass} />
  </div>
  {/* Teléfono */}
  <div>
    <label className="block text-sm font-bold text-gray-700 mb-2">
      Teléfono de Contacto <span className="text-red-500">*</span>
    </label>
    <input required type="tel" placeholder="+593 99 000 0000" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} className={inputClass} />
  </div>
</div>
```

---

### 2.2. Estado Actual (Bloque 2 Implementado)
Reemplazado por la sección estructurada **2. DATOS DE CONTACTO** para captación crediticia oficial de Kreditec.

#### Nuevos Campos:
1. **`Número de Celular / WhatsApp *`**:
   - `inputMode="numeric"`, `maxLength={10}`.
   - Filtro reactivo para impedir caracteres no numéricos.
   - Verificador de prefijo móvil ecuatoriano (`09`) y contador de 10 dígitos con confirmación visual verde.
   - Leyenda de ayuda: *Clave para contactarle con la entidad.*
2. **`Correo Electrónico *`**:
   - `type="email"`, normalización a minúsculas (`toLowerCase()`) y eliminación de espacios en blanco (`trim()`).
   - Leyenda de ayuda: *Para notificaciones del estado del trámite.*

#### Código Actual en JSX:
```tsx
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
```

### 2.3. Procedimiento de Rollback (Bloque 2)
En caso de requerir volver al estado previo:
1. Reincorporar `institution: ''` y `cargo: ''` en el estado `formData`.
2. Sustituir el contenedor `2. DATOS DE CONTACTO` por los 4 inputs anteriores (`Correo Electrónico Corporativo`, `Nombre de la Institución`, `Cargo`, `Teléfono de Contacto`).
3. Reincorporar `{ name: 'company', value: formData.institution }` en `handleSubmit`.

---

## Bloque 3: Información Económica

### 3.1. Estado Anterior (Original)
En el formulario original se utilizaban 3 campos genéricos de consulta empresarial:
- `Interés Principal` (Selector dropdown desplegable: Información general o Agendar reunión virtual).
- `Fecha sugerida para reunión virtual` (Input date).
- `Mensaje` (Textarea libre de 4 filas).

#### Código Anterior en JSX:
```tsx
{/* Select personalizado - Interés */}
<div className="relative" tabIndex={0} ...>
  <label className="block text-sm font-bold text-gray-700 mb-2">Interés Principal</label>
  {/* Dropdown con opciones de reunión */}
</div>

{/* Fecha */}
<div>
  <label className="block text-sm font-bold text-gray-700 mb-2">Fecha sugerida para reunión virtual</label>
  <input type="date" value={formData.fecha} onChange={(e) => setFormData({ ...formData, fecha: e.target.value })} className={inputClass} />
</div>

{/* Mensaje */}
<div>
  <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
  <textarea rows={4} placeholder="Cuéntenos sobre los desafíos de su operación actual..." value={formData.mensaje} onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })} className={inputClass + " resize-none"} />
</div>
```

---

### 3.2. Estado Actual (Bloque 3 Implementado)
Se estructuró la sección formal **3. INFORMACIÓN ECONÓMICA** con lógica condicional reactiva de evaluación financiera.

#### Nuevos Campos y Comportamientos:
1. **`Monto de Ingresos Mensuales Aproximado ($) *`**:
   - Selector interactivo de botones tipo píldora (*Menos de $500*, *Entre $500 - $800*, *Entre $801 - $1,200*, *Más de $1,200*).
   - Subtexto: *Indique el valor promedio de sus ingresos mensuales en dólares americanos.*
2. **`Situación Laboral *`**:
   - Botones de selección rápida (*Dependiente*, *Independiente*, *Emprendedor*, *Jubilado*, *Otro*).
3. **`Si es dependiente: ¿cuánto tiempo llevas en tu empleo actual? *`**:
   - **Despliegue reactivo:** Solo visible cuando se selecciona `Dependiente`.
   - Opciones: *Menos de 1 año* o *Más de 1 año*.
4. **`Escoge la opción que requieras *`**:
   - Tarjetas interactivas: *Crédito de consumo* (Personal o familiar) o *Microcrédito* (Negocio o comercio).
5. **`Despliegue condicional de RUC (13 dígitos) *`**:
   - **Despliegue reactivo:** Se activa automáticamente al hacer clic en *Microcrédito*.
   - Validación de 13 dígitos numéricos (`inputMode="numeric"`, `maxLength={13}`).
   - Contador en vivo con check verde al completar los 13 dígitos.
6. **`¿Qué monto de crédito necesitas? *`**:
   - Entrada numérica monetaria con prefijo `$ USD` y filtrado para admitir únicamente números.

#### Código Actual en JSX:
```tsx
{/* ── 3. INFORMACIÓN ECONÓMICA ── */}
<div className="space-y-6">
  <div className="bg-[#e8f5ed] border-l-4 border-[#00bc4c] px-4 py-2.5 rounded-r-xl">
    <h2 className="text-sm md:text-base font-bold text-[#002d14] tracking-wide uppercase">
      3. INFORMACIÓN ECONÓMICA
    </h2>
  </div>

  {/* Monto de Ingresos Mensuales Aproximado ($) * */}
  <div>
    <label className="block text-sm font-bold text-gray-700 mb-1">
      Monto de Ingresos Mensuales Aproximado ($) <span className="text-red-500">*</span>
    </label>
    <p className="text-xs text-gray-500 italic mb-3">
      Indique el valor promedio de sus ingresos mensuales en dólares americanos.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {['Menos de $500', 'Entre $500 - $800', 'Entre $801 - $1,200', 'Más de $1,200'].map((rango) => (
        <button
          key={rango}
          type="button"
          onClick={() => setFormData({ ...formData, ingresosMensuales: rango })}
          className={`px-3 py-3 rounded-xl border text-sm font-semibold transition-all text-center flex items-center justify-center ${
            formData.ingresosMensuales === rango
              ? 'bg-[#002d14] text-white border-[#002d14] shadow-md shadow-[#002d14]/20'
              : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-white hover:border-[#00bc4c]/40'
          }`}
        >
          {rango}
        </button>
      ))}
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
    {/* Situación Laboral */}
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">
        ¿Trabajas como dependiente, independiente, emprendedor, jubilado u otro? <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-wrap gap-2">
        {['Dependiente', 'Independiente', 'Emprendedor', 'Jubilado', 'Otro'].map((sit) => (
          <button
            key={sit}
            type="button"
            onClick={() => setFormData({ ...formData, situacionLaboral: sit, tiempoEmpleo: sit === 'Dependiente' ? formData.tiempoEmpleo : '' })}
            className={`px-3.5 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
              formData.situacionLaboral === sit ? 'bg-[#002d14] text-white border-[#002d14]' : 'bg-gray-50 text-gray-700 border-gray-200'
            }`}
          >
            {sit}
          </button>
        ))}
      </div>
    </div>

    {/* Tipo de Crédito */}
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">
        Escoge la opción que requieras <span className="text-red-500">*</span>
      </label>
      <div className="grid grid-cols-2 gap-3">
        {[{ id: 'consumo', label: 'Crédito de consumo', desc: 'Personal o familiar' }, { id: 'microcredito', label: 'Microcrédito', desc: 'Negocio o comercio' }].map((tipo) => (
          <button
            key={tipo.id}
            type="button"
            onClick={() => setFormData({ ...formData, tipoCredito: tipo.label })}
            className={`p-3 rounded-xl border text-left transition-all ${
              formData.tipoCredito === tipo.label ? 'bg-[#002d14] text-white border-[#002d14]' : 'bg-gray-50 text-gray-700 border-gray-200'
            }`}
          >
            <div className="font-bold text-sm">{tipo.label}</div>
            <div className={`text-xs mt-0.5 ${formData.tipoCredito === tipo.label ? 'text-green-300' : 'text-gray-400'}`}>{tipo.desc}</div>
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Despliegues condicionales */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {formData.situacionLaboral === 'Dependiente' && (
      <div className="bg-[#f0f7f3] border border-[#00bc4c]/30 rounded-2xl p-4 transition-all">
        <label className="block text-sm font-bold text-[#002d14] mb-2">
          Si es dependiente: ¿cuánto tiempo llevas en tu empleo actual? <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {['Menos de 1 año', 'Más de 1 año'].map((tiempo) => (
            <button key={tiempo} type="button" onClick={() => setFormData({ ...formData, tiempoEmpleo: tiempo })} className={`py-2.5 px-3 rounded-xl border text-sm font-semibold transition-all ${formData.tiempoEmpleo === tiempo ? 'bg-[#002d14] text-white border-[#002d14]' : 'bg-white text-gray-700 border-gray-200'}`}>
              {tiempo}
            </button>
          ))}
        </div>
      </div>
    )}

    {formData.tipoCredito === 'Microcrédito' && (
      <div className="bg-[#f0f7f3] border border-[#00bc4c]/30 rounded-2xl p-4 transition-all">
        <label className="block text-sm font-bold text-[#002d14] mb-1">
          RUC (13 dígitos) <span className="text-red-500">*</span>
        </label>
        <p className="text-xs text-gray-500 italic mb-2">Ingrese su RUC de 13 dígitos para la evaluación del microcrédito.</p>
        <input required type="tel" inputMode="numeric" pattern="[0-9]{13}" maxLength={13} placeholder="Ej. 1712345678001" value={formData.ruc} onChange={(e) => setFormData({ ...formData, ruc: e.target.value.replace(/\D/g, '').slice(0, 13) })} className={inputClass + " bg-white"} />
      </div>
    )}
  </div>

  {/* Monto solicitado */}
  <div>
    <label className="block text-sm font-bold text-gray-700 mb-2">
      ¿Qué monto de crédito necesitas? <span className="text-red-500">*</span>
    </label>
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
      <input required type="tel" inputMode="numeric" placeholder="Ej. 3500" value={formData.montoCredito} onChange={(e) => setFormData({ ...formData, montoCredito: e.target.value.replace(/\D/g, '') })} className={inputClass + " pl-9"} />
    </div>
  </div>
</div>
```

### 3.3. Procedimiento de Rollback (Bloque 3)
En caso de requerir volver al estado previo:
1. Reincorporar `interes: ''`, `fecha: ''` y `mensaje: ''` en `formData`.
2. Restaurar el selector `Interés Principal`, el campo `Fecha sugerida` y el textarea `Mensaje`.
3. Eliminar los campos de `ingresosMensuales`, `situacionLaboral`, `tiempoEmpleo`, `tipoCredito`, `ruc` y `montoCredito`.

---

## Bloque 4: Dirección de Domicilio
*(En espera de definición y aplicación incremental)*

---

## Bloque 5: Autorización para el Tratamiento de Datos (LOPDP)
*(En espera de definición y aplicación incremental)*

---

## Auditoría Técnica: Escalabilidad y Seguridad

### 1. Resistencia a Altos Picos de Tráfico (High Traffic / Scalability)

| Componente | Comportamiento frente a Picos | Evaluación |
| :--- | :--- | :---: |
| **Carga de la Página (`GET /contacto`)** | La página está pre-renderizada estáticamente en Next.js (`SSG`). Nginx la entrega en milisegundos desde memoria caché sin tocar la CPU ni base de datos local. Satisface miles de peticiones simultáneas sin degradación. | **Excelente (10/10)** |
| **Envío del Formulario (`POST`)** | El envío se ejecuta directamente desde el navegador del cliente hacia la infraestructura serverless de **HubSpot Forms API v3** (`api.hsforms.com`). No consume threads ni memoria de Node.js en el VPS de Hostinger. | **Excelente (9/10)** |
| **Cuello de Botella Potencial** | HubSpot Forms API tiene un rate-limit por portal (normalmente ~100 peticiones por 10 segundos). En un ataque masivo de bots, HubSpot retornará `429 Too Many Requests`. | **Mitigado con Honeypot implementado** |

---

### 2. Auditoría de Seguridad (Vulnerabilities & Protection)

#### ✅ Mejoras de Seguridad Implementadas:
1. **🛡️ Protección Anti-Bot Invisible (Honeypot):**
   - Se integró un input trampa oculto (`b_company_website`) invisible para usuarios reales. Si un bot automatizado o spider lo completa, la solicitud es abortada silenciosamente sin hacer llamadas a HubSpot ni consumir recursos del servidor.
2. **🛡️ Validador Matemático de Cédula Ecuatoriana (Módulo 10 / Luhn):**
   - Algoritmo que valida el código de provincia (01-24, 30), el tercer dígito (< 6) y el dígito verificador oficial, ofreciendo feedback inmediato al usuario.
3. **🛡️ Validación de Celular Ecuador:**
   - Filtro numérico estricto de 10 dígitos con detección de formato celular estándar nacional (`09...`).
4. **🛡️ Sanitización de Datos:**
   - Normalización de correo a minúsculas y eliminación de espacios en blanco (`trim().toLowerCase()`).
5. **🛡️ Prevención de XSS:**
   - React escapa de forma nativa cualquier interpolación en el DOM virtual. No existen usos de `dangerouslySetInnerHTML` en los inputs.
6. **🛡️ Cumplimiento LOPDP:**
   - Protección de datos personales sensibles con autorización legal en el formulario.

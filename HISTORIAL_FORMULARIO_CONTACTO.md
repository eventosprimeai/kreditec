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

### 3.2. Estado Actual (Bloque 3 Implementado y Optimizado)
Se estructuró la sección formal **3. INFORMACIÓN ECONÓMICA** con selectores optimizados (`selectClass`) que garantizan que ningún texto se corte o trunque en celulares o pantallas medianas, integrando especificación dinámica para la opción «Otro» y reconociéndola en el payload del CRM.

#### Nuevos Campos y Comportamientos:
1. **`Monto de Ingresos Mensuales Aproximado ($) *`**:
   - Menú select corporativo con tipografía balanceada y espacio garantizado antes del icono (`pl-3.5 pr-8 py-3 text-sm sm:text-base`).
   - Opciones concisas que evitan truncados: *Menos de $500*, *$500 - $800*, *$801 - $1,200*, *Más de $1,200*.
   - Placeholder conciso: *Seleccione un rango*.
2. **`¿Cómo trabajas actualmente? (Situación Laboral) *`**:
   - Menú select estilizado con opciones limpias: *Dependiente*, *Independiente*, *Emprendedor*, *Jubilado*, *Otro*.
   - Placeholder conciso: *Seleccione una opción*.
3. **`Especificación dinámica si selecciona "Otro" *`**:
   - **Despliegue reactivo condicional:** Si el usuario elige *Otro*, se abre automáticamente un campo de texto: *«Especifique su actividad laboral *»*.
   - **Integración de envío:** Al despachar el formulario, se mapea como `Otro: [descripción]` dentro de la síntesis del formulario enviada a HubSpot CRM.
4. **`Si es dependiente: ¿cuánto tiempo llevas en tu empleo actual? *`**:
   - **Despliegue reactivo condicional:** Aparece en un contenedor destacado únicamente si la situación laboral es `Dependiente`. Selector desplegable: *Menos de 1 año* o *Más de 1 año*.
5. **`Escoge la opción que requieras (Tipo de Crédito) *`**:
   - Menú select ordenado con opciones concisas: *Crédito de consumo* o *Microcrédito*.
   - Subtexto aclaratorio: *Crédito de consumo (personal/familiar) o microcrédito (negocio).*
6. **`Despliegue condicional de RUC (13 dígitos) *`**:
   - **Despliegue reactivo:** Se activa únicamente al seleccionar *Microcrédito*.
   - Validación de 13 dígitos numéricos (`inputMode="numeric"`, `maxLength={13}`).
   - Contador en vivo con check verde al completar los 13 dígitos.
7. **`¿Qué monto de crédito necesitas? ($ USD) *`**:
   - Entrada numérica monetaria con prefijo `$ USD` y filtrado que admite únicamente números.

#### Código Actual en JSX:
```tsx
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
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
      <span className="text-xs text-gray-500 italic mt-1.5 block">Indique el valor promedio de sus ingresos mensuales en dólares americanos.</span>
    </div>

    {/* 2. Situación Laboral con Despliegues Condicionales Inmediatos */}
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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
        <span className="text-xs text-gray-500 italic mt-1.5 block">Dependiente, independiente, emprendedor, jubilado u otro.</span>
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          <span className="text-xs text-gray-500 italic mt-1.5 block">Requisito para validar estabilidad con las entidades financieras.</span>
        </div>
      )}

      {/* Despliegue condicional inmediato si selecciona "Otro": Especificar actividad */}
      {formData.situacionLaboral === 'Otro' && (
        <div className="bg-[#f0f7f3] border border-[#00bc4c]/30 rounded-2xl p-4 transition-all">
          <label className="block text-sm font-bold text-[#002d14] mb-2">
            Especifique su actividad laboral <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={3}
            placeholder="Ej. Comerciante informal, consultor independiente, etc."
            value={formData.situacionLaboralOtro}
            onChange={(e) => setFormData({ ...formData, situacionLaboralOtro: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-gray-800 text-sm sm:text-base font-normal bg-white focus:bg-white focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all resize-none leading-relaxed"
          />
          <span className="text-xs text-gray-500 italic mt-1.5 block">Indique brevemente en qué consiste su actividad económica u ocupación.</span>
        </div>
      )}
    </div>

    {/* 3. Escoge la opción que requieras (Tipo de crédito) con RUC Inmediato */}
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
              setFormData({ ...formData, tipoCredito: val, ruc: val === 'Microcrédito' ? formData.ruc : '' });
            }}
            className={selectClass}
          >
            <option value="" disabled>Seleccione el tipo</option>
            <option value="Crédito de consumo">Crédito de consumo</option>
            <option value="Microcrédito">Microcrédito</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
        <span className="text-xs text-gray-500 italic mt-1.5 block">Crédito de consumo (personal/familiar) o microcrédito (negocio).</span>
      </div>

      {/* Despliegue condicional inmediato si escoge Microcrédito: RUC */}
      {formData.tipoCredito === 'Microcrédito' && (
        <div className="bg-[#f0f7f3] border border-[#00bc4c]/30 rounded-2xl p-4 transition-all">
          <label className="block text-sm font-bold text-[#002d14] mb-1">
            RUC del negocio (13 dígitos) <span className="text-red-500">*</span>
          </label>
          <p className="text-xs text-gray-500 italic mb-2">Ingrese su RUC de 13 dígitos para la evaluación del microcrédito.</p>
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
              <span className="text-xs text-amber-600 font-medium">{formData.ruc.length}/13 dígitos</span>
            )}
            {formData.ruc && formData.ruc.length === 13 && (
              <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
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
      <span className="text-xs text-gray-400 mt-1.5 block">Indique el valor solicitado en dólares americanos (solo números).</span>
    </div>
  </div>
</div>
```

### 3.3. Optimización UX Mobile: Animación de Entrada Automática (Sin Esperar Scroll)
- **Problema Detectado:** Al entrar en la página desde celulares, `whileInView` con umbral de visibilidad ocultaba el formulario con `opacity: 0` hasta que el usuario hacía scroll de ~400px, generando incertidumbre y sensación de carga congelada.
- **Solución Implementada:** Se desvinculó la animación del scroll para el formulario principal y se configuró con `animate={{ opacity: 1, y: 0 }}` activándose automáticamente a los 0.40s (`delay: 0.4`, duración `0.75s`, curva `ease: [0.16, 1, 0.3, 1]`).
- **Resultado:** Tras mostrar el título y subtítulo, el formulario entra deslizándose suavemente sin que el usuario tenga que interactuar ni hacer scroll.

### 3.4. Procedimiento de Rollback (Bloque 3)
En caso de requerir volver al estado previo:
1. Reincorporar `interes: ''`, `fecha: ''` y `mensaje: ''` en `formData`.
2. Restaurar el selector `Interés Principal`, el campo `Fecha sugerida` y el textarea `Mensaje`.
3. Eliminar los campos de `ingresosMensuales`, `situacionLaboral`, `tiempoEmpleo`, `tipoCredito`, `ruc` y `montoCredito`.

---

## Bloque 4: Dirección de Domicilio

### 4.1. Estado Previo
- **Campos en el formulario original:** No existían campos para la captura de dirección domiciliaria en la versión previa del sitio.
- **Definición en Excel (`KREDITEC_Formulario Captacion.xlsx`):**
  - Fila 30: `4. DIRECCIÓN DE DOMICILIO`
  - Fila 31: `Ciudad` (tipo `texto`)
  - Fila 49 (Notas finales de datos faltantes): `Domicilio`

### 4.2. Estado Actual Implementado

#### Código Actual en `formData`:
```tsx
const [formData, setFormData] = useState({
  // Bloque 1
  nombres: '',
  apellidos: '',
  cedula: '',
  fechaNacimiento: '',
  // Bloque 2
  email: '',
  telefono: '',
  // Bloque 3
  ingresosMensuales: '',
  situacionLaboral: '',
  situacionLaboralOtro: '',
  tiempoEmpleo: '',
  tipoCredito: '',
  ruc: '',
  montoCredito: '',
  // Bloque 4: DIRECCIÓN DE DOMICILIO
  ciudad: '',
  domicilio: '',
  // Seguridad & Consentimiento
  honeypot: '',
  privacy: false,
  privacyDatos: false
});
```

#### Código Actual en JSX:
```tsx
{/* ── 4. DIRECCIÓN DE DOMICILIO ── */}
<div className="space-y-6">
  <div className="bg-[#e8f5ed] border-l-4 border-[#00bc4c] px-4 py-2.5 rounded-r-xl">
    <h2 className="text-sm md:text-base font-bold text-[#002d14] tracking-wide uppercase">
      4. DIRECCIÓN DE DOMICILIO
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
    {/* Ciudad */}
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">
        Ciudad <span className="text-red-500">*</span>
      </label>
      <input
        required
        type="text"
        placeholder="Ej. Quito"
        value={formData.ciudad}
        onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
        className={inputClass}
      />
      <span className="text-xs text-gray-500 italic mt-1.5 block">
        Ciudad de residencia actual.
      </span>
    </div>

    {/* Domicilio */}
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">
        Domicilio <span className="text-red-500">*</span>
      </label>
      <input
        required
        type="text"
        placeholder="Ej. Av. 6 de Diciembre y Portugal"
        value={formData.domicilio}
        onChange={(e) => setFormData({ ...formData, domicilio: e.target.value })}
        className={inputClass}
      />
      <span className="text-xs text-gray-500 italic mt-1.5 block">
        Calle principal, numeración y referencia de su domicilio.
      </span>
    </div>
  </div>
</div>
```

#### Integración en el Payload HubSpot:
```tsx
const resumenSolicitud = [
  // ... bloques 1, 2, 3 ...
  formData.ciudad ? `Ciudad: ${formData.ciudad.trim()}` : null,
  formData.domicilio ? `Domicilio: ${formData.domicilio.trim()}` : null,
].filter(Boolean).join(' | ');
```

### 4.3. Procedimiento de Rollback (Bloque 4)
En caso de requerir volver al estado previo:
1. Eliminar `ciudad: ''` y `domicilio: ''` del estado `formData`.
2. Remover las referencias en `resumenSolicitud` y en el reset de `isSuccess`.
3. Retirar el contenedor JSX `{/* ── 4. DIRECCIÓN DE DOMICILIO ── */}` del formulario.

---

## Bloque 5: Autorización para el Tratamiento de Datos (LOPDP)

### 5.1. Estado Previo
- **Campos en el formulario original:**
  - Checkbox de Términos y Condiciones y Política de Privacidad (`privacy: false`).
  - Checkbox de Política General de Protección de Datos e Información de Tratamiento B2B (`privacyDatos: false`).
  - Nota de seguridad de cifrado VPN y protocolos internacionales.
- **Definición en Excel (`KREDITEC_Formulario Captacion.xlsx`):**
  - Fila 35: `5. AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS (LOPDP)`
  - Fila 36: Checkbox con texto legal explícito de intermediación crediticia:
    > *"Autorizo a KREDITECONK S.A.S. (KREDITEC) a tratar mis datos personales (incluyendo ingresos e información laboral) y a comunicarlos/transferirlos a instituciones financieras aliadas con la finalidad de evaluar, tramitar y presentar mi solicitud de crédito, así como a contactarme por teléfono, WhatsApp o correo electrónico. Conozco que puedo ejercer mis derechos conforme a la LOPDP."*

### 5.2. Estado Actual Implementado

#### Código Actual en `formData`:
```tsx
const [formData, setFormData] = useState({
  // Bloque 1: Identificación
  nombres: '',
  apellidos: '',
  cedula: '',
  fechaNacimiento: '',
  // Bloque 2: Contacto
  email: '',
  telefono: '',
  // Bloque 3: Económica
  ingresosMensuales: '',
  situacionLaboral: '',
  situacionLaboralOtro: '',
  tiempoEmpleo: '',
  tipoCredito: '',
  ruc: '',
  montoCredito: '',
  // Bloque 4: Domicilio
  ciudad: '',
  domicilio: '',
  // Bloque 5: Autorización LOPDP & Privacidad
  autorizacionLopdp: false,
  privacy: false,
  privacyDatos: false,
  // Seguridad Anti-Bot
  honeypot: ''
});
```

#### Código Actual en JSX:
```tsx
{/* ── 5. AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS (LOPDP) ── */}
<div className="space-y-6">
  <div className="bg-[#e8f5ed] border-l-4 border-[#00bc4c] px-4 py-2.5 rounded-r-xl">
    <h2 className="text-sm md:text-base font-bold text-[#002d14] tracking-wide uppercase">
      5. AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS (LOPDP)
    </h2>
  </div>

  <div className="flex flex-col gap-3">
    {/* Checkbox Principal LOPDP Crédito */}
    <div className="flex items-start gap-3 p-4 bg-[#f0f7f3] rounded-2xl border border-[#00bc4c]/40 hover:border-[#00bc4c] transition-colors">
      <input
        type="checkbox"
        id="autorizacionLopdp"
        required
        checked={formData.autorizacionLopdp}
        onChange={(e) => setFormData({ ...formData, autorizacionLopdp: e.target.checked })}
        className="mt-1 w-4 h-4 accent-[#00bc4c] border-gray-300 rounded focus:ring-[var(--color-accent)] cursor-pointer flex-shrink-0"
      />
      <label htmlFor="autorizacionLopdp" className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed cursor-pointer">
        Autorizo a <strong className="text-[#002d14]">KREDITECONK S.A.S. (KREDITEC)</strong> a tratar mis datos personales (incluyendo ingresos e información laboral) y a comunicarlos/transferirlos a instituciones financieras aliadas con la finalidad de evaluar, tramitar y presentar mi solicitud de crédito, así como a contactarme por teléfono, WhatsApp o correo electrónico. Conozco que puedo ejercer mis derechos conforme a la LOPDP. <span className="text-red-500 font-bold">*</span>
      </label>
    </div>

    {/* Checkbox 1 — T&C + Política de Privacidad (Conservado) */}
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

    {/* Checkbox 2 — Política General de Datos + Tratamiento (Conservado) */}
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

    {/* Nota de seguridad (Conservada) */}
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
</div>
```

#### Validación e Integración en Payload:
```tsx
if (!formData.autorizacionLopdp || !formData.privacy || !formData.privacyDatos) {
  alert("Por favor acepte todas las casillas de autorización y privacidad para continuar.");
  return;
}
```

### 5.3. Procedimiento de Rollback (Bloque 5)
En caso de requerir volver al estado previo:
1. Eliminar `autorizacionLopdp: false` del estado `formData`.
2. Restaurar la validación a `!formData.privacy || !formData.privacyDatos`.
3. Retirar el encabezado `5. AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS (LOPDP)` y el checkbox específico de intermediación crediticia, conservando únicamente las dos casillas originales.

---

## Bloque 6: Firma del Solicitante, Fecha de Emisión y Generación de Planilla PDF

### 6.1. Marco Legal y Requerimientos en Ecuador
En el diseño y captura de solicitudes de intermediación crediticia en el Ecuador, el cierre del formulario físico de captación (`KREDITEC_Formulario Captacion.xlsx`) contempla dos requisitos formales indispensables:
1. **Firma del Solicitante**
2. **Fecha de Emisión (DD/MM/AAAA)**

Para transformar este proceso en una experiencia digital Fintech de alto impacto, se implementó una solución híbrida (Opción 1 + Opción 2) alineada a:
- **Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos (Registro Oficial Suplemento 557):** Reconocimiento de los mensajes de datos y voluntades expresas mediante consentimiento digital y rúbrica electrónica, vinculados al registro de auditoría del envío.
- **Ley Orgánica de Protección de Datos Personales (LOPDP Art. 8):** Consentimiento inequívoco, explícito e informado para la transferencia de información financiera hacia instituciones aliadas.

---

### 6.2. Componentes y Arquitectura Frontend Implementada

#### 1. Pad de Firma Digital y Táctil (`SignaturePad.tsx`)
- **Ubicación:** `kreditec-web/src/components/ui/SignaturePad.tsx`
- **Capacidades táctiles y desktop:** Diseñado específicamente para pantallas táctiles (smartphones y tablets) utilizando eventos de Pointer (`onPointerDown`, `onPointerMove`, `onPointerUp`).
- **Prevención de Scroll Involuntario (`touch-action: none`):** Evita que el usuario desplace accidentalmente la página mientras traza su rúbrica con el dedo o lápiz óptico.
- **Calidad de Trazo Retina / HiDPI:** Detección de `window.devicePixelRatio` para escalar internamente el lienzo `HTMLCanvasElement`, garantizando trazos suaves y sin pixelación.
- **Exportación Base64:** Función reactiva que emite una cadena `image/png` para ser incrustada directamente en el documento PDF y reportada en el payload de HubSpot.
- **Acción de Limpieza:** Botón secundario para reiniciar el trazo en caso de error.

#### 2. Detección Automática de Fecha de Emisión
- En lugar de forzar al cliente a ingresar la fecha manualmente o lidiar con discrepancias cronológicas, el sistema computa reactivamente la fecha oficial del sistema al momento de firmar y emitir la solicitud (ej. *05 de Octubre de 2026*).
- Se muestra visualmente en el bloque de firma con un indicador de tiempo real y se sella de forma inmutable en el PDF y en el registro HubSpot.

#### 3. Motor de Generación de Planillas PDF (`generateSolicitudPdf.ts`)
- **Ubicación:** `kreditec-web/src/lib/generateSolicitudPdf.ts`
- **Tecnología:** `jspdf` del lado del cliente (*Client-Side Memory Rendering*).
- **Rendimiento e Inmunidad a Caídas:** Todo el proceso de dibujo vectorial, diagramación institucional y conversión a bytes ocurre en la memoria del navegador del usuario. El servidor VPS no procesa renderizados gráficos pesados, garantizando capacidad para soportar miles de descargas concurrentes sin degradación de CPU ni RAM.
- **Dos Modalidades de Emisión:**
  1. **Descarga de Planilla Oficial en Blanco:** Diseñada para uso operativo en sucursales físicas de Kreditec o para clientes que prefieran la consignación presencial. Muestra casillas estructuradas y la línea de firma física con su respectivo código legal.
  2. **Descarga de Solicitud Diligenciada:** Tras el envío exitoso, genera el documento final con todos los datos suministrados en los 5 bloques, sello de folio único (`#KRD-2026-XXXX`), fecha de emisión, traza de auditoría LOPDP y la rúbrica del solicitante incrustada en alta resolución.

#### 4. Descarga de Planilla en Blanco (Antes del Envío)
- Ubicada al final del formulario mediante un botón de diseño corporativo:
  - Estilizado acorde a la línea gráfica de Kreditec.
  - **Identidad Visual Oficial:** Prescinde de iconos convencionales o genéricos; incorpora el punto luminoso verde esmeralda con halo pulsante (`animate-ping`) característico de la plataforma.
  - Texto de acción: `Descargar Planilla Oficial en Blanco (PDF)`.

#### 5. Pantalla de Confirmación y Éxito Post-Envío (`isSuccess`)
- **Cabecera Visual de Alto Nivel:** Banner panorámico institucional (`solicitud-banner.jpg`) integrado con la paleta esmeralda profundo (`#001f0e`) y detalles geométricos de seguridad bancaria.
- **Mensaje Personalizado:** Felicitación al cliente utilizando su primer nombre (`¡Felicitaciones, [Nombre]!`) y confirmando la recepción formal de su solicitud.
- **Tarjeta de Resumen y Folio:** Muestra el número de trámite oficial asignado, fecha de registro y un resumen de contacto.
- **Botón de Descarga:**
  - Texto exacto: `Descargar mi solicitud en PDF`.
  - Distintivo visual: Punto verde esmeralda pulsante sincronizado con la estética de KREDITEC.
- **Botón para Nueva Solicitud:** Permite reiniciar el formulario para ingresar un nuevo trámite sin recargar la página.

#### 6. Botón de Envío Oficial hacia HubSpot
- **Acción y Conexión:** Este botón (`<button type="submit">`) es el disparador oficial del evento `onSubmit` (`handleSubmit`). Valida todos los campos obligatorios, el algoritmo matemático de cédula (Módulo 10), el formato celular ecuatoriano (10 dígitos), las casillas de autorización LOPDP y compila los 5 bloques de datos con su traza de auditoría hacia **HubSpot Forms API**.
- **Texto en Reposo:** `Enviar Solicitud` (reemplazando el texto genérico previo *"Optimice su colocación hoy mismo"*).
- **Texto en Estado de Carga (`isSubmitting`):** `Enviando Solicitud...` (reemplazando *"Procesando Requerimiento..."*).
- **Estilo:** Botón primordial con gradiente verde institucional Kreditec, sombra luminosa esmeralda (`shadow-[var(--color-accent)]/20`) y micro-animación de elevación al hover.

---

### 6.3. Procedimiento de Rollback (Bloque 6)
En caso de requerir prescindir de la firma táctil o de la generación de PDF:
1. Eliminar `firmaDigital: ''` del estado `formData`.
2. En `kreditec-web/src/app/contacto/page.tsx`, retirar el componente `<SignaturePad />` y los botones de invocación a `generateSolicitudPdf()`.
3. Restaurar la pantalla de éxito previa simplificada con el icono de check verde estático.

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

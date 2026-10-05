# Historial y Control de Versiones: Formulario de Captación Kreditec

> **Ruta:** `https://kreditecsa.com/contacto`  
> **Archivo fuente:** [`kreditec-web/src/app/contacto/page.tsx`](file:///c:/Users/hp/OneDrive/Documentos/Eventos%20Prime/00%20-%20Contratistas/Nicolle/kreditec/kreditec-web/src/app/contacto/page.tsx)  
> **Documento de especificación:** `KREDITEC_Formulario Captacion.xlsx`  
> **Objetivo:** Registro incremental de los 5 bloques de ajuste para permitir trazabilidad, rollback granular y auditoría continua de seguridad y rendimiento.

---

## Índice de Bloques

- [Bloque 1: Datos de Identificación](#bloque-1-datos-de-identificación) *(Implementado)*
- [Bloque 2: Datos de Contacto](#bloque-2-datos-de-contacto) *(Pendiente)*
- [Bloque 3: Información Económica](#bloque-3-información-económica) *(Pendiente)*
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
*(En espera de definición y aplicación incremental)*

---

## Bloque 3: Información Económica
*(En espera de definición y aplicación incremental)*

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
| **Cuello de Botella Potencial** | HubSpot Forms API tiene un rate-limit por portal (normalmente ~100 peticiones por 10 segundos). En un ataque masivo de bots, HubSpot retornará `429 Too Many Requests`. | **Mitigación recomendada abajo** |

---

### 2. Auditoría de Seguridad (Vulnerabilities & Protection)

#### ✅ Puntos Fuertes Implementados:
1. **Prevención de XSS:** React escapa de forma nativa cualquier interpolación en el DOM virtual. No existen usos de `dangerouslySetInnerHTML` en los inputs.
2. **Sanitización Estricta de Cédula:** El `onChange` filtra mediante expresión regular `replace(/\D/g, '')`, impidiendo la inyección de caracteres maliciosos, comillas o scripts.
3. **No Exposición de Secretos de Servidor:** No hay tokens privados de API ni claves maestras en el cliente; los IDs de formulario y portal de HubSpot son identificadores públicos por diseño.

#### ⚠️ Huecos Identificados y Recomendaciones de Seguridad:

1. **Ausencia de Protección contra Bots (Spam / DDoS al CRM):**
   - *Riesgo:* Al no haber un mecanismo anti-bot, un atacante o script automatizado podría enviar miles de formularios basura saturando el CRM.
   - *Solución recomendada:* 
     - **Técnica Honeypot (Silenciosa):** Añadir un campo oculto por CSS (ej. `website` o `comentarios_adicionales`). Si un bot lo llena, el formulario se aborta silenciosamente sin alertar al bot.
     - **Cloudflare Turnstile:** Para picos masivos o campañas publicitarias de alta concurrencia.
2. **Validación del Algoritmo de Cédula Ecuatoriana (Módulo 10 / Luhn):**
   - *Riesgo:* Actualmente se valida que tenga 10 dígitos, pero no que sea una cédula válida ante el Registro Civil de Ecuador (ej: `1111111111` pasaría la validación de longitud pero no es real).
   - *Solución:* Se puede integrar la función de validación de cédula ecuatoriana (código de provincia 01-24, tercer dígito < 6 y dígito verificador).
3. **Protección LOPDP (Datos Personales Sensibles):**
   - La cédula y fecha de nacimiento son datos personales según la legislación ecuatoriana. El formulario ya cuenta con las cláusulas de consentimiento expreso para KREDITECONK S.A.S. en el Bloque 5.

---
description: Despliegue de Kreditec en un VPS nuevo de Hostinger
---

# Deploy Kreditec → VPS Hostinger (dominio real)

## Requisitos previos
- Acceso SSH al VPS nuevo (usuario root o con sudo)
- Node.js >= 18 instalado en el VPS
- PM2 instalado globalmente (`npm install -g pm2`)
- Nginx instalado (`apt install nginx`)
- El dominio ya apuntando al IP del VPS (DNS propagado)

---

## PASO 1 — Actualizar el dominio en el código (hacerlo ANTES del deploy)

En local, cambiar estas 2 líneas y hacer push a GitHub:

**`kreditec-web/src/app/sitemap.ts` línea 4:**
```ts
const baseUrl = 'https://TU-DOMINIO-REAL.com'; // ej: https://kreditec.com.ec
```

**`kreditec-web/src/app/robots.ts` línea 10:**
```ts
sitemap: 'https://TU-DOMINIO-REAL.com/sitemap.xml',
```

Luego commit y push:
```bash
git add kreditec-web/src/app/sitemap.ts kreditec-web/src/app/robots.ts
git commit -m "config: dominio real en sitemap y robots"
git push origin main
```

---

## PASO 2 — Conectarse al VPS nuevo por SSH

```bash
ssh root@IP-DEL-VPS-NUEVO
```

---

## PASO 3 — Clonar el repositorio

```bash
git clone https://github.com/eventosprimeai/kreditec.git /var/www/kreditec
```

---

## PASO 4 — Instalar dependencias y construir

```bash
cd /var/www/kreditec/kreditec-web
npm install
npm run build
```

---

## PASO 5 — Iniciar con PM2

```bash
pm2 start npm --name "kreditec" -- start
pm2 save
pm2 startup
```

> El comando `pm2 startup` genera una línea que debes copiar y ejecutar para que PM2 arranque automáticamente si el VPS se reinicia.

---

## PASO 6 — Configurar Nginx como proxy reverso

Crear el archivo de configuración de Nginx:

```bash
nano /etc/nginx/sites-available/kreditec
```

Pegar este contenido (reemplazar `TU-DOMINIO-REAL.com`):

```nginx
server {
    listen 80;
    server_name TU-DOMINIO-REAL.com www.TU-DOMINIO-REAL.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activar el sitio:

```bash
ln -s /etc/nginx/sites-available/kreditec /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

---

## PASO 7 — Instalar SSL gratuito con Certbot (HTTPS)

```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d TU-DOMINIO-REAL.com -d www.TU-DOMINIO-REAL.com
```

Certbot configura el HTTPS automáticamente y renueva el certificado solo.

---

## PASO 8 — Verificar que todo funciona

```bash
pm2 list                         # kreditec debe estar "online"
curl http://localhost:3000        # debe responder con HTML
```

Abrir en el navegador: `https://TU-DOMINIO-REAL.com` ✅

---

## Para futuros deploys (actualizaciones)

Una vez instalado, para subir cambios al VPS real basta con:

```bash
cd /var/www/kreditec/kreditec-web && git pull origin main && npm install && npm run build && pm2 restart kreditec
```

# Electroservicios Villa Prat

Proyecto web para mostrar servicios eléctricos y permitir el contacto vía formulario y WhatsApp.

## Tecnologías principales
- **Frontend:** React + Vite + TypeScript + TailwindCSS
- **Componentes UI:** shadcn/ui, Radix UI
- **Backend:** Node.js + Express (API para contacto)
- **Email:** Nodemailer (envío de mensajes del formulario a Gmail)

## Estructura del proyecto
- `src/` — Código fuente del frontend (componentes, páginas, hooks)
- `server.js` — Servidor Express para manejar el formulario de contacto
- `api/contact.ts` — (versión handler para backend, no usada en Express)
- `.env` — Variables de entorno (NO subir a git)

## Instalación y uso

1. **Clona el repositorio y entra en la carpeta:**
   ```bash
   git clone <url-del-repo>
   cd electroservicios-villa-prat-main
   ```
2. **Instala dependencias:**
   ```bash
   npm install
   ```
3. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz con:
   ```env
   GMAIL_USER=tu_email@gmail.com
   GMAIL_APP_PASSWORD=tu_app_password
   ```
4. **Levanta el backend:**
   ```bash
   node server.js
   ```
   (Asegúrate de tener Node.js v18+ y el puerto 5000 libre)
5. **Levanta el frontend:**
   ```bash
   npm run dev
   ```
   Accede a `http://localhost:5173` (o el puerto que indique Vite)

## Uso del formulario de contacto
- El formulario envía los datos a `http://localhost:5000/api/contact`.
- El backend reenvía el mensaje al correo configurado en `.env`.
- El botón de WhatsApp abre un chat con mensaje predefinido.

## Scripts útiles
- `npm run dev` — Inicia el frontend
- `node server.js` — Inicia el backend
- `npm run build` — Compila el frontend para producción
- `npm run lint` — Linting del código

## Notas de seguridad
- **No subas tu archivo `.env` ni credenciales al repositorio.**
- Cambia las credenciales de Gmail por seguridad si las compartiste.

## Despliegue
- Para producción, usa servicios como Vercel/Netlify (frontend) y un VPS/Render/Fly.io para el backend.
- Configura correctamente variables de entorno en el servidor.

---

¿Dudas? Contacta a los desarrolladores o abre un issue.

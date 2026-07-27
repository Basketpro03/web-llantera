# Memory – Super Llantas Sato / Claude Code

Archivo de referencia para sesiones de trabajo con Claude Code en este proyecto.
Última actualización: 2026-07-27

---

## Sobre el usuario

- Se comunica **en español**, de forma conversacional e informal.
- Sus mensajes a veces llegan en fragmentos cortos o estilo voz-a-texto (ej. "porque a mi no me aparece el .html").
- No escribe código; delega **todo lo técnico** a Claude y se enfoca en el resultado visual y de contenido.
- Da retroalimentación directa y concisa: "se ve muy raro", "elimina eso", "ponle más grande".
- Cuando algo no le gusta, lo dice de inmediato sin rodeos. Cuando algo está bien, simplemente continúa.
- Entrega archivos (imágenes, documentos) colocándolos en la carpeta del proyecto y avisando el nombre.

---

## Cómo pide las cosas

- Las instrucciones llegan de **una en una** o en grupos cortos, nunca como spec completo de una sola vez.
- Cuando pide algo visual, suele describir el resultado esperado, no cómo lograrlo técnicamente.
- Algunas veces cita frases literales del sitio para ubicarse (ej. "donde dice 'Superllantas Sato, expertos en llantas...'").
- Espera que Claude interprete el contexto aunque la instrucción sea ambigua.

---

## El proyecto

**Sitio:** Super Llantas Sato — sitio web oficial  
**Ruta:** `C:\claudecode\webllantera\` (antes estaba en `D:\CLAUDE CODE\WEB LLANTERA\`)  
**Tecnología:** HTML / CSS / JS puro (sin frameworks)  
**Estado:** En desarrollo activo — formulario ya funcional con EmailJS (2026-07-12)

### Restricciones fijas (nunca incluir)
- Formulario o sección de **agendar citas**
- Referencias a que es **empresa familiar**

### Datos del negocio (verificados por el usuario)
- Razón social: Super Llantas Sato S.A. de C.V.
- Fundada: **1979** (45+ años)
- Sucursales activas: **3** (originalmente 4, el usuario eliminó Guasave del sitio el 2026-07-12)
  1. Rafael Buelna – Mazatlán, Sinaloa — Tel. 669 112-0330
  2. Barrancos – Culiacán, Sinaloa — Tel. 667 714-6653
  3. La Paz – BCS — Tel. 612 123-1477
- WhatsApp único: **669 981-0810** (wa.me/526699810810)
- Email: **social@llantassato.com**
- Facebook / Instagram: **@llantassato**
- Horario: Lun–Vie 8:00am–6:30pm · Sáb 8:00am–2:00pm · Dom Cerrado
- Marcas de llantas (actualizado 2026-07-12, reemplaza lista anterior de 8 marcas):
  **Cooper, Goodyear, Michelin, Blackhawk, iLink, Mirage, Winrun, Antares, Broadpeak** (9 en total)
  - El usuario pidió explícitamente que las marcas más reconocidas (Cooper, Goodyear, Michelin) aparezcan primero en la cuadrícula/carrusel, y que el sitio comunique "más de 8 marcas" — el stat de la sección de números se cambió de `8` a `9+`.
  - Grid de marcas en escritorio pasó de 4 columnas (8 items, 2 filas) a 3 columnas (9 items, 3 filas exactas, sin fila huérfana).
  - "Antares" se dejó sin la palabra "Tires" para consistencia visual con las demás tarjetas (una sola palabra).
  - "Goodyear" se asumió como corrección de typo del usuario ("Goodyeat") — no confirmado explícitamente, validar si surge duda.
- El sitio se alojará próximamente en **GoDaddy** (hosting compartido / estático) — cualquier solución debe funcionar sin backend ni build tools (JS puro, CDNs públicos, o assets locales).

---

## Preferencias de diseño

- **Colores base:** Rojo `#CC0000`, negro `#111111`, blanco `#FFFFFF` — son los 3 colores del logo, paleta intocable
- **Tipografía (desde 2026-07-12):** `Sora` 600/700/800 para encabezados/marca/números/botones (`--font-heading`) + `Inter` 400-700 para cuerpo/formularios (`--font-body`). Reemplazó a Montserrat en el rediseño con Fable 5.
- Navbar **siempre oscura** (`background: #111111`), nunca transparente
- Logo actual: `logo_outline_navbar.png` (con outline blanco reconstruido y alpha real), `height: 90px` en navbar
- Hero con imagen de fondo (`llantera_buelna.png`) + overlay oscuro + sombra en textos para legibilidad. En móvil: `object-position: 84% center` (encuadra el letrero circular del logo) y overlay vertical más oscuro abajo.
- **Regla de secciones full-viewport (escritorio ≥1025px):** cada `.section` usa `min-height: calc(100vh - var(--navbar-h))` + flex centrado + `scroll-snap-type: y proximity`, y **todo su contenido debe caber sin scroll interno en ventanas desde ~650px de alto**. Los espaciados internos usan `clamp(..., Xvh, ...)` para comprimirse en pantallas bajas. Al agregar contenido a una sección, SIEMPRE volver a medir con Playwright (script en scratchpad, medir en alturas 720/800/900).
- `section[id] { scroll-margin-top: var(--navbar-h) }` para que el navbar fijo no tape los encabezados al navegar por anclas.
- Contraste: `--gray-lt` es `#6b6b6b` (se oscureció desde `#888` para cumplir AA 4.5:1).
- Grids con columnas fijas (no flex-wrap libre) para que las tarjetas queden alineadas
- El usuario nota rápidamente cuando un grid está desacomodado o una imagen se ve rara
- **Iconos: nunca emojis.** El usuario pidió explícitamente reemplazar todos los emojis de la UI (servicios, vehículos que atendemos) por **iconos SVG inline de Tabler Icons** (stroke 2px, color rojo de marca, fondo circular que se invierte a rojo sólido en hover). Aplicar este mismo criterio a cualquier ícono nuevo que se agregue — no usar emoji como ícono de interfaz.
- Microinteracciones consistentes en todo el sitio: `transform`/`opacity`/`color` con transición 250–350ms (nunca animar `width`/`height` directamente). Ejemplo aplicado en tarjetas de sucursales: barra superior que se despliega (`scaleX`), elevación de tarjeta (`translateY` + sombra), badge numerado que rota/cambia de forma, link que se desliza.
- Para "marcas/logos de terceros": el usuario prefiere **tarjetas de texto simples** (nombre de marca en tarjeta blanca con sombra) en vez de buscar/descargar logos reales — más simple y visualmente consistente. No asumir que hay que conseguir imágenes de logos a menos que lo pida explícitamente.

### UX móvil (≤768px) — decisiones del usuario (2026-07-12)
- **Carruseles horizontales deslizables** para Servicios, Marcas, Sucursales y Contacto (flex + `overflow-x: auto` + snap centrado con "peek" simétrico de las tarjetas vecinas, `padding: 0 10%`, tarjetas `width: 80%`). El usuario los pidió explícitamente para que la página se sienta compacta.
- `touch-action: pan-x` + `overflow-y: hidden` en los carruseles — sin esto, los gestos verticales dentro del carrusel se "atrapaban" (bug que el usuario reportó).
- **Auto-scroll SOLO en Servicios y Marcas**: desplazamiento continuo y lento (26 px/s vía requestAnimationFrame), se pausa al tocar (touchstart/pointerdown/wheel) y **reanuda solo** a los 4s. El usuario iteró 3 veces hasta llegar a esto: primero por-tarjeta, luego continuo sin reanudar, al final continuo + pausa + reanudación.
- "Vehículos que atendemos": cuadrícula 2 columnas con el último ítem (Agrícola) a fila completa centrada — no flex-wrap suelto.
- Imagen de "Nosotros" **oculta en móvil** (`display: none`) — el usuario la quitó para compactar.
- Marcas en móvil sigue siendo carrusel (el usuario rechazó explícitamente la cuadrícula 2-col que se probó: "devuelve las marcas a como estaban").

---

## Archivos clave

| Archivo | Descripción |
|---|---|
| `index.html` | Página principal (única) |
| `css/styles.css` | Todos los estilos |
| `js/main.js` | JS: navbar, menú, i18n, formulario, animaciones |
| `logo_outline_navbar.png` | **Logo en uso** (navbar y footer, 1228×740): outline blanco reconstruido + alpha real, generado desde `Logo outline.png` (ver lección abajo) |
| `logo.png` | Logo HD anterior (~1 MB), ya NO se usa en el sitio. Sin canal alpha real |
| `Logo outline.png` | Archivo fuente que trajo el usuario (2026-07-12); tampoco tenía alpha real (fondo ajedrezado pintado en píxeles) |
| `logo_original_backup.png` | Respaldo del logo previo al intento de quitar fondo (2026-06-17) — no borrar hasta confirmar que el logo final está bien |
| `llantera_buelna.png` | Foto de sucursal (~2.4 MB), usada como hero background |
| `investigacion_superllantas_sato.md` | Brief del proyecto con datos del negocio (sincronizado con lista de marcas actual) |
| `nosotros_llantera.jpg` | Foto de la sección "Nosotros" (2026-07-12): técnico con guantes trabajando una llanta/rin en taller limpio. Descargada de Unsplash (foto de Jimmy Nilsson Masth, licencia Unsplash gratuita, uso comercial sin atribución requerida), reemplaza la imagen remota anterior `viaja_seguro-es.jpg` del sitio viejo. |
| `Logo Solo S.png` | Emblema circular con la "S" solo (408×408, alpha real). Reapareció en la carpeta el 2026-07-13; es la FUENTE del favicon. |
| `favicon.png` | Favicon en uso (copia de `Logo Solo S.png`), referenciado por `<link rel="icon">` en `index.html`. Incluido en el ZIP de publicación. |

---

## Funcionalidades implementadas

- [x] **Sitio publicado y en vivo: https://llantassato.com** (hosting Vercel gratis, plan Hobby, cuenta `social-2498`; ver detalle completo en Pendientes → Publicación resuelta). Auto-deploy activo desde GitHub (`Basketpro03/web-llantera`, rama `master`) — cualquier `git push` publica solo.
- [x] Navbar fija oscura con hamburger menu (móvil)
- [x] Hero con imagen de fondo y overlay; CTA primario **"Pedir Información" → #informacion**, secundario "Ver Sucursales" (cambiado 2026-07-12 para conversión)
- [x] Sección de estadísticas (45+ años, 3 sucursales, 9+ marcas, 10 servicios)
- [x] Grid de 10 servicios (5 col escritorio / carrusel móvil)
- [x] Marcas: 9 tarjetas de texto (Cooper, Goodyear, Michelin primero) + vehículos que atienden + **banner CTA** ("¿No sabes qué llanta necesita tu vehículo? Te asesoramos gratis." → #informacion) al final de la sección
- [x] Texto de la sección Marcas: "Algunas de nuestras marcas son:" (pedido literal del usuario)
- [x] Sección "Nosotros" (imagen `nosotros_llantera.jpg` en escritorio, oculta en móvil)
- [x] 3 tarjetas de sucursales con dirección, teléfono, horario y enlace a Google Maps (grid de 3 col en escritorio)
- [x] Contacto: **5 tarjetas** (WhatsApp, correo, Facebook, Instagram, horario) — la de "Sitio Web" se eliminó (también del footer) a pedido del usuario. Escritorio: flex centrado 3+2; móvil: carrusel.
- [x] Formulario "Pedir Información" con validación + **checkbox "Prefiero que me contacten por WhatsApp"**
- [x] **EmailJS FUNCIONANDO (2026-07-12)** — credenciales reales en `js/main.js`: public key `wS6eiolZR9nTJH5l9`, service `service_0h2df8f`, template `template_x5nrkkp`. Envía a `social@llantassato.com` (Google Workspace). Probado end-to-end con Playwright (API respondió 200 OK) y por el usuario. El checkbox manda `prefer_whatsapp` = "Sí — Contactar por WhatsApp" / "No". Cuenta gratuita: 200 correos/mes.
- [x] Cambio de idioma ES / EN con `data-i18n` y localStorage
- [x] Animaciones de scroll con IntersectionObserver + stagger en grids (60ms/ítem, tope 360ms)
- [x] Secciones full-viewport con scroll-snap en escritorio (ver Preferencias de diseño)
- [x] Carruseles móviles con auto-scroll en Servicios/Marcas (ver UX móvil)
- [x] Diseño responsive (breakpoints: 1200px, 1024px, 768px, 480px)
- [x] Favicon configurado en `<head>` (roto actualmente — ver archivo faltante `Logo Solo S.png`)
- [x] Iconos SVG (Tabler Icons) en TODO el sitio — cero emojis (auditoría completa 2026-07-12: contacto, footer, checkmarks, banderas del selector de idioma, placeholder de imagen)
- [x] Logo del navbar/footer resuelto: `logo_outline_navbar.png` con outline blanco reconstruido y transparencia real (ver lección abajo)

### Pendientes
- [x] ~~Favicon roto~~ **RESUELTO (2026-07-13)**: el usuario volvió a colocar `Logo Solo S.png` en la carpeta (408×408, `Format32bppArgb` con alpha REAL — el único logo del proyecto con transparencia de verdad) y pidió usarlo como favicon. Se copió tal cual a `favicon.png` y `<link rel="icon">` apunta a `favicon.png`. El recorte sintético que se había generado antes desde `logo_outline_navbar.png` quedó descartado (sobrescrito).
- [ ] `design-system/llantera/MASTER.md` está **obsoleto/genérico** (paleta navy y tipografías que nunca se usaron, generado por la skill ui-ux-pro-max con categoría equivocada) — no usarlo como referencia; la referencia real es este archivo. Considerar borrarlo o regenerarlo.
- [x] **PUBLICACIÓN RESUELTA (2026-07-27) — sitio en vivo en Vercel (gratis), no Hostinger/GoDaddy.**
  - Se descartó el plan de comprar hosting Hostinger (pendiente de decisión desde 2026-07-21) — el usuario pidió explícitamente una opción **gratis**. Se compararon Netlify/Vercel/Cloudflare Pages/GitHub Pages; el usuario eligió **Vercel**.
  - Cuenta Vercel creada: usuario `social-2498`, proyecto `llantas-sato/superllantas-sato`. Login hecho vía CLI (`npx vercel login`, flujo de device code — el primer código expiró antes de confirmarlo, hubo que regenerar uno nuevo; normal si tarda en pegar el link).
  - Deploy hecho con `npx vercel --yes` desde una copia limpia del sitio (sin el repo git, sin `blender-5.2.0-windows-x64.msi` que estaba suelto en la carpeta). El primer deploy de un proyecto nuevo en Vercel **se asigna automáticamente a producción** (no hay "preview" real en el primer deploy).
  - **Dominio `llantassato.com` conectado** (dominio ya existía en GoDaddy, DNS delegado a Hostinger vía nameservers `ns1/ns2.dns-parking.com` — la gestión de DNS real se hace en **hPanel de Hostinger, cuenta `pollosato@gmail.com`** en modo suplantación, la misma que ya se había investigado el 2026-07-21). Registros DNS agregados/editados ahí (sin tocar los MX/SPF/CNAME de correo de Google Workspace):
    - `A @` → editado de `195.179.239.182` (IP vieja) a `216.198.79.1` (Vercel) — **NO agregar un segundo registro A**, hay que editar el existente o el sitio queda inconsistente.
    - `AAAA @ → 2a02:4780:...` (IPv6 del sitio viejo) — **se borró** (Vercel no pide AAAA propio; dejarlo habría hecho que visitantes con IPv6 siguieran viendo el sitio viejo).
    - `CNAME www` → editado de `llantassato.com` a `2ad646df4794bea7.vercel-dns-017.com`.
    - 2 registros `TXT` de verificación de propiedad (`vc-domain-verify=...`), **ambos con Nombre `_vercel`** (no `_vercel.www` — es un error que se cometió y corrigió en la sesión: aunque el TXT es para verificar `www.llantassato.com`, el host correcto es `_vercel.llantassato.com`, igual que el del dominio raíz; DNS permite varios TXT en el mismo nombre).
    - El apex (`llantassato.com`) quedó configurado con redirect 308 → `www.llantassato.com` (opción "Redirect apex domains to www", recomendada por Vercel, se dejó activada).
    - Nota: el panel de Vercel mostró brevemente "Invalid Configuration" en el dominio raíz después de corregir el TXT de `www` — era solo un estado de UI desfasado (el DNS y el sitio ya funcionaban bien verificado con `curl`); no asumir que hay un problema real solo por ese estado, confirmar con `curl -I` antes de alarmar al usuario.
  - **GitHub conectado a Vercel para auto-deploy**: repo `Basketpro03/web-llantera` (remoto `origin` que ya existía). Requirió que el usuario vinculara su cuenta de GitHub a Vercel manualmente desde el navegador (Vercel → Settings → Login Connections) y luego instalara/autorizara la app de Vercel en GitHub para ese repo (Project → Settings → Git → Connect Git Repository). Una vez conectado, cada `git push` a `master` dispara un deploy automático a producción — **ya no hace falta repetir el proceso manual de copiar archivos y correr `vercel --yes`** para futuros cambios; solo hay que comitear y pushear.
  - El directorio real del proyecto (`C:\claudecode\webllantera`) quedó linkeado al proyecto de Vercel via `vercel link` (creó `.vercel/` y `.env.local`, ambos ignorados por el `.gitignore` nuevo que se agregó — no comitear esos).
  - **Limpieza de la carpeta (2026-07-27):** `blender-5.2.0-windows-x64.msi` (349 MB, descarga suelta sin relación al proyecto) se movió a `~/Downloads`, no se borró. `sitio_para_hostinger.zip` (ya no sirve, el flujo de publicación ahora es Vercel) se borró con confirmación explícita del usuario. `favicon.png` (nunca había estado trackeado en git) se agregó al repo.
  - **Bug corregido en esta sesión:** el campo `prefer_whatsapp` del formulario (`js/main.js`) solo mandaba `"No"` en el correo cuando el usuario NO marcaba el checkbox de WhatsApp, en vez de una frase completa como en el caso "Sí". Se cambió a `"No — Contactar por WhatsApp"` / `"No — contact via WhatsApp"` para que sea consistente. Publicado vía el nuevo flujo de auto-deploy (push a `master`).
  - **Google Search Console: el usuario decidió NO configurarlo** (2026-07-27) — prefiere esperar a que Google reindexe el sitio por su cuenta en vez de verificar la propiedad y forzar el recrawl. El resultado de búsqueda de Google todavía muestra sitelinks del sitio viejo (Sucursales/Cotización/Menu/etc., URLs que ya no existen) — es esperado, se irá actualizando solo.
  - El sitio viejo (el que estaba en `195.179.239.182`) vive en **otra cuenta de Hostinger** que nunca se identificó ni fue necesaria — quedó completamente desconectada del dominio al cambiar los registros DNS, no hay que hacer nada más ahí.

---

## Lecciones aprendidas en este proyecto

- **No asumir la cantidad de sucursales** — el MD original decía 8, el usuario confirmó solo 4.
- **No crear el formulario de citas** aunque parezca lógico para una llantera.
- Cuando un grid "se ve raro", primero revisar si es flex-wrap vs. grid con columnas fijas.
- El usuario prefiere **una sola tarjeta de WhatsApp** con número global, no una por sucursal.
- Los mensajes de éxito y error del formulario deben actualizarse al cambiar idioma.
- Verificar el archivo MD de investigación antes de escribir cualquier dato del negocio (y mantenerlo sincronizado cuando el usuario cambie datos, ej. lista de marcas).
- Cuando el usuario pide cambiar un set de datos (ej. marcas), revisar también si hay un **stat numérico relacionado** que deba actualizarse (ej. "11+ marcas" → "8" → "9+").
- **El usuario quiere que se abra `index.html` en el navegador después de CADA cambio** (lo pidió explícitamente: "después de cada cambio abre el index"). Usar `start "" "C:\claudecode\webllantera\index.html"`.
- Al cambiar JS y probar en un navegador ya abierto, recordar al usuario recargar con **Ctrl+F5** — le pasó que probó el formulario con el `main.js` viejo en caché y el cambio "no aparecía".
- Textos que vienen del sistema i18n: si un elemento con `data-i18n` necesita un icono SVG, **incluir el SVG dentro del string de traducción** (patrón `veh1..5`, `nos-li1..5`, `inf-success`) — `setLanguage()` reemplaza `innerHTML` completo y borra cualquier icono hermano.
- Al cambiar el layout de escritorio de un grid que en móvil es carrusel, verificar que no se rompa el carrusel (pasó con `.contacto-grid`: `justify-content: center` heredado + overflow hacía inaccesible el inicio del carrusel; el fix fue `justify-content: flex-start` dentro del media query).

### Lecciones técnicas de los carruseles con auto-scroll (2026-07-12)
- `scroll-snap-type: mandatory` **pelea con el scroll programático** (el navegador re-encaja al punto de snap en cada frame y cancela el avance). Solución: poner `scroll-snap-type: none` inline mientras el auto-scroll corre, restaurarlo cuando el usuario interactúa.
- `el.scrollLeft` **se lee redondeado a entero**: con velocidades bajas (<1px por frame), sumar sobre el valor leído pierde el avance fraccionario y el carrusel nunca se mueve. Solución: acumular la posición en una variable float propia y solo escribir a `scrollLeft`.
- El auto-scroll respeta `prefers-reduced-motion: reduce` (no se activa).

### Verificación con Playwright (workflow establecido en esta sesión)
- Antes de dar por buena cualquier afirmación de layout ("cabe en la ventana", "el carrusel avanza", "no hay scroll horizontal"), **medirla de verdad** con un script de Playwright: medir alturas de sección vs. viewport en 720/800/900, muestrear `scrollLeft` en el tiempo, capturar screenshots de escritorio (1440px) y móvil (390px) y revisarlos visualmente.
- Los screenshots tras `scrollIntoView` necesitan `waitForTimeout(~900-1200ms)` para que las animaciones de scroll-reveal terminen (si no, las tarjetas salen semitransparentes y parece un bug de layout).

### `logo.png` / `Logo outline.png` — problema de transparencia (resuelto de forma pragmática, 2026-07-12)
- El archivo `logo.png` **no tiene canal alpha real** (`PixelFormat: Format24bppRgb`, confirmado con `System.Drawing`). Lo que parece "transparente" en visores es en realidad un fondo sólido gris claro (~RGB 244,244,244) pintado directamente en los píxeles.
- Por eso, sobre la navbar oscura se ve una caja/halo claro alrededor del logo — el `border-radius` que se usó en sesiones anteriores solo tapaba las esquinas, no resolvía el fondo.
- **Intento de fix (2026-06-17):** flood-fill por color desde los bordes para poner alpha=0 en el fondo. Dejó un halo blanco/claro en los bordes antialiased del logo. Quedó sin resolver.
- **2026-07-12 — el usuario proporcionó `Logo outline.png`:** tampoco tiene canal alpha real (mismo `Format24bppRgb`), y esta vez el "fondo transparente" del visor era literalmente un **patrón de cuadros ajedrezado pintado en los píxeles** (dos tonos ~RGB 244 y ~253 alternando cada ~18-20px — el patrón clásico que usan los editores para *indicar* transparencia, pero exportado sin el canal alpha real).
- **Hallazgo clave (confirmado con zoom a nivel de píxel):** el borde blanco del logo (alrededor del círculo negro y de las letras) **se funde directamente y sin ninguna separación con el fondo** — mismo tono, misma región conectada. Esto confirma lo que ya se sospechaba en la lección anterior: un color-key/flood-fill nunca puede distinguir "fondo a quitar" de "borde blanco de diseño" porque son literalmente el mismo color y están conectados.
- **Intento fallido:** se probó un algoritmo más sofisticado (detectar la alternancia periódica del patrón de cuadros vs. blanco sólido uniforme) para distinguir fondo de borde — el resultado salió manchado/rayado (falsos positivos y negativos dispersos), peor visualmente que el cuadriculado original. Se descartó.
- **Primer intento aplicado (fondo sólido):** reemplazar todo pixel claro por `#111111`. Funcionó pero borró el contorno blanco de diseño; el usuario rechazó el resultado: "No quiero que el círculo negro se funda con el fondo, quiero que todo el logo resalte (para eso era el outline blanco)".
- **SOLUCIÓN DEFINITIVA (la que funcionó):** *reconstruir* el contorno blanco en vez de intentar rescatarlo del original. Algoritmo: (1) máscara de "arte" = píxeles no-claros (círculo negro + letras rojas, que sí se distinguen perfectamente del fondo); (2) transformada de distancia chamfer 3-4 (dos pasadas, O(n), rápida incluso en PowerShell) desde la máscara de arte; (3) componer: arte con color original + anillo blanco sintetizado donde dist≤18px + rampa antialias de 3px + alpha=0 en el resto. Resultado: PNG con **transparencia real** donde el logo completo (con su outline blanco) resalta sobre cualquier fondo. Script de referencia: enfoque chamfer en PowerShell + System.Drawing + LockBits/Marshal.Copy.
- Archivo final: `logo_outline_navbar.png` (1228×740, usado en navbar y footer de `index.html`). A diferencia del primer intento, este SÍ funciona sobre cualquier fondo por tener alpha real.
- **Conclusión para el futuro:** cuando un logo tenga contorno del mismo color que el fondo a remover, no intentar separarlos por color (imposible, se comprobó 3 veces) — reconstruir el contorno con transformada de distancia sobre la máscara del arte es la vía confiable.
- Se guardó un respaldo en `logo_original_backup.png` antes de tocar nada (de la sesión anterior).

### Entorno técnico (Windows, esta máquina)
- **Python no está instalado de verdad** — `python`/`python3` son alias de Windows Store que fallan. No usar scripts Python para procesar imágenes en este entorno sin antes confirmar instalación.
- **ImageMagick no está instalado** (`magick`/`convert` no disponibles).
- **SÍ disponibles (confirmado 2026-07-12):** Node v24, npx, y **Playwright con Chromium ya instalado** (`npm install playwright` hecho en el scratchpad del job + `npx playwright install chromium`). Usarlo para toda verificación de layout/screenshots/comportamiento.
- **Para ver el sitio en el celular del usuario:** `npx http-server -p 8080 -a 0.0.0.0 -c-1` en la carpeta del proyecto; el usuario entra a `http://192.168.68.65:8080` (IP WiFi local, puede cambiar — verificar con `ipconfig`). Importante: escribir `http://` explícito (a él le salió "conexión no segura" porque el navegador forzaba HTTPS).
- **`Add-Type -Path` con C# que use `System.Drawing` falla** en este PowerShell (.NET con GDI+ rediseñado en assemblies internos `System.Private.Windows.GdiPlus` no referenciables). **Sí funciona** llamar a los métodos de `System.Drawing` directamente desde PowerShell interpretado (`[System.Drawing.Bitmap]`, `LockBits`, `[System.Runtime.InteropServices.Marshal]::Copy`, etc.) sin compilar una clase C# nueva. Para cualquier procesamiento de imagen a nivel de píxel en este proyecto, usar ese enfoque (PowerShell + System.Drawing por interop), no Add-Type.
- Procesar ~1.5M píxeles con flood-fill puro en PowerShell tomó ~150 segundos — funcional pero lento; si se necesita repetir, considerar pedir al usuario un archivo ya editado en vez de reprocesar.

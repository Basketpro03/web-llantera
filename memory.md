# Memory – Super Llantas Sato / Claude Code

Archivo de referencia para sesiones de trabajo con Claude Code en este proyecto.
Última actualización: 2026-06-17

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
**Ruta:** `D:\CLAUDE CODE\WEB LLANTERA\`  
**Tecnología:** HTML / CSS / JS puro (sin frameworks)  
**Estado:** En desarrollo activo

### Restricciones fijas (nunca incluir)
- Formulario o sección de **agendar citas**
- Referencias a que es **empresa familiar**

### Datos del negocio (verificados por el usuario)
- Razón social: Super Llantas Sato S.A. de C.V.
- Fundada: **1979** (45+ años)
- Sucursales activas: **4** (no 8 — el usuario lo corrigió explícitamente)
  1. Rafael Buelna – Mazatlán, Sinaloa — Tel. 669 112-0330
  2. Barrancos – Culiacán, Sinaloa — Tel. 667 714-6653
  3. La Paz – BCS — Tel. 612 123-1477
  4. Guasave – Sinaloa — Tel. 687 872-2345
- WhatsApp único: **669 981-0810** (wa.me/526699810810)
- Email: **social@llantassato.com**
- Facebook / Instagram: **@llantassato**
- Horario: Lun–Vie 8:00am–6:30pm · Sáb 8:00am–2:00pm · Dom Cerrado
- Marcas de llantas (actualizado 2026-06-17, reemplaza lista anterior de 11 marcas):
  **Blackhawk, iLink, Mirage, Winrun, Antares, Broadpeak, Cooper, Goodyear** (8 en total)
  - "Antares" se dejó sin la palabra "Tires" para consistencia visual con las demás tarjetas (una sola palabra).
  - "Goodyear" se asumió como corrección de typo del usuario ("Goodyeat") — no confirmado explícitamente, validar si surge duda.
- El sitio se alojará próximamente en **GoDaddy** (hosting compartido / estático) — cualquier solución debe funcionar sin backend ni build tools (JS puro, CDNs públicos, o assets locales).

---

## Preferencias de diseño

- **Colores base:** Rojo `#CC0000`, negro `#111111`, blanco `#FFFFFF`
- **Tipografía:** Montserrat (Google Fonts), pesos 400/600/700/800
- Navbar **siempre oscura** (`background: #111111`), nunca transparente
- Logo (`logo.png`) — tamaño `height: 90px` en navbar. **Ya no usa `border-radius`** (ver lección sobre transparencia abajo).
- Hero con imagen de fondo (`llantera_buelna.png`) + overlay oscuro + sombra en textos para legibilidad
- Grids con columnas fijas (no flex-wrap libre) para que las tarjetas queden alineadas
- El usuario nota rápidamente cuando un grid está desacomodado o una imagen se ve rara
- **Iconos: nunca emojis.** El usuario pidió explícitamente reemplazar todos los emojis de la UI (servicios, vehículos que atendemos) por **iconos SVG inline de Tabler Icons** (stroke 2px, color rojo de marca, fondo circular que se invierte a rojo sólido en hover). Aplicar este mismo criterio a cualquier ícono nuevo que se agregue — no usar emoji como ícono de interfaz.
- Microinteracciones consistentes en todo el sitio: `transform`/`opacity`/`color` con transición 250–350ms (nunca animar `width`/`height` directamente). Ejemplo aplicado en tarjetas de sucursales: barra superior que se despliega (`scaleX`), elevación de tarjeta (`translateY` + sombra), badge numerado que rota/cambia de forma, link que se desliza.
- Para "marcas/logos de terceros": el usuario prefiere **tarjetas de texto simples** (nombre de marca en tarjeta blanca con sombra) en vez de buscar/descargar logos reales — más simple y visualmente consistente. No asumir que hay que conseguir imágenes de logos a menos que lo pida explícitamente.

---

## Archivos clave

| Archivo | Descripción |
|---|---|
| `index.html` | Página principal (única) |
| `css/styles.css` | Todos los estilos |
| `js/main.js` | JS: navbar, menú, i18n, formulario, animaciones |
| `logo.png` | Logo HD (~1 MB). **Cuidado:** este archivo ha tenido fondo NO transparente más de una vez (ver lecciones abajo) |
| `logo_original_backup.png` | Respaldo del logo previo al intento de quitar fondo (2026-06-17) — no borrar hasta confirmar que el logo final está bien |
| `llantera_buelna.png` | Foto de sucursal (~2.4 MB), usada como hero background |
| `investigacion_superllantas_sato.md` | Brief del proyecto con datos del negocio (sincronizado con lista de marcas actual) |
| `Logo Solo S.png` | **Archivo faltante** — se usó para el favicon (ícono de pestaña) pero desapareció de la carpeta del proyecto a mitad de sesión sin que el usuario lo eliminara desde aquí. El `<link rel="icon">` en `index.html` apunta a este archivo y actualmente está roto. Pendiente: pedirle al usuario que lo vuelva a colocar, o generar un favicon nuevo a partir de `logo.png`. |

---

## Funcionalidades implementadas

- [x] Navbar fija oscura con hamburger menu (móvil)
- [x] Hero con imagen de fondo y overlay
- [x] Sección de estadísticas (45+ años, 4 sucursales, 11+ marcas, 10 servicios)
- [x] Grid de 10 servicios
- [x] Grid de 8 marcas (Blackhawk, iLink, Mirage, Winrun, Antares, Broadpeak, Cooper, Goodyear) + vehículos que atienden
- [x] Sección "Nosotros"
- [x] 4 tarjetas de sucursales con dirección, teléfono, horario y enlace a Google Maps
- [x] Sección de contacto (grid 3×2: WhatsApp, correo, Facebook, Instagram, horario, web)
- [x] Formulario "Pedir Información" con validación
- [x] Cambio de idioma ES / EN con `data-i18n` y localStorage
- [x] Animaciones de scroll con IntersectionObserver
- [x] Diseño responsive (breakpoints: 1200px, 1024px, 768px, 480px)
- [x] Favicon configurado en `<head>` (roto actualmente — ver archivo faltante `Logo Solo S.png`)
- [x] Iconos SVG (Tabler Icons) en servicios y "vehículos que atendemos", reemplazando todos los emojis
- [x] Animación hover en tarjetas de sucursales (barra superior, lift, badge, link)
- [x] Sección de marcas rediseñada: sin imagen remota lateral, grid full-width de 8 tarjetas de texto
- [ ] **Logo transparente — en progreso, no resuelto.** Ver lección detallada abajo.
- [ ] EmailJS para el formulario "Pedir Información" — código ya listo en `js/main.js`, **pausado a propósito**: faltan las 3 credenciales (Public Key, Service ID, Template ID) que el usuario debe generar en emailjs.com. Guía paso a paso ya se le dio; retomar cuando el usuario la traiga.

---

## Lecciones aprendidas en este proyecto

- **No asumir la cantidad de sucursales** — el MD original decía 8, el usuario confirmó solo 4.
- **No crear el formulario de citas** aunque parezca lógico para una llantera.
- Cuando un grid "se ve raro", primero revisar si es flex-wrap vs. grid con columnas fijas.
- El usuario prefiere **una sola tarjeta de WhatsApp** con número global, no una por sucursal.
- Los mensajes de éxito y error del formulario deben actualizarse al cambiar idioma.
- Verificar el archivo MD de investigación antes de escribir cualquier dato del negocio (y mantenerlo sincronizado cuando el usuario cambie datos, ej. lista de marcas).
- Cuando el usuario pide cambiar un set de datos (ej. marcas), revisar también si hay un **stat numérico relacionado** que deba actualizarse (ej. "11+ marcas" → "8").

### `logo.png` — problema de transparencia (recurrente, NO resuelto del todo)
- El archivo `logo.png` **no tiene canal alpha real** (`PixelFormat: Format24bppRgb`, confirmado con `System.Drawing`). Lo que parece "transparente" en visores es en realidad un fondo sólido gris claro (~RGB 244,244,244) pintado directamente en los píxeles.
- Por eso, sobre la navbar oscura se ve una caja/halo claro alrededor del logo — el `border-radius` que se usó en sesiones anteriores solo tapaba las esquinas, no resolvía el fondo.
- **Intento de fix (2026-06-17):** se hizo flood-fill por color desde los bordes de la imagen (vía PowerShell + `System.Drawing`, ver detalles técnicos abajo) para poner alpha=0 en el fondo. Funcionó para el fondo grande, pero **dejó un halo blanco/claro en los bordes antialiased del logo** (píxeles de transición entre el fondo y el arte que no eran lo bastante "background-like" para el umbral usado, pero tampoco son del color final del logo). El usuario reportó "se ve muy raro, deja un outline blanco alrededor del logo" — quedó pendiente un segundo pase de "erosión" del halo (crecer la zona transparente 1-3px hacia píxeles claros/grises contiguos) cuando se interrumpió la sesión.
- **Si se retoma:** lo más simple y confiable sería pedirle al usuario el logo ya exportado con transparencia real desde el diseño original (Illustrator/Photoshop/Figma con "Export PNG with transparency"), en vez de intentar recrear el alpha por color-key — el color-key nunca va a ser perfecto porque el contorno blanco del texto del logo es muy parecido en tono al fondo que se quiere quitar.
- Se guardó un respaldo en `logo_original_backup.png` antes de tocar nada.

### Limitaciones técnicas del entorno (Windows, esta máquina)
- **Python no está instalado de verdad** — `python`/`python3` son alias de Windows Store que fallan. No usar scripts Python para procesar imágenes en este entorno sin antes confirmar instalación.
- **ImageMagick no está instalado** (`magick`/`convert` no disponibles).
- **`Add-Type -Path` con C# que use `System.Drawing` falla** en este PowerShell (.NET con GDI+ rediseñado en assemblies internos `System.Private.Windows.GdiPlus` no referenciables). **Sí funciona** llamar a los métodos de `System.Drawing` directamente desde PowerShell interpretado (`[System.Drawing.Bitmap]`, `LockBits`, `[System.Runtime.InteropServices.Marshal]::Copy`, etc.) sin compilar una clase C# nueva. Para cualquier procesamiento de imagen a nivel de píxel en este proyecto, usar ese enfoque (PowerShell + System.Drawing por interop), no Add-Type.
- Procesar ~1.5M píxeles con flood-fill puro en PowerShell tomó ~150 segundos — funcional pero lento; si se necesita repetir, considerar pedir al usuario un archivo ya editado en vez de reprocesar.

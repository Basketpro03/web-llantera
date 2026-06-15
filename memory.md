# Memory – Super Llantas Sato / Claude Code

Archivo de referencia para sesiones de trabajo con Claude Code en este proyecto.
Última actualización: 2026-06-08

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

---

## Preferencias de diseño

- **Colores base:** Rojo `#CC0000`, negro `#111111`, blanco `#FFFFFF`
- **Tipografía:** Montserrat (Google Fonts), pesos 400/600/700/800
- Navbar **siempre oscura** (`background: #111111`), nunca transparente
- Logo (`logo.png`) con `border-radius` para tapar fondo del PNG; tamaño `height: 90px`
- Hero con imagen de fondo (`llantera_buelna.png`) + overlay oscuro + sombra en textos para legibilidad
- Grids con columnas fijas (no flex-wrap libre) para que las tarjetas queden alineadas
- El usuario nota rápidamente cuando un grid está desacomodado o una imagen se ve rara

---

## Archivos clave

| Archivo | Descripción |
|---|---|
| `index.html` | Página principal (única) |
| `css/styles.css` | Todos los estilos |
| `js/main.js` | JS: navbar, menú, i18n, formulario, animaciones |
| `logo.png` | Logo HD (~1 MB), PNG con transparencia |
| `llantera_buelna.png` | Foto de sucursal (~2.4 MB), usada como hero background |
| `investigacion_superllantas_sato.md` | Brief del proyecto con datos del negocio |

---

## Funcionalidades implementadas

- [x] Navbar fija oscura con hamburger menu (móvil)
- [x] Hero con imagen de fondo y overlay
- [x] Sección de estadísticas (45+ años, 4 sucursales, 11+ marcas, 10 servicios)
- [x] Grid de 10 servicios
- [x] Grid de 11 marcas + vehículos que atienden
- [x] Sección "Nosotros"
- [x] 4 tarjetas de sucursales con dirección, teléfono, horario y enlace a Google Maps
- [x] Sección de contacto (grid 3×2: WhatsApp, correo, Facebook, Instagram, horario, web)
- [x] Formulario "Pedir Información" con validación
- [x] Cambio de idioma ES / EN con `data-i18n` y localStorage
- [x] Animaciones de scroll con IntersectionObserver
- [x] Diseño responsive (breakpoints: 1200px, 1024px, 768px, 480px)

---

## Lecciones aprendidas en este proyecto

- **No asumir la cantidad de sucursales** — el MD original decía 8, el usuario confirmó solo 4.
- **No crear el formulario de citas** aunque parezca lógico para una llantera.
- Cuando un grid "se ve raro", primero revisar si es flex-wrap vs. grid con columnas fijas.
- El logo PNG tiene fondo gris si la navbar es transparente — solucionado con navbar siempre oscura.
- El usuario prefiere **una sola tarjeta de WhatsApp** con número global, no una por sucursal.
- Los mensajes de éxito y error del formulario deben actualizarse al cambiar idioma.
- Verificar el archivo MD de investigación antes de escribir cualquier dato del negocio.

// ── EmailJS ───────────────────────────────────────────────────────────────────
// Crea tu cuenta gratis en https://www.emailjs.com y reemplaza estos tres valores:
const EMAILJS_PUBLIC_KEY  = 'wS6eiolZR9nTJH5l9';   // Account → API Keys
const EMAILJS_SERVICE_ID  = 'service_0h2df8f';     // Email Services → Service ID
const EMAILJS_TEMPLATE_ID = 'template_x5nrkkp';    // Email Templates → Template ID

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

// ── Language switcher ──────────────────────────────────────────────────────────

const TRANSLATIONS = {
  es: {
    // Navbar
    'nav-inicio':    'Inicio',
    'nav-servicios': 'Servicios',
    'nav-marcas':    'Marcas',
    'nav-nosotros':  'Nosotros',
    'nav-sucursales':'Sucursales',
    'nav-contacto':  'Contacto',
    'nav-info':      'Pedir Información',

    // Hero
    'hero-sub':  'Super Llantas Sato &nbsp;·&nbsp; Desde 1979',
    'hero-h1':   'Expertos en <span>Llantas</span> y Servicio Automotriz',
    'hero-desc': '"La seguridad de todos es nuestra prioridad."',
    'hero-btn1': 'Pedir Información',
    'hero-btn2': 'Ver Sucursales',

    // Stats
    'stat-years':    'Años de experiencia',
    'stat-branches': 'Sucursales',
    'stat-brands':   'Marcas disponibles',
    'stat-services': 'Servicios especializados',

    // Services section
    'srv-tag':  'Lo que ofrecemos',
    'srv-h2':   'Nuestros Servicios',
    'srv-desc': 'Contamos con todo lo necesario para mantener tu vehículo en óptimas condiciones.',

    'svc1-h3': 'Montaje de Llantas',
    'svc1-p':  'Instalación profesional de llantas para todo tipo de vehículos: autos, camionetas, deportivos y más.',
    'svc2-h3': 'Balanceo Computarizado',
    'svc2-p':  'Balanceo de precisión para una marcha suave y mayor vida útil de tus llantas.',
    'svc3-h3': 'Alineación Computarizada',
    'svc3-p':  'Alineación de dirección para mejorar el manejo, reducir el desgaste y ahorrar combustible.',
    'svc4-h3': 'Rotación de Llantas',
    'svc4-p':  'Extendemos la vida de tus llantas con una rotación periódica y correcta.',
    'svc5-h3': 'Cambio de Aceite y Filtro',
    'svc5-p':  'Mantenimiento de motor con los mejores aceites y filtros del mercado.',
    'svc6-h3': 'Afinaciones',
    'svc6-p':  'Revisión y ajuste completo del motor para un rendimiento óptimo de tu vehículo.',
    'svc7-h3': 'Frenos y Suspensión',
    'svc7-p':  'Revisión, ajuste y cambio de frenos y suspensión para tu seguridad en el camino.',
    'svc8-h3': 'Inflado con Nitrógeno',
    'svc8-p':  'Mayor estabilidad en la presión, mejor rendimiento de combustible y menor desgaste.',
    'svc9-h3': 'Amortiguadores',
    'svc9-p':  'Cambio e instalación de amortiguadores para una conducción cómoda y segura.',
    'svc10-h3':'Mecánica General',
    'svc10-p': 'Diagnóstico y reparación general para mantener tu vehículo en perfectas condiciones.',

    // Brands
    'mrc-tag':       'Trabajamos con',
    'mrc-h2':        'Marcas Disponibles',
    'mrc-desc':      'Algunas de nuestras marcas son:',
    'mrc-cta-text':  '¿No sabes qué llanta necesita tu vehículo? Te asesoramos gratis.',
    'mrc-cta-btn':   'Pedir Información',
    'mrc-veh-label': 'Vehículos que atendemos',
    'veh1': '<svg class="veh-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" /></svg> Automóvil',
    'veh2': '<svg class="veh-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M16 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M5 9l2 -4h7.438a2 2 0 0 1 1.94 1.515l.622 2.485h3a2 2 0 0 1 2 2v3" /><path d="M10 9v-4" /><path d="M2 7v4" /><path d="M22.001 14.001a4.992 4.992 0 0 0 -4.001 -2.001a4.992 4.992 0 0 0 -4 2h-3a4.998 4.998 0 0 0 -8.003 .003" /><path d="M5 12v-3h13" /></svg> Camioneta',
    'veh3': '<svg class="veh-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 14l0 7" /><path d="M10 12l-6.75 -2" /><path d="M14 12l6.75 -2" /></svg> Deportivo',
    'veh4': '<svg class="veh-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /></svg> Camión',
    'veh5': '<svg class="veh-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M7 15l0 .01" /><path d="M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M10.5 17l6.5 0" /><path d="M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5" /><path d="M18 5h-1a1 1 0 0 0 -1 1v4" /></svg> Agrícola',

    // About
    'nos-tag': '¿Quiénes somos?',
    'nos-h2':  'Más de 45 años cuidando tu seguridad',
    'nos-p1':  '<strong>Super Llantas Sato S.A. de C.V.</strong> es una empresa fundada en 1979 con presencia en Sinaloa y Baja California Sur. Con más de 45 años en el mercado, nos hemos consolidado como líderes en venta de llantas y servicios automotrices en el noroeste de México.',
    'nos-p2':  'Contamos con 3 sucursales estratégicamente ubicadas y un equipo de técnicos certificados respaldados por equipo computarizado de última generación.',
    'nos-li1': '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg> Fundada en 1979',
    'nos-li2': '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg> 3 sucursales en Sinaloa y BCS',
    'nos-li3': '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg> Técnicos certificados',
    'nos-li4': '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg> Equipo computarizado de precisión',
    'nos-li5': '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg> Las mejores marcas de llantas',
    'nos-quote': '"La seguridad de todos es nuestra prioridad."',

    // Branches
    'suc-tag':   'Encuéntranos',
    'suc-h2':    'Nuestras Sucursales',
    'suc-desc':  'Visítanos en cualquiera de nuestras sucursales. ¡Estamos cerca de ti!',
    'suc-hours': 'Lun–Vie 8:00am–6:30pm &nbsp;·&nbsp; Sáb 8:00am–2:00pm',
    'suc-maps':  'Ver en Google Maps →',

    // Contact
    'con-tag':      'Comunícate con nosotros',
    'con-h2':       'Contacto',
    'con-desc':     'Estamos disponibles para resolver tus dudas y brindarte la mejor atención.',
    'con-email-h4': 'Correo Electrónico',
    'con-hours-h4': 'Horario de Atención',
    'con-hours-p':  'Lun–Vie: 8:00 am – 6:30 pm<br>Sábado: 8:00 am – 2:00 pm<br>Domingo: Cerrado',

    // Info form
    'inf-tag':       '¿Tienes dudas?',
    'inf-h2':        'Pedir Información',
    'inf-desc':      'Déjanos tus datos y con gusto te contactamos para resolver cualquier pregunta.',
    'inf-label-nombre': 'Nombre completo *',
    'inf-ph-nombre':    'Tu nombre',
    'inf-label-email':  'Correo electrónico *',
    'inf-ph-email':     'tu@correo.com',
    'inf-label-tel':    'Teléfono',
    'inf-ph-tel':       'Ej. 667 123 4567',
    'inf-label-suc':    'Sucursal más cercana',
    'inf-opt-suc':      'Selecciona una sucursal',
    'inf-label-tipo':   'Tipo de consulta *',
    'inf-opt-tipo0':    'Selecciona un tema',
    'inf-opt-tipo1':    'Información sobre llantas',
    'inf-opt-tipo2':    'Precios y disponibilidad',
    'inf-opt-tipo3':    'Servicios automotrices',
    'inf-opt-tipo4':    'Ubicación y horarios',
    'inf-opt-tipo5':    'Otra consulta',
    'inf-label-msg':    'Mensaje *',
    'inf-ph-msg':       'Escribe aquí tu pregunta o comentario...',
    'inf-label-wa':     'Prefiero que me contacten por WhatsApp',
    'inf-btn':          'Enviar Mensaje',
    'inf-success':      '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg> ¡Mensaje enviado! Nos pondremos en contacto contigo pronto.',

    // Footer
    'ftr-brand-p': 'Expertos en llantas y servicios automotrices con más de 45 años en el mercado. Sinaloa y Baja California Sur.',
    'ftr-nav-h4':  'Navegación',
    'ftr-srv-h4':  'Servicios',
    'ftr-srv2':    'Balanceo y Alineación',
    'ftr-hours1':  '<svg class="ftr-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7v5l3 3" /></svg> Lun–Vie: 8:00am – 6:30pm',
    'ftr-hours2':  '<svg class="ftr-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7v5l3 3" /></svg> Sáb: 8:00am – 2:00pm',
    'ftr-copy':    '© 2026 Super Llantas Sato S.A. de C.V. &nbsp;·&nbsp; Todos los derechos reservados.',
  },

  en: {
    // Navbar
    'nav-inicio':    'Home',
    'nav-servicios': 'Services',
    'nav-marcas':    'Brands',
    'nav-nosotros':  'About Us',
    'nav-sucursales':'Branches',
    'nav-contacto':  'Contact',
    'nav-info':      'Request Info',

    // Hero
    'hero-sub':  'Super Llantas Sato &nbsp;·&nbsp; Since 1979',
    'hero-h1':   'Experts in <span>Tires</span> and Automotive Service',
    'hero-desc': '"Safety for everyone is our priority."',
    'hero-btn1': 'Request Information',
    'hero-btn2': 'View Branches',

    // Stats
    'stat-years':    'Years of experience',
    'stat-branches': 'Branches',
    'stat-brands':   'Available brands',
    'stat-services': 'Specialized services',

    // Services section
    'srv-tag':  'What we offer',
    'srv-h2':   'Our Services',
    'srv-desc': 'We have everything you need to keep your vehicle in optimal condition.',

    'svc1-h3': 'Tire Mounting',
    'svc1-p':  'Professional tire installation for all vehicle types: cars, trucks, sports vehicles, and more.',
    'svc2-h3': 'Computerized Balancing',
    'svc2-p':  'Precision balancing for a smooth ride and longer tire life.',
    'svc3-h3': 'Computerized Alignment',
    'svc3-p':  'Steering alignment to improve handling, reduce tire wear, and save fuel.',
    'svc4-h3': 'Tire Rotation',
    'svc4-p':  'We extend your tire life with timely and proper rotation.',
    'svc5-h3': 'Oil and Filter Change',
    'svc5-p':  'Engine maintenance with the best oils and filters on the market.',
    'svc6-h3': 'Tune-ups',
    'svc6-p':  'Full engine review and adjustment for optimal vehicle performance.',
    'svc7-h3': 'Brakes and Suspension',
    'svc7-p':  'Review, adjustment, and replacement of brakes and suspension for your road safety.',
    'svc8-h3': 'Nitrogen Inflation',
    'svc8-p':  'Greater pressure stability, better fuel efficiency, and reduced tire wear.',
    'svc9-h3': 'Shock Absorbers',
    'svc9-p':  'Replacement and installation of shock absorbers for a comfortable and safe ride.',
    'svc10-h3':'General Mechanics',
    'svc10-p': 'General diagnosis and repair to keep your vehicle in perfect condition.',

    // Brands
    'mrc-tag':       'We work with',
    'mrc-h2':        'Available Brands',
    'mrc-desc':      'Some of our brands include:',
    'mrc-cta-text':  'Not sure which tire your vehicle needs? We\'ll advise you for free.',
    'mrc-cta-btn':   'Request Information',
    'mrc-veh-label': 'Vehicles we serve',
    'veh1': '<svg class="veh-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" /></svg> Car',
    'veh2': '<svg class="veh-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M16 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M5 9l2 -4h7.438a2 2 0 0 1 1.94 1.515l.622 2.485h3a2 2 0 0 1 2 2v3" /><path d="M10 9v-4" /><path d="M2 7v4" /><path d="M22.001 14.001a4.992 4.992 0 0 0 -4.001 -2.001a4.992 4.992 0 0 0 -4 2h-3a4.998 4.998 0 0 0 -8.003 .003" /><path d="M5 12v-3h13" /></svg> Truck / SUV',
    'veh3': '<svg class="veh-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 14l0 7" /><path d="M10 12l-6.75 -2" /><path d="M14 12l6.75 -2" /></svg> Sports',
    'veh4': '<svg class="veh-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /></svg> Heavy Truck',
    'veh5': '<svg class="veh-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M7 15l0 .01" /><path d="M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M10.5 17l6.5 0" /><path d="M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5" /><path d="M18 5h-1a1 1 0 0 0 -1 1v4" /></svg> Agricultural',

    // About
    'nos-tag': 'Who are we?',
    'nos-h2':  'Over 45 years keeping you safe',
    'nos-p1':  '<strong>Super Llantas Sato S.A. de C.V.</strong> is a company founded in 1979 with presence in Sinaloa and Baja California Sur. With over 45 years in the market, we have established ourselves as leaders in tire sales and automotive services in northwestern Mexico.',
    'nos-p2':  'We have 3 strategically located branches and a team of certified technicians backed by state-of-the-art computerized equipment.',
    'nos-li1': '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg> Founded in 1979',
    'nos-li2': '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg> 3 branches in Sinaloa and BCS',
    'nos-li3': '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg> Certified technicians',
    'nos-li4': '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg> Precision computerized equipment',
    'nos-li5': '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg> The best tire brands',
    'nos-quote': '"Safety for everyone is our priority."',

    // Branches
    'suc-tag':   'Find Us',
    'suc-h2':    'Our Branches',
    'suc-desc':  'Visit us at any of our branches. We are near you!',
    'suc-hours': 'Mon–Fri 8:00am–6:30pm &nbsp;·&nbsp; Sat 8:00am–2:00pm',
    'suc-maps':  'View on Google Maps →',

    // Contact
    'con-tag':      'Get in touch',
    'con-h2':       'Contact',
    'con-desc':     'We are available to answer your questions and provide the best service.',
    'con-email-h4': 'Email Address',
    'con-hours-h4': 'Business Hours',
    'con-hours-p':  'Mon–Fri: 8:00 am – 6:30 pm<br>Saturday: 8:00 am – 2:00 pm<br>Sunday: Closed',

    // Info form
    'inf-tag':       'Have questions?',
    'inf-h2':        'Request Information',
    'inf-desc':      'Leave us your information and we will gladly contact you to answer any question.',
    'inf-label-nombre': 'Full name *',
    'inf-ph-nombre':    'Your name',
    'inf-label-email':  'Email address *',
    'inf-ph-email':     'your@email.com',
    'inf-label-tel':    'Phone',
    'inf-ph-tel':       'E.g. 667 123 4567',
    'inf-label-suc':    'Nearest branch',
    'inf-opt-suc':      'Select a branch',
    'inf-label-tipo':   'Type of inquiry *',
    'inf-opt-tipo0':    'Select a topic',
    'inf-opt-tipo1':    'Tire information',
    'inf-opt-tipo2':    'Prices and availability',
    'inf-opt-tipo3':    'Automotive services',
    'inf-opt-tipo4':    'Location and hours',
    'inf-opt-tipo5':    'Other inquiry',
    'inf-label-msg':    'Message *',
    'inf-ph-msg':       'Write your question or comment here...',
    'inf-label-wa':     'I prefer to be contacted via WhatsApp',
    'inf-btn':          'Send Message',
    'inf-success':      '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10" /></svg> Message sent! We will contact you shortly.',

    // Footer
    'ftr-brand-p': 'Tire and automotive service experts with over 45 years in the market. Sinaloa and Baja California Sur.',
    'ftr-nav-h4':  'Navigation',
    'ftr-srv-h4':  'Services',
    'ftr-srv2':    'Balancing and Alignment',
    'ftr-hours1':  '<svg class="ftr-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7v5l3 3" /></svg> Mon–Fri: 8:00am – 6:30pm',
    'ftr-hours2':  '<svg class="ftr-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7v5l3 3" /></svg> Sat: 8:00am – 2:00pm',
    'ftr-copy':    '© 2026 Super Llantas Sato S.A. de C.V. &nbsp;·&nbsp; All rights reserved.',
  }
};

// Validation messages per language
const VALIDATION_MSGS = {
  es: {
    nombre:  'Por favor ingresa tu nombre.',
    tipo:    'Por favor selecciona un tipo de consulta.',
    mensaje: 'Por favor escribe tu mensaje.',
    email:   'Por favor ingresa tu correo.',
    emailFmt:'Ingresa un correo válido.',
    sending: 'Enviando...',
  },
  en: {
    nombre:  'Please enter your name.',
    tipo:    'Please select an inquiry type.',
    mensaje: 'Please write your message.',
    email:   'Please enter your email.',
    emailFmt:'Enter a valid email address.',
    sending: 'Sending...',
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const t = TRANSLATIONS[lang];

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update all [data-i18n-ph] placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Toggle button label
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
  });
});

// ── Navbar scroll effect ───────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile hamburger menu ──────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// ── Formulario "Pedir Información" ────────────────────────────────────────────
const infoForm = document.getElementById('infoForm');

if (infoForm) {
  infoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validarInfoForm()) submitInfoForm();
  });
}

function validarInfoForm() {
  let valid = true;
  const m = VALIDATION_MSGS[currentLang];

  const requeridos = [
    { id: 'infoNombre',  errId: 'infoNombreErr',  msg: m.nombre  },
    { id: 'infoTipo',    errId: 'infoTipoErr',    msg: m.tipo    },
    { id: 'infoMensaje', errId: 'infoMensajeErr', msg: m.mensaje },
  ];

  requeridos.forEach(({ id, errId, msg }) => {
    const el  = document.getElementById(id);
    const err = document.getElementById(errId);
    if (!el.value.trim()) {
      err.textContent = msg;
      el.style.borderColor = '#e53935';
      valid = false;
    } else {
      err.textContent = '';
      el.style.borderColor = '';
    }
  });

  const emailEl  = document.getElementById('infoEmail');
  const emailErr = document.getElementById('infoEmailErr');
  const emailVal = emailEl.value.trim();

  if (!emailVal) {
    emailErr.textContent = m.email;
    emailEl.style.borderColor = '#e53935';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    emailErr.textContent = m.emailFmt;
    emailEl.style.borderColor = '#e53935';
    valid = false;
  } else {
    emailErr.textContent = '';
    emailEl.style.borderColor = '';
  }

  return valid;
}

function submitInfoForm() {
  const btn = infoForm.querySelector('.info-btn-submit');
  const m   = VALIDATION_MSGS[currentLang];
  btn.textContent = m.sending;
  btn.disabled = true;

  const templateParams = {
    from_name:  document.getElementById('infoNombre').value.trim(),
    from_email: document.getElementById('infoEmail').value.trim(),
    phone:      document.getElementById('infoTelefono').value.trim() || '—',
    branch:     document.getElementById('infoSucursal').value || '—',
    subject:    document.getElementById('infoTipo').value,
    message:    document.getElementById('infoMensaje').value.trim(),
    prefer_whatsapp: document.getElementById('infoWhatsapp').checked
      ? (currentLang === 'en' ? 'Yes — contact via WhatsApp' : 'Sí — Contactar por WhatsApp')
      : (currentLang === 'en' ? 'No — contact via WhatsApp' : 'No — Contactar por WhatsApp'),
    to_email:   'social@llantassato.com',
  };

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then(() => {
      const successEl = document.getElementById('infoSuccess');
      successEl.innerHTML = TRANSLATIONS[currentLang]['inf-success'];
      successEl.style.display = 'block';
      infoForm.reset();
      btn.textContent = TRANSLATIONS[currentLang]['inf-btn'];
      btn.disabled = false;
      setTimeout(() => { successEl.style.display = 'none'; }, 6000);
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      btn.textContent = TRANSLATIONS[currentLang]['inf-btn'];
      btn.disabled = false;
      const msg = currentLang === 'es'
        ? 'Error al enviar. Intenta de nuevo o escríbenos a social@llantassato.com'
        : 'Failed to send. Try again or email us at social@llantassato.com';
      alert(msg);
    });
}

// ── Scroll-in animation ────────────────────────────────────────────────────────
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        observer.unobserve(el);
        // Once revealed, drop the inline transition (incl. stagger delay)
        // so CSS hover transitions defined in the stylesheet work normally.
        el.addEventListener('transitionend', () => {
          el.style.transition = '';
          el.style.opacity = '';
          el.style.transform = '';
        }, { once: true });
      }
    });
  }, { threshold: 0.1 });

  const prepareReveal = (el, delay = 0) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity .5s ease-out ${delay}ms, transform .5s ease-out ${delay}ms`;
    observer.observe(el);
  };

  // Grid items: staggered reveal based on position within their grid (capped at 360ms)
  ['.service-card', '.marca-card', '.sucursal-card', '.contacto-card'].forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      const i = Array.from(el.parentElement.children).indexOf(el);
      prepareReveal(el, Math.min(i * 60, 360));
    });
  });

  // Standalone blocks: simple fade-up
  document.querySelectorAll('.stat-item, .section-header, .nosotros-img, .nosotros-text, .info-form, .marcas-cta')
    .forEach(el => prepareReveal(el));
}

// ── Auto-scroll de carruseles (Servicios y Marcas, móvil) ──────────────────────
// Desplazamiento continuo, lento y a velocidad constante; se pausa en cuanto
// el usuario toca/desliza una tarjeta, y se reanuda solo tras unos segundos.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const SPEED = 26; // px por segundo
  const RESUME_DELAY = 4000; // espera tras la última interacción antes de reanudar

  document.querySelectorAll('.services-grid, .marcas-grid').forEach(track => {
    let visible = false;
    let paused = false;
    let lastTime = null;
    let pos = track.scrollLeft; // acumulador flotante: scrollLeft redondea a
                                 // entero, y el avance por frame (<1px) se
                                 // perdía cada vez si se leía de vuelta de él.
    let resumeTimeout = null;

    // scroll-snap-type "mandatory" pelea con el desplazamiento programático
    // (el navegador regresa al punto de snap en cada frame). Se desactiva
    // mientras el auto-scroll corre, y se restaura mientras el usuario
    // interactúa para que el deslizado manual siga acomodándose bien.
    track.style.scrollSnapType = 'none';

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => { visible = entry.isIntersecting; });
    }, { threshold: 0.2 });
    io.observe(track);

    const pauseForInteraction = () => {
      paused = true;
      track.style.scrollSnapType = '';
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        pos = track.scrollLeft; // resincroniza con donde haya quedado/encajado
        track.style.scrollSnapType = 'none';
        lastTime = null;
        paused = false;
      }, RESUME_DELAY);
    };
    ['touchstart', 'pointerdown', 'wheel'].forEach(evt =>
      track.addEventListener(evt, pauseForInteraction, { passive: true })
    );

    function frame(now) {
      if (lastTime === null) lastTime = now;
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (visible && !paused && track.scrollWidth > track.clientWidth) {
        const max = track.scrollWidth - track.clientWidth;
        pos += SPEED * dt;
        if (pos >= max) pos = 0;
        track.scrollLeft = pos;
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

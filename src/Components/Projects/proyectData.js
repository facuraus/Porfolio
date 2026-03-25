// --- IMPORTACIONES DE ASSETS ---

// Proyecto 1: SIGRH+
import proyecto1Img from '../../assets/SIGRH+.png';
import videoPresentacion from '../../assets/SIGRH+_EL_FUTURO_DEL_RECLUTAMIENTO.mp4';

// Proyecto 2: GeoDelivery
import proyectoGeo_img1 from '../../assets/proyecto2_img1.png';
import proyectoGeo_img2 from '../../assets/proyecto2_img2.png';
import proyectoGeo_img3 from '../../assets/proyecto2_img3.png';
import proyectoGeo_img4 from '../../assets/proyecto2_img4.png';
import proyectoGeo_img5 from '../../assets/proyecto2_img5.png';


// Proyecto 3: E-Commerce
import proyecto3_img1 from '../../assets/proyecto3_img1.png';
import proyecto3_img2 from '../../assets/proyecto3_img2.png';
import proyecto3_img3 from '../../assets/proyecto3_img3.png';
import proyecto3_img4 from '../../assets/proyecto3_img4.png';
import proyecto3_img5 from '../../assets/proyecto3_img5.png';



// Proyecto 4: SpotSport
import proyectoSpot_img1 from '../../assets/proyectoSpot_img1.png';
import proyectoSpot_img2 from '../../assets/proyectoSpot_img2.png';
import proyectoSpot_img3 from '../../assets/proyectoSpot_img3.png';
import proyectoSpot_img4 from '../../assets/proyectoSpot_img4.png';

// --- ARRAY DE DATOS ---

export const proyectosData = [
  {
    id: 1,
    titulo: "SIGRH+",
    subtitulo: "El Futuro del Reclutamiento",
    imagenes: [{ src: proyecto1Img, alt: "Portada SIGRH+" }],
    videoUrl: videoPresentacion,
    githubUrl: "https://github.com/Facundo-Rauschen/SIGRH-.git",
    cuerpo: {
      introduccion: "Presento SIGRH+, un sistema SaaS innovador para la gestión integral de recursos humanos que incorpora inteligencia artificial. Este proyecto fue el trabajo final de la Tecnicatura en Informática en la Universidad Nacional de General Sarmiento. En equipo desarrollamos una plataforma web que facilita y optimiza procesos como reclutamiento, evaluación de desempeño, gestión de licencias y encuestas internas, todo en un entorno seguro y escalable.",
      puntosClave: [
        "Análisis automatizado de CVs para recomendar ofertas laborales relevantes mediante IA.",
        "Cálculo de compatibilidad entre postulaciones y requisitos del puesto.",
        "Predicción del rendimiento futuro del personal y detección de riesgos de rotación.",
        "Chatbot potenciado por Llama 3 para comunicación interna y notificaciones vía Telegram.",
        "Reportes visuales interactivos y automatización de tareas administrativas."
      ],
    },
    tecnologias: ["React", "Python", "Llama 3", "Tailwind CSS", "Docker"]
  },
  {
    id: 2,
    titulo: "GeoDelivery",
    subtitulo: "Manual de Inteligencia Logística y Telemetría en Tiempo Real",
    imagenes: [
      { src: proyectoGeo_img1, alt: "Panel de Control y Monitoreo de Flota" },
      { src: proyectoGeo_img2, alt: "Radio de Puntos de entrega y depositos" },
      { src: proyectoGeo_img3, alt: "Panel vehiculos" },
      { src: proyectoGeo_img4, alt: "Panel depositos" },
      { src: proyectoGeo_img5, alt: "Panel puntos de entrega" }


    ],
    videoUrl: null,
    githubUrl: "https://github.com/Facundo-Rauschen/GeoDelivery.git",
    cuerpo: {
      introduccion: "GeoDelivery es un ecosistema de última milla diseñado para transformar coordenadas estáticas en una operación logística dinámica. A diferencia de los sistemas tradicionales, utiliza motores de cálculo real, persistencia geográfica y geometría esférica para optimizar el movimiento de flotas en tiempo real.",
      puntosClave: [
        "Motor de Enrutamiento OSRM: Cálculo de trayectorias sobre redes viales reales (OpenStreetMap) utilizando algoritmos MLD (Multi-Level Dijkstra).",
        "Geofencing Automático: Implementación de la Fórmula de Haversine para detectar arribos y transiciones de estado sin intervención manual.",
        "Infraestructura Geoespacial: Persistencia en PostgreSQL con la extensión PostGIS utilizando tipos GEOGRAPHY (POINT, 4326) para consultas espaciales nativas.",
        "Telemetría en Vivo: Streaming de posiciones vehiculares mediante Socket.io y gestión de estados de alta disponibilidad con Redis Cache.",
        "Arquitectura de Microservicios: Orquestación completa mediante Docker Stack (PostGIS, Redis, OSRM Argentina y Node.js)."
      ],
      detallesTecnicos: "Stack: Node.js, React 18, PostgreSQL/PostGIS, Redis, Socket.io, OSRM y Docker. El sistema garantiza una experiencia de usuario de alta densidad informativa con Tailwind CSS y Lucide React."
    },
    tecnologias: ["PostGIS", "Docker", "Socket.io", "React", "Node.js", "Redis"]
  },
  {
    id: 3,
    titulo: "E-Commerce",
    subtitulo: "Plataforma de Gestión de Ventas e Inventario en Tiempo Real",
    imagenes: [
      { src: proyecto3_img1, alt: "Vista Principal Productos" },
      { src: proyecto3_img2, alt: "Panel de control" },
      { src: proyecto3_img3, alt: "Vista del producto" },
      { src: proyecto3_img4, alt: "Carrito" },
      { src: proyecto3_img5, alt: "Historial de compras" }
    ],
    videoUrl: null,
    githubUrl: "https://github.com/Facundo-Rauschen/E-Commerce.git",
    cuerpo: {
      introduccion: "Desarrollé una plataforma integral de comercio electrónico que resuelve el ciclo completo de venta: desde la navegación persistente de productos hasta la finalización de compra con validación de stock y generación de tickets.",
      puntosClave: [
        "Arquitectura robusta con Node.js y Express, utilizando el patrón de diseño por capas para mayor escalabilidad.",
        "Sincronización bidireccional mediante WebSockets (Socket.io) para actualizaciones de stock y catálogo en tiempo real.",
        "Sistema de Checkout avanzado que valida disponibilidad atómica y gestiona productos remanentes automáticamente.",
        "Buscador dinámico con autocompletado (Live Search) y filtrado multidimensional por categorías, precios y disponibilidad.",
        "Persistencia de datos en MongoDB Atlas con optimización de consultas mediante agregaciones y paginación (Mongoose Paginate V2)."
      ],
      detallesTecnicos: "Stack: Node.js, Express, MongoDB (Mongoose), Socket.io, Handlebars y Bootstrap 5. Implementé Middlewares de manejo de errores, subida de archivos con Multer y arquitectura de Managers para la lógica de negocio."
    },
    tecnologias: ["Node.js", "MongoDB", "WebSockets", "Express", "Handlebars"]
  },
  {
    id: 4,
    titulo: "SpotSport",
    subtitulo: "Gestión de Reservas Deportivas con Arquitectura Offline-First",
    imagenes: [
      { src: proyectoSpot_img1, alt: "Mapa Interactivo de Sedes Deportivas" },
      { src: proyectoSpot_img2, alt: "Gestión de Reservas y Favoritos" },
      { src: proyectoSpot_img3, alt: "Gestión de Reservas y Favoritos" },
      { src: proyectoSpot_img4, alt: "Gestión de Reservas y Favoritos" }

    ],
    videoUrl: null,
    githubUrl: "https://github.com/Facundo-Rauschen/SpotSport.git",
    cuerpo: {
      introduccion: "SpotSport es una solución móvil integral desarrollada en React Native para la reserva de canchas en complejos multisede. El núcleo del proyecto es su sistema híbrido de persistencia, que garantiza un rendimiento fluido y disponibilidad de datos sin depender constantemente de la conexión a red.",
      puntosClave: [
        "Sincronización Híbrida: Implementación de un Sync Service que coordina la transferencia de datos entre Firebase (Cloud) y SQLite (Local) para una latencia cero en lecturas.",
        "Arquitectura de Estado Global: Uso de Redux Toolkit para centralizar la información de sedes, favoritos y reservas, asegurando consistencia en toda la UI.",
        "Geolocalización Avanzada: Integración con Google Maps API para la visualización de complejos deportivos y ubicación del usuario en tiempo real.",
        "Lógica Offline-First: Estrategia de Seeding y Sync que permite el funcionamiento pleno de la app tras la carga inicial, optimizando el consumo de datos.",
        "Gestión de Identidad y Hardware: Módulo de perfil con integración de cámara y galería para la personalización de avatares y persistencia de imágenes."
      ],
      detallesTecnicos: "Stack: React Native (Expo Router), Redux Toolkit, SQLite, Firebase Auth/Firestore y Google Maps API. Estructura modular basada en servicios, hooks y slices de estado global."
    },
    tecnologias: ["React Native", "Redux", "SQLite", "Firebase", "Expo"]
  },
];
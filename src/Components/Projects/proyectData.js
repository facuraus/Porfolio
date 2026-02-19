// --- IMPORTACIONES DE ASSETS ---

// Proyecto 1: SIGRH+
import proyecto1Img from '../../assets/SIGRH+.png';
import videoPresentacion from '../../assets/SIGRH+_EL_FUTURO_DEL_RECLUTAMIENTO.mp4';

// Proyecto 2: Conjunto Dominante Mínimo
import crearGrafoImg from '../../assets/crear-grafo-goloso.png';
import estadisticasImg from '../../assets/estadisticas-goloso.png';
import gifGoloso from '../../assets/Algoritmo-Goloso-Gif.gif';
import proyecto2Portada from '../../assets/proyecto2.jpg';

// Proyecto 3: Micro-Emprendimientos
import proyecto3_img1 from '../../assets/proyecto3_img1.png';
import proyecto3_img2 from '../../assets/proyecto3_img2.png';

// Proyecto 4: Lights Out
import proyecto4_img1 from '../../assets/proyecto4_img1.png';
import proyecto4_img2 from '../../assets/proyecto4_img2.png';
import proyecto4Portada from '../../assets/proyecto4.jpg';

// Proyecto 5: Clustering Humano
import clusteringHumano from '../../assets/Clustering-humano.png';
import resultadosClustering from '../../assets/Resultados-Clustering.png';

// --- ARRAY DE DATOS ---

export const proyectosData = [
  {
    id: 1,
    titulo: "SIGRH+",
    subtitulo: "El Futuro del Reclutamiento",
    imagenes: [{ src: proyecto1Img, alt: "Portada SIGRH+" }],
    videoUrl: videoPresentacion,
    cuerpo: {
      introduccion: "Presento SIGRH+, un sistema SaaS innovador para la gestión integral de recursos humanos que incorpora inteligencia artificial. Este proyecto fue el trabajo final de la Tecnicatura en Informática en la Universidad Nacional de General Sarmiento. En equipo desarrollamos una plataforma web que facilita y optimiza procesos como reclutamiento, evaluación de desempeño, gestión de licencias y encuestas internas, todo en un entorno seguro y escalable.",
      puntosClave: [
        "Análisis automatizado de CVs para recomendar ofertas laborales relevantes mediante IA.",
        "Cálculo de compatibilidad entre postulaciones y requisitos del puesto.",
        "Predicción del rendimiento futuro del personal y detección de riesgos de rotación.",
        "Chatbot potenciado por Llama 3 para comunicación interna y notificaciones vía Telegram.",
        "Reportes visuales interactivos y automatización de tareas administrativas."
      ],
      miAporte: "Como desarrollador Full Stack, lideré la creación de la interfaz de usuario utilizando React y Tailwind CSS para una experiencia fluida. En el backend, diseñé y testeé la arquitectura de endpoints REST, asegurando una integración eficiente entre la lógica de negocio y el consumo de datos.", detallesTecnicos: "Backend en Python (Flask) con MySQL, desplegado en Railway usando Docker. El equipo siguió metodologías ágiles SCRUM con guía docente como Product Owners."
    },
    tecnologias: ["React", "Python", "Llama 3", "Tailwind CSS", "Docker"]
  },
  {
    id: 2,
    titulo: "Conjunto Dominante Mínimo",
    subtitulo: "Algoritmos Golosos y Heurísticas",
    imagenes: [
      { src: proyecto2Portada, alt: "Portada Algoritmo" },
      { src: gifGoloso, alt: "GIF Algoritmo Goloso" },
      { src: crearGrafoImg, alt: "Creación de Grafos" },
      { src: estadisticasImg, alt: "Estadísticas de Comparación" }
    ],
    videoUrl: null,
    cuerpo: {
      introduccion: "Diseñé una aplicación capaz de resolver el problema del conjunto dominante mínimo en grafos. El sistema permite encontrar el subconjunto más pequeño de vértices de tal manera que todos los demás vértices del grafo sean adyacentes a al menos uno de ellos.",
      puntosClave: [
        "Implementación de un algoritmo goloso (greedy) que selecciona vértices según su grado para cubrir el grafo eficientemente.",
        "Comparativa de rendimiento contra una solución de Backtracking para evaluar precisión vs. tiempo de ejecución.",
        "Creación manual de grafos interactivos y soporte para importación vía JSON o texto plano.",
        "Visualización dinámica del grafo y estadísticas detalladas de la solución encontrada."
      ],
      miAporte: "Desarrollé la lógica del algoritmo en el backend con Java, enfocándome en la eficiencia del procesamiento de grafos. En el frontend, construí la interfaz interactiva para la carga de datos y la visualización de resultados estadísticos.",
      detallesTecnicos: "Stack: Java para la lógica algorítmica y representación de datos, con una interfaz web construida en HTML y CSS para facilitar la experimentación visual."
    },
    tecnologias: ["Java", "Algoritmos", "Grafos", "HTML", "CSS"]
  },
  {
    id: 3,
    titulo: "Portal de Emprendimientos",
    subtitulo: "Visibilidad de Micro-Emprendimientos Comunitarios",
    imagenes: [
      { src: proyecto3_img1, alt: "Vista Principal Emprendimientos" },
      { src: proyecto3_img2, alt: "Formulario de Registro" }
    ],
    videoUrl: null,
    cuerpo: {
      introduccion: "Diseñé y protocultivé un sistema web integral orientado a potenciar la visibilidad de micro-emprendimientos comunitarios. La plataforma permite a los emprendedores locales formalizar su presencia digital y conectar de manera eficiente con los miembros de su comunidad organizada.",
      puntosClave: [
        "Sistema de registro dinámico con validación de rubros, métodos de pago y zonas de cobertura.",
        "Panel de moderación con flujo de aprobación de emprendimientos y notificaciones automáticas por correo.",
        "Módulo de geolocalización para puntos físicos con gestión de privacidad de direcciones.",
        "Pasarela de donaciones integrada con CuentaPago y PagoNet, vinculada a un sistema de 'Destacados'.",
        "Automatización de reportes semanales y recordatorios de vencimiento para los administradores."
      ],
      miAporte: "Me encargué del desarrollo del frontend utilizando HTML, CSS y JavaScript. Implementé toda la lógica de validación de formularios en el lado del cliente y diseñé la arquitectura de la interfaz para garantizar una experiencia de usuario (UX) intuitiva y responsiva.",
      detallesTecnicos: "Stack: HTML5, CSS3 y JavaScript Vanilla. El proyecto se enfocó en la accesibilidad y en la robustez de las validaciones front-end para asegurar la integridad de los datos antes del procesamiento."
    },
    tecnologias: ["HTML", "CSS", "JavaScript", "UX/UI"]
  },
  {
    id: 4,
    titulo: "Clustering Humano",
    subtitulo: "Algoritmos de Grafos por Intereses",
    imagenes: [
      { src: clusteringHumano, alt: "Ingreso de Intereses" },
      { src: resultadosClustering, alt: "Resultado del Clustering" }
    ],
    videoUrl: null,
    cuerpo: {
      introduccion: "Desarrollé una aplicación de análisis de datos que agrupa personas según sus afinidades utilizando algoritmos avanzados de grafos. El sistema cuantifica la similitud entre perfiles para generar clusters o grupos humanos con intereses compartidos de manera automatizada.",
      puntosClave: [
        "Modelado de perfiles basado en métricas (1-5) para categorías de Deportes, Música, Espectáculos y Ciencia.",
        "Construcción de un grafo completo ponderado donde cada nodo representa a una persona y el peso de las aristas indica el índice de similitud.",
        "Implementación del Algoritmo de Prim para hallar el Árbol Generador Mínimo (MST) de la red social.",
        "Procesamiento de división de grupos mediante la eliminación estratégica de aristas críticas (de mayor peso) para formar componentes conexas independientes."
      ],
      miAporte: "Diseñé e implementé la lógica algorítmica íntegramente en Java, asegurando la eficiencia en el cálculo del MST. Asimismo, desarrollé la interfaz web con HTML y CSS para permitir una carga de datos intuitiva y una visualización clara de los grupos resultantes.",
      detallesTecnicos: "Stack: Java para el backend algorítmico y procesamiento de datos, con una interfaz frontend diseñada para facilitar la interacción y el testeo de los algoritmos de agrupación."
    },
    tecnologias: ["Java", "Algoritmos", "Grafos", "HTML", "CSS"]
  },
];
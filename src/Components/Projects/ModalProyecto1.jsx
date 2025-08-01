import React from 'react';
import './ModalProyecto2.css'; // reutiliza el CSS que compartiste

const ModalProyecto1 = ({ image, description, video, handleShowVideo }) => {
  return (
    <div className="modal-custom-content">
      <div className="carousel">
        <img src={image} alt="Proyecto SIGRH+" className="carousel-image" />
        {video && (
          <button
            className="video-btn"
            onClick={handleShowVideo}
            aria-label="Ver video proyecto SIGRH+"
          >
            Ver Video: SIGRH+ – El Futuro del Reclutamiento
          </button>
        )}
      </div>

      <div className="modal-text">
        <p>{description}</p>

        <p>
          Presento <strong>SIGRH+</strong>, un sistema SaaS innovador para la gestión integral de recursos humanos que incorpora inteligencia artificial. Este proyecto fue el trabajo final de la Tecnicatura en Informática en la Universidad Nacional de General Sarmiento.
        </p>

        <p>
          En equipo desarrollamos una plataforma web que facilita y optimiza procesos como reclutamiento, evaluación de desempeño, gestión de licencias y encuestas internas, todo en un entorno seguro y escalable.
        </p>
        <br />
        <p><strong>Funciones principales con IA:</strong></p>
        <ul>
          <li>Análisis automatizado de CVs para recomendar ofertas laborales relevantes.</li>
          <li>Cálculo de compatibilidad entre postulaciones y requisitos.</li>
          <li>Predicción del rendimiento futuro del personal.</li>
          <li>Detección temprana de riesgos de rotación o renuncia.</li>
        </ul>

        <p>
          Además, incluye reportes visuales interactivos, automatización de tareas, notificaciones vía Telegram y un chatbot potenciado por Llama 3 para mejorar la comunicación interna.
        </p>
        <br />
        <p>
          <strong>Mi aporte:</strong> Trabajé como desarrollador full stack y QA, frontend con <strong>React</strong> y <strong>Tailwind CSS</strong>, mientras también diseñaba y probaba endpoints REST usando <strong>Postman</strong>. Implementé automatizaciones de pruebas de interfaz con <strong>UI.Vision</strong> para asegurar la calidad y estabilidad del sistema.
        </p>

        <p>
          El equipo siguió metodologías ágiles <strong>SCRUM</strong>, con la guía de profesores como Product Owners para garantizar un desarrollo iterativo y de alta calidad.
        </p>

        <p>
          En backend trabajamos con <strong>Python (Flask)</strong>, <strong>MySQL</strong> para la base de datos, desplegamos en <strong>Railway</strong> usando <strong>Docker</strong>, y aplicamos modelos de IA para análisis y predicciones.
        </p>
      </div>
    </div>
  );
};

export default ModalProyecto1;

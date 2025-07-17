// src/Components/Projects/Proyecto3Carousel.jsx
import React, { useState } from 'react';
import proyecto3_img1 from '../../assets/proyecto3_img1.png';
import proyecto3_img2 from '../../assets/proyecto3_img2.png';
import './ModalProyecto3.css';

const Proyecto3Carousel = ({ description }) => {
  const images = [proyecto3_img1, proyecto3_img2];
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="modal-custom-content">
      <div className="carousel">
        <img
          src={images[index]}
          alt={`Vista ${index + 1}`}
          className="carousel-image"
        />
        <div className="carousel-buttons">
          <button onClick={prev} className="carousel-btn" aria-label="Imagen anterior">‹</button>
          <button onClick={next} className="carousel-btn" aria-label="Imagen siguiente">›</button>
        </div>
      </div>

      <div className="modal-text">
        <p>
          <strong>Portal de Micro-Emprendimientos Comunitarios</strong>
        </p>

        <p>
          <strong>Descripción del proyecto:</strong><br />
          En el marco del Trabajo Práctico de la materia Ingeniería de Software de la Universidad Nacional de General Sarmiento,
          se diseñó un sistema web destinado a la difusión de micro-emprendimientos desarrollados por miembros de una comunidad organizada.
        </p>

        <br />

        <p>
          El objetivo del proyecto fue analizar, modelar y planificar una solución que permita:
        </p>

        <ul>
          <li>La inscripción, moderación, visibilidad y patrocinio de emprendimientos.</li>
          <li>Facilitar la búsqueda interactiva por parte de los visitantes.</li>
          <li>Asegurar una experiencia multiplataforma.</li>
        </ul>

        <br />

        <p><strong>Principales funcionalidades del sistema:</strong></p>
        <ul>
          <li>Registro de miembros colaboradores con datos personales y del emprendimiento (contacto, rubro, redes sociales, formas de pago, zona de trabajo, logo o imagen ilustrativa).</li>
          <li>Autenticación y autorización: el sistema notifica a un moderador para aprobar o rechazar nuevos emprendimientos, con avisos automáticos por correo.</li>
          <li>Gestión de espacios físicos (talleres o locales) con posibilidad de mostrar u ocultar la dirección, integrada con servicios de normalización de direcciones y geolocalización en mapas.</li>
          <li>Actualización por parte del colaborador de su información en todo momento.</li>
          <li>
            Sistema de contribuciones económicas con dos métodos de pago:
            <ul>
              <li>CuentaPago (monedero virtual) con transacciones instantáneas y confirmaciones automáticas.</li>
              <li>PagoNet, con generación de facturas y validación de pagos vía sucursales.</li>
            </ul>
          </li>
          <li>Emprendimientos destacados: cada donación activa un período promocional de 30 días, con prioridad en las búsquedas y diseño diferenciado.</li>
          <li>Gestión automatizada de avisos y vencimientos mediante correos electrónicos programados.</li>
          <li>Reportes semanales con detalles de las donaciones enviados automáticamente al moderador.</li>
        </ul>

        <br />

        <p><strong>Tecnologías y herramientas utilizadas:</strong></p>
        <ul>
          <li>UML (modelado)</li>
          <li>GanttProject / Microsoft Project (planificación)</li>
          <li>Servicios externos (geolocalización y pagos)</li>
          <li>Correo electrónico automático (notificaciones)</li>
          <li>HTML/CSS (maqueta visual del sistema)</li>
        </ul>
      </div>
    </div>
  );
};

export default Proyecto3Carousel;

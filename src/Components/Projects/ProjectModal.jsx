import React, { useState, useEffect } from 'react';
import { FaGithub, FaPlay } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado
import './ProjectModal.css';

const ProjectModal = ({ proyecto, isOpen, onClose }) => {
  const [index, setIndex] = useState(0);

  // 1. Bloquear Scroll, manejar Tecla Escape y Ocultar Navbar
  useEffect(() => {
    const navbar = document.querySelector('.navbar');

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '5px';
      window.addEventListener('keydown', handleKeyDown);
      
      if (navbar) {
        navbar.style.opacity = '0';
        navbar.style.pointerEvents = 'none';
        navbar.style.transition = 'opacity 0.3s ease';
      }
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      
      if (navbar) {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      window.removeEventListener('keydown', handleKeyDown);
      if (navbar) {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
      }
    };
  }, [isOpen, onClose]);

  // 2. Resetear el índice cuando cambias de proyecto
  useEffect(() => {
    setIndex(0);
  }, [proyecto]);

  if (!isOpen || !proyecto) return null;

  const images = proyecto.imagenes || [];
  
  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close" 
          onClick={onClose} 
          aria-label="Cerrar modal"
        >
          ×
        </button>
        
        <div className="modal-custom-content">
          {/* LADO IZQUIERDO: Visuales */}
          <div className="carousel">
            <div className="carousel-image-container">
              {images.length > 0 && (
                <img 
                  src={images[index].src} 
                  alt={images[index].alt} 
                  className="carousel-image" 
                />
              )}
            </div>
            
            {images.length > 1 && (
              <div className="carousel-buttons">
                <button onClick={prev} className="carousel-btn" aria-label="Imagen anterior">‹</button>
                <button onClick={next} className="carousel-btn" aria-label="Siguiente imagen">›</button>
              </div>
            )}

            {/* CONTENEDOR DE ACCIONES (Botones de Video y GitHub) */}
            <div className="modal-actions">
              {proyecto.videoUrl && (
                <button 
                  className="action-btn video-btn" 
                  onClick={() => window.open(proyecto.videoUrl, '_blank')}
                >
                  <FaPlay /> Ver Video
                </button>
              )}

              {proyecto.githubUrl && (
                <button 
                  className="action-btn github-btn" 
                  onClick={() => window.open(proyecto.githubUrl, '_blank')}
                >
                  <FaGithub /> Ver Repositorio
                </button>
              )}
            </div>
          </div>

          {/* LADO DERECHO: Información */}
          <div className="modal-text">
            <h2>{proyecto.titulo}</h2>
            <p className="modal-subtitle"><strong>{proyecto.subtitulo}</strong></p>
            <p className="modal-description">{proyecto.cuerpo.introduccion}</p>
            
            <ul className="modal-list">
              {proyecto.cuerpo.puntosClave.map((punto, i) => (
                <li key={i}>{punto}</li>
              ))}
            </ul>
            
            <div className="tech-container">
              {proyecto.tecnologias.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
// src/Components/Projects/ModalProyecto2.jsx
import React, { useState } from 'react';
import crearGrafoImg from '../../assets/crear-grafo-goloso.png';
import estadisticasImg from '../../assets/estadisticas-goloso.png';
import videoGoloso from '../../assets/Algoritmo-Goloso.mp4';
import './ModalProyecto2.css';

const ModalProyecto2 = ({ description }) => {
  const slides = [
    { type: 'image', src: crearGrafoImg, alt: 'Crear grafo goloso' },
    { type: 'image', src: estadisticasImg, alt: 'Estadísticas goloso' },
    { type: 'video', src: videoGoloso, alt: 'Video Algoritmo Goloso' },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex(i => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div className="modal-custom-content">
      <div className="carousel">
        {slides[index].type === 'image' ? (
          <img
            src={slides[index].src}
            alt={slides[index].alt}
            className={slides[index].alt === 'Estadísticas goloso' ? 'small-image' : 'carousel-image'}
          />
        ) : (
          <video
            src={slides[index].src}
            controls
            autoPlay
            className="carousel-video"
          />
        )}
        <div className="carousel-buttons">
          <button onClick={prev} className="carousel-btn" aria-label="Imagen anterior">
            ‹
          </button>
          <button onClick={next} className="carousel-btn" aria-label="Imagen siguiente">
            ›
          </button>
        </div>
      </div>
      <div className="modal-text">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ModalProyecto2;

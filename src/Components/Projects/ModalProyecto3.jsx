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
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Proyecto3Carousel;

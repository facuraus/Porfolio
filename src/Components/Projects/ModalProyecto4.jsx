import React, { useState } from 'react';
import proyecto4_img1 from '../../assets/proyecto4_img1.png';
import proyecto4_img2 from '../../assets/proyecto4_img2.png';
import './ModalProyecto3.css'; // reutilizamos los estilos del carousel

const ModalProyecto4 = () => {
  const images = [proyecto4_img1, proyecto4_img2];
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
        <p><strong>Lights Out</strong></p>
        
        <p> 
          El objetivo fue implementar una versión funcional del clásico juego de lógica "Lights Out", donde el jugador debe apagar todas las luces del tablero.
        </p>

        <p>
          Cada celda del tablero representa una luz que puede estar encendida o apagada. Al hacer clic sobre una celda, se invierte su estado y el de sus celdas adyacentes 
          (arriba, abajo, izquierda y derecha). El desafío es encontrar la secuencia correcta de clics para apagar todas las luces.
        </p>

        <br />

        <p><strong>Algoritmo y lógica implementada:</strong></p>
        <ul>
          <li>Representación del tablero como matriz de estados binarios (encendido/apagado).</li>
          <li>Inversión de estados según clic del usuario y actualización del tablero en tiempo real.</li>
          <li>Condición de victoria detectada cuando todas las celdas están apagadas.</li>
        </ul>

        <p><strong>Tecnologías utilizadas:</strong></p>
        <ul>
          <li><strong>Java:</strong> lógica del juego, manipulación de matriz, condiciones de victoria.</li>
          <li><strong>HTML y CSS:</strong> interfaz web interactiva con diseño personalizado del tablero y feedback visual.</li>
        </ul>

      </div>
    </div>
  );
};

export default ModalProyecto4;

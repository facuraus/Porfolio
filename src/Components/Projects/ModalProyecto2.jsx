import React, { useState } from 'react';
import crearGrafoImg from '../../assets/crear-grafo-goloso.png';
import estadisticasImg from '../../assets/estadisticas-goloso.png';
import gifGoloso from '../../assets/Algoritmo-Goloso-Gif.gif';
import './ModalProyecto2.css';

const ModalProyecto2 = () => {
  const slides = [
    { type: 'image', src: crearGrafoImg, alt: 'Crear grafo goloso' },
    { type: 'image', src: estadisticasImg, alt: 'Estadísticas goloso' },
    { type: 'image', src: gifGoloso, alt: 'GIF Algoritmo Goloso' },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex(i => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div className="modal-custom-content">
      <div className="carousel">
        <img
          src={slides[index].src}
          alt={slides[index].alt}
          className={
            slides[index].alt === 'Estadísticas goloso' ? 'small-image' : 'carousel-image'
          }
        />
        <div className="carousel-buttons">
          <button onClick={prev} className="carousel-btn" aria-label="Imagen anterior">‹</button>
          <button onClick={next} className="carousel-btn" aria-label="Imagen siguiente">›</button>
        </div>
      </div>

      <div className="modal-text">
        <p><strong>Conjunto Dominante Mínimo</strong></p>
        <p>
          El objetivo fue diseñar una aplicación para resolver el problema del conjunto dominante mínimo en grafos, 
          utilizando un enfoque goloso (greedy) y representaciones gráficas para facilitar la comprensión del resultado.
        </p>
        <p>
          Un conjunto dominante es un subconjunto de vértices tal que todos los vértices del grafo están en él o son adyacentes 
          a al menos uno de sus elementos. La meta es encontrar el conjunto más pequeño posible.
        </p>

        <br />

        <p><strong>Algoritmo implementado:</strong></p>
        <ul>
          <li>Algoritmo goloso que selecciona vértices según su grado para cubrir el grafo de forma eficiente.</li>
          <li>Comparación con una solución alternativa basada en backtracking para evaluar la calidad del resultado.</li>
        </ul>

        <p><strong>Tecnologías utilizadas:</strong></p>
        <ul>
          <li><strong>Java (backend):</strong> lógica del algoritmo y representación del grafo.</li>
          <li><strong>HTML y CSS (frontend):</strong> interfaz gráfica para ingresar datos y visualizar los resultados.</li>
        </ul>

        <p><strong>Funcionalidades principales:</strong></p>
        <ul>
          <li>Creación manual del grafo agregando vértices y aristas desde la interfaz.</li>
          <li>Importación de grafos desde archivos JSON o texto plano.</li>
          <li>Visualización del grafo y del conjunto dominante obtenido.</li>
          <li>Estadísticas sobre la solución encontrada y comparación con backtracking.</li>
        </ul>
      </div>
    </div>
  );
};

export default ModalProyecto2;

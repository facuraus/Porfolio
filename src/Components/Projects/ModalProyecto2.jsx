// src/Components/Projects/ModalProyecto2.jsx
import React, { useState } from 'react';
import crearGrafoImg from '../../assets/crear-grafo-goloso.png';
import estadisticasImg from '../../assets/estadisticas-goloso.png';
import gifGoloso from '../../assets/Algoritmo-Goloso-Gif.gif';
import './ModalProyecto2.css';

const ModalProyecto2 = ({ description }) => {
  const slides = [
    { type: 'image', src: crearGrafoImg, alt: 'Crear grafo goloso' },
    { type: 'image', src: estadisticasImg, alt: 'Estadísticas goloso' },
    { type: 'image', src: gifGoloso, alt: 'GIF Algoritmo Goloso' }, // ahora se trata como imagen
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
          <button onClick={prev} className="carousel-btn" aria-label="Imagen anterior">
            ‹
          </button>
          <button onClick={next} className="carousel-btn" aria-label="Imagen siguiente">
            ›
          </button>
        </div>
      </div>

      <div className="modal-text">
        <p>
          <strong>Descripción del proyecto:</strong><br />
          Como parte del Trabajo Práctico de la Universidad Nacional de General Sarmiento,
          desarrollé una aplicación para resolver el problema del conjunto dominante mínimo en grafos. Este problema consiste en encontrar
          un subconjunto de vértices tal que todos los vértices
          restantes estén conectados (adyacentes) al menos a un vértice de dicho conjunto. El objetivo es minimizar la cantidad de
          vértices en este conjunto.
        </p>

        <br />

        <p>
          <strong>Solución implementada:</strong><br />
          Se diseñó un algoritmo goloso (greedy) que, dada una instancia del grafo, intenta encontrar un conjunto dominante de
          tamaño reducido.
        </p>

        <br />
        
        <p>
          <strong>La aplicación permite dos modalidades de carga del grafo:</strong>
          <ul>
            <li>Interfaz gráfica que permite agregar vértices y aristas manualmente.</li>
            <li>Lectura de grafos desde archivos de texto plano o JSON, facilitando la reutilización de instancias.</li>
          </ul>
        </p>

        <br />

        <p>
          <strong>Funcionalidades adicionales:</strong>
          <ul>
            <li>Visualización del grafo y del conjunto dominante encontrado mediante gráficos interactivos.</li>
            <li>Comparación con una solución alternativa utilizando backtracking, permitiendo evaluar la calidad del resultado frente a un enfoque más exhaustivo.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default ModalProyecto2;

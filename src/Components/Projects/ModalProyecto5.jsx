import React, { useState } from 'react';
import clusteringHumano from '../../assets/Clustering-humano.png';
import resultadosClustering from '../../assets/Resultados-Clustering.png';
import './ModalProyecto5.css';

const Proyecto5Carousel = () => {
    const images = [clusteringHumano, resultadosClustering];
    const [index, setIndex] = useState(0);

    const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));

    return (
        <div className="modal-custom-content">
            <div className="carousel">
                <img
                    src={images[index]}
                    alt={`Proyecto 5 - Imagen ${index + 1}`}
                    className="carousel-image"
                />
                <div className="carousel-buttons">
                    <button onClick={prev} className="carousel-btn" aria-label="Imagen anterior">‹</button>
                    <button onClick={next} className="carousel-btn" aria-label="Imagen siguiente">›</button>
                </div>
            </div>
            <div className="modal-text">
                <p><strong>Clustering Humano por Intereses – (Programación III – UNGS)</strong></p>
                <p>
                    Este proyecto fue desarrollado como Trabajo Práctico en la Universidad Nacional de General Sarmiento. 
                    El objetivo fue construir una aplicación interactiva para identificar automáticamente grupos de personas con 
                    intereses similares en distintas áreas temáticas.
                </p>
                <p>
                    A partir de una lista de personas y sus niveles de interés (valores del 1 al 5) en deportes, música, 
                    espectáculos y ciencia, se aplicó un algoritmo basado en clustering utilizando técnicas de grafos.
                </p>

                <br />

                <p><strong>Funcionamiento del algoritmo:</strong></p>
                <ul>
                    <li>Se construye un grafo completo donde cada nodo representa a una persona.</li>
                    <li>Las aristas entre personas se ponderan según un índice de similaridad, calculado como la suma de las diferencias absolutas en cada interés.</li>
                    <li>Se genera un árbol generador mínimo (MST) del grafo.</li>
                    <li>Se elimina la arista de mayor peso del árbol, dividiendo así el grafo en dos grupos de personas con intereses similares.</li>
                </ul>

                
                <p><strong>Funcionalidades implementadas:</strong></p>
                <ul>
                    <li>Carga interactiva de personas y sus intereses mediante una interfaz gráfica intuitiva.</li>
                    <li>Visualización de los grupos formados tras ejecutar el algoritmo.</li>
                    <li>Botón de acción para lanzar el proceso de clustering y ver resultados en pantalla.</li>
                </ul>

                <p><strong>Tecnologías utilizadas:</strong></p>
                <ul>
                    <li>Python para la lógica del algoritmo (estructura de grafos y MST).</li>
                    <li>Tkinter / PyQt para la interfaz gráfica.</li>
                    <li>Estructuras como listas de adyacencia y algoritmos clásicos como Prim o Kruskal para el MST.</li>
                </ul>
            </div>
        </div>
    );
};

export default Proyecto5Carousel;

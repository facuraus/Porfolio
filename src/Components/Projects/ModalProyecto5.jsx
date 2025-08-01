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
                <p><strong>Clustering Humano por Intereses</strong></p>
                <p>
                    El objetivo fue construir una aplicación que permita agrupar personas en función de sus intereses mediante 
                    algoritmos de grafos, 
                    combinando Java para la lógica del algoritmo y HTML/CSS para la interfaz web.
                </p>
                <p>
                    Cada persona es ingresada con un valor del 1 al 5 en cuatro categorías: deportes, música, espectáculos y ciencia. 
                    A partir de estos datos, se construye un grafo completo con aristas ponderadas según un índice de similaridad.
                </p>

                <br />

                <p><strong>Algoritmo implementado:</strong></p>
                <ul>
                    <li>Construcción del grafo completo con cada persona como nodo.</li>
                    <li>Cálculo del Árbol Generador Mínimo (MST) utilizando el algoritmo de Prim.</li>
                    <li>Eliminación de la arista de mayor peso para dividir el grafo en dos componentes conexas.</li>
                </ul>

                <p><strong>Tecnologías utilizadas:</strong></p>
                <ul>
                    <li><strong>Java (backend):</strong> lógica del algoritmo, estructuras de datos y procesamiento.</li>
                    <li><strong>HTML y CSS (frontend):</strong> interfaz web para ingresar personas y visualizar los grupos resultantes.</li>
                </ul>
            </div>
        </div>
    );
};

export default Proyecto5Carousel;

import React, { useState } from 'react';
import clusteringHumano from '../../assets/Clustering-humano.png';
import resultadosClustering from '../../assets/Resultados-Clustering.png';
import './ModalProyecto5.css';  // mismo estilo que proyecto3Carousel pero adaptado

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
                <p>
                    En este proyecto se realizó un análisis profundo de las preferencias individuales en distintas áreas como deportes, música, noticias y ciencia, con el fin de identificar patrones comunes entre grupos de personas. Para ello, se aplicaron técnicas avanzadas de clustering basadas en árboles generadores mínimos, que permiten encontrar la estructura de conexiones más eficiente entre los individuos, minimizando la distancia total entre ellos.

                    Este enfoque no supervisado posibilita descubrir agrupamientos naturales sin necesidad de etiquetas previas, facilitando la interpretación visual de los resultados y la identificación de comunidades de intereses similares.
                </p>
            </div>
        </div>
    );
};

export default Proyecto5Carousel;

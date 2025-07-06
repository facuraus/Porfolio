import React, { useState } from 'react';
import './Projects.css';

import proyecto1Img from '../../assets/proyecto1.jpg';
import proyecto2Img from '../../assets/proyecto2.jpg';
import proyecto3_img1 from '../../assets/proyecto3_img1.png';
import proyecto3_img2 from '../../assets/proyecto3_img2.png';
import videoPresentacion from '../../assets/SIGRH+_EL_FUTURO_DEL_RECLUTAMIENTO.mp4';

import Proyecto3Carousel from './Proyecto3Carousel';

const projectsData = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Este es un proyecto interesante que desarrolla funcionalidades clave en React.',
    image: proyecto1Img,
    video: videoPresentacion,
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Proyecto con backend en Node.js y base de datos MongoDB para gestión eficiente.',
    image: proyecto2Img,
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description: 'Aplicación móvil creada con React Native, optimizada para usabilidad y rendimiento.',
    image: proyecto3_img1, // esta imagen se muestra en la tarjeta
    extra:
      'Este proyecto fue una app móvil pensada para facilitar tareas cotidianas, utilizando React Native. Implementa navegación entre pantallas con React Navigation y gestión de estados globales con Redux Toolkit. También se enfocó en la experiencia de usuario con diseño responsive y accesible.',
    images: [proyecto3_img1, proyecto3_img2], // para el carrusel en modal
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const openModal = (project) => {
    setActiveProject(project);
    setShowVideo(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
    setShowVideo(false);
  };

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  return (
    <>
      <div className="projects-wrapper">
        <h2 className="projects-title">Mis Proyectos</h2>
        <div className="projects-container">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <button
                className="project-btn"
                onClick={() => openModal(project)}
              >
                Ver Proyecto
              </button>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && activeProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <h2>{activeProject.title}</h2>

            {!showVideo && (
              <>
                {activeProject.id === 3 ? (
                  <Proyecto3Carousel description={activeProject.extra} />
                ) : (
                  <>
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="modal-image"
                    />
                    <p>{activeProject.description}</p>
                    {activeProject.video && (
                      <button className="video-btn" onClick={handleShowVideo}>
                        Ver Video: SIGRH+ EL FUTURO DEL RECLUTAMIENTO
                      </button>
                    )}
                  </>
                )}
              </>
            )}

            {showVideo && activeProject.video && (
              <>
                <h3>SIGRH+ EL FUTURO DEL RECLUTAMIENTO</h3>
                <video
                  src={activeProject.video}
                  controls
                  autoPlay
                  className="modal-video"
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;

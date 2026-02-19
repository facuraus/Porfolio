import React, { useState } from 'react';
import './Projects.css';
import { proyectosData } from './proyectData'; 
import ProjectModal from './ProjectModal'; 

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  return (
    <section id="works" className="projects-wrapper">
      <h2 className="projects-title">Mis Proyectos</h2>
      
      <div className="projects-container">
        {proyectosData.map((project) => (
          <div key={project.id} className="project-item-wrapper">
            <h3 className="project-title">{project.titulo}</h3>
            
            <div className="project-card">
              <img
                src={project.imagenes[0]?.src}
                alt={project.titulo}
                className="project-image"
              />
              {/* El botón ahora vive dentro de la card y aparece al hacer hover */}
              <div className="project-overlay">
                <button
                  className="project-btn"
                  onClick={() => openModal(project)}
                >
                  Ver Proyecto
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal 
        isOpen={modalOpen} 
        proyecto={activeProject} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default Projects;
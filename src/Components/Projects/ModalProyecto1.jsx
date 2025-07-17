// ModalProyecto1.jsx
import React from 'react';
import './Projects.css';

const ModalProyecto1 = ({ image, description, video, handleShowVideo }) => {
  return (
    <>
      <img src={image} alt="Proyecto 1" className="modal-image" />
      <p>{description}</p>
      {video && (
        <button className="video-btn" onClick={handleShowVideo}>
          Ver Video: SIGRH+ EL FUTURO DEL RECLUTAMIENTO
        </button>
      )}
    </>
  );
};

export default ModalProyecto1;

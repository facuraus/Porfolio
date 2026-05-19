import React, { useState } from 'react';
import diplomaBackend from '../../assets/Diploma-Backend-CoderHouse.png';
import diplomaDesarrollo from '../../assets/Diploma-Desarrollo-De-Aplicaciones.png'; 

const Education = () => {
  const [modalImage, setModalImage] = useState(null);

  const universityData = [
    {
      title: "Licenciatura en Sistemas",
      institution: "Universidad Nacional de General Sarmiento",
      period: "2021 - Actualidad",
      desc: "Cursando ultimo año"
    },
    {
      title: "Técnico en Informática",
      institution: "Universidad Nacional de General Sarmiento",
      period: "Graduado en 2025",
      desc: ""
    }
  ];

  const coursesData = [
    {
      title: "Programación Backend I",
      platform: "Coderhouse",
      certificateImg: diplomaBackend 
    },
    {
      title: "Desarrollo de Aplicaciones",
      platform: "Coderhouse",
      certificateImg: diplomaDesarrollo 
    }
  ];

  const handleCertificateClick = (e, imgPath) => {
    e.preventDefault();
    setModalImage(imgPath);
  };

  return (
    <div id="Education" className="education-container">
      <h2 className="education-title">Educación</h2>
      
      <div className="education-content">
        {universityData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="education-header">
              <h3 className="education-degree">{edu.title}</h3>
              <span className="education-period">{edu.period}</span>
            </div>
            <span className="education-institution">{edu.institution}</span>
            <p className="education-text">{edu.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="education-title" style={{fontSize: '24px', marginTop: '60px', borderBottom: '1px solid var(--accent-secondary)', color: 'var(--accent-secondary)'}}>
        Cursos & Certificaciones
      </h3>
      
      <div className="courses-grid">
        {coursesData.map((course, index) => (
          <div className="course-card" key={index}>
            <div>
              <p className="course-platform">{course.platform}</p>
              <h4 className="course-title">{course.title}</h4>
            </div>
            <a 
              href="#" 
              className="btn-certificate"
              onClick={(e) => handleCertificateClick(e, course.certificateImg)}
            >
              Ver Certificado →
            </a>
          </div>
        ))}
      </div>

      {/* MODAL PARA MOSTRAR LA IMAGEN */}
      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalImage(null)}>X</button>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <img 
                src={modalImage} 
                alt="Certificado Curso" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '75vh', 
                  borderRadius: '6px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
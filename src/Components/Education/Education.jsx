import React, { useState } from 'react';

const Education = () => {
  const [showModal, setShowModal] = useState(false);

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
      isCurrent: true // Marcamos que lo estás cursando
    },
    {
      title: "Desarrollo de Aplicaciones",
      platform: "Coderhouse",
      isCurrent: true
    }
  ];

  const handleCertificateClick = (e, isCurrent) => {
    if (isCurrent) {
      e.preventDefault(); // Evita que abra un link
      setShowModal(true); // Abre el modal
    }
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
              onClick={(e) => handleCertificateClick(e, course.isCurrent)}
            >
              Ver Certificado →
            </a>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>¡Certificado en camino! 🚀</h3>
            <p>Actualmente me encuentro cursando esta formación. El certificado estará disponible una vez finalizado el curso.</p>
            <button className="modal-close" onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
import React from 'react';
import './About.css';
import gifDesarrollador from '../../assets/gif-portfolio.gif'; // Reemplazá por el nombre real si es distinto

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Sobre Mí</h2>
      <div className="about-content">
        <img src={gifDesarrollador} alt="GIF desarrollador" className="about-image" />
        <p className="about-text">
          Soy Facundo Rauschenberger, Técnico en Informática con título en trámite y estudiante avanzado
          de la Licenciatura en Sistemas. Estoy buscando mi primera experiencia formal en el área IT, donde
          pueda aportar mis conocimientos, integrarme a un equipo de trabajo y continuar desarrollando
          mis habilidades tanto técnicas como humanas. Me apasiona aprender, colaborar en proyectos que generen impacto,
          y mantenerme actualizado en tecnologías modernas del desarrollo de software.
        </p>
      </div>
    </div>
  );
};

export default About;

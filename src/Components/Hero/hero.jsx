import React from 'react';
import fotoCV from '../../assets/foto-cv.png';
import { FiDownload } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importamos los iconos
import AnchorLink from 'react-anchor-link-smooth-scroll';
import miCV from '../../assets/CV-Facundo-Rauschenberger-Marzo-2026.pdf';
const Hero = () => {
  return (
    <div id="hero" className='hero'>
      {/* Contenedor de imagen y redes */}
      <div className="hero-img-container">
        <img src={fotoCV} alt="Foto de perfil" className='hero-img' />
        <div className="hero-social-box">
          <a href="https://www.linkedin.com/in/facundo-rauschenberger-72593a25b/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Facundo-Rauschen" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a> 
        </div>
      </div>

      <h1 className='hero-title'>
        <span>Soy Facundo Rauschenberger,</span> Software Developer.
      </h1>
      <p className='hero-subtitle'>
        Cuento con experiencia en el desarrollo integral de aplicaciones y la escritura de código eficiente para garantizar
        la entrega de productos confiables y con alto rendimiento. Me apasiona la calidad del software y el trabajo en equipo
        para mejorar continuamente los procesos de desarrollo.
      </p>
      <div className="hero-action">
        <AnchorLink href="#contact" className="hero-contacto">
          Contactarme
        </AnchorLink>
        <a href={miCV} download="CV-Facundo-Rauschenberger-Marzo-2026.pdf" className="hero-CV">
          Descargar Mi CV
        </a>
      </div>
    </div>
  );
};

export default Hero;
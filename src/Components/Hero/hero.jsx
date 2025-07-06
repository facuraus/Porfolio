import React from 'react';
import './hero.css';
import fotoCV from '../../assets/foto-cv.png';
import { FiDownload } from 'react-icons/fi';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="hero" className='hero'>
      <img src={fotoCV} alt="Foto de perfil" className='hero-img' />
      <h1 className='hero-title'>
        <span>Soy Facundo Rauschenberger,</span> desarrollador Full-Stack con formación en QA.
      </h1>
      <p className='hero-subtitle'>
        Tengo experiencia desarrollando aplicaciones completas, combinando código eficiente con metodologías de aseguramiento de calidad que incluyen pruebas manuales y automatizadas, para garantizar la entrega de productos confiables y con alto rendimiento. Me apasiona la calidad del software y el trabajo en equipo para mejorar continuamente los procesos de desarrollo.
      </p>
      <div className="hero-action">
        <AnchorLink href="#contact" className="hero-contacto">
          Contactarme
        </AnchorLink>
        <a href="/CV-Facundo-Rauschenberger.pdf" download className="hero-CV">
          Descargar Mi CV
        </a>
      </div>
    </div>
  );
};

export default Hero;

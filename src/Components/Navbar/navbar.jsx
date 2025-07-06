import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import './navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["hero", "About", "skills", "works", "contact"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Esta función actualiza el link activo al hacer click
  const handleClick = (id) => {
    setActiveSection(id);
  };

  const links = [
    { id: "hero", label: "Home" },
    { id: "About", label: "Sobre Mi" },
    { id: "skills", label: "Habilidades" },
    { id: "works", label: "Portfolio" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map(({ id, label }) => (
          <li key={id}>
            <AnchorLink
              href={`#${id}`}
              className={`navbar-link ${activeSection === id ? "active" : ""}`}
              onClick={() => handleClick(id)}  // Actualiza el estado al clickear
            >
              {label}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

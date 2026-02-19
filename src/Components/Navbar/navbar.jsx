import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdDarkMode, MdLightMode } from "react-icons/md";
//import './navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const sections = ["hero", "Education", "skills", "works", "contact"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("light-mode");
  };

  const links = [
    { id: "Education", label: "Educacion" },
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
            >
              {label}
            </AnchorLink>
          </li>
        ))}
        {/* Icono de modo */}
        <li className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
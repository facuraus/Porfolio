import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md"; // Importamos iconos de menú

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú móvil

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const links = [
    { id: "Education", label: "Educación" },
    { id: "skills", label: "Habilidades" },
    { id: "works", label: "Portfolio" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <nav className="navbar">
      {/* Botón Hamburguesa - Solo visible en móvil vía CSS */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <MdClose /> : <MdMenu />}
      </div>

      <ul className={`navbar-list ${isMenuOpen ? "active" : ""}`}>
        {links.map(({ id, label }) => (
          <li key={id}>
            <AnchorLink
              href={`#${id}`}
              className={`navbar-link ${activeSection === id ? "active" : ""}`}
              onClick={closeMenu} // Cierra el menú al hacer clic en un link
            >
              {label}
            </AnchorLink>
          </li>
        ))}
        
        <li className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
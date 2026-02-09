import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${isHomePage && !scrolled ? 'header-transparent' : ''}`}>
      <div className="header-container">
        <Link to="/" className={`logo ${isHomePage && !scrolled ? 'logo-hidden' : ''}`} onClick={closeMenu}>
          <span className="logo-text">Nordic</span>
          <span className="logo-accent">Marketing</span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <div className="nav-links">
            <NavLink to="/" className="nav-link" onClick={closeMenu}>
              Forside
            </NavLink>
            <NavLink to="/services" className="nav-link" onClick={closeMenu}>
              Services
            </NavLink>
            <NavLink to="/blog" className="nav-link" onClick={closeMenu}>
              Blog
            </NavLink>
            <NavLink to="/proces" className="nav-link" onClick={closeMenu}>
              Proces
            </NavLink>
            <NavLink to="/om-os" className="nav-link" onClick={closeMenu}>
              Om Os
            </NavLink>
          </div>
          <NavLink to="/kontakt" className="nav-link cta-button" onClick={closeMenu}>
            Kontakt
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

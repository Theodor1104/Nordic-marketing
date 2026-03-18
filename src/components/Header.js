import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'da' ? 'en' : 'da';
    i18n.changeLanguage(newLang);
  };

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
          <span className="logo-accent">Digital</span>
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
              {t('nav.home')}
            </NavLink>
            <NavLink to="/hjemmesider" className="nav-link" onClick={closeMenu}>
              {t('nav.websites')}
            </NavLink>
            <NavLink to="/apps" className="nav-link" onClick={closeMenu}>
              {t('nav.apps')}
            </NavLink>
            <NavLink to="/om-os" className="nav-link" onClick={closeMenu}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/blog" className="nav-link" onClick={closeMenu}>
              {t('nav.blog')}
            </NavLink>
          </div>
          <button className="lang-switcher" onClick={toggleLanguage} aria-label="Switch language">
            {i18n.language === 'da' ? 'EN' : 'DA'}
          </button>
          <NavLink to="/kontakt" className="nav-link cta-button" onClick={closeMenu}>
            {t('nav.contact')}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

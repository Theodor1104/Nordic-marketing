import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const isDarkHeroPage = ['/', '/apps', '/hjemmesider', '/cases', '/om-os', '/proces'].includes(location.pathname);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'da' ? 'en' : 'da';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);

      // Only hide/show on desktop (disable on mobile to prevent lag)
      if (window.innerWidth > 768) {
        if (scrollY > lastScrollY.current && scrollY > 100) {
          setHidden(true);
        } else if (scrollY < lastScrollY.current) {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }
      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${isDarkHeroPage && !scrolled ? 'header-transparent' : ''} ${hidden ? 'header-hidden' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
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
            <NavLink to="/apps" className="nav-link" onClick={closeMenu}>
              {t('nav.apps')}
            </NavLink>
            <NavLink to="/hjemmesider" className="nav-link" onClick={closeMenu}>
              {t('nav.websites')}
            </NavLink>
            <NavLink to="/proces" className="nav-link" onClick={closeMenu}>
              Proces
            </NavLink>
            <NavLink to="/om-os" className="nav-link" onClick={closeMenu}>
              {t('nav.about')}
            </NavLink>
            <button className="lang-switcher" onClick={toggleLanguage} aria-label="Switch language">
              {i18n.language === 'da' ? 'EN' : 'DA'}
            </button>
            <NavLink to="/kontakt" className="nav-link cta-button" onClick={closeMenu}>
              {t('nav.contact')}
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

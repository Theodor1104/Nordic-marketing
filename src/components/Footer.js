import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">
            <span className="logo-text">Nordic</span>
            <span className="logo-accent">Digital</span>
          </h3>
          <p className="footer-description">
            {t('footer.description')}
          </p>
        </div>

        <div className="footer-section">
          <h4>{t('footer.navigation')}</h4>
          <ul className="footer-links">
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/services">{t('nav.services')}</Link></li>
            <li><Link to="/om-os">{t('nav.about')}</Link></li>
            <li><Link to="/kontakt">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t('footer.services')}</h4>
          <ul className="footer-links">
            <li><Link to="/app-udvikling-danmark">App Udvikling</Link></li>
            <li><Link to="/webdesign-bureau-danmark">{t('footer.websites')}</Link></li>
            <li><Link to="/seo-bureau-danmark">SEO & GEO</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t('footer.contact')}</h4>
          <ul className="footer-links">
            <li>
              <a href="mailto:nordicmarketin@outlook.dk">nordicmarketin@outlook.dk</a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} {t('footer.copyright')}</p>
        <Link to="/admin" className="admin-link">Admin</Link>
      </div>
    </footer>
  );
}

export default Footer;

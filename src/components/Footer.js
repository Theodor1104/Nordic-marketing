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
            <li><Link to="/hjemmesider">{t('nav.websites')}</Link></li>
            <li><Link to="/apps">{t('nav.apps')}</Link></li>
            <li><Link to="/om-os">{t('nav.about')}</Link></li>
            <li><Link to="/kontakt">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t('footer.services')}</h4>
          <ul className="footer-links">
            <li><Link to="/hjemmesider">{t('footer.websites')}</Link></li>
            <li><Link to="/apps">Apps</Link></li>
            <li><Link to="/cases">Cases</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t('footer.contact')}</h4>
          <ul className="footer-links">
            <li>
              <a href="mailto:info@nordic-digital.dk">info@nordic-digital.dk</a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} {t('footer.copyright')} | CVR: 46344871</p>
        <Link to="/admin" className="admin-link">Admin</Link>
      </div>
    </footer>
  );
}

export default Footer;

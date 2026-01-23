import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">
            <span className="logo-text">Nordic</span>
            <span className="logo-accent">Marketing</span>
          </h3>
          <p className="footer-description">
            Vi gør online marketing forståelig, tilgængelig og resultatskabende for virksomheder uanset størrelse.
          </p>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Forside</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/om-os">Om Os</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">Meta Ads</Link></li>
            <li><Link to="/services">Google Ads</Link></li>
            <li><Link to="/services">SEO</Link></li>
            <li><Link to="/services">Hjemmesider</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Kontakt</h4>
          <ul className="footer-links">
            <li>
              <a href="mailto:kontakt@nordicmarketing.dk">kontakt@nordicmarketing.dk</a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Nordic Marketing. Alle rettigheder forbeholdes.</p>
        <Link to="/admin" className="admin-link">Admin</Link>
      </div>
    </footer>
  );
}

export default Footer;

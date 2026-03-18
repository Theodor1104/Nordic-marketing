import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import '../styles/Home.css';
import '../styles/PhoneMockup.css';
import '../styles/WebsiteShowcase.css';
import PhoneMockup from '../components/PhoneMockup';
import WebsiteShowcase from '../components/WebsiteShowcase';

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hvad tilbyder Nordic Digital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nordic Digital tilbyder professionel app udvikling til iOS og Android, moderne webdesign og SEO/GEO optimering. Vi bruger teknologier som React Native, Flutter og moderne web frameworks. Kontakt os for en gratis konsultation."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad koster det at udvikle en app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "App udvikling hos Nordic Digital starter fra 25.000 DKK for en simpel MVP app. En fuld business app til iOS og Android koster typisk 50.000-150.000 DKK afhængig af funktionalitet og kompleksitet."
        }
      },
      {
        "@type": "Question",
        "name": "Laver I apps til både iOS og Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vi udvikler apps til både iOS og Android. Vi bruger primært cross-platform teknologier som React Native og Flutter, hvilket giver dig apps til begge platforme til én pris. Vi tilbyder også native udvikling for mere komplekse projekter."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad koster en hjemmeside?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En professionel hjemmeside fra Nordic Digital starter fra 5.000 DKK for en landingsside. En fuld virksomhedshjemmeside koster typisk 10.000-25.000 DKK. Alle vores hjemmesider er responsive, hurtige og SEO-optimeret."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad er SEO og GEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO (Search Engine Optimization) optimerer din hjemmeside til Google. GEO (Generative Engine Optimization) optimerer dit indhold til AI-søgemaskiner som ChatGPT og Perplexity. Nordic Digital tilbyder begge dele som en samlet service for maksimal online synlighed."
        }
      }
    ]
  };

  return (
    <div className="home">
      <SEO
        title="App Udvikling & Webdesign Bureau Danmark | Nordic Digital"
        description="Nordic Digital er Danmarks app og web bureau. Vi udvikler professionelle iOS & Android apps, moderne hjemmesider og SEO/GEO optimering. React Native, Flutter. Gratis konsultation!"
        keywords="app udvikling danmark, app bureau danmark, iOS app udvikling, Android app udvikling, React Native Danmark, Flutter apps Danmark, webdesign danmark, webdesign bureau danmark, SEO bureau danmark, GEO optimering, hjemmeside pris danmark, mobile apps udvikling, cross-platform apps"
        canonical="https://nordic-digital.dk/"
        schema={homeFaqSchema}
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <Link to="/" className={`hero-logo ${scrolled ? 'hero-logo-hidden' : ''}`}>
            <span className="hero-logo-text">Nordic</span>
            <span className="hero-logo-accent">Digital</span>
          </Link>
          <h1>
            {t('home.hero_title')} - <span className="highlight">{t('home.hero_highlight')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('home.hero_subtitle')}
          </p>
          <div className="hero-buttons">
            <Link to="/kontakt" className="btn btn-primary">
              {t('home.cta_consultation')}
            </Link>
            <Link to="/services" className="btn btn-secondary">
              {t('home.cta_services')}
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <PhoneMockup />
        </div>
      </section>

      {/* Website Showcase (includes Services) */}
      <WebsiteShowcase />

      {/* USP Section */}
      <section className="usp-section">
        <div className="container">
          <h2>{t('home.usp_title')}</h2>
          <div className="usp-grid">
            <div className="usp-card">
              <div className="usp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1"/>
                  <rect x="14" y="3" width="7" height="7" rx="1"/>
                  <rect x="3" y="14" width="7" height="7" rx="1"/>
                  <rect x="14" y="14" width="7" height="7" rx="1"/>
                </svg>
              </div>
              <div className="usp-card-content">
                <h3>{t('home.usp_complete')}</h3>
                <p>{t('home.usp_complete_desc')}</p>
              </div>
            </div>
            <div className="usp-card">
              <div className="usp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12" y2="18"/>
                  <path d="M9 6h6"/>
                  <path d="M9 10h6"/>
                </svg>
              </div>
              <div className="usp-card-content">
                <h3>{t('home.usp_digital')}</h3>
                <p>{t('home.usp_digital_desc')}</p>
              </div>
            </div>
            <div className="usp-card">
              <div className="usp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <div className="usp-card-content">
                <h3>{t('home.usp_nocure')}</h3>
                <p>{t('home.usp_nocure_desc')}</p>
              </div>
            </div>
            <div className="usp-card">
              <div className="usp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className="usp-card-content">
                <h3>{t('home.usp_personal')}</h3>
                <p>{t('home.usp_personal_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="process-preview">
        <div className="container">
          <div className="process-preview-content">
            <div className="process-preview-text">
              <h2>{t('home.process_title')}</h2>
              <p>
                {t('home.process_desc')}
              </p>
              <div className="process-stats">
                <div className="process-stat">
                  <span className="process-stat-value">5</span>
                  <span className="process-stat-label">{t('home.process_phases')}</span>
                </div>
                <div className="process-stat">
                  <span className="process-stat-value">100%</span>
                  <span className="process-stat-label">{t('home.process_transparency')}</span>
                </div>
                <div className="process-stat">
                  <span className="process-stat-value">24/7</span>
                  <span className="process-stat-label">{t('home.process_support')}</span>
                </div>
              </div>
              <Link to="/proces" className="btn btn-light">{t('home.process_cta')}</Link>
            </div>
            <div className="process-preview-steps">
              <div className="preview-step">
                <span className="preview-step-number">01</span>
                <span className="preview-step-text">{t('home.process_step1')}</span>
              </div>
              <div className="preview-step">
                <span className="preview-step-number">02</span>
                <span className="preview-step-text">{t('home.process_step2')}</span>
              </div>
              <div className="preview-step">
                <span className="preview-step-number">03</span>
                <span className="preview-step-text">{t('home.process_step3')}</span>
              </div>
              <div className="preview-step">
                <span className="preview-step-number">04</span>
                <span className="preview-step-text">{t('home.process_step4')}</span>
              </div>
              <div className="preview-step">
                <span className="preview-step-number">05</span>
                <span className="preview-step-text">{t('home.process_step5')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('home.cta_title')}</h2>
          <p>{t('home.cta_desc')}</p>
          <Link to="/kontakt" className="btn btn-light">{t('home.cta_button')}</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

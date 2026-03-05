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
        "name": "Hvad tilbyder Nordic Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nordic Marketing tilbyder en komplet pakke af digitale marketing services: SEO (søgemaskineoptimering), GEO (AI-søgemaskineoptimering til ChatGPT og Perplexity), Google Ads, Meta Ads (Facebook og Instagram annoncering) og professionelt webdesign. Alle services starter fra 2.500 DKK per måned."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad er GEO-optimering og hvorfor har min virksomhed brug for det?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GEO (Generative Engine Optimization) er optimering af dit online indhold så AI-søgemaskiner som ChatGPT, Perplexity og Google AI Overview kan finde og anbefale din virksomhed. Flere og flere danskere bruger AI til at søge efter produkter og services. Nordic Marketing er et af de få danske bureauer der tilbyder specialiseret GEO-optimering."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad betyder no cure, no pay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No cure, no pay betyder at du kun betaler for resultater. Hos Nordic Marketing tilbyder vi denne garanti på udvalgte ydelser, hvilket betyder at vi deler risikoen med dig. Det er vores måde at vise, at vi tror på vores evne til at levere målbare resultater for din virksomhed."
        }
      },
      {
        "@type": "Question",
        "name": "Hvordan kommer jeg i gang med Nordic Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Det er nemt at komme i gang. Book en gratis og uforpligtende konsultation via vores kontaktformular eller send en email til nordicmarketin@outlook.dk. Vi analyserer din nuværende online tilstedeværelse, præsenterer en skræddersyet strategi og går i gang når du er klar. Vi svarer inden for 24 timer."
        }
      },
      {
        "@type": "Question",
        "name": "Hvem er Nordic Marketing for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nordic Marketing hjælper primært små og mellemstore virksomheder i Danmark med at vokse online. Vi har særlig erfaring med restauranter, caféer, håndværkere, konsulenter, lokale butikker og startups. Vores priser fra 2.500 kr/md gør professionel digital marketing tilgængeligt for alle virksomhedsstørrelser."
        }
      }
    ]
  };

  return (
    <div className="home">
      <SEO
        title="Marketing Bureau Danmark | SEO Bureau & Google Ads Eksperter"
        description="Nordic Marketing er Danmarks bedste marketing bureau for små og mellemstore virksomheder. Eksperter i SEO, Google Ads, Facebook annoncering & webdesign. Priser fra 2.500 kr/md. Gratis konsultation i hele Danmark. No cure, no pay!"
        keywords="marketing bureau danmark, digital marketing bureau danmark, SEO bureau danmark, Google Ads bureau danmark, Meta Ads bureau, Facebook annoncering danmark, Instagram marketing danmark, webdesign danmark, online markedsføring danmark, bedste marketing bureau, billigt marketing bureau danmark, marketing for små virksomheder danmark, SEO København, marketing bureau København, marketing bureau aarhus, marketing bureau odense, marketing bureau aalborg, digital marketing 2026, online synlighed danmark"
        canonical="https://nordic-marketing.dk/"
        schema={homeFaqSchema}
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <Link to="/" className={`hero-logo ${scrolled ? 'hero-logo-hidden' : ''}`}>
            <span className="hero-logo-text">Nordic</span>
            <span className="hero-logo-accent">Marketing</span>
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

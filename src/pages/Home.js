import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/Home.css';
import '../styles/PhoneMockup.css';
import '../styles/WebsiteShowcase.css';
import PhoneMockup from '../components/PhoneMockup';
import WebsiteShowcase from '../components/WebsiteShowcase';

function Home() {
  const [scrolled, setScrolled] = useState(false);

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
        title="Digital Marketing Bureau i København"
        description="Nordic Marketing - Dit lokale marketing bureau i København. Eksperter i SEO, GEO (AI-søgning), Google Ads & Meta Ads. Priser fra 2.500 kr/md. Gratis konsultation. No cure, no pay!"
        keywords="digital marketing bureau København, SEO bureau Danmark, GEO optimering, AI søgemaskineoptimering, Google Ads bureau, Meta Ads, Facebook annoncering København, Instagram marketing, webdesign Frederiksberg, online markedsføring, marketing for små virksomheder, billigt marketing bureau"
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
            Få din virksomhed til at <span className="highlight">vokse online</span>
          </h1>
          <p className="hero-subtitle">
            Vi gør online marketing gennemsigtigt, effektivt og tilgængeligt.
            Gennem nytænkning, fair priser og intelligent brug af AI skaber vi
            målbare resultater for din virksomhed.
          </p>
          <div className="hero-buttons">
            <Link to="/kontakt" className="btn btn-primary">
              Gratis konsultation
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Se vores services
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
          <h2>Hvorfor vælge Nordic Marketing?</h2>
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
                <h3>Komplet løsning</h3>
                <p>Vi tilbyder både markedsføring og hjemmesideudvikling - alt samlet ét sted.</p>
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
                <h3>Digital native</h3>
                <p>Vokset op i den digitale verden med dyb forståelse for online trends og unges adfærd.</p>
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
                <h3>No cure, no pay</h3>
                <p>Vi tror på vores resultater - du betaler kun når vi leverer.</p>
              </div>
            </div>
            <div className="usp-card">
              <div className="usp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className="usp-card-content">
                <h3>Personlig service</h3>
                <p>Du er øverst på vores prioritetsliste - vi lytter til dine behov og tilpasser løsningen.</p>
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
              <h2>Sådan arbejder vi</h2>
              <p>
                Vi følger en gennemprøvet proces der sikrer gennemsigtighed og resultater.
                Fra den første analyse til løbende optimering - du er med hele vejen.
              </p>
              <div className="process-stats">
                <div className="process-stat">
                  <span className="process-stat-value">5</span>
                  <span className="process-stat-label">Faser</span>
                </div>
                <div className="process-stat">
                  <span className="process-stat-value">100%</span>
                  <span className="process-stat-label">Gennemsigtighed</span>
                </div>
                <div className="process-stat">
                  <span className="process-stat-value">24/7</span>
                  <span className="process-stat-label">Support</span>
                </div>
              </div>
              <Link to="/proces" className="btn btn-light">Se vores proces</Link>
            </div>
            <div className="process-preview-steps">
              <div className="preview-step">
                <span className="preview-step-number">01</span>
                <span className="preview-step-text">Opdagelse</span>
              </div>
              <div className="preview-step">
                <span className="preview-step-number">02</span>
                <span className="preview-step-text">Strategi</span>
              </div>
              <div className="preview-step">
                <span className="preview-step-number">03</span>
                <span className="preview-step-text">Kreation</span>
              </div>
              <div className="preview-step">
                <span className="preview-step-number">04</span>
                <span className="preview-step-text">Lancering</span>
              </div>
              <div className="preview-step">
                <span className="preview-step-number">05</span>
                <span className="preview-step-text">Optimering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Klar til at tage næste skridt?</h2>
          <p>Lad os tale om hvordan vi kan hjælpe din virksomhed med at vokse online.</p>
          <Link to="/kontakt" className="btn btn-light">Kontakt os i dag</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import '../styles/ServicePage.css';

function WebdesignService() {
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-digital.dk/" },
    { name: "Services", url: "https://nordic-digital.dk/services" },
    { name: "Webdesign Bureau", url: "https://nordic-digital.dk/webdesign-bureau-danmark" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Webdesign Bureau Danmark",
    "description": "Professionelt webdesign for danske virksomheder. Moderne, hurtige og SEO-optimerede hjemmesider. Priser fra 5.000 DKK.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Nordic Digital",
      "url": "https://nordic-digital.dk"
    },
    "areaServed": { "@type": "Country", "name": "Danmark" },
    "offers": {
      "@type": "Offer",
      "price": "5000",
      "priceCurrency": "DKK"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hvad koster en hjemmeside i Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En professionel hjemmeside fra Nordic Digital starter fra 5.000 DKK for en landingsside. En fuld virksomhedshjemmeside koster typisk 10.000-25.000 DKK afhængig af omfang og funktionalitet."
        }
      },
      {
        "@type": "Question",
        "name": "Hvor lang tid tager det at lave en hjemmeside?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En simpel landingsside kan laves på 1-2 uger. En fuld virksomhedshjemmeside tager typisk 3-6 uger, afhængig af omfang og hvor hurtigt vi får feedback og indhold."
        }
      },
      {
        "@type": "Question",
        "name": "Er jeres hjemmesider SEO-optimerede?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, alle vores hjemmesider er SEO-optimerede fra start. Det inkluderer teknisk SEO, hurtig loadtid, mobilvenligt design og korrekt struktur med meta tags og schema markup."
        }
      }
    ]
  };

  return (
    <div className="service-page">
      <SEO
        title="Webdesign Bureau Danmark | Professionelle Hjemmesider fra 5.000 kr"
        description="Danmarks webdesign bureau for virksomheder. Moderne, hurtige og SEO-optimerede hjemmesider. Responsivt design. Gratis konsultation!"
        keywords="webdesign bureau danmark, hjemmeside pris danmark, webdesign København, professionel hjemmeside, webdesign firma danmark, responsivt webdesign, SEO hjemmeside, webdesign for virksomheder"
        canonical="https://nordic-digital.dk/webdesign-bureau-danmark"
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-badge">{t('webdesign_service.badge')}</div>
            <h1>{t('webdesign_service.title')}</h1>
            <p>{t('webdesign_service.desc')}</p>
            <div className="hero-cta">
              <Link to="/kontakt" className="btn btn-primary">{t('webdesign_service.cta_button')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="service-features">
        <div className="container">
          <h2>{t('webdesign_service.features_title')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
                </svg>
              </div>
              <h3>{t('webdesign_service.feature1_title')}</h3>
              <p>{t('webdesign_service.feature1_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>{t('webdesign_service.feature2_title')}</h3>
              <p>{t('webdesign_service.feature2_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <h3>{t('webdesign_service.feature3_title')}</h3>
              <p>{t('webdesign_service.feature3_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>{t('webdesign_service.feature4_title')}</h3>
              <p>{t('webdesign_service.feature4_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
                </svg>
              </div>
              <h3>{t('webdesign_service.feature5_title')}</h3>
              <p>{t('webdesign_service.feature5_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>{t('webdesign_service.feature6_title')}</h3>
              <p>{t('webdesign_service.feature6_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="service-cities">
        <div className="container">
          <h2>{t('webdesign_service.cities_title')}</h2>
          <p>{t('webdesign_service.cities_desc')}</p>
          <div className="cities-grid">
            <div className="city-card">
              <h3>{t('webdesign_service.city1')}</h3>
              <p>{t('webdesign_service.city1_desc')}</p>
            </div>
            <div className="city-card">
              <h3>{t('webdesign_service.city2')}</h3>
              <p>{t('webdesign_service.city2_desc')}</p>
            </div>
            <div className="city-card">
              <h3>{t('webdesign_service.city3')}</h3>
              <p>{t('webdesign_service.city3_desc')}</p>
            </div>
            <div className="city-card">
              <h3>{t('webdesign_service.city4')}</h3>
              <p>{t('webdesign_service.city4_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-faq">
        <div className="container">
          <h2>{t('webdesign_service.faq_title')}</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>{t('webdesign_service.faq1_question')}</h3>
              <p>{t('webdesign_service.faq1_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('webdesign_service.faq2_question')}</h3>
              <p>{t('webdesign_service.faq2_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('webdesign_service.faq3_question')}</h3>
              <p>{t('webdesign_service.faq3_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('webdesign_service.faq4_question')}</h3>
              <p>{t('webdesign_service.faq4_answer')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('webdesign_service.cta_title')}</h2>
          <p>{t('webdesign_service.cta_desc')}</p>
          <Link to="/kontakt" className="btn btn-light">{t('webdesign_service.cta_button')}</Link>
        </div>
      </section>
    </div>
  );
}

export default WebdesignService;

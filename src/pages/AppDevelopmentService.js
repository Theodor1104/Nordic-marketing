import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import '../styles/ServicePage.css';

function AppDevelopmentService() {
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-digital.dk/" },
    { name: "Services", url: "https://nordic-digital.dk/services" },
    { name: "App Udvikling", url: "https://nordic-digital.dk/app-udvikling-danmark" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "App Udvikling Danmark",
    "description": "Professionel app udvikling for danske virksomheder. iOS, Android og cross-platform apps. Native og React Native/Flutter løsninger.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Nordic Digital",
      "url": "https://nordic-digital.dk"
    },
    "areaServed": { "@type": "Country", "name": "Danmark" },
    "offers": {
      "@type": "Offer",
      "price": "25000",
      "priceCurrency": "DKK"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hvad koster det at udvikle en app i Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "App udvikling hos Nordic Digital starter fra 25.000 DKK for en simpel MVP app. En fuld business app koster typisk 50.000-150.000 DKK afhængig af funktionalitet og kompleksitet."
        }
      },
      {
        "@type": "Question",
        "name": "Hvor lang tid tager det at udvikle en app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En simpel MVP app kan udvikles på 4-8 uger. En fuld business app tager typisk 3-6 måneder afhængig af omfang og kompleksitet."
        }
      },
      {
        "@type": "Question",
        "name": "Laver I apps til både iOS og Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vi udvikler apps til både iOS og Android. Vi bruger primært cross-platform teknologier som React Native og Flutter, hvilket giver dig apps til begge platforme til én pris."
        }
      }
    ]
  };

  return (
    <div className="service-page">
      <SEO
        title="App Udvikling Danmark | iOS & Android Apps fra 25.000 kr"
        description="Danmarks app bureau for virksomheder. Professionel app udvikling til iOS og Android. React Native, Flutter og native apps. MVP til enterprise. Gratis konsultation!"
        keywords="app udvikling danmark, app bureau danmark, iOS app udvikling, Android app udvikling, React Native Danmark, Flutter apps Danmark, mobile apps udvikling, app udvikler København, custom app udvikling"
        canonical="https://nordic-digital.dk/app-udvikling-danmark"
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-badge">{t('app_service.badge')}</div>
            <h1>{t('app_service.title')}</h1>
            <p>{t('app_service.desc')}</p>
            <div className="hero-cta">
              <Link to="/kontakt" className="btn btn-primary">{t('app_service.cta_button')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="service-features">
        <div className="container">
          <h2>{t('app_service.features_title')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
                </svg>
              </div>
              <h3>{t('app_service.feature1_title')}</h3>
              <p>{t('app_service.feature1_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>{t('app_service.feature2_title')}</h3>
              <p>{t('app_service.feature2_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>{t('app_service.feature3_title')}</h3>
              <p>{t('app_service.feature3_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>{t('app_service.feature4_title')}</h3>
              <p>{t('app_service.feature4_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>{t('app_service.feature5_title')}</h3>
              <p>{t('app_service.feature5_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>{t('app_service.feature6_title')}</h3>
              <p>{t('app_service.feature6_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="service-tech">
        <div className="container">
          <h2>{t('app_service.tech_title')}</h2>
          <p className="section-subtitle">{t('app_service.tech_desc')}</p>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
              </div>
              <h3>React Native</h3>
              <p>{t('app_service.tech_react')}</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17"/><polygon points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <h3>Flutter</h3>
              <p>{t('app_service.tech_flutter')}</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
                </svg>
              </div>
              <h3>Native iOS</h3>
              <p>{t('app_service.tech_ios')}</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
                </svg>
              </div>
              <h3>Native Android</h3>
              <p>{t('app_service.tech_android')}</p>
            </div>
          </div>
        </div>
      </section>


      {/* App Types */}
      <section className="service-cities">
        <div className="container">
          <h2>{t('app_service.types_title')}</h2>
          <p>{t('app_service.types_desc')}</p>
          <div className="cities-grid">
            <div className="city-card">
              <h3>{t('app_service.type1')}</h3>
              <p>{t('app_service.type1_desc')}</p>
            </div>
            <div className="city-card">
              <h3>{t('app_service.type2')}</h3>
              <p>{t('app_service.type2_desc')}</p>
            </div>
            <div className="city-card">
              <h3>{t('app_service.type3')}</h3>
              <p>{t('app_service.type3_desc')}</p>
            </div>
            <div className="city-card">
              <h3>{t('app_service.type4')}</h3>
              <p>{t('app_service.type4_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-faq">
        <div className="container">
          <h2>{t('app_service.faq_title')}</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>{t('app_service.faq1_question')}</h3>
              <p>{t('app_service.faq1_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('app_service.faq2_question')}</h3>
              <p>{t('app_service.faq2_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('app_service.faq3_question')}</h3>
              <p>{t('app_service.faq3_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('app_service.faq4_question')}</h3>
              <p>{t('app_service.faq4_answer')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('app_service.cta_title')}</h2>
          <p>{t('app_service.cta_desc')}</p>
          <Link to="/kontakt" className="btn btn-light">{t('app_service.cta_button')}</Link>
        </div>
      </section>
    </div>
  );
}

export default AppDevelopmentService;

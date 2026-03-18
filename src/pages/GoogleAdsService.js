import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import '../styles/ServicePage.css';

function GoogleAdsService() {
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-marketing.dk/" },
    { name: "Services", url: "https://nordic-marketing.dk/services" },
    { name: "Google Ads Bureau", url: "https://nordic-marketing.dk/google-ads-bureau-danmark" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Ads Bureau Danmark",
    "description": "Professionel Google Ads management for danske virksomheder. Søgeannoncering, Display, Shopping og YouTube Ads. Priser fra 2.500 kr/md.",
    "provider": {
      "@type": "MarketingAgency",
      "name": "Nordic Marketing",
      "url": "https://nordic-marketing.dk"
    },
    "areaServed": { "@type": "Country", "name": "Danmark" },
    "offers": {
      "@type": "Offer",
      "price": "2500",
      "priceCurrency": "DKK",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "2500",
        "priceCurrency": "DKK",
        "unitText": "måned"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hvad koster Google Ads management i Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Ads management hos Nordic Marketing starter fra 2.500 DKK per måned. Dette inkluderer opsætning, optimering og rapportering. Annoncebudgettet kommer oveni og aftales individuelt."
        }
      },
      {
        "@type": "Question",
        "name": "Hvor hurtigt ser man resultater med Google Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Ads giver øjeblikkelige resultater. Du kan se trafik og konverteringer fra dag 1. Optimal performance opnås typisk efter 2-4 ugers optimering, når der er nok data til at justere bud og målretning."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad er en god ROI på Google Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En god ROAS (Return On Ad Spend) afhænger af din branche og marginer. Generelt sigter vi efter minimum 3:1 ROAS, hvilket betyder 3 kr i omsætning for hver 1 kr brugt på annoncer."
        }
      }
    ]
  };

  return (
    <div className="service-page">
      <SEO
        title="Google Ads Bureau Danmark | Professionel Google Annoncering fra 2.500 kr/md"
        description="Danmarks Google Ads bureau for små og mellemstore virksomheder. Professionel søgeannoncering, Shopping Ads og Display kampagner. Gratis Google Ads audit. No cure, no pay!"
        keywords="Google Ads bureau danmark, Google annoncering danmark, PPC bureau danmark, Google Ads management, søgeannoncering danmark, Google Ads eksperter, SEM bureau, Google Shopping ads, betalt søgning danmark"
        canonical="https://nordic-marketing.dk/google-ads-bureau-danmark"
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-badge">{t('google_service.badge')}</div>
            <h1>{t('google_service.title')}</h1>
            <p>{t('google_service.desc')}</p>
            <div className="hero-cta">
              <Link to="/kontakt" className="btn btn-primary">{t('google_service.cta_button')}</Link>
              <span className="price-tag">{t('google_service.price_tag')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="service-features">
        <div className="container">
          <h2>{t('google_service.features_title')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <h3>{t('google_service.feature1_title')}</h3>
              <p>{t('google_service.feature1_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
                </svg>
              </div>
              <h3>{t('google_service.feature2_title')}</h3>
              <p>{t('google_service.feature2_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
                </svg>
              </div>
              <h3>{t('google_service.feature3_title')}</h3>
              <p>{t('google_service.feature3_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3>{t('google_service.feature4_title')}</h3>
              <p>{t('google_service.feature4_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>
                </svg>
              </div>
              <h3>{t('google_service.feature5_title')}</h3>
              <p>{t('google_service.feature5_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>
                </svg>
              </div>
              <h3>{t('google_service.feature6_title')}</h3>
              <p>{t('google_service.feature6_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="service-pricing">
        <div className="container">
          <h2>{t('google_service.pricing_title')}</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>{t('google_service.starter_title')}</h3>
              <div className="price">2.500 kr<span>/md</span></div>
              <ul>
                <li>{t('google_service.starter_feature1')}</li>
                <li>{t('google_service.starter_feature2')}</li>
                <li>{t('google_service.starter_feature3')}</li>
                <li>{t('google_service.starter_feature4')}</li>
                <li>{t('google_service.starter_feature5')}</li>
              </ul>
              <Link to="/kontakt" className="btn btn-secondary">{t('google_service.get_started')}</Link>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">{t('google_service.professional_badge')}</div>
              <h3>{t('google_service.professional_title')}</h3>
              <div className="price">5.000 kr<span>/md</span></div>
              <ul>
                <li>{t('google_service.professional_feature1')}</li>
                <li>{t('google_service.professional_feature2')}</li>
                <li>{t('google_service.professional_feature3')}</li>
                <li>{t('google_service.professional_feature4')}</li>
                <li>{t('google_service.professional_feature5')}</li>
                <li>{t('google_service.professional_feature6')}</li>
              </ul>
              <Link to="/kontakt" className="btn btn-primary">{t('google_service.get_started')}</Link>
            </div>
            <div className="pricing-card">
              <h3>{t('google_service.enterprise_title')}</h3>
              <div className="price">10.000 kr<span>/md</span></div>
              <ul>
                <li>{t('google_service.enterprise_feature1')}</li>
                <li>{t('google_service.enterprise_feature2')}</li>
                <li>{t('google_service.enterprise_feature3')}</li>
                <li>{t('google_service.enterprise_feature4')}</li>
                <li>{t('google_service.enterprise_feature5')}</li>
                <li>{t('google_service.enterprise_feature6')}</li>
              </ul>
              <Link to="/kontakt" className="btn btn-secondary">{t('google_service.get_started')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-faq">
        <div className="container">
          <h2>{t('google_service.faq_title')}</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>{t('google_service.faq1_question')}</h3>
              <p>{t('google_service.faq1_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('google_service.faq2_question')}</h3>
              <p>{t('google_service.faq2_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('google_service.faq3_question')}</h3>
              <p>{t('google_service.faq3_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('google_service.faq4_question')}</h3>
              <p>{t('google_service.faq4_answer')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('google_service.cta_title')}</h2>
          <p>{t('google_service.cta_desc')}</p>
          <Link to="/kontakt" className="btn btn-light">{t('google_service.cta_button')}</Link>
        </div>
      </section>
    </div>
  );
}

export default GoogleAdsService;

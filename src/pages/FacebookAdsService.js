import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import '../styles/ServicePage.css';

function FacebookAdsService() {
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-digital.dk/" },
    { name: "Services", url: "https://nordic-digital.dk/services" },
    { name: "Facebook Annoncering", url: "https://nordic-digital.dk/facebook-annoncering-danmark" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facebook & Instagram Annoncering Danmark",
    "description": "Professionel Facebook og Instagram annoncering for danske virksomheder. Meta Ads management, målgruppeanalyse og A/B testing. Priser fra 2.500 kr/md.",
    "provider": {
      "@type": "MarketingAgency",
      "name": "Nordic Digital",
      "url": "https://nordic-digital.dk"
    },
    "areaServed": { "@type": "Country", "name": "Danmark" },
    "offers": {
      "@type": "Offer",
      "price": "2500",
      "priceCurrency": "DKK"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hvad koster Facebook annoncering i Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Facebook annoncering management hos Nordic Digital starter fra 2.500 DKK per måned. Dette inkluderer kampagneopsætning, målgruppeanalyse, A/B testing og løbende optimering. Annoncebudgettet kommer oveni."
        }
      },
      {
        "@type": "Question",
        "name": "Er Facebook annoncering stadig effektivt i 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Facebook og Instagram er stadig blandt de mest effektive annonceplatforme med over 3,5 millioner danske brugere. Metas avancerede målretning gør det muligt at nå præcis din målgruppe."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad er forskellen på Facebook Ads og Instagram Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Facebook og Instagram Ads administreres begge gennem Meta Business Suite. Annoncerne kan vises på begge platforme med samme kampagne. Instagram er typisk bedre for yngre målgrupper og visuelt indhold."
        }
      }
    ]
  };

  return (
    <div className="service-page">
      <SEO
        title="Facebook Annoncering Danmark | Meta Ads Bureau fra 2.500 kr/md"
        description="Danmarks Facebook annoncering bureau for små og mellemstore virksomheder. Facebook Ads, Instagram Ads, retargeting og leadgenerering. Gratis konsultation. No cure, no pay!"
        keywords="Facebook annoncering danmark, Instagram annoncering danmark, Meta Ads bureau, Facebook Ads bureau danmark, social media annoncering, Facebook marketing danmark, Instagram marketing bureau, Facebook retargeting"
        canonical="https://nordic-digital.dk/facebook-annoncering-danmark"
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-badge">{t('facebook_service.badge')}</div>
            <h1>{t('facebook_service.title')}</h1>
            <p>{t('facebook_service.desc')}</p>
            <div className="hero-cta">
              <Link to="/kontakt" className="btn btn-primary">{t('facebook_service.cta_button')}</Link>
              <span className="price-tag">{t('facebook_service.price_tag')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="service-features">
        <div className="container">
          <h2>{t('facebook_service.features_title')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>{t('facebook_service.feature1_title')}</h3>
              <p>{t('facebook_service.feature1_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
                </svg>
              </div>
              <h3>{t('facebook_service.feature2_title')}</h3>
              <p>{t('facebook_service.feature2_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
                </svg>
              </div>
              <h3>{t('facebook_service.feature3_title')}</h3>
              <p>{t('facebook_service.feature3_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>{t('facebook_service.feature4_title')}</h3>
              <p>{t('facebook_service.feature4_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <h3>{t('facebook_service.feature5_title')}</h3>
              <p>{t('facebook_service.feature5_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/>
                </svg>
              </div>
              <h3>{t('facebook_service.feature6_title')}</h3>
              <p>{t('facebook_service.feature6_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="service-pricing">
        <div className="container">
          <h2>{t('facebook_service.pricing_title')}</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>{t('facebook_service.starter_title')}</h3>
              <div className="price">2.500 kr<span>/md</span></div>
              <ul>
                <li>{t('facebook_service.starter_feature1')}</li>
                <li>{t('facebook_service.starter_feature2')}</li>
                <li>{t('facebook_service.starter_feature3')}</li>
                <li>{t('facebook_service.starter_feature4')}</li>
                <li>{t('facebook_service.starter_feature5')}</li>
              </ul>
              <Link to="/kontakt" className="btn btn-secondary">{t('facebook_service.get_started')}</Link>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">{t('facebook_service.professional_badge')}</div>
              <h3>{t('facebook_service.professional_title')}</h3>
              <div className="price">5.000 kr<span>/md</span></div>
              <ul>
                <li>{t('facebook_service.professional_feature1')}</li>
                <li>{t('facebook_service.professional_feature2')}</li>
                <li>{t('facebook_service.professional_feature3')}</li>
                <li>{t('facebook_service.professional_feature4')}</li>
                <li>{t('facebook_service.professional_feature5')}</li>
                <li>{t('facebook_service.professional_feature6')}</li>
              </ul>
              <Link to="/kontakt" className="btn btn-primary">{t('facebook_service.get_started')}</Link>
            </div>
            <div className="pricing-card">
              <h3>{t('facebook_service.enterprise_title')}</h3>
              <div className="price">10.000 kr<span>/md</span></div>
              <ul>
                <li>{t('facebook_service.enterprise_feature1')}</li>
                <li>{t('facebook_service.enterprise_feature2')}</li>
                <li>{t('facebook_service.enterprise_feature3')}</li>
                <li>{t('facebook_service.enterprise_feature4')}</li>
                <li>{t('facebook_service.enterprise_feature5')}</li>
                <li>{t('facebook_service.enterprise_feature6')}</li>
              </ul>
              <Link to="/kontakt" className="btn btn-secondary">{t('facebook_service.get_started')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-faq">
        <div className="container">
          <h2>{t('facebook_service.faq_title')}</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>{t('facebook_service.faq1_question')}</h3>
              <p>{t('facebook_service.faq1_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('facebook_service.faq2_question')}</h3>
              <p>{t('facebook_service.faq2_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('facebook_service.faq3_question')}</h3>
              <p>{t('facebook_service.faq3_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('facebook_service.faq4_question')}</h3>
              <p>{t('facebook_service.faq4_answer')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('facebook_service.cta_title')}</h2>
          <p>{t('facebook_service.cta_desc')}</p>
          <Link to="/kontakt" className="btn btn-light">{t('facebook_service.cta_button')}</Link>
        </div>
      </section>
    </div>
  );
}

export default FacebookAdsService;

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import '../styles/ServicePage.css';

function SEOService() {
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-digital.dk/" },
    { name: "Services", url: "https://nordic-digital.dk/services" },
    { name: "SEO Bureau", url: "https://nordic-digital.dk/seo-bureau-danmark" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Bureau Danmark - Søgemaskineoptimering",
    "description": "Professionel SEO og søgemaskineoptimering for danske virksomheder. Teknisk SEO, on-page optimering, linkbuilding og lokal SEO. Priser fra 2.500 kr/md.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Nordic Digital",
      "url": "https://nordic-digital.dk"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Danmark"
    },
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
        "name": "Hvad koster SEO i Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professionel SEO hos Nordic Digital starter fra 2.500 DKK per måned. Prisen inkluderer teknisk SEO audit, keyword research, on-page optimering og månedlig rapportering. Kontakt os for et skræddersyet tilbud."
        }
      },
      {
        "@type": "Question",
        "name": "Hvor lang tid tager det at se SEO resultater?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO er en langsigtet investering. Typisk ser man de første forbedringer efter 3-6 måneder, med signifikante resultater efter 6-12 måneder. Tidshorisonten afhænger af konkurrencen i din branche."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad er forskellen på SEO og GEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO optimerer din hjemmeside til traditionelle søgemaskiner som Google. GEO (Generative Engine Optimization) optimerer dit indhold til AI-søgemaskiner som ChatGPT og Perplexity. Nordic Digital tilbyder begge dele."
        }
      },
      {
        "@type": "Question",
        "name": "Tilbyder I SEO i hele Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Nordic Digital tilbyder SEO services til virksomheder i hele Danmark. Vi arbejder med kunder i København, Aarhus, Odense, Aalborg og alle andre danske byer. Vores digitale services kan leveres uanset lokation."
        }
      }
    ]
  };

  return (
    <div className="service-page">
      <SEO
        title="SEO Bureau Danmark | Professionel Søgemaskineoptimering fra 2.500 kr/md"
        description="Danmarks SEO bureau for små og mellemstore virksomheder. Professionel søgemaskineoptimering, teknisk SEO, linkbuilding og lokal SEO. Gratis SEO-analyse. No cure, no pay!"
        keywords="SEO bureau danmark, søgemaskineoptimering danmark, SEO firma danmark, SEO eksperter, SEO bureau København, lokal SEO danmark, teknisk SEO, linkbuilding danmark, SEO pris danmark, bedste SEO bureau"
        canonical="https://nordic-digital.dk/seo-bureau-danmark"
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-badge">{t('seo_service.badge')}</div>
            <h1>{t('seo_service.title')}</h1>
            <p>{t('seo_service.desc')}</p>
            <div className="hero-cta">
              <Link to="/kontakt" className="btn btn-primary">{t('seo_service.cta_button')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="service-features">
        <div className="container">
          <h2>{t('seo_service.features_title')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3>{t('seo_service.feature1_title')}</h3>
              <p>{t('seo_service.feature1_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <h3>{t('seo_service.feature2_title')}</h3>
              <p>{t('seo_service.feature2_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </div>
              <h3>{t('seo_service.feature3_title')}</h3>
              <p>{t('seo_service.feature3_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </div>
              <h3>{t('seo_service.feature4_title')}</h3>
              <p>{t('seo_service.feature4_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>{t('seo_service.feature5_title')}</h3>
              <p>{t('seo_service.feature5_desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 20V10"/>
                  <path d="M12 20V4"/>
                  <path d="M6 20v-6"/>
                </svg>
              </div>
              <h3>{t('seo_service.feature6_title')}</h3>
              <p>{t('seo_service.feature6_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process">
        <div className="container">
          <h2>{t('seo_service.process_title')}</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>{t('seo_service.process_step1')}</h3>
              <p>{t('seo_service.process_step1_desc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>{t('seo_service.process_step2')}</h3>
              <p>{t('seo_service.process_step2_desc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>{t('seo_service.process_step3')}</h3>
              <p>{t('seo_service.process_step3_desc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>{t('seo_service.process_step4')}</h3>
              <p>{t('seo_service.process_step4_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-faq">
        <div className="container">
          <h2>{t('seo_service.faq_title')}</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>{t('seo_service.faq1_question')}</h3>
              <p>{t('seo_service.faq1_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('seo_service.faq2_question')}</h3>
              <p>{t('seo_service.faq2_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('seo_service.faq3_question')}</h3>
              <p>{t('seo_service.faq3_answer')}</p>
            </div>
            <div className="faq-item">
              <h3>{t('seo_service.faq4_question')}</h3>
              <p>{t('seo_service.faq4_answer')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('seo_service.cta_title')}</h2>
          <p>{t('seo_service.cta_desc')}</p>
          <Link to="/kontakt" className="btn btn-light">{t('seo_service.cta_button')}</Link>
        </div>
      </section>
    </div>
  );
}

export default SEOService;

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import '../styles/Services.css';

function Services() {
  const { t } = useTranslation();
  const providerRef = {
    "@type": "ProfessionalService",
    "@id": "https://nordic-digital.dk/#agency",
    "name": "Nordic Digital",
    "url": "https://nordic-digital.dk"
  };

  const areaServedFull = [
    {"@type": "Country", "name": "Danmark"},
    {"@type": "City", "name": "København"},
    {"@type": "City", "name": "Frederiksberg"}
  ];

  // ItemList Schema for rich results
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Nordic Digital Services",
    "description": "Digitale services fra Nordic Digital - App Udvikling, Webdesign og SEO/GEO",
    "numberOfItems": 3,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "App Udvikling",
        "url": "https://nordic-digital.dk/services#apps"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Webdesign & Webudvikling",
        "url": "https://nordic-digital.dk/services#webdesign"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SEO & GEO Optimering",
        "url": "https://nordic-digital.dk/services#seo"
      }
    ]
  };

  // Individual Service schemas for richer results
  const appServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://nordic-digital.dk/services#apps",
    "name": "App Udvikling",
    "description": "Professionel app udvikling til iOS og Android. Vi bygger native apps og cross-platform løsninger med React Native og Flutter. Fra MVP til enterprise-løsninger.",
    "provider": providerRef,
    "areaServed": areaServedFull,
    "serviceType": ["App Development", "Mobile App Development", "iOS Development", "Android Development"],
    "offers": {
      "@type": "Offer",
      "price": "25000",
      "priceCurrency": "DKK",
      "description": "Priser fra 25.000 DKK for en MVP app",
      "availability": "https://schema.org/InStock"
    },
    "url": "https://nordic-digital.dk/services"
  };

  const webdesignServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://nordic-digital.dk/services#webdesign",
    "name": "Webdesign & Webudvikling",
    "description": "Moderne, hurtige og konverteringsoptimerede hjemmesider med responsivt design. SEO-venlig struktur fra start, integration med analytics og tracking.",
    "provider": providerRef,
    "areaServed": areaServedFull,
    "serviceType": ["Web Design", "Web Development", "Responsive Design"],
    "offers": {
      "@type": "Offer",
      "price": "5000",
      "priceCurrency": "DKK",
      "description": "Priser fra 5.000 DKK for en landingsside",
      "availability": "https://schema.org/InStock"
    },
    "url": "https://nordic-digital.dk/services"
  };

  const seoServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://nordic-digital.dk/services#seo",
    "name": "SEO & GEO Optimering",
    "description": "Bliv synlig både i traditionelle søgemaskiner (Google) og i AI-baserede søgesystemer som ChatGPT, Perplexity og Google AI Overview. Komplet søgemaskineoptimering med teknisk SEO, on-page optimering, linkbuilding og GEO-optimering.",
    "provider": providerRef,
    "areaServed": areaServedFull,
    "serviceType": ["SEO", "GEO", "Search Engine Optimization", "AI Search Optimization"],
    "offers": {
      "@type": "Offer",
      "price": "2500",
      "priceCurrency": "DKK",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "2500",
        "priceCurrency": "DKK",
        "unitText": "måned",
        "referenceQuantity": {"@type": "QuantitativeValue", "value": "1", "unitCode": "MON"}
      },
      "availability": "https://schema.org/InStock"
    },
    "url": "https://nordic-digital.dk/services"
  };

  const servicesFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hvilke services tilbyder Nordic Digital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nordic Digital tilbyder tre kerneservices: App Udvikling (iOS, Android, React Native, Flutter), Webdesign & Webudvikling (moderne responsive hjemmesider) og SEO & GEO Optimering (synlighed i Google og AI-søgemaskiner)."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad koster det at udvikle en app i Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "App udvikling hos Nordic Digital starter fra 25.000 DKK for en MVP app. En fuld business app koster typisk 50.000-150.000 DKK afhængig af funktionalitet og kompleksitet. Vi udvikler til både iOS og Android."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad er forskellen på SEO og GEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO (Search Engine Optimization) optimerer din hjemmeside til traditionelle søgemaskiner som Google. GEO (Generative Engine Optimization) optimerer dit indhold til AI-baserede søgesystemer som ChatGPT, Perplexity og Google AI Overview. Nordic Digital tilbyder begge dele som en samlet service."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad koster en hjemmeside i Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En professionel hjemmeside fra Nordic Digital starter fra 5.000 DKK for en landingsside. En fuld virksomhedshjemmeside koster typisk 10.000-25.000 DKK. Alle hjemmesider er mobilvenlige, hurtige og SEO-optimeret."
        }
      },
      {
        "@type": "Question",
        "name": "Laver I apps til både iOS og Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vi udvikler apps til både iOS og Android. Vi bruger primært cross-platform teknologier som React Native og Flutter, hvilket giver dig apps til begge platforme til én pris. Vi tilbyder også native udvikling for mere komplekse projekter."
        }
      }
    ]
  };

  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-digital.dk/" },
    { name: "Services", url: "https://nordic-digital.dk/services" }
  ];

  return (
    <div className="services-page">
      <SEO
        title="App Udvikling | Webdesign | SEO Bureau Danmark - Nordic Digital"
        description="Professionelle digitale services i Danmark: App udvikling til iOS & Android, moderne webdesign og SEO/GEO optimering. Danmarks bedste priser. Gratis konsultation!"
        keywords="app udvikling danmark, app bureau danmark, iOS app udvikling, Android app udvikling, webdesign danmark, webdesign bureau danmark, SEO bureau danmark, GEO optimering, React Native Danmark, Flutter apps Danmark, hjemmeside pris danmark"
        canonical="https://nordic-digital.dk/services"
        schema={[serviceListSchema, appServiceSchema, webdesignServiceSchema, seoServiceSchema, servicesFaqSchema]}
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>{t('services.hero_title')}</h1>
          <p>{t('services.hero_desc')}</p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="services-detail">
        <div className="container">
          {/* App Udvikling */}
          <div className="service-detail-card">
            <div className="service-detail-content">
              <div className="service-badge">{t('services.app_badge')}</div>
              <h2>{t('services.app_title')}</h2>
              <p>
                {t('services.app_desc')}
              </p>
              <ul className="service-features">
                <li>{t('services.app_feature1')}</li>
                <li>{t('services.app_feature2')}</li>
                <li>{t('services.app_feature3')}</li>
                <li>{t('services.app_feature4')}</li>
                <li>{t('services.app_feature5')}</li>
              </ul>
              <Link to="/app-udvikling-danmark" className="service-link">{t('services.app_link')}</Link>
            </div>
            <div className="service-detail-visual">
              <div className="visual-placeholder app-visual">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <path d="M12 18h.01"/>
                  <path d="M9 6h6"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Hjemmesider */}
          <div className="service-detail-card reverse">
            <div className="service-detail-content">
              <div className="service-badge">{t('services.web_badge')}</div>
              <h2>{t('services.web_title')}</h2>
              <p>
                {t('services.web_desc')}
              </p>
              <ul className="service-features">
                <li>{t('services.web_feature1')}</li>
                <li>{t('services.web_feature2')}</li>
                <li>{t('services.web_feature3')}</li>
                <li>{t('services.web_feature4')}</li>
              </ul>
              <Link to="/webdesign-bureau-danmark" className="service-link">{t('services.web_link')}</Link>
            </div>
            <div className="service-detail-visual">
              <div className="visual-placeholder web-visual">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <path d="M2 7h20"/>
                  <circle cx="5" cy="5" r="0.5" fill="currentColor"/>
                  <circle cx="8" cy="5" r="0.5" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          {/* SEO & GEO */}
          <div className="service-detail-card">
            <div className="service-detail-content">
              <div className="service-badge">{t('services.seo_badge')}</div>
              <h2>{t('services.seo_title')}</h2>
              <p>
                {t('services.seo_desc')}
              </p>
              <ul className="service-features">
                <li>{t('services.seo_feature1')}</li>
                <li>{t('services.seo_feature2')}</li>
                <li>{t('services.seo_feature3')}</li>
                <li>{t('services.seo_feature4')}</li>
                <li>{t('services.seo_feature5')}</li>
                <li>{t('services.seo_feature6')}</li>
              </ul>
              <Link to="/seo-bureau-danmark" className="service-link">{t('services.seo_link')}</Link>
            </div>
            <div className="service-detail-visual">
              <div className="visual-placeholder seo-visual">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10"/>
                  <path d="M12 20V4"/>
                  <path d="M6 20v-6"/>
                  <path d="M3 20h18"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>{t('services.process_title')}</h2>
          <p className="section-subtitle">{t('services.process_subtitle')}</p>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>{t('services.process_step1_title')}</h3>
              <p>{t('services.process_step1_desc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>{t('services.process_step2_title')}</h3>
              <p>{t('services.process_step2_desc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>{t('services.process_step3_title')}</h3>
              <p>{t('services.process_step3_desc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>{t('services.process_step4_title')}</h3>
              <p>{t('services.process_step4_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('services.cta_title')}</h2>
          <p>{t('services.cta_desc')}</p>
          <Link to="/kontakt" className="btn btn-light">{t('services.cta_button')}</Link>
        </div>
      </section>
    </div>
  );
}

export default Services;

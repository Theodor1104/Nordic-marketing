import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import '../styles/Services.css';

function Services() {
  const { t } = useTranslation();
  const providerRef = {
    "@type": "MarketingAgency",
    "@id": "https://nordic-marketing.dk/#marketingagency",
    "name": "Nordic Marketing",
    "url": "https://nordic-marketing.dk"
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
    "name": "Nordic Marketing Services",
    "description": "Digitale marketing services fra Nordic Marketing - SEO, GEO, Google Ads, Meta Ads og Webdesign",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "SEO & GEO Optimering",
        "url": "https://nordic-marketing.dk/services#seo"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Google Ads Management",
        "url": "https://nordic-marketing.dk/services#google-ads"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Meta Ads (Facebook & Instagram)",
        "url": "https://nordic-marketing.dk/services#meta-ads"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Webdesign & Webudvikling",
        "url": "https://nordic-marketing.dk/services#webdesign"
      }
    ]
  };

  // Individual Service schemas for richer results
  const seoServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://nordic-marketing.dk/services#seo",
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
    "url": "https://nordic-marketing.dk/services"
  };

  const googleAdsServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://nordic-marketing.dk/services#google-ads",
    "name": "Google Ads Management",
    "description": "Professionel opsætning og løbende optimering af Google søgeannoncer med fokus på ROI. Inkluderer søgeordsanalyse, kampagneopbygning, A/B testing og konverteringssporing.",
    "provider": providerRef,
    "areaServed": areaServedFull,
    "serviceType": ["Google Ads", "Pay-Per-Click Advertising", "SEM"],
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
    "url": "https://nordic-marketing.dk/services"
  };

  const metaAdsServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://nordic-marketing.dk/services#meta-ads",
    "name": "Meta Ads (Facebook & Instagram)",
    "description": "Professionel Facebook og Instagram annoncering med målrettet annoncering baseret på interesser, demografi og adfærd. A/B testing, retargeting og løbende optimering for bedste ROI.",
    "provider": providerRef,
    "areaServed": areaServedFull,
    "serviceType": ["Meta Ads", "Facebook Advertising", "Instagram Marketing", "Social Media Advertising"],
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
    "url": "https://nordic-marketing.dk/services"
  };

  const webdesignServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://nordic-marketing.dk/services#webdesign",
    "name": "Webdesign & Webudvikling",
    "description": "Moderne, hurtige og konverteringsoptimerede hjemmesider med responsivt design. SEO-venlig struktur fra start, integration med analytics og tracking. Specialiseret i hjemmesider til restauranter og lokale virksomheder.",
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
    "url": "https://nordic-marketing.dk/services"
  };

  const servicesFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hvilke marketing services tilbyder Nordic Marketing i Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nordic Marketing tilbyder fire kerneservices i hele Danmark: SEO & GEO Optimering (synlighed i Google og AI-søgemaskiner), Google Ads Management (betalt søgeannoncering), Meta Ads (Facebook og Instagram annoncering) og Webdesign & Webudvikling. Alle services starter fra 2.500 DKK/md med no cure, no pay garanti."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad er forskellen på SEO og GEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO (Search Engine Optimization) optimerer din hjemmeside til traditionelle søgemaskiner som Google. GEO (Generative Engine Optimization) optimerer dit indhold til AI-baserede søgesystemer som ChatGPT, Perplexity og Google AI Overview. Nordic Marketing tilbyder begge dele som en samlet service, så din virksomhed er synlig overalt i Danmark."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad koster Facebook annoncering i Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nordic Marketing tilbyder professionel Facebook og Instagram annoncering (Meta Ads) fra 2.500 DKK per måned. Dette inkluderer opsætning af kampagner, dansk målgruppeanalyse, A/B testing af annoncer, retargeting og løbende optimering. Annoncebudgettet kommer oveni og aftales individuelt baseret på dine mål."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad koster SEO i Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professionel SEO hos Nordic Marketing starter fra 2.500 DKK per måned. Dette inkluderer teknisk SEO audit, keyword research for det danske marked, on-page optimering, linkbuilding og månedlig rapportering. Vi tilbyder SEO services til virksomheder i hele Danmark."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad koster Google Ads bureau i Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Ads management hos Nordic Marketing starter fra 2.500 DKK per måned. Vi tilbyder professionel opsætning, søgeordsanalyse for danske søgninger, kampagneoptimering, konverteringssporing og ROI-fokuseret optimering. Vi servicerer virksomheder i hele Danmark."
        }
      },
      {
        "@type": "Question",
        "name": "Hvor finder jeg et godt webdesign bureau i Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nordic Marketing tilbyder professionelt webdesign til virksomheder i hele Danmark. Vi bygger moderne, hurtige og SEO-optimerede hjemmesider. Priser starter fra 5.000 DKK for en landingsside. Alle hjemmesider er mobilvenlige, hurtige og optimeret til Google fra dag ét."
        }
      }
    ]
  };

  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-marketing.dk/" },
    { name: "Services", url: "https://nordic-marketing.dk/services" }
  ];

  return (
    <div className="services-page">
      <SEO
        title="SEO Bureau Danmark | Google Ads | Facebook Annoncering | Webdesign"
        description="Professionelle marketing services i Danmark: SEO optimering, Google Ads annoncering, Facebook & Instagram ads, webdesign. Danmarks bedste priser fra 2.500 kr/md. Gratis konsultation!"
        keywords="SEO bureau danmark, SEO services danmark, Google Ads bureau danmark, Google Ads management danmark, Facebook annoncering danmark, Instagram annoncering danmark, Meta Ads bureau danmark, webdesign danmark, webdesign bureau danmark, digital marketing services danmark, lokal SEO danmark, søgemaskineoptimering danmark, GEO optimering, AI søgemaskineoptimering"
        canonical="https://nordic-marketing.dk/services"
        schema={[serviceListSchema, seoServiceSchema, googleAdsServiceSchema, metaAdsServiceSchema, webdesignServiceSchema, servicesFaqSchema]}
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
          {/* Meta Ads */}
          <div className="service-detail-card">
            <div className="service-detail-content">
              <div className="service-badge">{t('services.meta_badge')}</div>
              <h2>{t('services.meta_title')}</h2>
              <p>
                {t('services.meta_desc')}
              </p>
              <ul className="service-features">
                <li>{t('services.meta_feature1')}</li>
                <li>{t('services.meta_feature2')}</li>
                <li>{t('services.meta_feature3')}</li>
                <li>{t('services.meta_feature4')}</li>
              </ul>
              <Link to="/facebook-annoncering-danmark" className="service-link">{t('services.meta_link')}</Link>
            </div>
            <div className="service-detail-visual">
              <div className="visual-placeholder meta-visual">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Google Ads */}
          <div className="service-detail-card reverse">
            <div className="service-detail-content">
              <div className="service-badge">{t('services.google_badge')}</div>
              <h2>{t('services.google_title')}</h2>
              <p>
                {t('services.google_desc')}
              </p>
              <ul className="service-features">
                <li>{t('services.google_feature1')}</li>
                <li>{t('services.google_feature2')}</li>
                <li>{t('services.google_feature3')}</li>
                <li>{t('services.google_feature4')}</li>
              </ul>
              <Link to="/google-ads-bureau-danmark" className="service-link">{t('services.google_link')}</Link>
            </div>
            <div className="service-detail-visual">
              <div className="visual-placeholder google-visual">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                  <path d="M11 8v6"/>
                  <path d="M8 11h6"/>
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

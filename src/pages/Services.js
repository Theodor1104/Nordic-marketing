import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/Services.css';

function Services() {
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
        "name": "Hvilke marketing services tilbyder Nordic Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nordic Marketing tilbyder fire kerneservices: SEO & GEO Optimering (synlighed i Google og AI-søgemaskiner), Google Ads Management (betalt søgeannoncering), Meta Ads (Facebook og Instagram annoncering) og Webdesign & Webudvikling. Alle services starter fra 2.500 DKK/md."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad er forskellen på SEO og GEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO (Search Engine Optimization) optimerer din hjemmeside til traditionelle søgemaskiner som Google. GEO (Generative Engine Optimization) optimerer dit indhold til AI-baserede søgesystemer som ChatGPT, Perplexity og Google AI Overview. Nordic Marketing tilbyder begge dele som en samlet service, så din virksomhed er synlig overalt."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad koster Meta Ads annoncering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nordic Marketing tilbyder Meta Ads management fra 2.500 DKK per måned. Dette inkluderer opsætning af kampagner, målgruppeanalyse, A/B testing af annoncer, retargeting og løbende optimering. Annoncebudgettet kommer oveni og aftales individuelt baseret på dine mål."
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
        title="Marketing Services - SEO, GEO, Google Ads & Webdesign | Priser fra 2.500 kr"
        description="Se vores digitale marketing services: SEO & GEO optimering til AI-søgning (ChatGPT, Perplexity), Google Ads, Meta Ads og webdesign. Bliv synlig online. Gratis konsultation!"
        keywords="SEO services København, GEO optimering Danmark, AI søgemaskineoptimering, ChatGPT optimering, Perplexity SEO, Google Ads bureau København, Meta Ads bureau, Facebook annoncering Danmark, Instagram marketing bureau, webdesign Frederiksberg, digital marketing services, lokal SEO København"
        canonical="https://nordic-marketing.dk/services"
        schema={[serviceListSchema, seoServiceSchema, googleAdsServiceSchema, metaAdsServiceSchema, webdesignServiceSchema, servicesFaqSchema]}
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Vores Services</h1>
          <p>Vi tilbyder en komplet pakke af digitale marketingløsninger til fair priser</p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="services-detail">
        <div className="container">
          {/* Meta Ads */}
          <div className="service-detail-card">
            <div className="service-detail-content">
              <div className="service-badge">Social Media</div>
              <h2>Meta Ads</h2>
              <p>
                Facebook og Instagram er stadig de mest effektive platforme til at nå
                din målgruppe. Vi hjælper dig med at oprette og optimere annoncer der
                rent faktisk konverterer.
              </p>
              <ul className="service-features">
                <li>Målrettet annoncering baseret på interesser og demografi</li>
                <li>A/B testing af annoncer for bedste resultater</li>
                <li>Retargeting af besøgende på din hjemmeside</li>
                <li>Løbende optimering og rapportering</li>
              </ul>
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
              <div className="service-badge">Søgemaskine</div>
              <h2>Google Ads</h2>
              <p>
                Bliv synlig præcis når potentielle kunder søger efter det du tilbyder.
                Google Ads er en af de mest effektive måder at få kvalificeret trafik til
                din hjemmeside.
              </p>
              <ul className="service-features">
                <li>Søgeordsanalyse og kampagneopbygning</li>
                <li>Optimering af Quality Score</li>
                <li>Display og Shopping kampagner</li>
                <li>Konverteringssporing og ROI måling</li>
              </ul>
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
              <div className="service-badge">Organisk & AI</div>
              <h2>SEO & GEO</h2>
              <p>
                Bliv synlig både i traditionelle søgemaskiner og i AI-baserede søgesystemer.
                SEO (Search Engine Optimization) og GEO (Generative Engine Optimization)
                arbejder sammen for at sikre din virksomhed maksimal online synlighed.
              </p>
              <ul className="service-features">
                <li>Teknisk SEO audit og optimering</li>
                <li>GEO-optimering til AI-søgninger (ChatGPT, Perplexity, etc.)</li>
                <li>On-page optimering af indhold</li>
                <li>Lokal SEO for lokale virksomheder</li>
                <li>Strukturerede data og schema markup</li>
                <li>Linkbuilding og autoritet</li>
              </ul>
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
              <div className="service-badge">Web</div>
              <h2>Hjemmesider</h2>
              <p>
                Din hjemmeside er dit digitale visitkort. Vi bygger moderne, hurtige
                og konverteringsoptimerede hjemmesider der får dine besøgende til at
                handle.
              </p>
              <ul className="service-features">
                <li>Responsivt design til alle enheder</li>
                <li>Hurtig loadtid og god brugeroplevelse</li>
                <li>SEO-venlig struktur fra start</li>
                <li>Integration med analytics og tracking</li>
              </ul>
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
          <h2>Vores proces</h2>
          <p className="section-subtitle">Sådan arbejder vi sammen med dig</p>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Gratis konsultation</h3>
              <p>Vi lytter til dine udfordringer og mål</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Strategi</h3>
              <p>Vi præsenterer vores bedste bud på en løsning</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Justering</h3>
              <p>Vi tilpasser efter dine ønsker og feedback</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Eksekvering</h3>
              <p>Vi implementerer og leverer målbare resultater</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Klar til at komme i gang?</h2>
          <p>Book en gratis konsultation og lad os tale om dine muligheder</p>
          <Link to="/kontakt" className="btn btn-light">Kontakt os</Link>
        </div>
      </section>
    </div>
  );
}

export default Services;

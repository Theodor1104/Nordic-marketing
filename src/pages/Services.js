import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/Services.css';

function Services() {
  // Service Schema for rich results - Enhanced with pricing
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Nordic Marketing Services",
    "description": "Digitale marketing services fra Nordic Marketing - SEO, GEO, Google Ads, Meta Ads og Webdesign",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "SEO & GEO Optimering",
        "description": "Bliv synlig både i traditionelle søgemaskiner (Google) og i AI-baserede søgesystemer som ChatGPT, Perplexity og Google AI Overview. Komplet søgemaskineoptimering med teknisk SEO, on-page optimering og linkbuilding.",
        "provider": {
          "@type": "Organization",
          "name": "Nordic Marketing",
          "url": "https://nordic-marketing.dk"
        },
        "areaServed": ["Danmark", "København", "Frederiksberg"],
        "serviceType": "Search Engine Optimization",
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
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Google Ads Management",
        "description": "Professionel opsætning og løbende optimering af Google søgeannoncer med fokus på ROI. Inkluderer søgeordsanalyse, kampagneopbygning, A/B testing og konverteringssporing.",
        "provider": {
          "@type": "Organization",
          "name": "Nordic Marketing",
          "url": "https://nordic-marketing.dk"
        },
        "areaServed": ["Danmark", "København"],
        "serviceType": "Pay-Per-Click Advertising",
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
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Meta Ads (Facebook & Instagram)",
        "description": "Professionel Facebook og Instagram annoncering med målrettet annoncering baseret på interesser, demografi og adfærd. A/B testing og løbende optimering for bedste ROI.",
        "provider": {
          "@type": "Organization",
          "name": "Nordic Marketing",
          "url": "https://nordic-marketing.dk"
        },
        "areaServed": ["Danmark", "København"],
        "serviceType": "Social Media Advertising",
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
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Webdesign & Webudvikling",
        "description": "Moderne, hurtige og konverteringsoptimerede hjemmesider med responsivt design. SEO-venlig struktur fra start, integration med analytics og tracking.",
        "provider": {
          "@type": "Organization",
          "name": "Nordic Marketing",
          "url": "https://nordic-marketing.dk"
        },
        "areaServed": ["Danmark", "København", "Frederiksberg"],
        "serviceType": "Web Design",
        "offers": {
          "@type": "Offer",
          "price": "5000",
          "priceCurrency": "DKK",
          "description": "Priser fra 5.000 DKK for en landingsside"
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
        schema={serviceSchema}
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

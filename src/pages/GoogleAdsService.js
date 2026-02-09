import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/ServicePage.css';

function GoogleAdsService() {
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
            <div className="service-badge">Google Ads</div>
            <h1>Google Ads Bureau Danmark - Professionel Google Annoncering</h1>
            <p>
              Få flere kunder gennem Google søgeannoncering. Vi opsætter og optimerer
              dine Google Ads kampagner for maksimal ROI og minimalt spild.
            </p>
            <div className="hero-cta">
              <Link to="/kontakt" className="btn btn-primary">Gratis Google Ads Audit</Link>
              <span className="price-tag">Fra 2.500 kr/md</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="service-features">
        <div className="container">
          <h2>Hvad inkluderer vores Google Ads service?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <h3>Søgeordsanalyse</h3>
              <p>Vi finder de mest profitable søgeord for din virksomhed med fokus på danske søgninger.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
                </svg>
              </div>
              <h3>Kampagneopbygning</h3>
              <p>Strukturerede kampagner med relevante annoncegrupper og målrettede annoncer.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
                </svg>
              </div>
              <h3>Løbende Optimering</h3>
              <p>A/B testing af annoncer, bud-justering og negative keywords for bedre performance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3>Konverteringssporing</h3>
              <p>Opsætning af tracking så vi kan måle og optimere mod dine vigtigste handlinger.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>
                </svg>
              </div>
              <h3>Display & Remarketing</h3>
              <p>Bannerannoncer og remarketing til folk der har besøgt din hjemmeside.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>
                </svg>
              </div>
              <h3>Månedlig Rapportering</h3>
              <p>Detaljerede rapporter med klik, konverteringer, CPA og ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="service-pricing">
        <div className="container">
          <h2>Google Ads Priser</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">2.500 kr<span>/md</span></div>
              <ul>
                <li>1 søgekampagne</li>
                <li>Op til 50 keywords</li>
                <li>A/B test af annoncer</li>
                <li>Konverteringssporing</li>
                <li>Månedlig rapport</li>
              </ul>
              <Link to="/kontakt" className="btn btn-secondary">Kom i gang</Link>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">Mest populær</div>
              <h3>Professional</h3>
              <div className="price">5.000 kr<span>/md</span></div>
              <ul>
                <li>3 kampagner</li>
                <li>Op til 200 keywords</li>
                <li>Display remarketing</li>
                <li>Shopping Ads</li>
                <li>Ugentlig optimering</li>
                <li>Prioriteret support</li>
              </ul>
              <Link to="/kontakt" className="btn btn-primary">Kom i gang</Link>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">10.000 kr<span>/md</span></div>
              <ul>
                <li>Ubegrænset kampagner</li>
                <li>Ubegrænset keywords</li>
                <li>Performance Max</li>
                <li>YouTube Ads</li>
                <li>Daglig optimering</li>
                <li>Dedikeret konsulent</li>
              </ul>
              <Link to="/kontakt" className="btn btn-secondary">Kom i gang</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-faq">
        <div className="container">
          <h2>Ofte stillede spørgsmål om Google Ads</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Hvad koster Google Ads management i Danmark?</h3>
              <p>Google Ads management hos Nordic Marketing starter fra 2.500 DKK per måned. Dette inkluderer opsætning, optimering og rapportering. Annoncebudgettet kommer oveni og aftales individuelt baseret på dine mål.</p>
            </div>
            <div className="faq-item">
              <h3>Hvor hurtigt ser man resultater med Google Ads?</h3>
              <p>Google Ads giver øjeblikkelige resultater. Du kan se trafik og konverteringer fra dag 1. Optimal performance opnås typisk efter 2-4 ugers optimering, når der er nok data til at justere bud og målretning.</p>
            </div>
            <div className="faq-item">
              <h3>Hvad er en god ROI på Google Ads?</h3>
              <p>En god ROAS (Return On Ad Spend) afhænger af din branche og marginer. Generelt sigter vi efter minimum 3:1 ROAS, hvilket betyder 3 kr i omsætning for hver 1 kr brugt på annoncer.</p>
            </div>
            <div className="faq-item">
              <h3>Kan I overtage vores eksisterende Google Ads konto?</h3>
              <p>Ja, vi kan overtage og optimere eksisterende Google Ads konti. Vi starter med en gratis audit hvor vi identificerer forbedringsmuligheder og potentielle besparelser.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Klar til at få flere kunder med Google Ads?</h2>
          <p>Book en gratis Google Ads audit og se hvordan vi kan forbedre dine resultater</p>
          <Link to="/kontakt" className="btn btn-light">Gratis Google Ads Audit</Link>
        </div>
      </section>
    </div>
  );
}

export default GoogleAdsService;

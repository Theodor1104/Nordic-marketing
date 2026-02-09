import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/ServicePage.css';

function WebdesignService() {
  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-marketing.dk/" },
    { name: "Services", url: "https://nordic-marketing.dk/services" },
    { name: "Webdesign Bureau", url: "https://nordic-marketing.dk/webdesign-bureau-danmark" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Webdesign Bureau Danmark",
    "description": "Professionelt webdesign for danske virksomheder. Moderne, hurtige og SEO-optimerede hjemmesider. Priser fra 5.000 DKK.",
    "provider": {
      "@type": "MarketingAgency",
      "name": "Nordic Marketing",
      "url": "https://nordic-marketing.dk"
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
          "text": "En professionel hjemmeside fra Nordic Marketing starter fra 5.000 DKK for en landingsside. En fuld virksomhedshjemmeside koster typisk 10.000-25.000 DKK afhængig af omfang og funktionalitet."
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
        description="Danmarks webdesign bureau for små og mellemstore virksomheder. Moderne, hurtige og SEO-optimerede hjemmesider. Responsivt design. Gratis konsultation!"
        keywords="webdesign bureau danmark, hjemmeside pris danmark, webdesign København, professionel hjemmeside, webdesign firma danmark, responsivt webdesign, SEO hjemmeside, webdesign for virksomheder, billig hjemmeside danmark"
        canonical="https://nordic-marketing.dk/webdesign-bureau-danmark"
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-badge">Webdesign</div>
            <h1>Webdesign Bureau Danmark - Professionelle Hjemmesider</h1>
            <p>
              Din hjemmeside er dit digitale visitkort. Vi bygger moderne, hurtige
              og konverteringsoptimerede hjemmesider til virksomheder i hele Danmark.
            </p>
            <div className="hero-cta">
              <Link to="/kontakt" className="btn btn-primary">Gratis Konsultation</Link>
              <span className="price-tag">Fra 5.000 kr</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="service-features">
        <div className="container">
          <h2>Hvad får du med en hjemmeside fra Nordic Marketing?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
                </svg>
              </div>
              <h3>Responsivt Design</h3>
              <p>Din hjemmeside ser fantastisk ud på alle enheder - desktop, tablet og mobil.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>Hurtig Loadtid</h3>
              <p>Optimerede hjemmesider der loader hurtigt og scorer højt på Google PageSpeed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <h3>SEO-Optimeret</h3>
              <p>Bygget med SEO i tankerne fra start - korrekt struktur, meta tags og schema markup.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>SSL Sikkerhed</h3>
              <p>HTTPS sikkerhed inkluderet - vigtigt for både brugere og Google-ranking.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
                </svg>
              </div>
              <h3>Analytics Integration</h3>
              <p>Google Analytics og konverteringssporing så du kan følge dine besøgende.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>Kontaktformular</h3>
              <p>Professionel kontaktformular der sender leads direkte til din inbox.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="service-pricing">
        <div className="container">
          <h2>Webdesign Priser</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Landingsside</h3>
              <div className="price">5.000 kr<span>engangspris</span></div>
              <ul>
                <li>1 side</li>
                <li>Responsivt design</li>
                <li>Kontaktformular</li>
                <li>SEO grundopsætning</li>
                <li>SSL certifikat</li>
              </ul>
              <Link to="/kontakt" className="btn btn-secondary">Kom i gang</Link>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">Mest populær</div>
              <h3>Virksomhedsside</h3>
              <div className="price">15.000 kr<span>engangspris</span></div>
              <ul>
                <li>5-8 sider</li>
                <li>Custom design</li>
                <li>Blog sektion</li>
                <li>Google Analytics</li>
                <li>SEO optimering</li>
                <li>3 måneders support</li>
              </ul>
              <Link to="/kontakt" className="btn btn-primary">Kom i gang</Link>
            </div>
            <div className="pricing-card">
              <h3>E-commerce</h3>
              <div className="price">25.000 kr<span>engangspris</span></div>
              <ul>
                <li>Webshop funktionalitet</li>
                <li>Produktkatalog</li>
                <li>Betalingsgateway</li>
                <li>Lagerstyring</li>
                <li>Fragt integration</li>
                <li>6 måneders support</li>
              </ul>
              <Link to="/kontakt" className="btn btn-secondary">Kom i gang</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="service-cities">
        <div className="container">
          <h2>Webdesign i hele Danmark</h2>
          <p>Vi laver hjemmesider til virksomheder i hele landet</p>
          <div className="cities-grid">
            <div className="city-card">
              <h3>København</h3>
              <p>Inkl. Frederiksberg, Amager, Nørrebro</p>
            </div>
            <div className="city-card">
              <h3>Aarhus</h3>
              <p>Østjylland og omegn</p>
            </div>
            <div className="city-card">
              <h3>Odense</h3>
              <p>Fyn og omegn</p>
            </div>
            <div className="city-card">
              <h3>Aalborg</h3>
              <p>Nordjylland og omegn</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-faq">
        <div className="container">
          <h2>Ofte stillede spørgsmål om webdesign</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Hvad koster en hjemmeside i Danmark?</h3>
              <p>En professionel hjemmeside fra Nordic Marketing starter fra 5.000 DKK for en landingsside. En fuld virksomhedshjemmeside koster typisk 10.000-25.000 DKK afhængig af omfang og funktionalitet.</p>
            </div>
            <div className="faq-item">
              <h3>Hvor lang tid tager det at lave en hjemmeside?</h3>
              <p>En simpel landingsside kan laves på 1-2 uger. En fuld virksomhedshjemmeside tager typisk 3-6 uger, afhængig af omfang og hvor hurtigt vi får feedback og indhold.</p>
            </div>
            <div className="faq-item">
              <h3>Er jeres hjemmesider SEO-optimerede?</h3>
              <p>Ja, alle vores hjemmesider er SEO-optimerede fra start. Det inkluderer teknisk SEO, hurtig loadtid, mobilvenligt design og korrekt struktur med meta tags og schema markup.</p>
            </div>
            <div className="faq-item">
              <h3>Kan I lave hjemmesider til restauranter?</h3>
              <p>Ja, vi har erfaring med hjemmesider til restauranter og caféer. Vi kan integrere online menukort, bordbestilling, Google Maps og Google Business Profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Klar til en ny hjemmeside?</h2>
          <p>Book en gratis konsultation og lad os tale om dit projekt</p>
          <Link to="/kontakt" className="btn btn-light">Gratis Konsultation</Link>
        </div>
      </section>
    </div>
  );
}

export default WebdesignService;

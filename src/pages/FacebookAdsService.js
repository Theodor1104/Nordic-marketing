import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/ServicePage.css';

function FacebookAdsService() {
  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-marketing.dk/" },
    { name: "Services", url: "https://nordic-marketing.dk/services" },
    { name: "Facebook Annoncering", url: "https://nordic-marketing.dk/facebook-annoncering-danmark" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facebook & Instagram Annoncering Danmark",
    "description": "Professionel Facebook og Instagram annoncering for danske virksomheder. Meta Ads management, målgruppeanalyse og A/B testing. Priser fra 2.500 kr/md.",
    "provider": {
      "@type": "MarketingAgency",
      "name": "Nordic Marketing",
      "url": "https://nordic-marketing.dk"
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
          "text": "Facebook annoncering management hos Nordic Marketing starter fra 2.500 DKK per måned. Dette inkluderer kampagneopsætning, målgruppeanalyse, A/B testing og løbende optimering. Annoncebudgettet kommer oveni."
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
        canonical="https://nordic-marketing.dk/facebook-annoncering-danmark"
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-badge">Facebook & Instagram</div>
            <h1>Facebook Annoncering Danmark - Professionel Meta Ads Bureau</h1>
            <p>
              Nå din målgruppe på Facebook og Instagram med målrettede annoncer.
              Vi hjælper danske virksomheder med at få flere kunder gennem sociale medier.
            </p>
            <div className="hero-cta">
              <Link to="/kontakt" className="btn btn-primary">Gratis Konsultation</Link>
              <span className="price-tag">Fra 2.500 kr/md</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="service-features">
        <div className="container">
          <h2>Hvad inkluderer vores Facebook Ads service?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Målgruppeanalyse</h3>
              <p>Vi identificerer og opbygger præcise målgrupper baseret på demografi, interesser og adfærd.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
                </svg>
              </div>
              <h3>Annonceproduktion</h3>
              <p>Professionelle annoncetekster og kreativt indhold der fanger opmærksomheden.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
                </svg>
              </div>
              <h3>A/B Testing</h3>
              <p>Systematisk testing af annoncer, målgrupper og budskaber for optimal performance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>Retargeting</h3>
              <p>Målret annoncer mod folk der har besøgt din hjemmeside eller interageret med dit indhold.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <h3>Instagram Ads</h3>
              <p>Stories, Reels og Feed-annoncer på Instagram der engagerer din målgruppe.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/>
                </svg>
              </div>
              <h3>Månedlig Rapportering</h3>
              <p>Detaljerede rapporter med reach, engagement, klik og konverteringer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="service-pricing">
        <div className="container">
          <h2>Facebook Ads Priser</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">2.500 kr<span>/md</span></div>
              <ul>
                <li>1 kampagne</li>
                <li>2 målgrupper</li>
                <li>3 annoncer</li>
                <li>A/B testing</li>
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
                <li>Ubegrænset målgrupper</li>
                <li>6 annoncer</li>
                <li>Retargeting</li>
                <li>Lookalike audiences</li>
                <li>Ugentlig rapport</li>
              </ul>
              <Link to="/kontakt" className="btn btn-primary">Kom i gang</Link>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">10.000 kr<span>/md</span></div>
              <ul>
                <li>Ubegrænset kampagner</li>
                <li>Video produktion</li>
                <li>Instagram Reels</li>
                <li>Lead Ads</li>
                <li>Dedikeret konsulent</li>
                <li>Daglig optimering</li>
              </ul>
              <Link to="/kontakt" className="btn btn-secondary">Kom i gang</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-faq">
        <div className="container">
          <h2>Ofte stillede spørgsmål om Facebook annoncering</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Hvad koster Facebook annoncering i Danmark?</h3>
              <p>Facebook annoncering management hos Nordic Marketing starter fra 2.500 DKK per måned. Dette inkluderer kampagneopsætning, målgruppeanalyse, A/B testing og løbende optimering. Annoncebudgettet kommer oveni og aftales individuelt.</p>
            </div>
            <div className="faq-item">
              <h3>Er Facebook annoncering stadig effektivt i 2026?</h3>
              <p>Ja, Facebook og Instagram er stadig blandt de mest effektive annonceplatforme med over 3,5 millioner danske brugere. Metas avancerede målretning gør det muligt at nå præcis din målgruppe.</p>
            </div>
            <div className="faq-item">
              <h3>Hvor meget bør jeg bruge på Facebook annoncer?</h3>
              <p>Vi anbefaler et minimum annoncebudget på 3.000-5.000 kr/md for at få nok data til optimering. Det optimale budget afhænger af dine mål og branche.</p>
            </div>
            <div className="faq-item">
              <h3>Kan I hjælpe med Instagram annoncering?</h3>
              <p>Ja, Instagram og Facebook Ads administreres gennem samme platform (Meta). Vi optimerer kampagner til begge platforme og vælger de bedste placeringer baseret på din målgruppe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Klar til at nå flere kunder på sociale medier?</h2>
          <p>Book en gratis konsultation og lad os lave en strategi for din virksomhed</p>
          <Link to="/kontakt" className="btn btn-light">Gratis Konsultation</Link>
        </div>
      </section>
    </div>
  );
}

export default FacebookAdsService;

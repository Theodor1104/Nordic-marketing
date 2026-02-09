import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/ServicePage.css';

function SEOService() {
  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-marketing.dk/" },
    { name: "Services", url: "https://nordic-marketing.dk/services" },
    { name: "SEO Bureau", url: "https://nordic-marketing.dk/seo-bureau-danmark" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Bureau Danmark - Søgemaskineoptimering",
    "description": "Professionel SEO og søgemaskineoptimering for danske virksomheder. Teknisk SEO, on-page optimering, linkbuilding og lokal SEO. Priser fra 2.500 kr/md.",
    "provider": {
      "@type": "MarketingAgency",
      "name": "Nordic Marketing",
      "url": "https://nordic-marketing.dk"
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
          "text": "Professionel SEO hos Nordic Marketing starter fra 2.500 DKK per måned. Prisen inkluderer teknisk SEO audit, keyword research, on-page optimering og månedlig rapportering. Kontakt os for et skræddersyet tilbud."
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
          "text": "SEO optimerer din hjemmeside til traditionelle søgemaskiner som Google. GEO (Generative Engine Optimization) optimerer dit indhold til AI-søgemaskiner som ChatGPT og Perplexity. Nordic Marketing tilbyder begge dele."
        }
      },
      {
        "@type": "Question",
        "name": "Tilbyder I SEO i hele Danmark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Nordic Marketing tilbyder SEO services til virksomheder i hele Danmark. Vi arbejder med kunder i København, Aarhus, Odense, Aalborg og alle andre danske byer. Vores digitale services kan leveres uanset lokation."
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
        canonical="https://nordic-marketing.dk/seo-bureau-danmark"
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-badge">SEO Bureau</div>
            <h1>SEO Bureau Danmark - Professionel Søgemaskineoptimering</h1>
            <p>
              Bliv synlig på Google og få flere kunder organisk. Vi hjælper danske virksomheder
              med at ranke højere gennem teknisk SEO, on-page optimering og kvalitetslinkbuilding.
            </p>
            <div className="hero-cta">
              <Link to="/kontakt" className="btn btn-primary">Gratis SEO-analyse</Link>
              <span className="price-tag">Fra 2.500 kr/md</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="service-features">
        <div className="container">
          <h2>Hvad inkluderer vores SEO-pakke?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3>Teknisk SEO Audit</h3>
              <p>Komplet gennemgang af din hjemmesides tekniske sundhed. Vi identificerer og fikser fejl der holder dig tilbage.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <h3>Keyword Research</h3>
              <p>Vi finder de søgeord dine kunder bruger. Fokus på danske søgninger med højt potentiale og overkommelig konkurrence.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </div>
              <h3>On-Page Optimering</h3>
              <p>Optimering af titler, meta descriptions, overskrifter, indhold og interne links for maksimal synlighed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </div>
              <h3>Linkbuilding</h3>
              <p>Kvalitetslinks fra relevante danske hjemmesider der styrker din autoritet og rankings.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Lokal SEO</h3>
              <p>Optimering til lokale søgninger, Google Business Profile og lokale citationer for virksomheder med fysisk tilstedeværelse.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 20V10"/>
                  <path d="M12 20V4"/>
                  <path d="M6 20v-6"/>
                </svg>
              </div>
              <h3>Månedlig Rapportering</h3>
              <p>Detaljerede rapporter med rankings, trafik og fremgang. Du har altid fuldt overblik over dine resultater.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process">
        <div className="container">
          <h2>Sådan arbejder vi med SEO</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Gratis SEO-analyse</h3>
              <p>Vi analyserer din hjemmeside og konkurrenter for at identificere muligheder.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Strategi & Plan</h3>
              <p>Vi udarbejder en skræddersyet SEO-strategi med klare mål og prioriteringer.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Implementering</h3>
              <p>Vi optimerer din hjemmeside og starter linkbuilding-arbejdet.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Løbende Optimering</h3>
              <p>Kontinuerlig overvågning, justering og forbedring af din SEO.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="service-pricing">
        <div className="container">
          <h2>SEO Priser</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>SEO Starter</h3>
              <div className="price">2.500 kr<span>/md</span></div>
              <ul>
                <li>Teknisk SEO audit</li>
                <li>On-page optimering</li>
                <li>5 fokus-keywords</li>
                <li>Månedlig rapportering</li>
                <li>Email support</li>
              </ul>
              <Link to="/kontakt" className="btn btn-secondary">Kom i gang</Link>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">Mest populær</div>
              <h3>SEO Professional</h3>
              <div className="price">5.000 kr<span>/md</span></div>
              <ul>
                <li>Alt i Starter +</li>
                <li>Linkbuilding (5 links/md)</li>
                <li>15 fokus-keywords</li>
                <li>Content optimering</li>
                <li>Lokal SEO</li>
                <li>Prioriteret support</li>
              </ul>
              <Link to="/kontakt" className="btn btn-primary">Kom i gang</Link>
            </div>
            <div className="pricing-card">
              <h3>SEO Enterprise</h3>
              <div className="price">10.000 kr<span>/md</span></div>
              <ul>
                <li>Alt i Professional +</li>
                <li>Linkbuilding (15 links/md)</li>
                <li>Ubegrænset keywords</li>
                <li>Content produktion</li>
                <li>GEO optimering</li>
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
          <h2>Ofte stillede spørgsmål om SEO</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Hvad koster SEO i Danmark?</h3>
              <p>Professionel SEO hos Nordic Marketing starter fra 2.500 DKK per måned. Prisen inkluderer teknisk SEO audit, keyword research, on-page optimering og månedlig rapportering. Kontakt os for et skræddersyet tilbud baseret på dine behov.</p>
            </div>
            <div className="faq-item">
              <h3>Hvor lang tid tager det at se SEO resultater?</h3>
              <p>SEO er en langsigtet investering. Typisk ser man de første forbedringer efter 3-6 måneder, med signifikante resultater efter 6-12 måneder. Tidshorisonten afhænger af konkurrencen i din branche og din hjemmesides nuværende tilstand.</p>
            </div>
            <div className="faq-item">
              <h3>Hvad er forskellen på SEO og GEO?</h3>
              <p>SEO optimerer din hjemmeside til traditionelle søgemaskiner som Google. GEO (Generative Engine Optimization) optimerer dit indhold til AI-søgemaskiner som ChatGPT og Perplexity. Nordic Marketing tilbyder begge dele som en samlet service.</p>
            </div>
            <div className="faq-item">
              <h3>Tilbyder I SEO i hele Danmark?</h3>
              <p>Ja, Nordic Marketing tilbyder SEO services til virksomheder i hele Danmark. Vi arbejder med kunder i København, Aarhus, Odense, Aalborg og alle andre danske byer. Vores digitale services kan leveres uanset lokation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Klar til at ranke højere på Google?</h2>
          <p>Book en gratis SEO-analyse og få konkrete anbefalinger til din hjemmeside</p>
          <Link to="/kontakt" className="btn btn-light">Gratis SEO-analyse</Link>
        </div>
      </section>
    </div>
  );
}

export default SEOService;

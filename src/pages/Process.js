import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/Process.css';

function Process() {
  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-marketing.dk/" },
    { name: "Proces", url: "https://nordic-marketing.dk/proces" }
  ];

  // HowTo Schema for the process steps
  const processSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Nordic Marketing's 5-trins proces",
    "description": "Vores gennemprøvede proces der transformerer dine ambitioner til målbare resultater.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Opdagelse & Analyse",
        "text": "Vi dykker ned i din virksomhed, dine mål og din målgruppe. Gennem grundig research identificerer vi de bedste muligheder for vækst."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Strategi & Planlægning",
        "text": "Med indsigt fra analysen udarbejder vi en skræddersyet strategi. Du får en klar plan med definerede mål og forventede resultater."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Kreation & Design",
        "text": "Vores kreative team bringer strategien til live med visuelt imponerende designs og engagerende indhold der konverterer."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Lancering & Go-Live",
        "text": "Med alt på plads launcher vi dine kampagner. Fra dag ét overvåger vi performance og sikrer optimal levering."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Optimering & Vækst",
        "text": "Marketing er en kontinuerlig rejse. Vi analyserer, optimerer og skalerer for at maksimere dit afkast over tid."
      }
    ]
  };

  return (
    <div className="process-page">
      <SEO
        title="Vores Marketing Proces | Danmarks Gennemsigtige Marketing Bureau"
        description="Se hvordan Danmarks marketing bureau arbejder. Nordic Marketings gennemprøvede 5-trins proces: Opdagelse, Strategi, Kreation, Lancering og Optimering. 100% gennemsigtighed. No cure, no pay."
        keywords="marketing proces danmark, digital strategi danmark, marketing bureau arbejdsgang, transparent marketing bureau danmark, resultatorienteret marketing danmark, SEO proces, hvordan virker SEO, marketing samarbejde danmark"
        canonical="https://nordic-marketing.dk/proces"
        schema={processSchema}
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="process-hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="hero-badge">Vores tilgang</div>
          <h1>Fra vision til <span className="gradient-text">virkelighed</span></h1>
          <p className="hero-description">
            Vi har perfektioneret en proces der transformerer dine ambitioner til målbare resultater.
            Gennemsigtighed, samarbejde og ekspertise i hvert skridt.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">5</span>
              <span className="stat-label">Faser</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Gennemsigtighed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Processen</span>
            <h2>Fem skridt til succes</h2>
            <p>Hver fase er designet til at maksimere værdien og sikre de bedste resultater</p>
          </div>

          <div className="timeline">
            {/* Step 1 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-inner">
                  <span>01</span>
                </div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="content-card">
                  <div className="card-icon discovery">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="M21 21l-4.35-4.35"/>
                    </svg>
                  </div>
                  <div className="card-body">
                    <h3>Opdagelse & Analyse</h3>
                    <p>
                      Vi dykker ned i din virksomhed, dine mål og din målgruppe.
                      Gennem grundig research identificerer vi de bedste muligheder for vækst.
                    </p>
                    <ul className="feature-list">
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Gratis strategimøde
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Konkurrentanalyse
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Målgruppeidentifikation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-inner">
                  <span>02</span>
                </div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="content-card">
                  <div className="card-icon strategy">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                  </div>
                  <div className="card-body">
                    <h3>Strategi & Planlægning</h3>
                    <p>
                      Med indsigt fra analysen udarbejder vi en skræddersyet strategi.
                      Du får en klar plan med definerede mål og forventede resultater.
                    </p>
                    <ul className="feature-list">
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Tilpasset marketingplan
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Kanalstrategi
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        KPI & målsætning
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-inner">
                  <span>03</span>
                </div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="content-card">
                  <div className="card-icon creation">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                      <path d="M2 2l7.586 7.586"/>
                      <circle cx="11" cy="11" r="2"/>
                    </svg>
                  </div>
                  <div className="card-body">
                    <h3>Kreation & Design</h3>
                    <p>
                      Vores kreative team bringer strategien til live med visuelt
                      imponerende designs og engagerende indhold der konverterer.
                    </p>
                    <ul className="feature-list">
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Professionelt annoncedesign
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Konverterende copy
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        A/B test varianter
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-inner">
                  <span>04</span>
                </div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="content-card">
                  <div className="card-icon launch">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 2L11 13"/>
                      <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </div>
                  <div className="card-body">
                    <h3>Lancering & Go-Live</h3>
                    <p>
                      Med alt på plads launcher vi dine kampagner. Fra dag ét
                      overvåger vi performance og sikrer optimal levering.
                    </p>
                    <ul className="feature-list">
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Præcis målretning
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Budget optimering
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Real-time monitoring
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="timeline-item last">
              <div className="timeline-marker">
                <div className="marker-inner">
                  <span>05</span>
                </div>
              </div>
              <div className="timeline-content">
                <div className="content-card">
                  <div className="card-icon optimize">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 20V10"/>
                      <path d="M12 20V4"/>
                      <path d="M6 20v-6"/>
                    </svg>
                  </div>
                  <div className="card-body">
                    <h3>Optimering & Vækst</h3>
                    <p>
                      Marketing er en kontinuerlig rejse. Vi analyserer, optimerer
                      og skalerer for at maksimere dit afkast over tid.
                    </p>
                    <ul className="feature-list">
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Løbende optimering
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Månedlig rapportering
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Strategiske anbefalinger
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefits-content">
              <span className="section-tag">Fordele</span>
              <h2>Hvorfor vores proces virker</h2>
              <p>
                Vores strukturerede tilgang sikrer, at intet overlades til tilfældighederne.
                Du får fuld indsigt og kontrol hele vejen.
              </p>
            </div>
            <div className="benefits-cards">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h4>100% Gennemsigtighed</h4>
                <p>Du har altid fuld indsigt i hvad vi arbejder på og hvorfor</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h4>Ingen Risiko</h4>
                <p>No cure, no pay - du betaler kun for resultater</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h4>Hurtig Eksekvering</h4>
                <p>Fra strategi til lancering på rekordtid</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h4>Dedikeret Team</h4>
                <p>Et fast team der kender din virksomhed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="process-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Klar til at starte din rejse?</h2>
            <p>Book et gratis strategimøde og lad os vise dig vejen til vækst</p>
            <div className="cta-buttons">
              <Link to="/kontakt" className="btn btn-light">
                Book gratis møde
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14"/>
                  <path d="M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Process;

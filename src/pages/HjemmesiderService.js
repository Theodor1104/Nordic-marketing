import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import LaptopMockup from '../components/LaptopMockup';
import '../styles/HjemmesiderService.css';

// Typewriter code component
function TypewriterCode() {
  const codeLines = [
    '<div class="hero">',
    '  <h1>Din Virksomhed</h1>',
    '  <p>Professionel online</p>',
    '  <button>Kontakt</button>',
    '</div>'
  ];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      // Reset after a pause
      const resetTimer = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }

    if (currentChar < codeLines[currentLine].length) {
      const charTimer = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (!newLines[currentLine]) newLines[currentLine] = '';
          newLines[currentLine] = codeLines[currentLine].substring(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(prev => prev + 1);
      }, 40);
      return () => clearTimeout(charTimer);
    } else {
      const lineTimer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 200);
      return () => clearTimeout(lineTimer);
    }
  }, [currentLine, currentChar, codeLines]);

  return (
    <code>
      {displayedLines.map((line, idx) => (
        <span key={idx}>
          {line}
          {idx === currentLine && currentChar < codeLines[currentLine]?.length && (
            <span className="cursor">|</span>
          )}
          {idx < displayedLines.length - 1 && <br />}
        </span>
      ))}
      {currentLine < codeLines.length && displayedLines.length > 0 &&
       currentChar >= codeLines[currentLine - 1]?.length && <br />}
    </code>
  );
}

function HjemmesiderService() {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState(null);

  const featureDetails = [
    {
      id: 'tech',
      title: 'Moderne Tech',
      subtitle: 'React, Next.js & Tailwind',
      description: 'Vi bygger din hjemmeside med de nyeste teknologier som React og Next.js. Det betyder lynhurtig performance, bedre SEO og en moderne brugeroplevelse der imponerer dine kunder.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    },
    {
      id: 'seo',
      title: 'SEO & GEO',
      subtitle: 'Synlighed der virker',
      description: 'Din hjemmeside optimeres til både Google og AI-søgemaskiner som ChatGPT og Perplexity. Vi sørger for at potentielle kunder finder dig når de søger efter dine ydelser.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 9l-5 5-4-4-5 5"/></svg>
    },
    {
      id: 'customers',
      title: 'Flere Kunder',
      subtitle: 'Konverterende design',
      description: 'Vores design er fokuseret på konvertering. Strategisk placerede call-to-actions, tillidsopbyggende elementer og intuitiv navigation får besøgende til at blive til kunder.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    },
    {
      id: 'allinone',
      title: 'Alt-i-én',
      subtitle: 'Web + SEO + Support',
      description: 'Du får alt samlet ét sted: Professionel hjemmeside, SEO-optimering, hosting, SSL-certifikat og løbende support. Ingen skjulte omkostninger eller bøvl med flere leverandører.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    },
    {
      id: 'webshop',
      title: 'Webshop',
      subtitle: 'Sælg online',
      description: 'Vi bygger professionelle webshops der sælger. Med integration til betalingsløsninger, lagerstyring og automatisk ordrehåndtering får du en komplet e-commerce løsning.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-digital.dk/" },
    { name: "Hjemmesider", url: "https://nordic-digital.dk/hjemmesider" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hjemmeside Udvikling Danmark - Professionelt Webdesign",
    "description": "Professionel hjemmeside udvikling til danske virksomheder. Vi er et dansk webbureau der laver moderne, SEO-optimerede hjemmesider med GEO optimering.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Nordic Digital",
      "url": "https://nordic-digital.dk",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "DK",
        "addressLocality": "København"
      }
    },
    "areaServed": { "@type": "Country", "name": "Danmark" },
    "serviceType": ["Hjemmeside Udvikling", "Webdesign", "SEO Optimering", "Webshop Udvikling", "Responsivt Webdesign"]
  };


  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
        </svg>
      ),
      title: t('hjemmesider.feature1_title'),
      desc: t('hjemmesider.feature1_desc')
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: t('hjemmesider.feature2_title'),
      desc: t('hjemmesider.feature2_desc')
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
      ),
      title: t('hjemmesider.feature3_title'),
      desc: t('hjemmesider.feature3_desc')
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: t('hjemmesider.feature4_title'),
      desc: t('hjemmesider.feature4_desc')
    }
  ];

  return (
    <div className="hjemmesider-page">
      <SEO
        title="Hjemmeside Udvikling Danmark | Webbureau København | Nordic Digital"
        description="Professionel hjemmeside udvikling fra 5.000 kr. Vi laver moderne, SEO-optimerede hjemmesider til danske virksomheder. Gratis konsultation. ✓ Dansk team ✓ Fair priser"
        keywords="hjemmeside udvikling, hjemmeside udvikling danmark, webdesign danmark, webbureau københavn, professionel hjemmeside, hjemmeside firma, web udvikling, SEO hjemmeside, responsivt webdesign, hjemmeside til virksomhed"
        canonical="https://nordic-digital.dk/hjemmesider"
        schema={[serviceSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="hjemmesider-hero section-gradient">
        <div className="container">
          <div className="hero-grid">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="hero-badge">{t('hjemmesider.badge')}</span>
              <h1 className="heading-bold">
                {t('hjemmesider.title')}
                <span className="gradient-text"> {t('hjemmesider.title_accent')}</span>
              </h1>
              <p className="hero-subtitle">{t('hjemmesider.subtitle')}</p>
              <div className="hero-buttons">
                <Link to="/kontakt" className="btn btn-primary">{t('hjemmesider.cta_primary')}</Link>
                <a href="#features" className="btn btn-secondary">{t('hjemmesider.cta_secondary')}</a>
              </div>
            </motion.div>
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <LaptopMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Complete Package (White) */}
      <section id="features" className="web-package-section">
        <div className="container">
          <div className="package-grid">
            {/* Browser Mockup */}
            <motion.div
              className="browser-mockup-wrapper"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="browser-mockup">
                <div className="browser-header">
                  <div className="browser-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="browser-url">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <span>dinvirksomhed.dk</span>
                  </div>
                  <div className="react-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/></svg>
                    React
                  </div>
                </div>
                <div className="browser-content">
                  <motion.div
                    className="deployed-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Deployed
                  </motion.div>
                  <div className="mock-content">
                    <div className="mock-header-bar"></div>
                    <div className="mock-nav"></div>
                    <div className="mock-hero">
                      <div className="mock-text-lg"></div>
                      <div className="mock-text-md"></div>
                      <div className="mock-btn"></div>
                    </div>
                    <div className="mock-image"></div>
                  </div>
                  <motion.div
                    className="css-badge"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="css-tag">CSS</span>
                    Design
                  </motion.div>
                  <motion.div
                    className="code-snippet"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <TypewriterCode />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              className="feature-cards-wrapper"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="feature-cards-header">
                <h2>Din komplette digitale pakke</h2>
                <p>Alt samlet ét sted - ingen bøvl</p>
              </div>

              <div className="feature-cards-list">
                {featureDetails.map((feature) => (
                  <motion.div
                    key={feature.id}
                    className={`web-feature-card ${expandedCard === feature.id ? 'expanded' : ''}`}
                    onClick={() => toggleCard(feature.id)}
                    whileHover={{ x: expandedCard === feature.id ? 0 : 5 }}
                  >
                    <div className="wf-main">
                      <div className="wf-icon">
                        {feature.icon}
                      </div>
                      <div className="wf-content">
                        <h3>{feature.title}</h3>
                        <p>{feature.subtitle}</p>
                      </div>
                      <div className={`wf-chevron ${expandedCard === feature.id ? 'rotated' : ''}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </div>
                    </div>
                    <motion.div
                      className="wf-dropdown"
                      initial={false}
                      animate={{
                        height: expandedCard === feature.id ? 'auto' : 0,
                        opacity: expandedCard === feature.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p>{feature.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <Link to="/kontakt" className="web-cta-btn">
                Få et uforpligtende tilbud
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: What You Get (Dark) */}
      <section className="web-benefits-section">
        <div className="container">
          <motion.div
            className="benefits-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Hvad du får med din hjemmeside</h2>
            <p>Vi leverer alt hvad du behøver for at lykkes online</p>
          </motion.div>

          <div className="benefits-grid">
            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
                </svg>
              </div>
              <h3>Responsivt Design</h3>
              <p>Perfekt visning på alle enheder - desktop, tablet og mobil</p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>Lynhurtig Loadtid</h3>
              <p>Optimeret performance med under 2 sekunders loadtid</p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <h3>SEO Optimering</h3>
              <p>Bliv fundet på Google med teknisk og on-page SEO</p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>SSL Sikkerhed</h3>
              <p>Sikker forbindelse med SSL-certifikat inkluderet</p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>Support & Vedligehold</h3>
              <p>Løbende support og teknisk vedligeholdelse</p>
            </motion.div>

            <motion.div
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="benefit-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>GEO Optimering</h3>
              <p>Bliv anbefalet af AI-søgemaskiner som ChatGPT</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: CTA (Light with gradient) */}
      <section className="web-cta-section">
        <div className="container">
          <motion.div
            className="web-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Klar til en professionel hjemmeside?</h2>
            <p>Lad os skabe noget fantastisk sammen. Vi tager os af alt det tekniske.</p>
            <div className="web-cta-buttons">
              <Link to="/kontakt" className="btn-primary-new">
                <span>Start dit projekt</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HjemmesiderService;

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import LaptopMockup from '../components/LaptopMockup';
import '../styles/HjemmesiderService.css';

function HjemmesiderService() {
  const { t } = useTranslation();

  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-digital.dk/" },
    { name: "Hjemmesider", url: "https://nordic-digital.dk/hjemmesider" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professionelle Hjemmesider med SEO",
    "description": "Professionelt webdesign og hjemmesider for danske virksomheder. Moderne, hurtige og SEO-optimerede hjemmesider med GEO optimering.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Nordic Digital",
      "url": "https://nordic-digital.dk"
    },
    "areaServed": { "@type": "Country", "name": "Danmark" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Er jeres hjemmesider SEO-optimerede?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, alle vores hjemmesider er SEO og GEO-optimerede fra start. Det inkluderer teknisk SEO, hurtig loadtid, mobilvenligt design og korrekt struktur."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad er GEO optimering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GEO (Generative Engine Optimization) optimerer dit indhold til AI-søgemaskiner som ChatGPT, Perplexity og Google AI Overview."
        }
      }
    ]
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
        title="Professionelle Hjemmesider med SEO | Nordic Digital"
        description="Moderne, hurtige og SEO-optimerede hjemmesider for danske virksomheder. Responsivt design, GEO optimering og professionelt webdesign."
        keywords="hjemmeside, webdesign, SEO, GEO, professionel hjemmeside, responsivt design, webbureau danmark"
        canonical="https://nordic-digital.dk/hjemmesider"
        schema={[serviceSchema, faqSchema]}
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

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{t('hjemmesider.features_title')}</h2>
            <p>{t('hjemmesider.features_subtitle')}</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card glass-card-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO/GEO Section */}
      <section id="seo" className="seo-section">
        <div className="container">
          <div className="seo-grid">
            <motion.div
              className="seo-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-badge">{t('hjemmesider.seo_badge')}</span>
              <h2>{t('hjemmesider.seo_title')}</h2>
              <p>{t('hjemmesider.seo_desc')}</p>

              <ul className="seo-features">
                <li>
                  <span className="check-icon">&#10003;</span>
                  {t('hjemmesider.seo_feature1')}
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  {t('hjemmesider.seo_feature2')}
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  {t('hjemmesider.seo_feature3')}
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  {t('hjemmesider.seo_feature4')}
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="seo-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Search Results Mockup */}
              <div className="search-mockup glass-card-light">
                <div className="search-bar">
                  <span className="search-icon">&#128269;</span>
                  <span className="search-text">{t('hjemmesider.search_query')}</span>
                </div>
                <div className="search-results">
                  <motion.div
                    className="result featured"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="rank">#1</span>
                    <div className="result-content">
                      <span className="result-url">dinvirksomhed.dk</span>
                      <span className="result-title">Din Virksomhed - Professionelle Løsninger</span>
                    </div>
                    <span className="your-badge">{t('hjemmesider.your_site')}</span>
                  </motion.div>
                  <div className="result">
                    <span className="rank">#2</span>
                    <div className="result-content">
                      <span className="result-url">konkurrent1.dk</span>
                      <span className="result-title">Konkurrent A</span>
                    </div>
                  </div>
                  <div className="result">
                    <span className="rank">#3</span>
                    <div className="result-content">
                      <span className="result-url">konkurrent2.dk</span>
                      <span className="result-title">Konkurrent B</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Preview */}
              <motion.div
                className="ai-preview glass-card-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="ai-header">
                  <span className="ai-badge">AI Søgning</span>
                  <span className="ai-source">ChatGPT / Perplexity</span>
                </div>
                <p className="ai-response">
                  "{t('hjemmesider.ai_response')}"
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="package-section section-gradient">
        <div className="container">
          <motion.div
            className="package-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="package-content">
              <span className="package-badge">{t('hjemmesider.package_badge')}</span>
              <h2>{t('hjemmesider.package_title')}</h2>
              <p>{t('hjemmesider.package_desc')}</p>

              <ul className="package-features">
                <li><span>&#10003;</span> {t('hjemmesider.package_feature1')}</li>
                <li><span>&#10003;</span> {t('hjemmesider.package_feature2')}</li>
                <li><span>&#10003;</span> {t('hjemmesider.package_feature3')}</li>
                <li><span>&#10003;</span> {t('hjemmesider.package_feature4')}</li>
              </ul>

              <Link to="/kontakt" className="btn btn-primary">{t('hjemmesider.package_cta')}</Link>
            </div>
            <div className="package-visual">
              <div className="device-stack">
                <div className="device-laptop">
                  <div className="device-screen"></div>
                </div>
                <div className="device-phone">
                  <div className="device-screen"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{t('hjemmesider.faq_title')}</h2>
          </motion.div>

          <div className="faq-grid">
            <motion.div
              className="faq-item glass-card-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>{t('hjemmesider.faq1_q')}</h3>
              <p>{t('hjemmesider.faq1_a')}</p>
            </motion.div>
            <motion.div
              className="faq-item glass-card-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>{t('hjemmesider.faq2_q')}</h3>
              <p>{t('hjemmesider.faq2_a')}</p>
            </motion.div>
            <motion.div
              className="faq-item glass-card-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>{t('hjemmesider.faq3_q')}</h3>
              <p>{t('hjemmesider.faq3_a')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{t('hjemmesider.cta_title')}</h2>
            <p>{t('hjemmesider.cta_desc')}</p>
            <Link to="/kontakt" className="btn btn-light">{t('hjemmesider.cta_button')}</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HjemmesiderService;

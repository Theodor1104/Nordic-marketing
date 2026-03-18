import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import PhoneMockup from '../components/PhoneMockup';
import '../styles/AppsService.css';

function AppsService() {
  const { t } = useTranslation();

  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-digital.dk/" },
    { name: "Apps", url: "https://nordic-digital.dk/apps" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "App Udvikling Danmark",
    "description": "Professionel app udvikling for danske virksomheder. iOS, Android og cross-platform apps med React Native og Flutter.",
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
        "name": "Laver I apps til både iOS og Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vi udvikler apps til både iOS og Android. Vi bruger primært cross-platform teknologier som React Native og Flutter."
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
      title: t('apps.feature1_title'),
      desc: t('apps.feature1_desc')
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: t('apps.feature2_title'),
      desc: t('apps.feature2_desc')
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: t('apps.feature3_title'),
      desc: t('apps.feature3_desc')
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: t('apps.feature4_title'),
      desc: t('apps.feature4_desc')
    }
  ];

  const technologies = [
    { name: 'React Native', desc: t('apps.tech_react'), color: '#61dafb' },
    { name: 'Flutter', desc: t('apps.tech_flutter'), color: '#02569B' },
    { name: 'iOS Native', desc: t('apps.tech_ios'), color: '#000000' },
    { name: 'Android', desc: t('apps.tech_android'), color: '#3DDC84' }
  ];

  return (
    <div className="apps-page">
      <SEO
        title="App Udvikling Danmark | iOS & Android Apps | Nordic Digital"
        description="Professionel app udvikling for danske virksomheder. iOS, Android og cross-platform apps med React Native og Flutter."
        keywords="app udvikling, iOS app, Android app, React Native, Flutter, mobil app, app bureau danmark"
        canonical="https://nordic-digital.dk/apps"
        schema={[serviceSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="apps-hero section-gradient">
        <div className="container">
          <div className="hero-grid">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="hero-badge">{t('apps.badge')}</span>
              <h1 className="heading-bold">
                {t('apps.title')}
                <span className="gradient-text"> {t('apps.title_accent')}</span>
              </h1>
              <p className="hero-subtitle">{t('apps.subtitle')}</p>
              <div className="hero-buttons">
                <Link to="/kontakt" className="btn btn-primary">{t('apps.cta_primary')}</Link>
                <a href="#features" className="btn btn-secondary">{t('apps.cta_secondary')}</a>
              </div>
            </motion.div>
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <PhoneMockup />
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
            <h2>{t('apps.features_title')}</h2>
            <p>{t('apps.features_subtitle')}</p>
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

      {/* Technologies Section */}
      <section className="tech-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{t('apps.tech_title')}</h2>
            <p>{t('apps.tech_subtitle')}</p>
          </motion.div>

          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-card glass-card-light"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="tech-badge" style={{ background: tech.color }}></div>
                <h3>{tech.name}</h3>
                <p>{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="types-section section-gradient">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ color: 'white' }}>{t('apps.types_title')}</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>{t('apps.types_subtitle')}</p>
          </motion.div>

          <div className="types-grid">
            <motion.div
              className="type-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="type-icon">&#128188;</div>
              <h3>{t('apps.type1_title')}</h3>
              <p>{t('apps.type1_desc')}</p>
            </motion.div>
            <motion.div
              className="type-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="type-icon">&#128722;</div>
              <h3>{t('apps.type2_title')}</h3>
              <p>{t('apps.type2_desc')}</p>
            </motion.div>
            <motion.div
              className="type-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="type-icon">&#9881;</div>
              <h3>{t('apps.type3_title')}</h3>
              <p>{t('apps.type3_desc')}</p>
            </motion.div>
          </div>
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
            <h2>{t('apps.faq_title')}</h2>
          </motion.div>

          <div className="faq-grid">
            <motion.div
              className="faq-item glass-card-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>{t('apps.faq1_q')}</h3>
              <p>{t('apps.faq1_a')}</p>
            </motion.div>
            <motion.div
              className="faq-item glass-card-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>{t('apps.faq2_q')}</h3>
              <p>{t('apps.faq2_a')}</p>
            </motion.div>
            <motion.div
              className="faq-item glass-card-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>{t('apps.faq3_q')}</h3>
              <p>{t('apps.faq3_a')}</p>
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
            <h2>{t('apps.cta_title')}</h2>
            <p>{t('apps.cta_desc')}</p>
            <Link to="/kontakt" className="btn btn-light">{t('apps.cta_button')}</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AppsService;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import PhoneMockup from '../components/PhoneMockup';
import '../styles/Home.css';

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      <SEO
        title="App Udvikling & Webdesign Bureau Danmark | Nordic Digital"
        description="Nordic Digital er Danmarks app og web bureau. Vi udvikler professionelle iOS & Android apps, moderne hjemmesider og SEO/GEO optimering. Gratis konsultation!"
        keywords="app udvikling danmark, webdesign danmark, iOS app, Android app, React Native, Flutter, SEO, GEO"
        canonical="https://nordic-digital.dk/"
      />

      {/* Hero Section */}
      <section className="hero section-gradient">
        <div className="container">
          <div className="hero-grid">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className={`hero-logo ${scrolled ? 'hero-logo-hidden' : ''}`}>
                <span className="hero-logo-text">Nordic</span>
                <span className="hero-logo-accent">Digital</span>
              </Link>
              <h1 className="heading-bold">
                {t('home.hero_title')}
                <span className="gradient-text-light"> {t('home.hero_highlight')}</span>
              </h1>
              <p className="hero-subtitle">{t('home.hero_subtitle')}</p>
              <div className="hero-buttons">
                <Link to="/kontakt" className="btn btn-primary">{t('home.cta_consultation')}</Link>
                <button
                  className="btn btn-secondary"
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('home.cta_services')}
                </button>
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

      {/* Services Section */}
      <section id="services" className="services-overview">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{t('showcase.title')} <span className="gradient-text">{t('showcase.title_highlight')}</span></h2>
            <p>{t('showcase.subtitle')}</p>
          </motion.div>

          <div className="services-grid">
            {/* Apps Card */}
            <motion.div
              className="service-card glass-card-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon-container">
                <div className="service-mockup phone">
                  <div className="mockup-screen">
                    <div className="mockup-content">
                      <div className="mock-app-icon"></div>
                      <div className="mock-text"></div>
                      <div className="mock-buttons">
                        <div className="mock-btn"></div>
                        <div className="mock-btn"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h3>{t('nav.apps')}</h3>
                <p>{t('showcase.app_desc')}</p>
                <ul className="service-features-list">
                  <li><span>&#10003;</span> iOS & Android</li>
                  <li><span>&#10003;</span> React Native & Flutter</li>
                  <li><span>&#10003;</span> Booking systemer</li>
                </ul>
                <Link to="/apps" className="btn btn-primary">{t('showcase.see_all_services')}</Link>
              </div>
            </motion.div>

            {/* Hjemmesider Card */}
            <motion.div
              className="service-card glass-card-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon-container">
                <div className="service-mockup laptop">
                  <div className="mockup-screen">
                    <div className="mockup-content">
                      <div className="mock-bar"></div>
                      <div className="mock-text"></div>
                      <div className="mock-text short"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h3>{t('footer.websites')}</h3>
                <p>{t('showcase.web_desc')}</p>
                <ul className="service-features-list">
                  <li><span>&#10003;</span> Responsivt design</li>
                  <li><span>&#10003;</span> SEO & GEO optimeret</li>
                  <li><span>&#10003;</span> Webshops & e-commerce</li>
                </ul>
                <Link to="/hjemmesider" className="btn btn-primary">{t('showcase.see_all_services')}</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{t('home.usp_title')}</h2>
          </motion.div>

          <div className="trust-grid">
            <motion.div
              className="trust-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <h3>{t('home.usp_nocure')}</h3>
              <p>{t('home.usp_nocure_desc')}</p>
            </motion.div>

            <motion.div
              className="trust-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2"/>
                  <path d="M12 18h.01"/>
                </svg>
              </div>
              <h3>{t('home.usp_digital')}</h3>
              <p>{t('home.usp_digital_desc')}</p>
            </motion.div>

            <motion.div
              className="trust-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>{t('home.usp_personal')}</h3>
              <p>{t('home.usp_personal_desc')}</p>
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{t('home.cta_title')}</h2>
            <p>{t('home.cta_desc')}</p>
            <Link to="/kontakt" className="btn btn-light">{t('home.cta_button')}</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;

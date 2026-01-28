import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function PhoneMockup() {
  const [activeView, setActiveView] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  const views = ['Forside', 'Services', 'Proces', 'Kontakt'];

  const services = [
    { name: "SEO & GEO", desc: "Synlighed på Google & AI", icon: "📊", color: "#10b981" },
    { name: "Google Ads", desc: "Målrettet annoncering", icon: "🎯", color: "#ef4444" },
    { name: "Meta Ads", desc: "Facebook & Instagram", icon: "📱", color: "#8b5cf6" },
    { name: "Webdesign", desc: "Moderne hjemmesider", icon: "💻", color: "#3b82f6" }
  ];

  const processSteps = [
    { num: "1", title: "Konsultation", desc: "Gratis og uforpligtende" },
    { num: "2", title: "Strategi", desc: "Skræddersyet plan" },
    { num: "3", title: "Eksekvering", desc: "Vi går i gang" },
    { num: "4", title: "Optimering", desc: "Løbende forbedring" }
  ];

  // Auto-cycle views (pause for 30 seconds after user click)
  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceLastClick = Date.now() - lastClickTime;
      // Only auto-cycle if 30 seconds have passed since last click
      if (timeSinceLastClick >= 30000) {
        setActiveView((prev) => (prev + 1) % views.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [views.length, lastClickTime]);

  // Handle manual navigation click
  const handleNavClick = (index) => {
    setActiveView(index);
    setLastClickTime(Date.now());
  };

  const renderContent = () => {
    switch (activeView) {
      case 0: // Forside
        return (
          <motion.div
            key="forside"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="phone-view-content"
          >
            {/* Hero area */}
            <div className="phone-hero">
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="phone-hero-content"
              >
                <p className="phone-hero-title">Vækst din virksomhed</p>
                <p className="phone-hero-subtitle">Digital marketing der virker</p>
              </motion.div>
            </div>

            {/* CTA Banner */}
            <div className="phone-banner">
              <div className="phone-banner-dot"></div>
              <span>Book gratis konsultation</span>
            </div>

            {/* Services Grid */}
            <div className="phone-section">
              <div className="phone-section-header">
                <p className="phone-section-title">Vores Services</p>
              </div>
              <div className="phone-services-grid">
                {services.map((service, i) => (
                  <Link to="/services" key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="phone-service-card"
                    >
                      <div className="phone-service-icon" style={{ background: `${service.color}15` }}>
                        <span>{service.icon}</span>
                      </div>
                      <p className="phone-service-name">{service.name}</p>
                      <p className="phone-service-desc">{service.desc}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Why Us Section */}
            <div className="phone-section phone-why-us">
              <p className="phone-section-title">Hvorfor os?</p>
              <div className="phone-features">
                {[
                  { icon: "✓", text: "Personlig service" },
                  { icon: "✓", text: "Gennemsigtige priser" },
                  { icon: "✓", text: "Dansk team" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="phone-feature-item"
                  >
                    <span className="phone-feature-check">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 1: // Services
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="phone-view-content"
          >
            <div className="phone-page-header">
              <p className="phone-page-title">Vores Services</p>
              <p className="phone-page-subtitle">Komplette løsninger til fair priser</p>
            </div>

            <div className="phone-services-list">
              {services.map((service, i) => (
                <Link to="/services" key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="phone-service-item"
                  >
                    <div className="phone-service-icon" style={{ background: `${service.color}15` }}>
                      <span>{service.icon}</span>
                    </div>
                    <div className="phone-service-text">
                      <p className="phone-service-name">{service.name}</p>
                      <p className="phone-service-desc">{service.desc}</p>
                    </div>
                    <div className="phone-service-arrow">
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <Link to="/services" className="phone-info-box" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', cursor: 'pointer' }}>
              <span className="phone-info-icon">💡</span>
              <p className="phone-info-text">Se alle services →</p>
            </Link>
          </motion.div>
        );

      case 2: // Proces
        return (
          <motion.div
            key="proces"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="phone-view-content"
          >
            <div className="phone-page-header">
              <p className="phone-page-title">Vores Proces</p>
              <p className="phone-page-subtitle">Sådan arbejder vi sammen</p>
            </div>

            <div className="phone-process-list">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="phone-process-item"
                >
                  <div className="phone-process-number">{step.num}</div>
                  <div className="phone-process-line"></div>
                  <div className="phone-process-content">
                    <p className="phone-process-title">{step.title}</p>
                    <p className="phone-process-desc">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="phone-cta-box">
              <p className="phone-cta-text">Start din rejse i dag</p>
              <Link to="/kontakt" className="phone-cta-button" style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>Book møde</Link>
            </div>
          </motion.div>
        );

      case 3: // Kontakt
        return (
          <motion.div
            key="kontakt"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="phone-view-content"
          >
            <div className="phone-page-header">
              <p className="phone-page-title">Kontakt Os</p>
              <p className="phone-page-subtitle">Vi er klar til at hjælpe</p>
            </div>

            <div className="phone-contact-card">
              <div className="phone-contact-avatar">
                <span>✉️</span>
              </div>
              <Link to="/kontakt" className="phone-contact-button" style={{ textDecoration: 'none' }}>
                Gå til kontaktformular
              </Link>
              <p className="phone-contact-label">Udfyld formularen</p>
            </div>

            <div className="phone-contact-options">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="phone-contact-option"
              >
                <span className="phone-contact-option-icon">📧</span>
                <div>
                  <p className="phone-contact-option-title">Email</p>
                  <p className="phone-contact-option-desc">nordicmarketin@outlook.dk</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="phone-contact-option"
              >
                <span className="phone-contact-option-icon">📍</span>
                <div>
                  <p className="phone-contact-option-title">Lokation</p>
                  <p className="phone-contact-option-desc">Frederiksberg, København</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="phone-contact-option"
              >
                <span className="phone-contact-option-icon">🕐</span>
                <div>
                  <p className="phone-contact-option-title">Åbningstider</p>
                  <p className="phone-contact-option-desc">Man-Fre 09:00-17:00</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="phone-mockup-container"
    >
      {/* Phone mockup */}
      <div className="phone-frame">
        {/* Screen */}
        <div className="phone-screen">
          {/* Status bar */}
          <div className="phone-status-bar">
            <span>9:41</span>
            <div className="status-icons">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17 4h-3V2h-4v2H7v18h10V4z"/></svg>
            </div>
          </div>

          {/* Website preview content */}
          <div className="phone-content">
            {/* Navigation bar */}
            <div className="phone-nav">
              <div className="phone-nav-left">
                <div className="phone-logo">
                  <span>📈</span>
                </div>
                <span className="phone-brand">Nordic Marketing</span>
              </div>
              <div className="phone-nav-icons">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>

            {/* View Content */}
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>

            {/* Bottom Navigation */}
            <div className="phone-bottom-nav">
              {views.map((view, i) => (
                <button
                  key={i}
                  className={`phone-nav-btn ${activeView === i ? 'active' : ''}`}
                  onClick={() => handleNavClick(i)}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                    {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />}
                    {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />}
                    {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                  </svg>
                  <span>{view}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="phone-float phone-float-1"
      >
        <div className="phone-float-icon green">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="phone-float-title">SEO & GEO</p>
          <p className="phone-float-desc">Google + AI synlighed</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="phone-float phone-float-2"
      >
        <div className="phone-float-icon blue">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="phone-float-title">Gratis Tilbud</p>
          <p className="phone-float-desc">Uforpligtende samtale</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="phone-float phone-float-3"
      >
        <div className="phone-float-icon primary">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <p className="phone-float-title">Dansk Team</p>
          <p className="phone-float-desc">Personlig kontakt</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="phone-float phone-float-4"
      >
        <div className="phone-float-icon purple">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="phone-float-title">Fair Priser</p>
          <p className="phone-float-desc">Gennemsigtig prissætning</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PhoneMockup;

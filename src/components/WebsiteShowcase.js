import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function WebsiteShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [typedCode, setTypedCode] = useState('');

  const codeSnippet = `<div class="hero">
  <h1>Din Virksomhed</h1>
  <p>Professionel online</p>
  <button>Kontakt</button>
</div>`;

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= codeSnippet.length) {
        setTypedCode(codeSnippet.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          index = 0;
          setTypedCode('');
        }, 2000);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Lynhurtig", desc: "Optimeret hjemmeside" },
    { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "SEO, GEO & Ads", desc: "Integreret markedsføring" },
    { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", title: "Flere Kunder", desc: "Konverterende design" },
    { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Alt-i-én", desc: "Hjemmeside + marketing" }
  ];

  const serviceTypes = [
    { name: "Hjemmesider", color: "#667eea" },
    { name: "SEO & GEO", color: "#10b981" },
    { name: "Google Ads", color: "#ef4444" },
    { name: "Social Media", color: "#8b5cf6" }
  ];

  return (
    <section className="website-showcase">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="showcase-header"
        >
          <span className="showcase-badge">Komplet Løsning</span>
          <h2>Alt du behøver for at <span className="gradient-text">vækste online</span></h2>
          <p>Hjemmeside, markedsføring og synlighed - samlet i én pakke</p>
        </motion.div>

        {/* Services Grid First */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="showcase-services-top"
        >
          <div className="services-grid-top">
            <motion.div className="service-card-top" whileHover={{ y: -5 }}>
              <div className="service-icon-top meta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </div>
              <div className="service-text-top">
                <h4>Meta Ads</h4>
                <p>Facebook & Instagram annoncer</p>
              </div>
            </motion.div>
            <motion.div className="service-card-top" whileHover={{ y: -5 }}>
              <div className="service-icon-top google">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <div className="service-text-top">
                <h4>Google Ads</h4>
                <p>Synlighed i søgeresultater</p>
              </div>
            </motion.div>
            <motion.div className="service-card-top" whileHover={{ y: -5 }}>
              <div className="service-icon-top seo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
                </svg>
              </div>
              <div className="service-text-top">
                <h4>SEO & GEO</h4>
                <p>Synlighed på Google & AI</p>
              </div>
            </motion.div>
            <motion.div className="service-card-top" whileHover={{ y: -5 }}>
              <div className="service-icon-top web">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8"/><path d="M12 17v4"/>
                </svg>
              </div>
              <div className="service-text-top">
                <h4>Hjemmesider</h4>
                <p>Professionelt webdesign</p>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="services-link-top"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/services" className="services-link-btn">
              <span>Se alle services</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        <div className="showcase-content">
          {/* Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="browser-mockup"
          >
            {/* Browser Chrome */}
            <div className="browser-chrome">
              <div className="browser-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="browser-url">
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>dinvirksomhed.dk</span>
              </div>
            </div>

            {/* Browser Content */}
            <div className="browser-content">
              {/* Mini website preview */}
              <div className="preview-site">
                {/* Nav */}
                <div className="preview-nav">
                  <div className="preview-logo"></div>
                  <div className="preview-menu">
                    <span></span><span></span><span></span>
                  </div>
                </div>

                {/* Hero */}
                <div className="preview-hero">
                  <motion.div
                    className="preview-hero-content"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="preview-title"></div>
                    <div className="preview-subtitle"></div>
                    <div className="preview-btn"></div>
                  </motion.div>
                  <motion.div
                    className="preview-hero-image"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>
                </div>

                {/* Features grid */}
                <div className="preview-features">
                  {[1, 2, 3].map((_, i) => (
                    <motion.div
                      key={i}
                      className="preview-feature-card"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <div className="preview-feature-icon"></div>
                      <div className="preview-feature-text"></div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Code overlay */}
              <motion.div
                className="code-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <pre><code>{typedCode}<span className="cursor">|</span></code></pre>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="floating-element element-1"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="element-icon">{"</>"}</span>
              <span>React</span>
            </motion.div>

            <motion.div
              className="floating-element element-2"
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <span className="element-icon css">CSS</span>
              <span>Design</span>
            </motion.div>

            <motion.div
              className="floating-element element-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Deployed</span>
            </motion.div>
          </motion.div>

          {/* Features Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="showcase-features"
          >
            <div className="features-header">
              <h3>Din komplette digitale pakke</h3>
              <p>Alt samlet ét sted - ingen bøvl</p>
            </div>

            {/* Feature Cards */}
            <div className="feature-cards">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className={`feature-card ${activeFeature === i ? 'active' : ''}`}
                  onClick={() => setActiveFeature(i)}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="feature-icon">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                  <AnimatePresence>
                    {activeFeature === i && (
                      <motion.div
                        className="feature-indicator"
                        layoutId="indicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="showcase-cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/kontakt" className="cta-button">
                <span>Få et uforpligtende tilbud</span>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default WebsiteShowcase;

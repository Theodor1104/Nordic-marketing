import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/LaptopMockup.css';

function LaptopMockup({ size = 'large' }) {
  const [activeView, setActiveView] = useState(0);
  const views = ['home', 'services', 'about'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveView((prev) => (prev + 1) % views.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [views.length]);

  const renderContent = () => {
    switch (views[activeView]) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="laptop-content-home"
          >
            <div className="mock-hero">
              <div className="mock-hero-text">
                <div className="mock-badge">Din Virksomhed</div>
                <div className="mock-title"></div>
                <div className="mock-subtitle"></div>
                <div className="mock-buttons">
                  <div className="mock-btn primary"></div>
                  <div className="mock-btn secondary"></div>
                </div>
              </div>
              <div className="mock-hero-image"></div>
            </div>
            <div className="mock-features">
              <div className="mock-feature-card"></div>
              <div className="mock-feature-card"></div>
              <div className="mock-feature-card"></div>
            </div>
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="laptop-content-services"
          >
            <div className="mock-page-header">
              <div className="mock-page-title"></div>
              <div className="mock-page-desc"></div>
            </div>
            <div className="mock-service-grid">
              <div className="mock-service-card">
                <div className="mock-service-icon"></div>
                <div className="mock-service-title"></div>
                <div className="mock-service-desc"></div>
              </div>
              <div className="mock-service-card">
                <div className="mock-service-icon"></div>
                <div className="mock-service-title"></div>
                <div className="mock-service-desc"></div>
              </div>
            </div>
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="laptop-content-about"
          >
            <div className="mock-about-hero">
              <div className="mock-about-image"></div>
              <div className="mock-about-text">
                <div className="mock-about-title"></div>
                <div className="mock-about-desc"></div>
                <div className="mock-about-desc short"></div>
              </div>
            </div>
            <div className="mock-stats">
              <div className="mock-stat"></div>
              <div className="mock-stat"></div>
              <div className="mock-stat"></div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`laptop-mockup-container ${size}`}>
      {/* Glow effect behind laptop */}
      <div className="laptop-glow"></div>

      {/* Floating badges */}
      <motion.div
        className="floating-badge speed"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="badge-icon">&#9889;</span>
        <span>PageSpeed 98</span>
      </motion.div>

      <motion.div
        className="floating-badge seo"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <span className="badge-icon">&#128269;</span>
        <span>SEO Optimeret</span>
      </motion.div>

      <motion.div
        className="floating-badge responsive"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="badge-icon">&#128241;</span>
        <span>Responsivt</span>
      </motion.div>

      {/* Laptop frame */}
      <div className="laptop-frame">
        <div className="laptop-screen">
          {/* Browser chrome */}
          <div className="browser-bar">
            <div className="browser-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="url-bar">
              <span className="lock-icon">&#128274;</span>
              <span className="url-text">dinvirksomhed.dk</span>
            </div>
            <div className="browser-actions">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Screen content */}
          <div className="laptop-screen-content">
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </div>
        </div>

        {/* Laptop base/keyboard */}
        <div className="laptop-base">
          <div className="laptop-notch"></div>
          <div className="keyboard-strip"></div>
        </div>
      </div>
    </div>
  );
}

export default LaptopMockup;

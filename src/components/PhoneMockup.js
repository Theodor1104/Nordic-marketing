import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/PhoneMockup.css';

function PhoneMockup() {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedDay, setSelectedDay] = useState(17);
  const [selectedTime, setSelectedTime] = useState(1);

  const views = t('phone.views', { returnObjects: true });

  // Auto-cycle views
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveView((prev) => (prev + 1) % views.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, views.length]);

  const handleNavClick = (index) => {
    setActiveView(index);
    setAutoPlay(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setAutoPlay(true), 10000);
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
            className="screen-content"
          >
            <div className="hero-card" onClick={() => handleNavClick(1)} style={{ cursor: 'pointer' }}>
              <span className="hero-badge">{t('phone.hero_badge')}</span>
              <h3 className="hero-title">{t('phone.hero_title')}</h3>
              <p className="hero-desc">{t('phone.hero_subtitle')}</p>
              <div className="hero-visual">
                <div className="visual-circle"></div>
              </div>
            </div>
            <div className="quick-stats">
              <div className="quick-stat" onClick={() => handleNavClick(3)} style={{ cursor: 'pointer' }}>
                <span className="stat-num">100%</span>
                <span className="stat-txt">{t('phone.stat_satisfaction')}</span>
              </div>
              <div className="quick-stat" onClick={() => handleNavClick(2)} style={{ cursor: 'pointer' }}>
                <span className="stat-num">24/7</span>
                <span className="stat-txt">{t('phone.stat_support')}</span>
              </div>
              <div className="quick-stat" onClick={() => handleNavClick(3)} style={{ cursor: 'pointer' }}>
                <span className="stat-num">DK</span>
                <span className="stat-txt">{t('phone.stat_based')}</span>
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
            className="screen-content"
          >
            <p className="screen-label">{t('phone.our_services')}</p>
            <div className="service-list">
              {[
                { icon: 'app', name: t('nav.apps'), desc: t('phone.services_app_desc'), nav: 2 },
                { icon: 'web', name: t('nav.websites'), desc: t('phone.services_web_desc'), nav: 2 },
                { icon: 'seo', name: 'SEO', desc: t('phone.services_seo_desc'), nav: 3 }
              ].map((service, idx) => (
                <div key={idx} className="service-item" onClick={() => handleNavClick(service.nav)}>
                  <div className={`service-icon ${service.icon}`}>
                    {service.icon === 'web' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                      </svg>
                    )}
                    {service.icon === 'app' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="5" y="2" width="14" height="20" rx="3"/><path d="M12 18h.01"/>
                      </svg>
                    )}
                    {service.icon === 'seo' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                      </svg>
                    )}
                  </div>
                  <div className="service-info">
                    <span className="service-name">{service.name}</span>
                    <span className="service-desc">{service.desc}</span>
                  </div>
                  <span className="service-arrow">→</span>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 2: // Booking
        return (
          <motion.div
            key="booking"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="screen-content"
          >
            <p className="screen-label">{t('phone.booking_system')}</p>
            <div className="booking-preview">
              <div className="calendar-header">
                <span>{t('phone.booking_month')}</span>
                <div className="calendar-nav">
                  <button>‹</button>
                  <button>›</button>
                </div>
              </div>
              <div className="calendar-grid">
                {t('phone.weekdays', { returnObjects: true }).map((day, i) => (
                  <span key={i} className="cal-day-name">{day}</span>
                ))}
                {[...Array(31)].map((_, i) => (
                  <span
                    key={i}
                    className={`cal-day ${i === selectedDay ? 'selected' : ''} ${[5, 12, 19, 26].includes(i) ? 'available' : ''}`}
                    onClick={() => setSelectedDay(i)}
                    style={{ cursor: 'pointer' }}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>
              <div className="time-slots">
                <span className={`time-slot ${selectedTime === 0 ? 'active' : ''}`} onClick={() => setSelectedTime(0)} style={{ cursor: 'pointer' }}>09:00</span>
                <span className={`time-slot ${selectedTime === 1 ? 'active' : ''}`} onClick={() => setSelectedTime(1)} style={{ cursor: 'pointer' }}>10:30</span>
                <span className={`time-slot ${selectedTime === 2 ? 'active' : ''}`} onClick={() => setSelectedTime(2)} style={{ cursor: 'pointer' }}>14:00</span>
              </div>
            </div>
            <button className="book-btn" onClick={() => handleNavClick(3)}>{t('phone.book_meeting')}</button>
          </motion.div>
        );

      case 3: // Kontakt
        return (
          <motion.div
            key="kontakt"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="screen-content"
          >
            <p className="screen-label">{t('phone.contact_title')}</p>
            <div className="contact-form">
              <div className="form-field">
                <label>{t('contact.form_name')}</label>
                <div className="input-preview">{t('contact.form_name_placeholder')}</div>
              </div>
              <div className="form-field">
                <label>{t('contact.form_email')}</label>
                <div className="input-preview">{t('contact.form_email_placeholder')}</div>
              </div>
              <div className="form-field">
                <label>{t('phone.message_label')}</label>
                <div className="input-preview textarea">{t('phone.message_placeholder')}</div>
              </div>
            </div>
            <button className="send-btn" onClick={() => handleNavClick(0)}>{t('phone.send_message')}</button>
            <div className="contact-info">
              <div className="contact-item" style={{ cursor: 'pointer' }} onClick={() => handleNavClick(0)}>
                <span>📧</span>
                <span>hello@nordic-digital.dk</span>
              </div>
              <div className="contact-item" style={{ cursor: 'pointer' }} onClick={() => handleNavClick(0)}>
                <span>📍</span>
                <span>{t('phone.location')}</span>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="phone-mockup-wrapper"
    >
      <div className="iphone-frame">
        <div className="dynamic-island"></div>
        <div className="iphone-screen">
          {/* App Header */}
          <div className="app-header">
            <div className="app-logo">
              <span className="app-logo-icon">N</span>
              <span className="app-logo-text">Nordic Digital</span>
            </div>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>

          {/* Bottom Navigation */}
          <div className="bottom-nav">
            {views.map((view, i) => (
              <button
                key={i}
                className={`nav-btn ${activeView === i ? 'active' : ''}`}
                onClick={() => handleNavClick(i)}
              >
                {i === 0 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                )}
                {i === 1 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                )}
                {i === 2 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                )}
                {i === 3 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                )}
                <span>{view}</span>
              </button>
            ))}
          </div>

          <div className="home-indicator"></div>
        </div>
      </div>

      {/* Floating Badges - Left Side */}
      <motion.div
        className="float-badge float-1"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="float-icon teal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <div className="float-text">
          <span className="float-title">{t('phone.float_seo')}</span>
          <span className="float-desc">{t('phone.float_seo_desc')}</span>
        </div>
      </motion.div>

      <motion.div
        className="float-badge float-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="float-icon blue">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
          </svg>
        </div>
        <div className="float-text">
          <span className="float-title">{t('phone.float_offer')}</span>
          <span className="float-desc">{t('phone.float_offer_desc')}</span>
        </div>
      </motion.div>

      <motion.div
        className="float-badge float-3"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="float-icon purple">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div className="float-text">
          <span className="float-title">{t('phone.float_team')}</span>
          <span className="float-desc">{t('phone.float_team_desc')}</span>
        </div>
      </motion.div>

      <motion.div
        className="float-badge float-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="float-icon green">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <path d="M8 21h8M12 17v4"/>
          </svg>
        </div>
        <div className="float-text">
          <span className="float-title">{t('phone.float_prices')}</span>
          <span className="float-desc">{t('phone.float_prices_desc')}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PhoneMockup;

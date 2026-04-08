import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/PhoneMockup.css';

function AppPhoneMockup() {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const views = t('app_phone.views', { returnObjects: true });

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
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const renderContent = () => {
    switch (activeView) {
      case 0: // Dashboard
        return (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="screen-content"
          >
            <div className="hero-card">
              <span className="hero-badge">{t('app_phone.your_app')}</span>
              <h3 className="hero-title">{t('app_phone.welcome_back')}</h3>
              <p className="hero-desc">{t('app_phone.new_notifications')}</p>
              <div className="hero-visual">
                <div className="visual-circle"></div>
              </div>
            </div>
            <div className="quick-stats">
              <div className="quick-stat">
                <span className="stat-num">2.4k</span>
                <span className="stat-txt">{t('app_phone.users')}</span>
              </div>
              <div className="quick-stat">
                <span className="stat-num">98%</span>
                <span className="stat-txt">{t('app_phone.rating')}</span>
              </div>
              <div className="quick-stat">
                <span className="stat-num">↑12%</span>
                <span className="stat-txt">{t('app_phone.growth')}</span>
              </div>
            </div>
          </motion.div>
        );

      case 1: // Profil
        return (
          <motion.div
            key="profil"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="screen-content"
          >
            <div className="app-profile-card">
              <div className="profile-avatar">
                <span>JD</span>
              </div>
              <h3 className="profile-name">John Doe</h3>
              <p className="profile-email">john@example.dk</p>
              <div className="profile-stats">
                <div className="profile-stat">
                  <span className="stat-value">127</span>
                  <span className="stat-label">{t('app_phone.points')}</span>
                </div>
                <div className="profile-stat">
                  <span className="stat-value">Gold</span>
                  <span className="stat-label">{t('app_phone.level')}</span>
                </div>
              </div>
            </div>
            <div className="profile-menu">
              <div className="menu-item">
                <span>⚙️</span>
                <span>{t('app_phone.settings')}</span>
                <span className="menu-arrow">→</span>
              </div>
              <div className="menu-item">
                <span>🔔</span>
                <span>{t('app_phone.notifications')}</span>
                <span className="menu-arrow">→</span>
              </div>
            </div>
          </motion.div>
        );

      case 2: // Aktivitet
        return (
          <motion.div
            key="aktivitet"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="screen-content"
          >
            <p className="screen-label">{t('app_phone.recent_activity')}</p>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon green-bg">✓</div>
                <div className="activity-info">
                  <span className="activity-title">{t('app_phone.order_completed')}</span>
                  <span className="activity-time">{t('app_phone.time_2min')}</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon blue-bg">↑</div>
                <div className="activity-info">
                  <span className="activity-title">{t('app_phone.level_upgraded')}</span>
                  <span className="activity-time">{t('app_phone.time_1hour')}</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon purple-bg">★</div>
                <div className="activity-info">
                  <span className="activity-title">{t('app_phone.new_review')}</span>
                  <span className="activity-time">{t('app_phone.time_3hours')}</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon teal-bg">💬</div>
                <div className="activity-info">
                  <span className="activity-title">{t('app_phone.new_message')}</span>
                  <span className="activity-time">{t('app_phone.yesterday')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 3: // Shop
        return (
          <motion.div
            key="shop"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="screen-content"
          >
            <p className="screen-label">{t('app_phone.in_app_shop')}</p>
            <div className="shop-grid">
              <div className="shop-item">
                <div className="shop-image">🎁</div>
                <span className="shop-name">Premium</span>
                <span className="shop-price">{t('app_phone.price_49')}</span>
              </div>
              <div className="shop-item featured">
                <div className="shop-image">⭐</div>
                <span className="shop-name">Pro</span>
                <span className="shop-price">{t('app_phone.price_99')}</span>
              </div>
            </div>
            <button className="book-btn">{t('app_phone.upgrade_now')}</button>
            <div className="shop-features">
              <div className="shop-feature">✓ {t('app_phone.no_ads')}</div>
              <div className="shop-feature">✓ {t('app_phone.premium_features')}</div>
              <div className="shop-feature">✓ {t('app_phone.priority_support')}</div>
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
          <div className="app-header">
            <div className="app-logo">
              <span className="app-logo-icon">A</span>
              <span className="app-logo-text">{t('app_phone.app_name')}</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>

          <div className="bottom-nav">
            {views.map((view, i) => (
              <button
                key={i}
                className={`nav-btn ${activeView === i ? 'active' : ''}`}
                onClick={() => handleNavClick(i)}
              >
                {i === 0 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                  </svg>
                )}
                {i === 1 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                )}
                {i === 2 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                )}
                {i === 3 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                )}
                <span>{view}</span>
              </button>
            ))}
          </div>

          <div className="home-indicator"></div>
        </div>
      </div>

      {/* Floating Badges - App focused */}
      <motion.div
        className="float-badge float-1"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="float-icon teal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div className="float-text">
          <span className="float-title">{t('app_phone.float_crossplatform')}</span>
          <span className="float-desc">iOS & Android</span>
        </div>
      </motion.div>

      <motion.div
        className="float-badge float-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="float-icon blue">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </div>
        <div className="float-text">
          <span className="float-title">{t('app_phone.float_push')}</span>
          <span className="float-desc">{t('app_phone.float_push_desc')}</span>
        </div>
      </motion.div>

      <motion.div
        className="float-badge float-3"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="float-icon purple">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="4" width="22" height="16" rx="2"/>
            <path d="M1 10h22"/>
          </svg>
        </div>
        <div className="float-text">
          <span className="float-title">{t('app_phone.float_payment')}</span>
          <span className="float-desc">{t('app_phone.float_payment_desc')}</span>
        </div>
      </motion.div>

      <motion.div
        className="float-badge float-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="float-icon green">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20V10"/>
            <path d="M18 20V4"/>
            <path d="M6 20v-4"/>
          </svg>
        </div>
        <div className="float-text">
          <span className="float-title">{t('app_phone.float_analytics')}</span>
          <span className="float-desc">{t('app_phone.float_analytics_desc')}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AppPhoneMockup;

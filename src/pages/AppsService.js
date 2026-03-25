import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import '../styles/AppsService.css';

function AppsService() {
  const { t } = useTranslation();
  const [activeApp, setActiveApp] = useState(0);

  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-digital.dk/" },
    { name: "Apps", url: "https://nordic-digital.dk/apps" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "App Udvikling Danmark - iOS & Android Apps",
    "description": "Professionel app udvikling til iOS og Android. Vi er et dansk app bureau der udvikler cross-platform apps med React Native og Flutter til virksomheder i hele Danmark.",
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
    "serviceType": ["App Udvikling", "iOS App Udvikling", "Android App Udvikling", "React Native Udvikling", "Flutter App Udvikling"]
  };

  const appShowcase = [
    {
      name: 'E-Commerce',
      icon: 'cart',
      color: '#14b8a6',
      features: ['Produktkatalog', 'Betalingsintegration', 'Push notifikationer', 'Bruger tracking']
    },
    {
      name: 'Booking',
      icon: 'calendar',
      color: '#3b82f6',
      features: ['Kalender system', 'SMS påmindelser', 'Online betaling', 'Admin panel']
    },
    {
      name: 'Loyalitet',
      icon: 'star',
      color: '#f59e0b',
      features: ['Point system', 'Stempelkort', 'Eksklusive tilbud', 'Restaurant integration']
    },
    {
      name: 'Social',
      icon: 'chat',
      color: '#8b5cf6',
      features: ['Real-time chat', 'Bruger profiler', 'Feed algoritme', 'Mediedeling']
    },
    {
      name: 'Fitness',
      icon: 'activity',
      color: '#22c55e',
      features: ['Workout tracking', 'Sundhedsdata', 'Gamification', 'Wearable sync']
    }
  ];

  const processSteps = [
    { num: '01', title: 'Idé & Strategi', desc: 'Vi forstår din vision og definerer app-strategien', icon: 'lightbulb' },
    { num: '02', title: 'Design & UX', desc: 'Skaber intuitivt design der engagerer brugere', icon: 'pen' },
    { num: '03', title: 'Udvikling', desc: 'Bygger din app med moderne teknologi', icon: 'code' },
    { num: '04', title: 'Test & Launch', desc: 'Grundig test og udgivelse til App Store', icon: 'rocket' }
  ];

  const renderIcon = (iconName, size = 24) => {
    const icons = {
      cart: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
      calendar: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
      star: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
      chat: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
      activity: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
      lightbulb: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>,
      pen: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/></svg>,
      code: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
      rocket: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
    };
    return icons[iconName] || null;
  };


  return (
    <div className="apps-page">
      <SEO
        title="App Udvikling Danmark | App Bureau København | Nordic Digital"
        description="App udvikling til iOS & Android fra 25.000 kr. Vi udvikler professionelle apps med React Native og Flutter. Gratis konsultation. ✓ Dansk team ✓ Fair priser"
        keywords="app udvikling, app udvikling danmark, app udvikler, iOS app udvikling, Android app udvikling, React Native udvikling, Flutter app, app bureau københavn, mobil app udvikling, app firma danmark"
        canonical="https://nordic-digital.dk/apps"
        schema={[serviceSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section - Completely Redesigned */}
      <section className="apps-hero-new">
        <div className="hero-bg-elements">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="grid-pattern"></div>
        </div>

        <div className="container">
          <div className="hero-content-new">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero-badge-new">
                <span className="badge-dot"></span>
                App Udvikling
              </span>
              <h1>
                App udvikling i Danmark<br />
                <span className="gradient-text-animated">iOS & Android apps</span>
              </h1>
              <p className="hero-desc-new">
                Professionel app udvikling til iOS og Android. Vi er et dansk app bureau
                der bygger cross-platform apps med React Native og Flutter - fra idé til App Store.
              </p>
              <div className="hero-cta-group">
                <Link to="/kontakt" className="btn-primary-new">
                  <span>Start dit projekt</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <a href="#showcase" className="btn-secondary-new">
                  Se eksempler
                </a>
              </div>

            </motion.div>

            <motion.div
              className="hero-phones hero-phones-small"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Link to="/demo/fitness-app" className="phones-container phones-link">
                <motion.div
                  className="phone phone-front phone-fitness"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <div className="app-demo fitness-demo">
                      <div className="app-header-demo">
                        <div className="app-icon-demo fitness-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                        </div>
                        <span>FitCoach Pro</span>
                      </div>
                      <div className="app-features-demo">
                        <div className="feature-item-demo">
                          <span className="check">✓</span>
                          <span>Workout tracking</span>
                        </div>
                        <div className="feature-item-demo">
                          <span className="check">✓</span>
                          <span>Coach platform</span>
                        </div>
                        <div className="feature-item-demo">
                          <span className="check">✓</span>
                          <span>Fremskridts-data</span>
                        </div>
                        <div className="feature-item-demo">
                          <span className="check">✓</span>
                          <span>Push notifikationer</span>
                        </div>
                      </div>
                      <div className="app-button-demo">Prøv Demo</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="floating-element fe-1"
                  animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <span className="fe-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </span>
                  <span>Fitness</span>
                </motion.div>
                <motion.div
                  className="floating-element fe-2"
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <span className="fe-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
                  </span>
                  <span>Native</span>
                </motion.div>
                <motion.div
                  className="floating-element fe-3"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="fe-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>Demo</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Section 1: App Types + Process (White) */}
      <section id="showcase" className="combined-section-light">
        <div className="container">
          {/* App Types */}
          <motion.div
            className="section-header-new"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Hvad Vi Bygger</span>
            <h2>Apps til enhver branche</h2>
          </motion.div>

          <div className="app-types-grid">
            {appShowcase.map((app, i) => (
              <motion.div
                key={i}
                className="app-type-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                style={{ '--accent': app.color }}
              >
                <div className="app-type-icon" style={{ color: app.color }}>{renderIcon(app.icon, 32)}</div>
                <h3>{app.name}</h3>
                <ul>
                  {app.features.map((f, j) => (
                    <li key={j}><span style={{ color: app.color }}>✓</span> {f}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Process inline */}
          <div className="process-inline">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="process-step-inline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="step-num">{step.num}</div>
                <div className="step-content">
                  <span className="step-icon">{renderIcon(step.icon, 20)}</span>
                  <h4>{step.title}</h4>
                </div>
                {i < processSteps.length - 1 && <div className="step-arrow">→</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness App Demo Showcase */}
      <section className="demo-showcase-section">
        <div className="container">
          <motion.div
            className="section-header-new"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Interaktiv Demo</span>
            <h2>FitCoach Pro App</h2>
            <p className="section-subtitle">Udforsk vores fitness app demo - en komplet platform for coaches og klienter</p>
          </motion.div>

          <motion.div
            className="demo-showcase-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="demo-showcase-content">
              <div className="demo-showcase-info">
                <h3>Coach & Klient Platform</h3>
                <p>En komplet fitness platform med to apps - én til trænere og én til medlemmer. Perfekt til fitnessstudier, personlige trænere og fitnesskæder.</p>
                <ul className="demo-features-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Klient- og programstyring
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Daglig check-in tracking
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Workout-tracking med øvelser
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Fremskridts-statistik og achievements
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Push notifikationer og chat
                  </li>
                </ul>
                <div className="demo-tech-stack">
                  <span>React Native</span>
                  <span>Firebase</span>
                  <span>iOS & Android</span>
                </div>
                <div className="demo-cta-group">
                  <Link to="/demo/fitness-app" className="btn-primary-new demo-btn">
                    <span>Prøv interaktiv demo</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                  <Link to="/cases" className="btn-secondary-new demo-btn-secondary">
                    Se alle cases
                  </Link>
                </div>
              </div>
              <div className="demo-showcase-preview">
                <div className="demo-phone-preview">
                  <div className="phone-frame-mini">
                    <div className="phone-screen-mini">
                      <div className="screen-header-mini">
                        <span>FitCoach Pro</span>
                      </div>
                      <div className="screen-content-mini">
                        <div className="mini-card coach">
                          <span className="mini-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                              <circle cx="9" cy="7" r="4"/>
                            </svg>
                          </span>
                          <span>Coach App</span>
                        </div>
                        <div className="mini-card client">
                          <span className="mini-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                            </svg>
                          </span>
                          <span>Klient App</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Tech + CTA (Dark) */}
      <section className="combined-section-dark">
        <div className="container">
          <div className="dark-section-content">
            <motion.div
              className="tech-cta-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-badge-light">Teknologi</span>
              <h2>Bygget med moderne tech</h2>
              <p>Vi bruger de nyeste teknologier for at sikre hurtige, sikre og skalerbare apps.</p>

              <div className="tech-badges">
                <div className="tech-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/></svg>
                  React Native
                </div>
                <div className="tech-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0L2.3 12.014l3.7 3.7L20.014 1.7V0h-5.7zm.014 11.314L8.3 17.3l3.7 3.7 6.014-6.014V11.3h-3.686z"/></svg>
                  Flutter
                </div>
                <div className="tech-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.985 14.112s-1.945 1.175-4.543 1.175c-1.486 0-3.036-.478-4.26-1.232 2.905-2.655 5.583-6.27 6.583-9.442.45-1.425.38-2.423.38-2.423s-1.47 1.592-4.07 3.572c-2.59-1.6-6.43-3.05-10.4-3.05-.955 0-1.877.08-2.76.225C6.515 4.812 9.6 8.27 11.99 11.12c-1.785-1.14-4.47-2.41-7.3-2.41-1.06 0-2.135.155-3.195.495 3.25 2.735 7.49 6.13 11.41 8.165-2.27 1.17-4.68 1.31-6.26.71 2.96 2.79 8.19 4.09 12.35 2.79 3.06-.96 5.64-3.09 6.95-5.89.45-.96.6-1.71.6-1.71z"/></svg>
                  Swift
                </div>
                <div className="tech-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 24H0V0h24L12 12z"/></svg>
                  Kotlin
                </div>
                <div className="tech-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.289L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 5.365a.543.543 0 0 0-.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 0 0 1.587 0l7.926-4.428zM14.3 7.148l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984 14.3 7.148z"/></svg>
                  Firebase
                </div>
              </div>
            </motion.div>

            <motion.div
              className="tech-cta-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="cta-box">
                <h3>Klar til at starte?</h3>
                <p>Lad os bygge din næste app sammen.</p>
                <Link to="/kontakt" className="btn-primary-new">
                  <span>Start dit projekt</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AppsService;

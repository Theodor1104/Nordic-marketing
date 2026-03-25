import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import '../styles/Process.css';

function Process() {
  const [activeTab, setActiveTab] = useState('apps');

  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-digital.dk/" },
    { name: "Proces", url: "https://nordic-digital.dk/proces" }
  ];

  const hjemmesiderSteps = [
    {
      number: '01',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
      ),
      title: 'Opdagelse & Analyse',
      description: 'Vi dykker ned i din virksomhed, dine mål og din målgruppe. Gennem grundig research identificerer vi de bedste muligheder.',
      points: ['Gratis strategimøde', 'Konkurrentanalyse', 'Målgruppeidentifikation']
    },
    {
      number: '02',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>
        </svg>
      ),
      title: 'Struktur & Wireframes',
      description: 'Vi planlægger din hjemmesides struktur og laver wireframes der viser layoutet før vi går i gang med designet.',
      points: ['Sitemap', 'Wireframes', 'Brugerrejse']
    },
    {
      number: '03',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/>
        </svg>
      ),
      title: 'Design & Udvikling',
      description: 'Vores team skaber et moderne, responsivt design og udvikler din hjemmeside med fokus på hastighed og SEO.',
      points: ['Unikt design', 'Responsivt layout', 'SEO-optimeret kode']
    },
    {
      number: '04',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Test & Lancering',
      description: 'Vi tester grundigt på alle enheder og browsere før vi lancerer din nye hjemmeside til verden.',
      points: ['Cross-browser test', 'Performance check', 'Go-live support']
    },
    {
      number: '05',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"/><path d="M18 9l-5 5-4-4-5 5"/>
        </svg>
      ),
      title: 'Optimering & Vækst',
      description: 'Efter lancering fortsætter vi med at optimere og forbedre baseret på data og brugeradfærd.',
      points: ['Løbende SEO', 'Performance optimering', 'Support & vedligehold']
    }
  ];

  const appSteps = [
    {
      number: '01',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        </svg>
      ),
      title: 'Idé & Koncept',
      description: 'Vi starter med at forstå din app-idé til bunds. Hvad skal appen gøre, og hvem er brugerne?',
      points: ['Konceptudvikling', 'Brugerresearch', 'Feature-prioritering']
    },
    {
      number: '02',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
        </svg>
      ),
      title: 'UX/UI Design',
      description: 'Vi designer brugergrænsefladen med fokus på intuitiv navigation og en flot visuel oplevelse.',
      points: ['User flows', 'Interaktive prototyper', 'Design system']
    },
    {
      number: '03',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      title: 'Udvikling',
      description: 'Vores udviklere bygger din app med moderne teknologier som React Native for optimal performance.',
      points: ['Agil udvikling', 'Løbende demo', 'Cross-platform']
    },
    {
      number: '04',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: 'Test & QA',
      description: 'Grundig testning sikrer at appen fungerer perfekt på alle enheder før lancering.',
      points: ['Beta testing', 'Bug fixing', 'Performance test']
    },
    {
      number: '05',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
        </svg>
      ),
      title: 'Lancering & Support',
      description: 'Vi hjælper med App Store og Google Play udgivelse og sikrer løbende opdateringer.',
      points: ['Store submission', 'Marketing assets', 'Vedligeholdelse']
    }
  ];

  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: '100% Gennemsigtighed',
      description: 'Du har altid fuld indsigt i hvad vi arbejder på og hvorfor'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Ingen Risiko',
      description: 'Ingen skjulte omkostninger - du betaler kun for resultater'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: 'Hurtig Eksekvering',
      description: 'Fra strategi til lancering på rekordtid'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Dedikeret Team',
      description: 'Et fast team der kender din virksomhed'
    }
  ];

  const currentSteps = activeTab === 'hjemmesider' ? hjemmesiderSteps : appSteps;

  return (
    <div className="process-page">
      <SEO
        title="Vores Proces | Nordic Digital"
        description="Se hvordan vi arbejder - fra idé til lancering. En gennemsigtig proces der sikrer de bedste resultater for din virksomhed."
        keywords="proces, webdesign proces, app udvikling proces, arbejdsmetode"
        canonical="https://nordic-digital.dk/proces"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="process-hero section-gradient">
        <div className="container">
          <motion.div
            className="process-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>
              Fra vision til <span className="gradient-text">virkelighed</span>
            </h1>
            <p>
              Vi har perfektioneret en proces der transformerer dine ambitioner til
              målbare resultater. Gennemsigtighed, samarbejde og ekspertise i hvert skridt.
            </p>
          </motion.div>

          <motion.div
            className="process-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="stat-card">
              <span className="stat-number">5</span>
              <span className="stat-label">Faser</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Gennemsigtighed</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <motion.div
            className="timeline-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Processen</span>
            <h2>Fem skridt til succes</h2>
            <p>Hver fase er designet til at maksimere værdien og sikre de bedste resultater</p>
          </motion.div>

          {/* Service Tabs */}
          <motion.div
            className="service-tabs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <button
              className={`tab-btn ${activeTab === 'apps' ? 'active' : ''}`}
              onClick={() => setActiveTab('apps')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
              </svg>
              Apps
            </button>
            <button
              className={`tab-btn ${activeTab === 'hjemmesider' ? 'active' : ''}`}
              onClick={() => setActiveTab('hjemmesider')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
              </svg>
              Hjemmesider
            </button>
          </motion.div>

          {/* Timeline */}
          <div className="timeline">
            {currentSteps.map((step, index) => (
              <motion.div
                key={`${activeTab}-${step.number}`}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="timeline-number">{step.number}</div>
                <div className="timeline-card">
                  <div className="timeline-icon">{step.icon}</div>
                  <div className="timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <div className="timeline-points">
                      {step.points.map((point, idx) => (
                        <span key={idx} className="point">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {point}
                        </span>
                      ))}
                    </div>
                    {index === currentSteps.length - 1 && (
                      <Link
                        to={activeTab === 'apps' ? '/demo/fitness-app' : '/demo/restaurant-case'}
                        className="timeline-case-link"
                      >
                        Se {activeTab === 'apps' ? 'app' : 'hjemmeside'} case
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="process-benefits">
        <div className="container">
          <div className="benefits-layout">
            <motion.div
              className="benefits-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-badge">Fordele</span>
              <h2>Hvorfor vores proces virker</h2>
              <p>Vores strukturerede tilgang sikrer, at intet overlades til tilfældighederne. Du får fuld indsigt og kontrol hele vejen.</p>
            </motion.div>

            <motion.div
              className="benefits-grid"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="process-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Klar til at starte din rejse?</h2>
            <p>Book et gratis strategimøde og lad os vise dig vejen til vækst</p>
            <Link to="/kontakt" className="cta-btn">
              Book gratis møde
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Process;

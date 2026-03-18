import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import '../styles/Cases.css';

function Cases() {
  const cases = [
    {
      id: 'the-office',
      title: 'The Office',
      subtitle: 'Hjemmeside & Booking System til Kontorhotel',
      description: 'En komplet hjemmeside med integreret booking-system til et moderne kontorhotel i Danmark. Brugere kan booke mødelokaler, se ledige tider og administrere deres reservationer.',
      image: '/images/cases/the-office-hero.jpg',
      url: 'https://the-office.dk',
      tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Booking System'],
      features: [
        'Online booking af mødelokaler',
        'Bruger login og medlemsportal',
        'Dynamisk kalender med ledige tider',
        'Kontaktformularer',
        'SEO optimeret',
        'Responsivt design'
      ],
      tech: {
        frontend: 'Next.js 16, React 19, Tailwind CSS',
        backend: 'Supabase (Auth, Database)',
        hosting: 'Netlify'
      },
      color: '#1a1a2e'
    }
  ];

  return (
    <div className="cases-page">
      <SEO
        title="Cases - Vores Arbejde | Nordic Digital"
        description="Se eksempler på hjemmesider og apps vi har udviklet. The Office - booking system til kontorhotel."
        keywords="portfolio, cases, hjemmeside udvikling, booking system, Nordic Digital"
        canonical="https://nordic-digital.dk/cases"
      />

      {/* Hero Section */}
      <section className="cases-hero section-gradient">
        <div className="container">
          <motion.div
            className="hero-content centered"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge">Portfolio</span>
            <h1 className="heading-bold">
              Vores <span className="gradient-text">Arbejde</span>
            </h1>
            <p className="hero-subtitle">
              Se eksempler på hjemmesider og apps vi har udviklet for vores kunder.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case - The Office */}
      <section className="cases-section">
        <div className="container">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              className="featured-case"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Case Image */}
              <div className="case-image-wrapper">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="case-image"
                />
                <div className="case-image-overlay">
                  <a
                    href={caseItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-light"
                  >
                    Besøg siden
                  </a>
                </div>
              </div>

              {/* Case Details */}
              <div className="case-details">
                <div className="case-tags">
                  {caseItem.tags.map((tag, i) => (
                    <span key={i} className="case-tag">{tag}</span>
                  ))}
                </div>

                <h2 className="case-title">{caseItem.title}</h2>
                <p className="case-subtitle">{caseItem.subtitle}</p>
                <p className="case-description">{caseItem.description}</p>

                {/* Features */}
                <div className="case-features-section">
                  <h3>Funktioner</h3>
                  <ul className="case-features">
                    {caseItem.features.map((feature, i) => (
                      <li key={i}>
                        <span className="check">&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="case-tech-section">
                  <h3>Teknologi</h3>
                  <div className="tech-grid">
                    <div className="tech-item">
                      <span className="tech-label">Frontend</span>
                      <span className="tech-value">{caseItem.tech.frontend}</span>
                    </div>
                    <div className="tech-item">
                      <span className="tech-label">Backend</span>
                      <span className="tech-value">{caseItem.tech.backend}</span>
                    </div>
                    <div className="tech-item">
                      <span className="tech-label">Hosting</span>
                      <span className="tech-value">{caseItem.tech.hosting}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={caseItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Se live projekt
                </a>
              </div>
            </motion.div>
          ))}
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
            <h2>Har du et projekt i tankerne?</h2>
            <p>Lad os tale om hvordan vi kan hjælpe dig med at bygge din næste hjemmeside eller app.</p>
            <Link to="/kontakt" className="btn btn-light">Kontakt os</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Cases;

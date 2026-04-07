import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import '../styles/Cases.css';

function Cases() {
  const cases = [
    {
      id: 'fitness-app',
      title: 'FitCoach Pro',
      subtitle: 'Træningsapp til iOS & Android',
      description: 'En komplet fitness-platform med to apps - én til trænere og én til medlemmer. Coaches kan styre klienter og programmer, mens medlemmer tracker træning, ser fremskridt og kommunikerer med deres personlige træner.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop',
      tags: ['React Native', 'Firebase', 'iOS', 'Android'],
      features: [
        'Coach & klient platform',
        'Træningsprogrammer med øvelser',
        'Daglig check-in tracking',
        'Fremskridts-statistik',
        'Chat med personlige trænere',
        'Apple Health & Google Fit integration'
      ],
      tech: {
        frontend: 'React Native, Expo',
        backend: 'Firebase (Auth, Firestore)',
        hosting: 'App Store & Google Play'
      },
      color: '#10b981'
    },
    {
      id: 'the-office',
      title: 'The Office',
      subtitle: 'Hjemmeside & Booking System til Kontorhotel',
      description: 'En komplet hjemmeside med integreret booking-system til et moderne kontorhotel i Danmark. Brugere kan booke mødelokaler, se ledige tider og administrere deres reservationer.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
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
        frontend: 'Next.js, React, Tailwind CSS',
        backend: 'Supabase (Auth, Database)',
        hosting: 'Netlify'
      },
      color: '#1a1a2e'
    },
    {
      id: 'restaurant-case',
      title: 'Restaurant Projekt',
      subtitle: 'Restaurant Website med Online Bestilling',
      description: 'Moderne hjemmeside til en restaurant i København med integreret online bestillingssystem. Gæster kan se menuen, bestille take-away og reservere bord direkte på siden.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop',
      tags: ['React', 'Node.js', 'Stripe', 'Online Bestilling'],
      features: [
        'Online bestilling med live menu',
        'Bordreservation med kalender',
        'Stripe betalingsintegration',
        'Admin panel til ordrehåndtering',
        'Push notifikationer til køkkenet',
        'Google Maps integration'
      ],
      tech: {
        frontend: 'React, Tailwind CSS',
        backend: 'Node.js, PostgreSQL',
        hosting: 'Vercel'
      },
      color: '#c45c26'
    },
    {
      id: 'webshop-case',
      title: 'NordicHome',
      subtitle: 'E-commerce Webshop for Møbelbrand',
      description: 'Skalérbar webshop til et dansk møbelbrand med fokus på skandinavisk design. Komplet e-commerce løsning med lagerstyring, betalingsgateway og kundeportal.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop',
      tags: ['Next.js', 'Shopify', 'E-commerce', 'SEO'],
      features: [
        'Produktkatalog med filtrering',
        'Sikker checkout med flere betalingsmuligheder',
        'Kundelogin og ordrehistorik',
        'Lagerstyring og automatiske alerts',
        'SEO optimeret produktsider',
        'Integration med fragtleverandører'
      ],
      tech: {
        frontend: 'Next.js, React',
        backend: 'Shopify Headless',
        hosting: 'Vercel'
      },
      color: '#1e3a5f'
    },
    {
      id: 'bolig-case',
      title: 'Boligportal',
      subtitle: 'Ejendomsmægler Platform',
      description: 'Digital platform til en ejendomsmæglerkæde med boligsøgning, virtuelle fremvisninger og direkte kontakt til mæglere. Gør boligkøb nemmere for både købere og sælgere.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
      tags: ['React', 'Node.js', 'Google Maps', 'CRM'],
      features: [
        'Avanceret boligsøgning med kort',
        'Virtuelle 360° fremvisninger',
        'Favoritter og gemte søgninger',
        'Direkte chat med mæglere',
        'Automatisk prisestimering',
        'Integration med tinglysning.dk'
      ],
      tech: {
        frontend: 'React, TypeScript',
        backend: 'Node.js, MongoDB',
        hosting: 'AWS'
      },
      color: '#7c3aed'
    },
    {
      id: 'klinik-app',
      title: 'Klinik App',
      subtitle: 'Sundhedsapp med Tidsbestilling',
      description: 'App til en lægeklinik der gør det nemt for patienter at booke tid, se journaler, forny recepter og kommunikere sikkert med lægen via beskedtråde.',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=500&fit=crop',
      tags: ['Flutter', 'Firebase', 'GDPR', 'Sundhedsapp'],
      features: [
        'Online tidsbestilling',
        'Sikker patientjournal adgang',
        'Receptfornyelse med ét klik',
        'Sikker beskedtråd med lægen',
        'Påmindelser om aftaler',
        'GDPR-compliant databehandling'
      ],
      tech: {
        frontend: 'Flutter',
        backend: 'Firebase, Cloud Functions',
        hosting: 'App Store & Google Play'
      },
      color: '#0891b2'
    }
  ];

  return (
    <div className="cases-page">
      <SEO
        title="Cases - Vores Arbejde | Nordic Digital"
        description="Se eksempler på hjemmesider og apps vi har udviklet. Restaurant websites, fitness apps, e-commerce webshops og mere. Se hvad vi kan gøre for dig."
        keywords="portfolio, cases, hjemmeside udvikling, app udvikling, webshop, booking system, Nordic Digital, React, Flutter"
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
            <h1 className="heading-bold">
              Vores <span className="gradient-text">Arbejde</span>
            </h1>
            <p className="hero-subtitle">
              Udforsk interaktive prototyper og se hvad vi kan bygge til din virksomhed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="cases-section">
        <div className="container">
          <div className="cases-grid">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                className="case-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={`/demo/${caseItem.id}`} className="case-card-link" target="_blank" rel="noopener noreferrer">
                  <div className="case-card-image">
                    <img src={caseItem.image} alt={caseItem.title} />
                    <span className="demo-badge">Demo</span>
                  </div>
                  <div className="case-card-content">
                    <div className="case-card-tags">
                      {caseItem.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="case-card-tag">{tag}</span>
                      ))}
                    </div>
                    <h3 className="case-card-title">{caseItem.title}</h3>
                    <p className="case-card-subtitle">{caseItem.subtitle}</p>
                    <span className="case-card-cta">
                      Se Demo
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
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

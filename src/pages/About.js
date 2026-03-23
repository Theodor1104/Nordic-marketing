import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import '../styles/About.css';

function About() {
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-digital.dk/" },
    { name: "Om Os", url: "https://nordic-digital.dk/om-os" }
  ];

  // AboutPage Schema
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Om Nordic Digital",
    "description": "Lær Nordic Digital at kende. Et dansk digitalt marketing bureau fra København med fokus på resultater og gennemsigtighed.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Nordic Digital",
      "foundingLocation": {
        "@type": "Place",
        "name": "København, Danmark"
      },
      "slogan": "Gennemsigtigt, effektivt og tilgængeligt",
      "knowsAbout": ["SEO", "GEO", "Google Ads", "Meta Ads", "Webdesign", "Digital Marketing"]
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hvad er GEO (Generative Engine Optimization)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GEO er optimering af din online tilstedeværelse til AI-baserede søgesystemer som ChatGPT, Perplexity og Google AI Overview. Det sikrer at din virksomhed bliver anbefalet når brugere stiller spørgsmål til AI-assistenter."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad koster det at arbejde med Nordic Digital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vores priser starter fra 2.500 kr/md for løbende services. Vi tilbyder No cure, no pay på udvalgte ydelser, så du kun betaler for resultater. Kontakt os for et uforpligtende tilbud."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad er forskellen mellem SEO og GEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO fokuserer på synlighed i traditionelle søgemaskiner som Google Search. GEO fokuserer på synlighed i AI-baserede søgeværktøjer. Begge er vigtige for moderne digital synlighed."
        }
      },
      {
        "@type": "Question",
        "name": "Hvor lang tid tager det at se resultater?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For betalte annoncer (Google Ads, Meta Ads) ses resultater ofte inden for de første uger. SEO og GEO tager typisk 3-6 måneder for signifikante forbedringer i organisk synlighed."
        }
      },
      {
        "@type": "Question",
        "name": "Tilbyder I gratis konsultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vi tilbyder altid en gratis og uforpligtende konsultation hvor vi gennemgår din nuværende situation og præsenterer vores anbefalinger."
        }
      }
    ]
  };

  return (
    <div className="about-page">
      <SEO
        title="Om Os - Danmarks Marketing Bureau | SEO & Google Ads Eksperter"
        description="Lær Nordic Digital at kende - Danmarks marketing bureau for små virksomheder. Vi specialiserer i SEO, Google Ads, Facebook annoncering & webdesign. No cure, no pay garanti. Gratis konsultation."
        keywords="om Nordic Digital, marketing bureau danmark, dansk marketing bureau, digital marketing team danmark, SEO eksperter danmark, Google Ads eksperter, Facebook annoncering bureau, marketing bureau København, bedste marketing bureau danmark"
        canonical="https://nordic-digital.dk/om-os"
        schema={[aboutSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>{t('about.hero_title')}</h1>
          <p>{t('about.hero_desc')}</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <h2>{t('about.story_title')}</h2>
            <p>{t('about.story_p1')}</p>
            <p>{t('about.story_p2')}</p>
            <p>{t('about.story_p3')}</p>
            <p>{t('about.story_p4')}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission-card">
              <div className="mv-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3>{t('about.mission_title')}</h3>
              <p>{t('about.mission_desc')}</p>
            </div>
            <div className="mv-card vision-card">
              <div className="mv-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>{t('about.vision_title')}</h3>
              <p>{t('about.vision_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>{t('about.values_title')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>{t('about.value1_title')}</h3>
              <p>{t('about.value1_desc')}</p>
            </div>
            <div className="value-card">
              <h3>{t('about.value2_title')}</h3>
              <p>{t('about.value2_desc')}</p>
            </div>
            <div className="value-card">
              <h3>{t('about.value3_title')}</h3>
              <p>{t('about.value3_desc')}</p>
            </div>
            <div className="value-card">
              <h3>{t('about.value4_title')}</h3>
              <p>{t('about.value4_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('about.cta_title')}</h2>
          <p>{t('about.cta_desc')}</p>
          <Link to="/kontakt" className="btn btn-light">{t('about.cta_button')}</Link>
        </div>
      </section>
    </div>
  );
}

export default About;

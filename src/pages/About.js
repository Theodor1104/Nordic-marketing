import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/About.css';

function About() {
  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-marketing.dk/" },
    { name: "Om Os", url: "https://nordic-marketing.dk/om-os" }
  ];

  // AboutPage Schema
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Om Nordic Marketing",
    "description": "Lær Nordic Marketing at kende. Et dansk digitalt marketing bureau fra København grundlagt af studerende fra Niels Brock.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Nordic Marketing",
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
        "name": "Hvad koster det at arbejde med Nordic Marketing?",
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
        title="Om Os - Dansk Marketing Bureau i København | Vores Historie"
        description="Lær Nordic Marketing at kende. Et dansk digitalt marketing bureau fra København. Vi specialiserer i SEO, GEO (AI-søgning), Google Ads & Meta Ads. No cure, no pay garanti."
        keywords="om Nordic Marketing, marketing bureau København, dansk marketing bureau, digital marketing team Danmark, SEO eksperter København, GEO specialister, AI marketing bureau, marketing Frederiksberg"
        canonical="https://nordic-marketing.dk/om-os"
        schema={[aboutSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Om Nordic Marketing</h1>
          <p>Et digitalt marketingbureau med fokus på resultater og gennemsigtighed</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <h2>Hvem vi er</h2>
            <p>
              Vi er to energiske og engagerede studerende fra Niels Brock Handelsgymnasium
              med en stor passion for marketing. Under vores studier har vi fået en solid
              forståelse for marketing, afsætning og de klassiske økonomifag, og vi ønskede
              at omsætte vores viden til praksis – derfor startede vi Nordic Marketing.
            </p>
            <p>
              Udover marketing og økonomi har vi også studeret informatik, hvor vi har lært
              om opsætning af hjemmesider, digital struktur og tekniske løsninger. Denne
              erfaring giver os mulighed for at kombinere kreativt marketingarbejde med
              praktisk digital implementering – fra idé til færdig hjemmeside.
            </p>
            <p>
              Vores mål er at gøre marketing mere tilgængeligt, gennemsigtigt og effektivt
              for virksomheder i alle størrelser. Vi kombinerer teoretisk viden med kreativitet
              og ny teknologi, herunder AI, for at udvikle løsninger, der skaber konkrete resultater.
            </p>
            <p>
              Som et ungt og dynamisk team bringer vi frisk energi, nye perspektiver og en
              innovativ tilgang til marketing – altid med fokus på at levere værdi og skabe
              vækst for vores kunder.
            </p>
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
              <h3>Vores Mission</h3>
              <p>
                At demokratisere digital markedsføring ved at levere professionelle
                løsninger til fair priser. Vi kombinerer datadrevet indsigt med
                kreativ eksekvering for at skabe målbare resultater for vores kunder.
              </p>
            </div>
            <div className="mv-card vision-card">
              <div className="mv-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Vores Vision</h3>
              <p>
                At være den foretrukne marketingpartner for ambitiøse virksomheder
                der søger vækst gennem effektiv og gennemsigtig digital markedsføring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Vores værdier</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Gennemsigtighed</h3>
              <p>Klar kommunikation og ingen skjulte omkostninger. Vi rapporterer løbende og du har altid fuldt overblik over din investering.</p>
            </div>
            <div className="value-card">
              <h3>Resultatorienteret</h3>
              <p>Alt vi gør er datadrevet og måles på konkrete KPI'er. Vi fokuserer på ROI og reel forretningsværdi.</p>
            </div>
            <div className="value-card">
              <h3>Partnerskab</h3>
              <p>Vi ser os selv som en forlængelse af dit team. Din succes er vores succes, og vi investerer os i hvert samarbejde.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Vi holder os konstant opdateret på de nyeste trends og teknologier for at sikre din konkurrencefordel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Skal vi arbejde sammen?</h2>
          <p>Lad os tage en snak om hvordan vi kan hjælpe din virksomhed</p>
          <Link to="/kontakt" className="btn btn-light">Tag kontakt</Link>
        </div>
      </section>
    </div>
  );
}

export default About;

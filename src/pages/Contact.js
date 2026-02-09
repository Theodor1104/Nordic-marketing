import React, { useState } from 'react';
import { saveMessage } from '../firebase';
import SEO from '../components/SEO';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-marketing.dk/" },
    { name: "Kontakt", url: "https://nordic-marketing.dk/kontakt" }
  ];

  // ContactPage Schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt Nordic Marketing",
    "description": "Kontakt Nordic Marketing for en gratis og uforpligtende konsultation.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Nordic Marketing",
      "email": "nordicmarketin@outlook.dk",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["Danish", "English"]
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    // Gem besked til databasen
    await saveMessage(formData);

    setSending(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-page">
        <section className="page-hero">
          <div className="container">
            <h1>Tak for din henvendelse!</h1>
            <p>Vi vender tilbage til dig hurtigst muligt</p>
          </div>
        </section>
        <section className="success-section">
          <div className="container">
            <div className="success-message">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
              </div>
              <h2>Din besked er modtaget</h2>
              <p>
                Tak fordi du kontaktede Nordic Marketing. Vi gennemgår din henvendelse
                og vender tilbage inden for 24 timer.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <SEO
        title="Kontakt Danmarks Marketing Bureau | Gratis Konsultation"
        description="Kontakt Nordic Marketing - Danmarks marketing bureau for små virksomheder. Gratis konsultation om SEO, Google Ads, Facebook annoncering & webdesign. Svar inden 24 timer. No cure, no pay!"
        keywords="kontakt marketing bureau danmark, gratis marketing konsultation danmark, digital marketing hjælp danmark, marketing tilbud danmark, kontakt Nordic Marketing, book møde marketing bureau, SEO konsultation gratis, Google Ads konsultation"
        canonical="https://nordic-marketing.dk/kontakt"
        schema={contactSchema}
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Kontakt Danmarks Marketing Bureau</h1>
          <p>Gratis konsultation om SEO, Google Ads, Facebook annoncering & webdesign - helt uforpligtende</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Lad os høre fra dig</h2>
              <p>
                Udfyld formularen eller kontakt os direkte. Vi svarer som regel
                inden for 24 timer.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:nordicmarketin@outlook.dk">nordicmarketin@outlook.dk</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Find os på LinkedIn</a>
                  </div>
                </div>
              </div>

              <div className="guarantee-box">
                <h4>No cure, no pay</h4>
                <p>Vi tror på vores resultater. Du betaler først når vi leverer.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Navn *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Dit navn"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="din@email.dk"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Virksomhed</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Din virksomhed"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+45 12 34 56 78"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Hvad er du interesseret i?</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Vælg en service</option>
                    <option value="meta-ads">Meta Ads (Facebook/Instagram)</option>
                    <option value="google-ads">Google Ads</option>
                    <option value="seo">SEO</option>
                    <option value="website">Hjemmeside</option>
                    <option value="package">Komplet pakke</option>
                    <option value="other">Andet</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Fortæl os om dit projekt *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Beskriv kort hvad du har brug for hjælp til..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full" disabled={sending}>
                  {sending ? 'Sender...' : 'Send besked'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

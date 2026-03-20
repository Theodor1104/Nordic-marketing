import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-marketing.dk/" },
    { name: "Kontakt", url: "https://nordic-marketing.dk/kontakt" }
  ];

  // ContactPage Schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt Nordic Digital",
    "description": "Kontakt Nordic Digital for en gratis og uforpligtende konsultation.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Nordic Digital",
      "email": "nordicdigital.theodor@gmail.com",
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
            <h1>{t('contact.success_title')}</h1>
            <p>{t('contact.success_subtitle')}</p>
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
              <h2>{t('contact.success_message_title')}</h2>
              <p>
                {t('contact.success_message_desc')}
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
        description="Kontakt Nordic Digital - Danmarks marketing bureau for små virksomheder. Gratis konsultation om SEO, Google Ads, Facebook annoncering & webdesign. Svar inden 24 timer. No cure, no pay!"
        keywords="kontakt marketing bureau danmark, gratis marketing konsultation danmark, digital marketing hjælp danmark, marketing tilbud danmark, kontakt Nordic Digital, book møde marketing bureau, SEO konsultation gratis, Google Ads konsultation"
        canonical="https://nordic-marketing.dk/kontakt"
        schema={contactSchema}
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>{t('contact.hero_title')}</h1>
          <p>{t('contact.hero_desc')}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>{t('contact.info_title')}</h2>
              <p>
                {t('contact.info_desc')}
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
                    <h4>{t('contact.email')}</h4>
                    <a href="mailto:nordicdigital.theodor@gmail.com">nordicdigital.theodor@gmail.com</a>
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
                    <h4>{t('contact.linkedin')}</h4>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">{t('contact.linkedin_text')}</a>
                  </div>
                </div>
              </div>

              <div className="guarantee-box">
                <h4>{t('contact.guarantee_title')}</h4>
                <p>{t('contact.guarantee_desc')}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t('contact.form_name')} {t('common.required')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form_name_placeholder')}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t('contact.form_email')} {t('common.required')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form_email_placeholder')}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">{t('contact.form_company')}</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('contact.form_company_placeholder')}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">{t('contact.form_phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.form_phone_placeholder')}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">{t('contact.form_service')}</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">{t('contact.form_service_placeholder')}</option>
                    <option value="app">App</option>
                    <option value="website-seo">Hjemmeside + SEO & GEO</option>
                    <option value="package">Samlet Pakke</option>
                    <option value="other">Andet</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.form_message')} {t('common.required')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder={t('contact.form_message_placeholder')}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full" disabled={sending}>
                  {sending ? t('contact.form_sending') : t('contact.form_submit')}
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

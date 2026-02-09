import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/Blog.css';

function Blog() {
  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-marketing.dk/" },
    { name: "Blog", url: "https://nordic-marketing.dk/blog" }
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Nordic Marketing Blog",
    "description": "Guides, tips og nyheder om digital marketing, SEO, Google Ads og sociale medier i Danmark",
    "url": "https://nordic-marketing.dk/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Nordic Marketing",
      "url": "https://nordic-marketing.dk"
    }
  };

  const articles = [
    {
      slug: "seo-guide-danmark-2026",
      title: "SEO Guide Danmark 2026: Komplet Guide til Søgemaskineoptimering",
      excerpt: "Lær alt om SEO i Danmark. Fra keyword research til teknisk optimering - denne guide dækker alt hvad du behøver at vide for at ranke højere på Google.",
      date: "9. februar 2026",
      category: "SEO",
      readTime: "12 min"
    },
    {
      slug: "google-ads-begynder-guide",
      title: "Google Ads Guide: Sådan Kommer Du i Gang med Google Annoncering",
      excerpt: "Komplet begynderguide til Google Ads. Lær hvordan du opsætter din første kampagne, vælger de rigtige søgeord og optimerer for bedre ROI.",
      date: "8. februar 2026",
      category: "Google Ads",
      readTime: "10 min"
    },
    {
      slug: "facebook-annoncering-tips",
      title: "Facebook Annoncering: 10 Tips til Bedre Resultater i 2026",
      excerpt: "Få mere ud af dine Facebook og Instagram annoncer med disse 10 eksperttips. Lær om målgrupper, annonceformater og optimering.",
      date: "7. februar 2026",
      category: "Social Media",
      readTime: "8 min"
    }
  ];

  return (
    <div className="blog-page">
      <SEO
        title="Marketing Blog Danmark | SEO Tips, Google Ads Guides & Mere"
        description="Læs de nyeste guides og tips om digital marketing i Danmark. SEO strategier, Google Ads optimering, Facebook annoncering og meget mere. Gratis viden fra eksperterne."
        keywords="marketing blog danmark, SEO tips danmark, Google Ads guide, Facebook annoncering tips, digital marketing guides, søgemaskineoptimering tips, online marketing blog"
        canonical="https://nordic-marketing.dk/blog"
        schema={blogSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Marketing Blog - Guides & Tips til Digital Marketing i Danmark</h1>
          <p>Gratis viden om SEO, Google Ads, Facebook annoncering og webdesign</p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {articles.map((article) => (
              <article key={article.slug} className="blog-card">
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-category">{article.category}</span>
                    <span className="blog-date">{article.date}</span>
                  </div>
                  <h2>
                    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p>{article.excerpt}</p>
                  <div className="blog-footer">
                    <span className="read-time">{article.readTime} læsetid</span>
                    <Link to={`/blog/${article.slug}`} className="read-more">
                      Læs mere →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Brug for hjælp med din marketing?</h2>
          <p>Book en gratis konsultation og lad os hjælpe dig med at vokse online</p>
          <Link to="/kontakt" className="btn btn-light">Kontakt os</Link>
        </div>
      </section>
    </div>
  );
}

export default Blog;

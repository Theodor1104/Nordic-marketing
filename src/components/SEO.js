import { Helmet } from 'react-helmet-async';

function SEO({
  title,
  description,
  keywords,
  canonical,
  type = 'website',
  image = 'https://nordic-digital.dk/og-image.jpg',
  schema = null,
  breadcrumbs = null,
  noindex = false,
  lastModified = null,
  lang = 'da'
}) {
  const siteTitle = 'Nordic Digital';
  const fullTitle = title ? `${title}` : `App Udvikling & Hjemmeside Udvikling Danmark | ${siteTitle}`;
  const defaultDescription = 'Nordic Digital - Professionel app udvikling og hjemmeside udvikling i Danmark. iOS & Android apps fra 25.000 kr. Moderne hjemmesider fra 5.000 kr. React Native, Flutter & SEO. ✓ Dansk team ✓ Gratis konsultation ✓ Kvalitetsgaranti';
  const defaultKeywords = 'app udvikling, app udvikling danmark, app udvikler danmark, ios app udvikling, android app udvikling, react native danmark, flutter app udvikling, hjemmeside udvikling, hjemmeside udvikling danmark, webbureau københavn, webdesign danmark, professionel hjemmeside, SEO optimering, app bureau danmark, mobilapp udvikling, cross-platform app, webapp udvikling';
  const modifiedDate = lastModified || '2026-04-21';

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Language & Hreflang */}
      <html lang="da" />
      {canonical && <link rel="alternate" hrefLang="da" href={canonical} />}
      {canonical && <link rel="alternate" hrefLang="x-default" href={canonical} />}

      {/* Content Freshness */}
      <meta property="article:modified_time" content={modifiedDate} />

      {/* Geo Meta Tags - Local SEO */}
      <meta name="geo.region" content="DK-84" />
      <meta name="geo.placename" content="Frederiksberg, København" />
      <meta name="geo.position" content="55.6761;12.5683" />
      <meta name="ICBM" content="55.6761, 12.5683" />

      {/* Mobile Web App */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Nordic Digital" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Nordic Digital" />
      <meta name="format-detection" content="telephone=no" />

      {/* Open Graph */}
      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${fullTitle} - Nordic Digital`} />
      <meta property="og:site_name" content="Nordic Digital" />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data - Breadcrumbs */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Custom Schema(s) */}
      {schema && (
        Array.isArray(schema) ? (
          schema.map((s, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(s)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )
      )}
    </Helmet>
  );
}

export default SEO;

import { Helmet } from 'react-helmet-async';

function SEO({
  title,
  description,
  keywords,
  canonical,
  type = 'website',
  image = 'https://nordic-marketing.dk/og-image.jpg',
  schema = null,
  breadcrumbs = null,
  noindex = false,
  lastModified = null
}) {
  const siteTitle = 'Nordic Marketing';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Marketing Bureau Danmark | SEO, Google Ads & Webdesign`;
  const defaultDescription = 'Nordic Marketing er Danmarks bedste marketing bureau for små virksomheder. Eksperter i SEO, Google Ads, Facebook annoncering & webdesign. Priser fra 2.500 kr/md. Gratis konsultation i hele Danmark. No cure, no pay!';
  const defaultKeywords = 'marketing bureau danmark, digital marketing bureau danmark, SEO bureau danmark, Google Ads bureau danmark, Meta Ads bureau danmark, Facebook annoncering danmark, webdesign bureau danmark, marketing bureau København, SEO København, GEO optimering, AI søgning, lokal SEO Danmark, bedste marketing bureau';
  const modifiedDate = lastModified || new Date().toISOString().split('T')[0];

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
      <meta name="apple-mobile-web-app-title" content="Nordic Marketing" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Nordic Marketing" />
      <meta name="format-detection" content="telephone=no" />

      {/* Open Graph */}
      <meta property="og:locale" content="da_DK" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${fullTitle} - Nordic Marketing`} />
      <meta property="og:site_name" content="Nordic Marketing" />
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

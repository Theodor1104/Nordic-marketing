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
  article = null
}) {
  const siteTitle = 'Nordic Marketing';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Digital Marketing Bureau i København`;
  const defaultDescription = 'Nordic Marketing - Dit lokale marketing bureau i København. Eksperter i SEO, GEO (AI-søgning), Google Ads & Meta Ads. Priser fra 2.500 kr/md. Gratis konsultation. No cure, no pay!';
  const defaultKeywords = 'digital marketing bureau, SEO bureau København, GEO optimering, AI søgning, Google Ads bureau, Meta Ads, Facebook annoncering, Instagram marketing, webdesign København, marketing bureau Frederiksberg, lokal SEO Danmark';

  // Organization Schema - Enhanced for GEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://nordic-marketing.dk/#organization",
    "name": "Nordic Marketing",
    "alternateName": ["Nordic Marketing Danmark", "Nordic Marketing Bureau", "Nordic Marketing København"],
    "url": "https://nordic-marketing.dk",
    "logo": "https://nordic-marketing.dk/logo.png",
    "image": "https://nordic-marketing.dk/og-image.jpg",
    "description": "Nordic Marketing er et dansk digitalt marketing bureau i København specialiseret i SEO, GEO (AI-søgemaskineoptimering), Google Ads, Meta Ads og webdesign. Vi hjælper små og mellemstore virksomheder med at vækste online. Priser fra 2.500 kr/md.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Frederiksberg",
      "addressRegion": "København",
      "postalCode": "2000",
      "addressCountry": "DK"
    },
    "areaServed": [
      {"@type": "Country", "name": "Danmark"},
      {"@type": "City", "name": "København"},
      {"@type": "City", "name": "Frederiksberg"}
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "nordicmarketin@outlook.dk",
      "contactType": "customer service",
      "availableLanguage": ["Danish", "English"]
    },
    "knowsAbout": [
      "SEO (Søgemaskineoptimering)",
      "GEO (Generative Engine Optimization)",
      "AI-søgemaskineoptimering",
      "Google Ads",
      "Meta Ads (Facebook & Instagram)",
      "Webdesign",
      "Digital Marketing",
      "Lokal SEO",
      "Content Marketing"
    ],
    "slogan": "Vi gør online marketing forståelig, gennemsigtig og tilgængelig",
    "sameAs": []
  };

  // LocalBusiness Schema - Enhanced with pricing and services
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "@id": "https://nordic-marketing.dk/#marketingagency",
    "name": "Nordic Marketing",
    "image": "https://nordic-marketing.dk/og-image.jpg",
    "url": "https://nordic-marketing.dk",
    "email": "nordicmarketin@outlook.dk",
    "priceRange": "DKK 2.500-15.000/md",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Frederiksberg",
      "addressRegion": "København",
      "postalCode": "2000",
      "addressCountry": "DK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "55.6761",
      "longitude": "12.5683"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "areaServed": [
      {"@type": "Country", "name": "Denmark"},
      {"@type": "City", "name": "København"},
      {"@type": "City", "name": "Frederiksberg"},
      {"@type": "City", "name": "Aarhus"},
      {"@type": "City", "name": "Odense"}
    ],
    "serviceType": ["SEO", "GEO", "AI-søgemaskineoptimering", "Google Ads", "Meta Ads", "Facebook Annoncering", "Instagram Marketing", "Webdesign", "Lokal SEO"],
    "paymentAccepted": "Faktura, MobilePay, Bankoverførsel",
    "currenciesAccepted": "DKK"
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nordic Marketing",
    "url": "https://nordic-marketing.dk",
    "description": defaultDescription,
    "publisher": {
      "@type": "Organization",
      "name": "Nordic Marketing"
    },
    "inLanguage": "da-DK"
  };

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

      {/* Language */}
      <html lang="da" />
      <meta property="og:locale" content="da_DK" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Nordic Marketing" />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Structured Data - LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Structured Data - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

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

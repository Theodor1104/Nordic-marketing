import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/Blog.css';

// Blog post data
const blogPosts = {
  "seo-guide-danmark-2026": {
    title: "SEO Guide Danmark 2026: Komplet Guide til Søgemaskineoptimering",
    description: "Lær alt om SEO i Danmark. Fra keyword research til teknisk optimering - denne guide dækker alt hvad du behøver at vide for at ranke højere på Google i 2026.",
    keywords: "SEO guide danmark, søgemaskineoptimering guide, SEO tips 2026, hvordan virker SEO, Google ranking Danmark, SEO for begyndere, teknisk SEO, on-page SEO, linkbuilding danmark",
    date: "9. februar 2026",
    category: "SEO",
    readTime: "12 min",
    content: `
      <h2>Hvad er SEO og hvorfor er det vigtigt i 2026?</h2>
      <p>SEO (Search Engine Optimization) eller søgemaskineoptimering er processen med at optimere din hjemmeside, så den rangerer højere i Googles søgeresultater. I 2026 er SEO vigtigere end nogensinde for danske virksomheder, da flere og flere kunder starter deres købsrejse med en Google-søgning.</p>

      <p><strong>Vidste du at:</strong> Over 90% af alle online oplevelser starter med en søgemaskine, og 75% af brugerne scroller aldrig forbi første side af søgeresultaterne. Derfor er det afgørende at din virksomhed er synlig på side 1 i Google.</p>

      <h2>De 3 søjler i SEO</h2>
      <p>Effektiv SEO i Danmark bygger på tre grundlæggende søjler:</p>

      <h3>1. Teknisk SEO</h3>
      <p>Teknisk SEO handler om at sikre, at Google kan crawle og indeksere din hjemmeside korrekt. Dette inkluderer:</p>
      <ul>
        <li><strong>Hurtig loadtid</strong> - Din side bør loade på under 3 sekunder</li>
        <li><strong>Mobilvenligt design</strong> - Google bruger mobile-first indexing</li>
        <li><strong>SSL-certifikat</strong> - HTTPS er et ranking-signal</li>
        <li><strong>Struktureret data</strong> - Schema markup hjælper Google med at forstå dit indhold</li>
        <li><strong>XML sitemap</strong> - Hjælper Google med at finde alle dine sider</li>
      </ul>

      <h3>2. On-Page SEO</h3>
      <p>On-page SEO fokuserer på at optimere indholdet på dine individuelle sider:</p>
      <ul>
        <li><strong>Title tags</strong> - Inkluder dit primære keyword i titlen</li>
        <li><strong>Meta descriptions</strong> - Skriv overbevisende beskrivelser der øger klikraten</li>
        <li><strong>H1-H6 overskrifter</strong> - Brug en logisk struktur med keywords</li>
        <li><strong>Kvalitetsindhold</strong> - Skriv for brugeren, ikke kun for søgemaskiner</li>
        <li><strong>Interne links</strong> - Link til relevante sider på din egen hjemmeside</li>
      </ul>

      <h3>3. Off-Page SEO (Linkbuilding)</h3>
      <p>Off-page SEO handler primært om at få andre hjemmesider til at linke til din:</p>
      <ul>
        <li><strong>Kvalitetsbacklinks</strong> - Links fra troværdige danske sider</li>
        <li><strong>Lokal SEO</strong> - Google My Business og lokale citationer</li>
        <li><strong>Social signals</strong> - Aktivitet på sociale medier</li>
        <li><strong>Brand mentions</strong> - Omtaler af dit brand online</li>
      </ul>

      <div class="tip-box">
        <h4>Pro tip fra Nordic Marketing:</h4>
        <p>Start med teknisk SEO og on-page optimering før du fokuserer på linkbuilding. Det giver det bedste fundament for langsigtede resultater.</p>
      </div>

      <h2>Keyword Research for det danske marked</h2>
      <p>Keyword research er fundamentet for enhver SEO-strategi. Her er hvordan du finder de rigtige søgeord for din danske virksomhed:</p>

      <ol>
        <li><strong>Brainstorm</strong> - Start med at liste alle de ord og sætninger dine kunder kunne søge efter</li>
        <li><strong>Brug værktøjer</strong> - Google Keyword Planner, Ahrefs, eller SEMrush kan vise søgevolumen</li>
        <li><strong>Analyser konkurrenter</strong> - Se hvilke keywords dine konkurrenter rangerer for</li>
        <li><strong>Long-tail keywords</strong> - Fokuser på længere, mere specifikke søgninger der er nemmere at ranke for</li>
        <li><strong>Lokal intention</strong> - Inkluder "danmark", "københavn" eller andre byer i dine keywords</li>
      </ol>

      <h2>Lokal SEO i Danmark</h2>
      <p>For virksomheder der betjener kunder i specifikke geografiske områder, er lokal SEO afgørende. Her er de vigtigste elementer:</p>

      <ul>
        <li><strong>Google Business Profile</strong> - Opret og optimer din Google-profil med korrekte oplysninger</li>
        <li><strong>NAP konsistens</strong> - Sørg for at Navn, Adresse og Telefon er ens overalt online</li>
        <li><strong>Lokale keywords</strong> - Inkluder bynavne og "nær mig" varianter</li>
        <li><strong>Kundeanmeldelser</strong> - Aktiv indsamling af Google-anmeldelser</li>
        <li><strong>Lokale backlinks</strong> - Links fra lokale virksomheder og organisationer</li>
      </ul>

      <h2>SEO trends i 2026</h2>
      <p>SEO udvikler sig konstant. Her er de vigtigste trends for 2026:</p>

      <ul>
        <li><strong>AI og GEO</strong> - Optimering til AI-søgemaskiner som ChatGPT og Perplexity</li>
        <li><strong>E-E-A-T</strong> - Experience, Expertise, Authoritativeness, Trustworthiness</li>
        <li><strong>Core Web Vitals</strong> - Googles metrikker for brugeroplevelse</li>
        <li><strong>Video SEO</strong> - Optimering af videoindhold til søgning</li>
        <li><strong>Voice search</strong> - Optimering til stemmesøgning</li>
      </ul>

      <h2>Hvor lang tid tager SEO?</h2>
      <p>Et af de mest stillede spørgsmål om SEO er, hvor lang tid det tager at se resultater. Her er et realistisk tidsperspektiv:</p>

      <ul>
        <li><strong>1-3 måneder:</strong> Tekniske forbedringer og on-page optimering implementeret</li>
        <li><strong>3-6 måneder:</strong> Første synlige forbedringer i rankings</li>
        <li><strong>6-12 måneder:</strong> Signifikante stigninger i organisk trafik</li>
        <li><strong>12+ måneder:</strong> Etableret position og vedvarende vækst</li>
      </ul>

      <p>SEO er en langsigtet investering, men resultaterne er også langvarige. Modsat betalte annoncer fortsætter organisk trafik med at komme, selv når du holder pause.</p>

      <h2>Skal du bruge et SEO bureau?</h2>
      <p>Mange virksomheder overvejer om de skal håndtere SEO selv eller hyre et bureau. Her er nogle overvejelser:</p>

      <p><strong>Gør det selv hvis:</strong></p>
      <ul>
        <li>Du har tid til at lære og implementere SEO</li>
        <li>Din branche ikke er særlig konkurrencepræget</li>
        <li>Du har teknisk erfaring med hjemmesider</li>
      </ul>

      <p><strong>Brug et SEO bureau hvis:</strong></p>
      <ul>
        <li>Du vil have hurtigere og bedre resultater</li>
        <li>Du mangler tid eller ekspertise</li>
        <li>Din branche er konkurrencepræget</li>
        <li>Du ønsker adgang til professionelle værktøjer</li>
      </ul>

      <div class="tip-box">
        <h4>Nordic Marketing tilbyder SEO fra 2.500 kr/md</h4>
        <p>Vi hjælper danske virksomheder med at ranke højere på Google. Book en gratis konsultation og få en SEO-analyse af din hjemmeside.</p>
      </div>
    `
  },
  "google-ads-begynder-guide": {
    title: "Google Ads Guide: Sådan Kommer Du i Gang med Google Annoncering",
    description: "Komplet begynderguide til Google Ads. Lær hvordan du opsætter din første kampagne, vælger de rigtige søgeord og optimerer for bedre ROI i Danmark.",
    keywords: "Google Ads guide, Google annoncering, PPC guide danmark, Google Ads begynder, søgeordsannoncering, Google Ads tips, SEM danmark, betalt søgning",
    date: "8. februar 2026",
    category: "Google Ads",
    readTime: "10 min",
    content: `
      <h2>Hvad er Google Ads?</h2>
      <p>Google Ads (tidligere Google AdWords) er Googles annonceplatform, hvor du kan vise annoncer i søgeresultaterne, på YouTube, i Gmail og på millioner af hjemmesider i Googles Display Network.</p>

      <p>Det unikke ved Google Ads er at du betaler per klik (PPC - Pay Per Click). Det betyder at du kun betaler når nogen klikker på din annonce - ikke bare for at blive vist.</p>

      <h2>Hvorfor bruge Google Ads i Danmark?</h2>
      <p>Google Ads har flere fordele for danske virksomheder:</p>

      <ul>
        <li><strong>Øjeblikkelig synlighed</strong> - Modsat SEO giver Google Ads resultater fra dag 1</li>
        <li><strong>Præcis målretning</strong> - Vis annoncer til folk der aktivt søger efter dine produkter</li>
        <li><strong>Fuld kontrol over budget</strong> - Du bestemmer hvor meget du vil bruge</li>
        <li><strong>Målbare resultater</strong> - Spor hver eneste konvertering og klik</li>
        <li><strong>Fleksibilitet</strong> - Juster kampagner i realtid baseret på performance</li>
      </ul>

      <h2>Sådan opsætter du din første Google Ads kampagne</h2>

      <h3>Trin 1: Opret en Google Ads konto</h3>
      <p>Gå til ads.google.com og opret en konto med din Google-email. Du skal tilføje betalingsoplysninger, men du bliver først opkrævet når du starter dine kampagner.</p>

      <h3>Trin 2: Definer dit mål</h3>
      <p>Google Ads tilbyder forskellige kampagnemål:</p>
      <ul>
        <li>Salg (e-commerce)</li>
        <li>Leads (kontaktformularer, opkald)</li>
        <li>Hjemmesidetrafik</li>
        <li>Brand awareness</li>
        <li>App-installationer</li>
      </ul>

      <h3>Trin 3: Vælg kampagnetype</h3>
      <p>De mest almindelige kampagnetyper er:</p>
      <ul>
        <li><strong>Søgekampagner</strong> - Tekstannoncer i Google-søgning (anbefalet til begyndere)</li>
        <li><strong>Display kampagner</strong> - Bannerannoncer på hjemmesider</li>
        <li><strong>Shopping kampagner</strong> - Produktannoncer for e-commerce</li>
        <li><strong>Video kampagner</strong> - YouTube-annoncer</li>
        <li><strong>Performance Max</strong> - AI-drevet kampagne på tværs af alle kanaler</li>
      </ul>

      <h3>Trin 4: Keyword research</h3>
      <p>Vælg de søgeord du vil vise annoncer for. Brug Googles Keyword Planner til at finde relevante søgeord og se deres søgevolumen og konkurrence.</p>

      <div class="tip-box">
        <h4>Keyword match types:</h4>
        <p><strong>Bred match:</strong> Viser for relaterede søgninger (mindst kontrol)<br>
        <strong>Phrase match:</strong> Viser når søgningen indeholder din frase<br>
        <strong>Exact match:</strong> Viser kun for præcise søgninger (mest kontrol)</p>
      </div>

      <h3>Trin 5: Skriv overbevisende annoncer</h3>
      <p>En god Google Ads annonce indeholder:</p>
      <ul>
        <li><strong>Overskrift</strong> - Inkluder dit keyword og en fordel</li>
        <li><strong>Beskrivelse</strong> - Forklar dit tilbud og inkluder en call-to-action</li>
        <li><strong>URL</strong> - Link til en relevant landingsside</li>
        <li><strong>Udvidelser</strong> - Tilføj sitelinks, callouts, telefonnummer m.m.</li>
      </ul>

      <h3>Trin 6: Sæt dit budget</h3>
      <p>Start med et dagligt budget du er komfortabel med. Vi anbefaler minimum 100-200 kr/dag for at få nok data til optimering.</p>

      <h2>Google Ads optimering: 5 tips til bedre ROI</h2>

      <ol>
        <li><strong>Brug negative keywords</strong> - Udeluk irrelevante søgninger der spilder dit budget</li>
        <li><strong>Optimer Quality Score</strong> - Bedre score = lavere klikpriser</li>
        <li><strong>A/B test dine annoncer</strong> - Test forskellige overskrifter og beskrivelser</li>
        <li><strong>Opsæt konverteringssporing</strong> - Mål hvad der faktisk giver resultater</li>
        <li><strong>Juster bud efter enhed og tid</strong> - Byd mere når din målgruppe er aktiv</li>
      </ol>

      <h2>Hvad koster Google Ads i Danmark?</h2>
      <p>Prisen per klik (CPC) varierer meget efter branche og konkurrence:</p>
      <ul>
        <li><strong>Lavkonkurrence brancher:</strong> 2-10 kr per klik</li>
        <li><strong>Mellemkonkurrence:</strong> 10-30 kr per klik</li>
        <li><strong>Høj konkurrence (finans, forsikring):</strong> 50-200+ kr per klik</li>
      </ul>

      <p>Oveni kommer eventuelt bureau-honorar for opsætning og løbende optimering.</p>

      <h2>Skal du bruge et Google Ads bureau?</h2>
      <p>Google Ads kan hurtigt blive dyrt hvis kampagnerne ikke optimeres korrekt. Et professionelt bureau kan:</p>
      <ul>
        <li>Reducere spild på irrelevante klik</li>
        <li>Forbedre Quality Score og sænke klikpriser</li>
        <li>Opsætte avanceret konverteringssporing</li>
        <li>Løbende A/B teste og optimere</li>
        <li>Give dig tid til at fokusere på din kerneforretning</li>
      </ul>

      <div class="tip-box">
        <h4>Nordic Marketing tilbyder Google Ads management fra 2.500 kr/md</h4>
        <p>Vi hjælper danske virksomheder med at få mere ud af deres Google Ads budget. Gratis audit af din eksisterende konto.</p>
      </div>
    `
  },
  "facebook-annoncering-tips": {
    title: "Facebook Annoncering: 10 Tips til Bedre Resultater i 2026",
    description: "Få mere ud af dine Facebook og Instagram annoncer med disse 10 eksperttips. Lær om målgrupper, annonceformater og optimering for danske virksomheder.",
    keywords: "Facebook annoncering tips, Instagram annoncer, Meta Ads guide, Facebook Ads danmark, social media annoncering, Facebook marketing tips, Facebook målgrupper",
    date: "7. februar 2026",
    category: "Social Media",
    readTime: "8 min",
    content: `
      <h2>Hvorfor Facebook annoncering stadig virker i 2026</h2>
      <p>Med over 3,5 millioner danske brugere er Facebook og Instagram stadig blandt de mest effektive annonceplatforme for danske virksomheder. Meta's avancerede målretningsmuligheder gør det muligt at nå præcis den målgruppe du ønsker.</p>

      <h2>10 tips til bedre Facebook annoncering</h2>

      <h3>1. Definer din målgruppe præcist</h3>
      <p>Jo mere specifik din målgruppe er, jo bedre resultater får du. Brug Metas målretningsoptioner til at definere:</p>
      <ul>
        <li>Demografi (alder, køn, lokation)</li>
        <li>Interesser og adfærd</li>
        <li>Uddannelse og erhverv</li>
        <li>Livsfase (nyligt gift, ny boligejer, etc.)</li>
      </ul>

      <h3>2. Brug Custom Audiences</h3>
      <p>Custom Audiences lader dig målrette mod folk der allerede kender din virksomhed:</p>
      <ul>
        <li><strong>Website visitors</strong> - Folk der har besøgt din hjemmeside</li>
        <li><strong>Email liste</strong> - Dine eksisterende kontakter</li>
        <li><strong>App users</strong> - Folk der bruger din app</li>
        <li><strong>Engagement</strong> - Folk der har interageret med dit indhold</li>
      </ul>

      <h3>3. Test forskellige annonceformater</h3>
      <p>Meta tilbyder mange annonceformater - test hvad der virker bedst for din virksomhed:</p>
      <ul>
        <li><strong>Single image</strong> - Simpelt og effektivt</li>
        <li><strong>Video</strong> - Højere engagement, fortæl din historie</li>
        <li><strong>Carousel</strong> - Vis flere produkter eller features</li>
        <li><strong>Stories</strong> - Fuldskærm, mobil-first format</li>
        <li><strong>Reels</strong> - Kort, underholdende videoindhold</li>
      </ul>

      <div class="tip-box">
        <h4>Pro tip:</h4>
        <p>Video annoncer får typisk 20-30% lavere CPM (pris per 1000 visninger) end statiske billeder. Start med korte videoer på 15-30 sekunder.</p>
      </div>

      <h3>4. Skriv scroll-stoppende tekster</h3>
      <p>Din annoncetekst skal fange opmærksomheden på få sekunder:</p>
      <ul>
        <li>Start med det vigtigste - hook i første linje</li>
        <li>Brug tal og statistikker</li>
        <li>Adresser et specifikt problem</li>
        <li>Inkluder en klar call-to-action</li>
        <li>Test korte vs. lange tekster</li>
      </ul>

      <h3>5. Optimer for det rigtige mål</h3>
      <p>Vælg kampagnemål der matcher din forretning:</p>
      <ul>
        <li><strong>Awareness</strong> - Byg brandkendskab</li>
        <li><strong>Traffic</strong> - Få folk til din hjemmeside</li>
        <li><strong>Engagement</strong> - Få likes, kommentarer, delinger</li>
        <li><strong>Leads</strong> - Indsaml kontaktoplysninger</li>
        <li><strong>Sales</strong> - Generer direkte salg</li>
      </ul>

      <h3>6. Brug Lookalike Audiences</h3>
      <p>Lookalike Audiences finder nye folk der ligner dine bedste kunder. Opret lookalikes baseret på:</p>
      <ul>
        <li>Dine købende kunder</li>
        <li>Dine mest engagerede website-besøgende</li>
        <li>Din email-liste</li>
      </ul>

      <h3>7. Implementer Facebook Pixel korrekt</h3>
      <p>Facebook Pixel er afgørende for at:</p>
      <ul>
        <li>Tracke konverteringer</li>
        <li>Bygge retargeting audiences</li>
        <li>Optimere annoncer mod specifikke handlinger</li>
        <li>Måle ROI på dine kampagner</li>
      </ul>

      <h3>8. A/B test alt</h3>
      <p>Systematisk testing er nøglen til bedre resultater. Test én variabel ad gangen:</p>
      <ul>
        <li>Billeder/video</li>
        <li>Overskrifter</li>
        <li>Annoncetekst</li>
        <li>Call-to-action knapper</li>
        <li>Målgrupper</li>
        <li>Placeringer</li>
      </ul>

      <h3>9. Retarget med relevante tilbud</h3>
      <p>Retargeting (at vise annoncer til folk der allerede har interageret med dig) er ofte den mest profitable strategi:</p>
      <ul>
        <li>Vis produkter folk har kigget på</li>
        <li>Tilbyd rabat til folk der forlod kurven</li>
        <li>Upsell til eksisterende kunder</li>
        <li>Få folk tilbage med nyt indhold</li>
      </ul>

      <h3>10. Analyser og optimer løbende</h3>
      <p>Tjek dine kampagner regelmæssigt og fokuser på disse nøgletal:</p>
      <ul>
        <li><strong>CTR (klikrate)</strong> - Over 1% er godt</li>
        <li><strong>CPC (pris per klik)</strong> - Varierer efter branche</li>
        <li><strong>ROAS (return on ad spend)</strong> - Din vigtigste metric</li>
        <li><strong>Frekvens</strong> - Hold under 3 for at undgå ad fatigue</li>
      </ul>

      <h2>Hvad koster Facebook annoncering i Danmark?</h2>
      <p>Typiske priser for Facebook annoncer i Danmark:</p>
      <ul>
        <li><strong>CPM (pris per 1000 visninger):</strong> 30-80 kr</li>
        <li><strong>CPC (pris per klik):</strong> 2-15 kr</li>
        <li><strong>CPL (pris per lead):</strong> 50-300 kr (varierer meget)</li>
      </ul>

      <p>Vi anbefaler et minimum annoncebudget på 3.000-5.000 kr/md for at få nok data til optimering.</p>

      <div class="tip-box">
        <h4>Nordic Marketing tilbyder Meta Ads management fra 2.500 kr/md</h4>
        <p>Vi hjælper danske virksomheder med at få bedre resultater fra Facebook og Instagram annoncering. Book en gratis konsultation.</p>
      </div>
    `
  }
};

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const breadcrumbs = [
    { name: "Forside", url: "https://nordic-marketing.dk/" },
    { name: "Blog", url: "https://nordic-marketing.dk/blog" },
    { name: post.title.substring(0, 30) + "...", url: `https://nordic-marketing.dk/blog/${slug}` }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": "2026-02-09",
    "dateModified": "2026-02-09",
    "author": {
      "@type": "Organization",
      "name": "Nordic Marketing",
      "url": "https://nordic-marketing.dk"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nordic Marketing",
      "url": "https://nordic-marketing.dk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nordic-marketing.dk/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nordic-marketing.dk/blog/${slug}`
    }
  };

  return (
    <div className="blog-post-page">
      <SEO
        title={post.title}
        description={post.description}
        keywords={post.keywords}
        canonical={`https://nordic-marketing.dk/blog/${slug}`}
        type="article"
        schema={articleSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="blog-post-hero">
        <div className="container">
          <div className="blog-meta">
            <span className="blog-category">{post.category}</span>
            <span className="blog-date">{post.date}</span>
          </div>
          <h1>{post.title}</h1>
          <span className="read-time">{post.readTime} læsetid</span>
        </div>
      </section>

      {/* Content */}
      <article className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* Navigation */}
      <div className="container">
        <div className="blog-navigation">
          <Link to="/blog" className="back-to-blog">
            ← Tilbage til blog
          </Link>
          <Link to="/kontakt" className="btn btn-primary">
            Få gratis konsultation
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Brug for hjælp med din marketing?</h2>
          <p>Book en gratis konsultation og lad eksperterne hjælpe dig</p>
          <Link to="/kontakt" className="btn btn-light">Kontakt os</Link>
        </div>
      </section>
    </div>
  );
}

export default BlogPost;

/**
 * Pre-build SEO freshness script
 * Updates sitemap lastmod dates and index.html revised meta tag
 * Runs automatically before each build via "prebuild" npm script
 */
const fs = require('fs');
const path = require('path');

const today = new Date().toISOString().split('T')[0];
const publicDir = path.join(__dirname, '..', 'public');

// Update sitemap.xml lastmod dates
const sitemapPath = path.join(publicDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  sitemap = sitemap.replace(
    /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
    `<lastmod>${today}</lastmod>`
  );
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`[SEO] Sitemap lastmod dates updated to ${today}`);
}

// Update index.html revised meta tag
const indexPath = path.join(publicDir, 'index.html');
if (fs.existsSync(indexPath)) {
  let indexHtml = fs.readFileSync(indexPath, 'utf8');
  indexHtml = indexHtml.replace(
    /<meta name="revised" content="[^"]*"/,
    `<meta name="revised" content="${today}"`
  );
  fs.writeFileSync(indexPath, indexHtml);
  console.log(`[SEO] index.html revised date updated to ${today}`);
}

// Update llms.txt last-updated date
const llmsPath = path.join(publicDir, 'llms.txt');
if (fs.existsSync(llmsPath)) {
  const months = [
    'januar', 'februar', 'marts', 'april', 'maj', 'juni',
    'juli', 'august', 'september', 'oktober', 'november', 'december'
  ];
  const now = new Date();
  const danishDate = `${now.getDate()}. ${months[now.getMonth()]} ${now.getFullYear()}`;
  let llms = fs.readFileSync(llmsPath, 'utf8');
  llms = llms.replace(
    /Sidst opdateret:.*/,
    `Sidst opdateret: ${danishDate}`
  );
  fs.writeFileSync(llmsPath, llms);
  console.log(`[SEO] llms.txt updated to ${danishDate}`);
}

console.log('[SEO] Pre-build SEO update complete.');

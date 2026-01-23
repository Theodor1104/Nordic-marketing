const sharp = require('sharp');
const path = require('path');

// OG Image dimensions (recommended: 1200x630)
const width = 1200;
const height = 630;

// Create SVG with Nordic Marketing branding
const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a3d2e"/>
      <stop offset="100%" style="stop-color:#2d5a47"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3d8b6e"/>
      <stop offset="100%" style="stop-color:#5ba88a"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bg)"/>

  <!-- Decorative shapes -->
  <circle cx="1100" cy="100" r="200" fill="rgba(61,139,110,0.15)"/>
  <circle cx="100" cy="530" r="150" fill="rgba(61,139,110,0.1)"/>
  <circle cx="900" cy="500" r="100" fill="rgba(61,139,110,0.1)"/>

  <!-- Accent line -->
  <rect x="100" y="200" width="80" height="6" rx="3" fill="url(#accent)"/>

  <!-- Main text -->
  <text x="100" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="white">
    Nordic Marketing
  </text>

  <!-- Subtitle -->
  <text x="100" y="350" font-family="system-ui, -apple-system, sans-serif" font-size="32" fill="rgba(255,255,255,0.9)">
    Digital Marketing Bureau i Danmark
  </text>

  <!-- Services -->
  <text x="100" y="440" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="rgba(255,255,255,0.7)">
    SEO  •  Google Ads  •  Social Media  •  Webdesign
  </text>

  <!-- CTA -->
  <rect x="100" y="490" width="280" height="50" rx="25" fill="url(#accent)"/>
  <text x="155" y="525" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="600" fill="white">
    Gratis konsultation
  </text>

  <!-- Website URL -->
  <text x="100" y="590" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="rgba(255,255,255,0.6)">
    nordic-marketing.dk
  </text>
</svg>
`;

async function generateOgImage() {
  try {
    const outputPath = path.join(__dirname, '..', 'public', 'og-image.jpg');

    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(outputPath);

    console.log('OG image created successfully at:', outputPath);
  } catch (error) {
    console.error('Error creating OG image:', error);
    process.exit(1);
  }
}

generateOgImage();

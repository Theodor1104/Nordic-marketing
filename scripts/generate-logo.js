const sharp = require('sharp');
const path = require('path');

// Logo dimensions
const size = 512;

// Create SVG logo
const svg = `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a3d2e"/>
      <stop offset="100%" style="stop-color:#2d5a47"/>
    </linearGradient>
  </defs>

  <!-- Background circle -->
  <circle cx="256" cy="256" r="240" fill="url(#bg)"/>

  <!-- N letter -->
  <text x="256" y="320" font-family="system-ui, -apple-system, sans-serif" font-size="220" font-weight="700" fill="white" text-anchor="middle">
    N
  </text>

  <!-- Decorative dot -->
  <circle cx="380" cy="150" r="30" fill="#3d8b6e"/>
</svg>
`;

async function generateLogo() {
  try {
    const outputPath = path.join(__dirname, '..', 'public', 'logo.png');

    await sharp(Buffer.from(svg))
      .png()
      .toFile(outputPath);

    console.log('Logo created successfully at:', outputPath);
  } catch (error) {
    console.error('Error creating logo:', error);
    process.exit(1);
  }
}

generateLogo();

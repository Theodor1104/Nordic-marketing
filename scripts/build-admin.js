const fs = require('fs');
const path = require('path');

const adminPanelPath = path.join(__dirname, '..', 'admin-panel');
const indexPath = path.join(adminPanelPath, 'index.html');

// Read the index.html
let html = fs.readFileSync(indexPath, 'utf8');

// Add redirect script to go directly to /admin
const redirectScript = `
    <script>
      // Redirect to admin panel if not already there
      if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        window.location.replace('/admin');
      }
    </script>`;

// Insert the redirect script right after <head>
html = html.replace('<head>', '<head>' + redirectScript);

// Also update the title
html = html.replace('<title>Nordic Marketing | Digital Marketing Bureau</title>', '<title>Nordic Marketing | Admin Panel</title>');

// Write the modified index.html
fs.writeFileSync(indexPath, html);

// Create _redirects for Netlify
fs.writeFileSync(path.join(adminPanelPath, '_redirects'), '/*    /index.html   200\n');

// Create .htaccess for Apache
const htaccess = `RewriteEngine On
RewriteBase /
RewriteRule ^index\\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
`;
fs.writeFileSync(path.join(adminPanelPath, '.htaccess'), htaccess);

console.log('Admin panel configured for standalone use');

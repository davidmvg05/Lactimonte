import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');
const BASE = '/Lactimonte';

if (!fs.existsSync(DIST_DIR)) {
  console.log('Dist directory does not exist. Skipping base fix.');
  process.exit(0);
}

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.css'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // 1. Fix asset paths: "/assets/ -> "/Lactimonte/assets/
      const assetRegex = /(["'`])\/assets\//g;
      if (assetRegex.test(content)) {
        content = content.replace(assetRegex, `$1${BASE}/assets/`);
        modified = true;
      }

      // 2. Fix route links: href="/marca -> href="/Lactimonte/marca
      const routeRegex = /href=["']\/(marca|queijos|receitas|raizes|mural|contactos|pesquisa|a-lactimonte|noticias)(["'#?/])/g;
      if (routeRegex.test(content)) {
        content = content.replace(routeRegex, `href="${BASE}/$1$2`);
        modified = true;
      }

      // 3. Fix home link: href="/" -> href="/Lactimonte/"
      const homeRegex = /href=["']\/["']([ >])/g;
      if (homeRegex.test(content)) {
        content = content.replace(homeRegex, `href="${BASE}/"$1`);
        modified = true;
      }

      // 4. Clean up any accidental double prefixes
      const doubleBaseRegex = new RegExp(`${BASE}${BASE}`, 'g');
      if (doubleBaseRegex.test(content)) {
        content = content.replace(doubleBaseRegex, BASE);
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

processDirectory(DIST_DIR);
console.log('Base paths successfully fixed for GitHub Pages in dist/');

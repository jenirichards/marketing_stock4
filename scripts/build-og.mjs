// Rasterises the Stock4 social share image (1200×630) to public/og-default.png.
// Run with `npm run og:build`. Kept deliberately simple — one SVG, one output.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/og-default.png');

// Trade accent swatches — the four apps, in brand order.
const trades = [
  { label: 'Glazing', c: '#0369a1' },
  { label: 'Building', c: '#c2410c' },
  { label: 'Plumbing', c: '#0e9085' },
  { label: 'Electrics', c: '#d89b0a' },
];

const chips = trades
  .map((t, i) => {
    const x = 80 + i * 268;
    return `
      <g transform="translate(${x}, 470)">
        <rect width="248" height="64" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
        <circle cx="34" cy="32" r="9" fill="${t.c}"/>
        <text x="58" y="41" font-family="Geist, Inter, Arial, sans-serif" font-size="24" font-weight="600" fill="#e2e8f0">${t.label}</text>
      </g>`;
  })
  .join('');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Stock4 mark -->
  <g transform="translate(80, 92)">
    <rect width="72" height="72" rx="16" fill="#334155"/>
    <rect x="16" y="18" width="40" height="9" rx="4.5" fill="#94a3b8"/>
    <rect x="16" y="32" width="40" height="9" rx="4.5" fill="#cbd5e1"/>
    <rect x="16" y="46" width="26" height="9" rx="4.5" fill="#e2e8f0"/>
    <text x="92" y="52" font-family="Geist, Inter, Arial, sans-serif" font-size="44" font-weight="700" fill="#ffffff">Stock4</text>
  </g>

  <text x="80" y="270" font-family="Geist, Inter, Arial, sans-serif" font-size="72" font-weight="700" fill="#ffffff" letter-spacing="-2">Stock takes, ordering</text>
  <text x="80" y="352" font-family="Geist, Inter, Arial, sans-serif" font-size="72" font-weight="700" fill="#ffffff" letter-spacing="-2">and stock control —</text>
  <text x="80" y="434" font-family="Geist, Inter, Arial, sans-serif" font-size="72" font-weight="700" fill="#60a5fa" letter-spacing="-2">in one place.</text>

  ${chips}
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);

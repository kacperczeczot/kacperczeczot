import fs from 'fs';
import path from 'path';

const outDir = path.resolve('./public/images');
fs.mkdirSync(outDir, { recursive: true });

function defs({ id, w, h, accent = '#38bdf8' }) {
  return `
  <defs>
    <linearGradient id="${id}-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0b1528"/>
      <stop offset="55%" stop-color="#070d1a"/>
      <stop offset="100%" stop-color="#050810"/>
    </linearGradient>
    <radialGradient id="${id}-spot" cx="50%" cy="8%" r="70%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.22"/>
      <stop offset="45%" stop-color="#1c3464" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#070d1a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${id}-haze" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#070d1a" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#070d1a" stop-opacity="0"/>
    </linearGradient>
    <filter id="${id}-soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="1.2"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${id}-bg)"/>
  <rect width="${w}" height="${h}" fill="url(#${id}-spot)"/>`;
}

function frame(w, h, pad = 18) {
  return `<rect x="${pad}" y="${pad}" width="${w - pad * 2}" height="${h - pad * 2}" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>`;
}

function caption(x, y, label, sub) {
  return `
  <text x="${x}" y="${y}" fill="#7dd3fc" font-family="Georgia, 'Times New Roman', serif" font-size="11" letter-spacing="3.2" text-anchor="middle">${label}</text>
  <text x="${x}" y="${y + 18}" fill="rgba(226,232,240,0.55)" font-family="system-ui, sans-serif" font-size="10" letter-spacing="1.6" text-anchor="middle">${sub}</text>`;
}

const hero = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000" role="img" aria-label="Portret dyrygenta na scenie">
  ${defs({ id: 'hp', w: 800, h: 1000, accent: '#7dd3fc' })}
  <polygon points="400,0 180,1000 620,1000" fill="#38bdf8" opacity="0.05"/>
  <polygon points="400,40 300,1000 500,1000" fill="#bae6fd" opacity="0.04"/>
  <!-- distant hall architecture -->
  <g stroke="rgba(125,211,252,0.12)" fill="none" stroke-width="1">
    <path d="M80 220 Q400 80 720 220"/>
    <path d="M120 260 Q400 140 680 260"/>
    <line x1="140" y1="260" x2="80" y2="980"/>
    <line x1="660" y1="260" x2="720" y2="980"/>
  </g>
  <!-- orchestra rows -->
  <g fill="#0f1d38" stroke="rgba(56,189,248,0.18)" stroke-width="0.8">
    ${[0, 1, 2, 3, 4].map((r) => {
      const y = 720 + r * 28;
      const count = 11 + r;
      const start = 140 - r * 8;
      const gap = (520 + r * 16) / count;
      return Array.from({ length: count }, (_, i) => {
        const x = start + i * gap;
        const hh = 16 + ((i + r) % 3) * 4;
        return `<rect x="${x}" y="${y - hh}" width="7" height="${hh}" rx="0"/>`;
      }).join('');
    }).join('')}
  </g>
  <!-- conductor silhouette -->
  <g fill="#050810" stroke="#38bdf8" stroke-opacity="0.35" stroke-width="1.2">
    <ellipse cx="400" cy="268" rx="42" ry="50"/>
    <path d="M368 312 C340 360 328 430 338 520 L356 520 L368 430 L392 690 L408 690 L428 430 L444 520 L462 520 C470 430 458 350 432 312 Z"/>
    <path d="M360 340 C300 360 210 300 160 250 C210 270 300 310 358 328 Z"/>
    <path d="M440 336 C510 300 620 210 680 150 C620 210 500 290 442 322 Z"/>
  </g>
  <line x1="680" y1="150" x2="705" y2="128" stroke="#7dd3fc" stroke-width="1.5" opacity="0.7"/>
  <circle cx="710" cy="122" r="3" fill="#7dd3fc" opacity="0.8"/>
  <rect x="0" y="820" width="800" height="180" fill="url(#hp-haze)"/>
  ${frame(800, 1000)}
  ${caption(400, 910, 'PORTRET SCENICZNY', 'DYRYGENTURA · ŚWIATŁO RAMPY')}
</svg>`;

const finale = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" role="img" aria-label="Orkiestra i chór w filharmonii">
  ${defs({ id: 'fn', w: 1600, h: 900, accent: '#38bdf8' })}
  <!-- proscenium -->
  <path d="M80 80 Q800 10 1520 80 L1480 820 Q800 760 120 820 Z" fill="none" stroke="rgba(125,211,252,0.18)" stroke-width="1.5"/>
  <path d="M200 140 Q800 70 1400 140" fill="none" stroke="rgba(56,189,248,0.22)" stroke-width="1"/>
  <!-- choir loft -->
  <g fill="#0f1d38" stroke="rgba(125,211,252,0.2)" stroke-width="0.7">
    ${[0, 1, 2].map((r) => {
      const y = 210 + r * 36;
      return Array.from({ length: 28 }, (_, i) => {
        const x = 280 + i * 38 + (r % 2) * 12;
        return `<rect x="${x}" y="${y}" width="10" height="22"/>`;
      }).join('');
    }).join('')}
  </g>
  <!-- strings / winds -->
  <g fill="#142548" stroke="rgba(56,189,248,0.25)" stroke-width="0.7">
    ${[0, 1, 2, 3, 4].map((r) => {
      const y = 380 + r * 48;
      const n = 18 - r;
      const start = 800 - (n * 28) / 2;
      return Array.from({ length: n }, (_, i) => `<ellipse cx="${start + i * 28}" cy="${y}" rx="9" ry="16"/>`).join('');
    }).join('')}
  </g>
  <!-- conductor podium -->
  <rect x="772" y="640" width="56" height="8" fill="#38bdf8" opacity="0.35"/>
  <path d="M800 520 L786 640 L814 640 Z" fill="#050810" stroke="#7dd3fc" stroke-opacity="0.4"/>
  <ellipse cx="800" cy="500" rx="14" ry="16" fill="#050810" stroke="#7dd3fc" stroke-opacity="0.4"/>
  <!-- floor reflection -->
  <rect x="120" y="700" width="1360" height="140" fill="url(#fn-haze)"/>
  ${frame(1600, 900)}
  ${caption(800, 830, 'KONCERT DYPLOMOWY „FINALE”', 'ORKIESTRA SYMFONICZNA · CHÓR MIESZANY · FILHARMONIA')}
</svg>`;

const echo = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" role="img" aria-label="Studio nagraniowe i reżyserka">
  ${defs({ id: 'ec', w: 1600, h: 900, accent: '#0ea5e9' })}
  <!-- control room window -->
  <rect x="90" y="90" width="900" height="520" fill="#091224" stroke="rgba(125,211,252,0.25)" stroke-width="2"/>
  <rect x="110" y="110" width="860" height="480" fill="#050810" stroke="rgba(56,189,248,0.12)"/>
  <!-- live room suggestion -->
  <g opacity="0.55">
    <rect x="220" y="220" width="180" height="240" fill="none" stroke="#38bdf8" stroke-opacity="0.25"/>
    <ellipse cx="540" cy="360" rx="70" ry="90" fill="#0f1d38" stroke="#7dd3fc" stroke-opacity="0.3"/>
    <rect x="680" y="250" width="140" height="220" fill="#0f1d38" stroke="#38bdf8" stroke-opacity="0.2"/>
  </g>
  <!-- mixing desk -->
  <rect x="80" y="640" width="1440" height="180" fill="#0b1528" stroke="rgba(56,189,248,0.2)"/>
  ${Array.from({ length: 32 }, (_, i) => {
    const x = 120 + i * 42;
    const h = 40 + ((i * 17) % 70);
    return `<rect x="${x}" y="${780 - h}" width="10" height="${h}" fill="${i % 5 === 0 ? '#38bdf8' : '#1c3464'}" opacity="0.75"/>`;
  }).join('')}
  <!-- meters -->
  <g>
    ${[0, 1, 2, 3].map((i) => `<rect x="${1080 + i * 110}" y="140" width="70" height="200" fill="#070d1a" stroke="#38bdf8" stroke-opacity="0.35"/>
      <rect x="${1090 + i * 110}" y="${160 + i * 18}" width="50" height="${160 - i * 18}" fill="#0ea5e9" opacity="0.25"/>`).join('')}
  </g>
  ${frame(1600, 900)}
  ${caption(800, 850, 'ECHO EPOK', 'REŻYSERKA DŹWIĘKU · INSTRUMENTARIUM · SESJA WIELOŚLADOWA')}
</svg>`;

const stage = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800" role="img" aria-label="Spektakl operetkowy">
  ${defs({ id: 'st', w: 1200, h: 800, accent: '#7dd3fc' })}
  <!-- curtains -->
  <path d="M0 0 C80 180 40 420 0 800 L220 800 C180 420 260 160 120 0 Z" fill="#0f1d38" stroke="#38bdf8" stroke-opacity="0.15"/>
  <path d="M1200 0 C1120 180 1160 420 1200 800 L980 800 C1020 420 940 160 1080 0 Z" fill="#0f1d38" stroke="#38bdf8" stroke-opacity="0.15"/>
  <path d="M80 0 Q600 90 1120 0" fill="none" stroke="#7dd3fc" stroke-opacity="0.25"/>
  <!-- footlights -->
  ${Array.from({ length: 14 }, (_, i) => `<ellipse cx="${180 + i * 64}" cy="690" rx="16" ry="6" fill="#38bdf8" opacity="${0.15 + (i % 3) * 0.08}"/>`).join('')}
  <!-- figures -->
  <g fill="#050810" stroke="#7dd3fc" stroke-opacity="0.35" stroke-width="1">
    <ellipse cx="470" cy="330" rx="22" ry="26"/>
    <path d="M448 356 L430 620 L510 620 L492 356 Z"/>
    <ellipse cx="640" cy="310" rx="24" ry="28"/>
    <path d="M616 338 C600 420 590 560 600 640 L680 640 C690 540 700 420 664 338 Z"/>
    <ellipse cx="800" cy="350" rx="20" ry="24"/>
    <path d="M782 372 L770 610 L830 610 L818 372 Z"/>
  </g>
  <rect x="0" y="700" width="1200" height="100" fill="url(#st-haze)"/>
  ${frame(1200, 800)}
  ${caption(600, 740, 'SCENA TEATRALNA', 'OPERETKA · MUSICAL · ŚWIATŁO RAMPY')}
</svg>`;

const score = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" role="img" aria-label="Detal partytury orkiestrowej">
  ${defs({ id: 'sc', w: 800, h: 800, accent: '#bae6fd' })}
  <g stroke="rgba(186,230,253,0.28)" stroke-width="1.2" fill="none">
    ${[0, 1, 2, 3, 4].map((s) => {
      const y0 = 160 + s * 110;
      return Array.from({ length: 5 }, (_, i) => `<line x1="80" y1="${y0 + i * 12}" x2="720" y2="${y0 + i * 12}"/>`).join('');
    }).join('')}
  </g>
  <!-- treble clef suggestion -->
  <path d="M130 210 C150 150 210 160 200 210 C186 250 120 250 130 300 C150 340 210 320 190 280" fill="none" stroke="#7dd3fc" stroke-width="3" stroke-linecap="square"/>
  <!-- note heads -->
  <g fill="#e0f2fe" opacity="0.8">
    <ellipse cx="260" cy="232" rx="9" ry="7" transform="rotate(-18 260 232)"/>
    <rect x="268" y="168" width="2" height="64" fill="#7dd3fc"/>
    <ellipse cx="330" cy="256" rx="9" ry="7" transform="rotate(-18 330 256)"/>
    <rect x="338" y="192" width="2" height="64" fill="#7dd3fc"/>
    <ellipse cx="400" cy="220" rx="9" ry="7" transform="rotate(-18 400 220)"/>
    <rect x="408" y="156" width="2" height="64" fill="#7dd3fc"/>
    <ellipse cx="470" cy="268" rx="9" ry="7" transform="rotate(-18 470 268)"/>
    <rect x="478" y="204" width="2" height="64" fill="#7dd3fc"/>
    <ellipse cx="540" cy="244" rx="9" ry="7" transform="rotate(-18 540 244)"/>
    <rect x="548" y="180" width="2" height="64" fill="#7dd3fc"/>
  </g>
  <text x="400" y="720" fill="rgba(125,211,252,0.7)" font-family="Georgia, serif" font-size="28" font-style="italic" text-anchor="middle">Partytura · Arr.</text>
  ${frame(800, 800, 22)}
  ${caption(400, 760, 'WARSZTAT ARANŻACYJNY', 'PARTYTURA ORKIESTROWA')}
</svg>`;

function ensembleWide(id, title, sub, motif) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" role="img" aria-label="${title}">
  ${defs({ id, w: 1600, h: 900 })}
  ${motif}
  <rect x="0" y="720" width="1600" height="180" fill="url(#${id}-haze)"/>
  ${frame(1600, 900)}
  ${caption(800, 800, title, sub)}
</svg>`;
}

const opinogora = ensembleWide(
  'op',
  'ORKIESTRA GOK · OPINOGÓRA',
  'DYRYGENTURA · SKŁAD DĘTY',
  `<g fill="#0f1d38" stroke="rgba(56,189,248,0.28)" stroke-width="0.8">
    ${Array.from({ length: 5 }, (_, r) => Array.from({ length: 9 + r }, (_, i) => {
      const x = 800 - ((9 + r) * 42) / 2 + i * 42;
      const y = 280 + r * 70;
      return `<rect x="${x}" y="${y}" width="18" height="48"/><rect x="${x + 6}" y="${y - 28}" width="6" height="28"/>`;
    }).join('')).join('')}
  </g>
  <path d="M800 210 L786 270 L814 270 Z" fill="#050810" stroke="#7dd3fc" stroke-opacity="0.5"/>
  <ellipse cx="800" cy="192" rx="16" ry="18" fill="#050810" stroke="#7dd3fc" stroke-opacity="0.5"/>`
);

const rebowo = ensembleWide(
  'rb',
  'ORKIESTRA DĘTA OSP · RĘBOWO',
  'PRÓBA · INSTRUKTORAT · UROCZYSTOŚCI',
  `<g stroke="rgba(125,211,252,0.2)" fill="none">
    <rect x="200" y="160" width="1200" height="500"/>
    <line x1="200" y1="410" x2="1400" y2="410"/>
  </g>
  ${Array.from({ length: 12 }, (_, i) => `<circle cx="${280 + i * 90}" cy="470" r="28" fill="#0f1d38" stroke="#38bdf8" stroke-opacity="0.35"/>`).join('')}
  <rect x="700" y="240" width="200" height="120" fill="#091224" stroke="#7dd3fc" stroke-opacity="0.3"/>`
);

const wawrzyczek = ensembleWide(
  'ww',
  'CHÓR IM. PROF. W. WAWRZYCZKA',
  'TENOR · DYRYGENTURA · TOURNÉE',
  `<path d="M200 620 Q800 180 1400 620" fill="none" stroke="rgba(125,211,252,0.2)" stroke-width="2"/>
  ${Array.from({ length: 3 }, (_, r) => Array.from({ length: 16 }, (_, i) => {
    const x = 280 + i * 70 + (r % 2) * 20;
    const y = 300 + r * 80;
    return `<ellipse cx="${x}" cy="${y}" rx="12" ry="18" fill="#0f1d38" stroke="#7dd3fc" stroke-opacity="0.3"/>`;
  }).join('')).join('')}`
);

const band = ensembleWide(
  'bd',
  'SKŁAD ESTRADOWY',
  'INSTRUMENTARIUM · REALIZACJA NA ŻYWO',
  `<rect x="180" y="200" width="520" height="360" fill="#091224" stroke="rgba(56,189,248,0.25)"/>
  <rect x="900" y="220" width="480" height="320" fill="#0b1528" stroke="rgba(56,189,248,0.2)"/>
  ${Array.from({ length: 8 }, (_, i) => `<rect x="${230 + i * 55}" y="430" width="18" height="${40 + (i % 4) * 24}" fill="#38bdf8" opacity="0.35"/>`).join('')}
  <circle cx="1140" cy="380" r="70" fill="none" stroke="#7dd3fc" stroke-opacity="0.25" stroke-width="8"/>
  <circle cx="1140" cy="380" r="18" fill="#38bdf8" opacity="0.35"/>`
);

const files = {
  'hero-portrait.svg': hero,
  'work-finale.svg': finale,
  'work-echo-epok.svg': echo,
  'bio-stage.svg': stage,
  'bio-score.svg': score,
  'ensemble-opinogora.svg': opinogora,
  'ensemble-rebowo.svg': rebowo,
  'ensemble-wawrzyczek.svg': wawrzyczek,
  'ensemble-band.svg': band,
};

Object.entries(files).forEach(([name, svg]) => {
  fs.writeFileSync(path.join(outDir, name), svg);
});

console.log(`Generated ${Object.keys(files).length} editorial images in public/images/`);

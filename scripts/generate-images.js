import fs from 'fs';
import path from 'path';

const ensemblesDir = path.resolve('./public/images/ensembles');
const bioDir = path.resolve('./public/images/bio');
fs.mkdirSync(ensemblesDir, { recursive: true });
fs.mkdirSync(bioDir, { recursive: true });

const images = [
  { file: 'opinogora-1.svg', title: 'Koncert Galowy Orkiestry', sub: 'Opinogóra Górna • Dyrygentura', color1: '#f59e0b', color2: '#b45309', icon: '🎺' },
  { file: 'opinogora-2.svg', title: 'Festiwal Muzyki Dętej', sub: 'Scena Plenerowa • Wykonanie Tutti', color1: '#d97706', color2: '#78350f', icon: '🎼' },
  { file: 'rebowo-1.svg', title: 'Próba Sekcyjna Orkiestry', sub: 'MOD Rębowo • Warsztaty i Musztra', color1: '#f59e0b', color2: '#92400e', icon: '🎷' },
  { file: 'rebowo-2.svg', title: 'Przegląd Regionalny OSP', sub: 'Występ Konkursowy • Srebrny Dyplom', color1: '#fbbf24', color2: '#b45309', icon: '🏆' },
  { file: 'chorzele-1.svg', title: 'Koncert Jubileuszowy', sub: 'Orkiestra Dęta Chorzele • Klarnet', color1: '#eab308', color2: '#854d0e', icon: '🎵' },
  { file: 'chorzele-2.svg', title: 'Oprawa Liturgiczna & Estrada', sub: 'Sekcja Klarnetów & Organy', color1: '#ca8a04', color2: '#713f12', icon: '⛪' },
  { file: 'wawrzyczek-1.svg', title: 'Dzieła Oratoryjne UWM', sub: 'Chór Wawrzyczka • Tenor & Dyrygent', color1: '#38bdf8', color2: '#0369a1', icon: '🏛️' },
  { file: 'wawrzyczek-2.svg', title: 'Międzynarodowe Tournee', sub: 'Festiwale Chóralne • A Cappella', color1: '#0ea5e9', color2: '#0c4a6e', icon: '🌍' },
  { file: 'arsvocale-1.svg', title: 'Muzyka Dawna & Polifonia', sub: 'Ars Vocale • Partie Solowe Tenora', color1: '#818cf8', color2: '#4338ca', icon: '✨' },
  { file: 'arsvocale-2.svg', title: 'Kameralistyka Wokalna', sub: 'Integracja Klarnetu z Głosami', color1: '#6366f1', color2: '#3730a3', icon: '🎙️' },
  { file: 'operetka-1.svg', title: 'Gala Operetkowa', sub: 'Scena Teatralna • Solista / Aktor', color1: '#ec4899', color2: '#be185d', icon: '🎭' },
  { file: 'operetka-2.svg', title: 'Księżniczka Czardasza / Strauss', sub: 'Występ z Orkiestrą na Żywo', color1: '#f43f5e', color2: '#9f1239', icon: '👑' },
  { file: 'porajeziora-1.svg', title: 'Warmia Musical „Pora Jeziora”', sub: 'Filharmonia & Teatr Jaracza', color1: '#06b6d4', color2: '#0e7490', icon: '🌊' },
  { file: 'porajeziora-2.svg', title: 'Sceny Zbiorowe i Solowe', sub: 'Spektakl Muzyczny z Orkiestrą', color1: '#0891b2', color2: '#155e75', icon: '🎬' },
  { file: 'zakrecony-1.svg', title: 'Live Concert Tour', sub: 'Zakręcony Band • Syntezatory & Klarnet', color1: '#a855f7', color2: '#6b21a8', icon: '⚡' },
  { file: 'zakrecony-2.svg', title: 'Live Sound Engineering', sub: 'Miks Cyfrowy & Realizacja Sceniczna', color1: '#9333ea', color2: '#581c87', icon: '🎚️' },
  { file: 'czteryglosy-1.svg', title: 'Standardy Jazzowe & Retro', sub: 'Kwartet „Cztery Głosy” • Close Harmony', color1: '#f97316', color2: '#c2410c', icon: '🎙️' },
  { file: 'czteryglosy-2.svg', title: 'Kameralne Sesje Wokalne', sub: 'Aranżacje 4-Głosowe i Nagrania', color1: '#ea580c', color2: '#9a3412', icon: '🎶' },
];

function generateSvg(title, sub, color1, color2, icon) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#09090b" />
      <stop offset="50%" stop-color="#18181b" />
      <stop offset="100%" stop-color="#09090b" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="${color1}" stop-opacity="0.35" />
      <stop offset="70%" stop-color="${color2}" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>
  
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  <circle cx="400" cy="200" r="280" fill="url(#glow)"/>
  
  <!-- Stage light cones -->
  <polygon points="400,0 250,500 550,500" fill="${color1}" opacity="0.04"/>
  <polygon points="200,0 50,500 350,500" fill="${color2}" opacity="0.03"/>
  <polygon points="600,0 450,500 750,500" fill="${color1}" opacity="0.03"/>

  <!-- Soundwave/Score lines -->
  <g stroke="${color1}" stroke-opacity="0.25" stroke-width="1.5" fill="none">
    <path d="M 50 320 Q 200 280 400 320 T 750 320"/>
    <path d="M 50 340 Q 200 300 400 340 T 750 340"/>
    <path d="M 50 360 Q 200 320 400 360 T 750 360"/>
    <path d="M 50 380 Q 200 340 400 380 T 750 380"/>
    <path d="M 50 400 Q 200 360 400 400 T 750 400"/>
  </g>

  <!-- Central Icon Badge -->
  <circle cx="400" cy="180" r="64" fill="#18181b" stroke="${color1}" stroke-width="2" stroke-opacity="0.6"/>
  <circle cx="400" cy="180" r="54" fill="#27272a" opacity="0.8"/>
  <text x="400" y="196" font-size="44" text-anchor="middle" dominant-baseline="central">${icon}</text>

  <!-- Typography -->
  <text x="400" y="295" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="24" font-weight="700" fill="#f4f4f5" text-anchor="middle" letter-spacing="0.5">${title}</text>
  <text x="400" y="330" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="500" fill="#a1a1aa" text-anchor="middle" letter-spacing="1.2">${sub.toUpperCase()}</text>

  <!-- Border Frame -->
  <rect x="16" y="16" width="768" height="468" rx="16" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
  <rect x="24" y="24" width="752" height="452" rx="12" fill="none" stroke="${color1}" stroke-opacity="0.15" stroke-width="1"/>
</svg>`;
}

images.forEach(img => {
  const filePath = path.join(ensemblesDir, img.file);
  fs.writeFileSync(filePath, generateSvg(img.title, img.sub, img.color1, img.color2, img.icon));
});

// Bio images
fs.writeFileSync(path.join(bioDir, 'conducting.svg'), generateSvg('Warsztat Dyrygencki', 'Orkiestra Symfoniczna & Chór • Partytury', '#f59e0b', '#b45309', '🎼'));
fs.writeFileSync(path.join(bioDir, 'studio.svg'), generateSvg('Studio Nagraniowe & Realizacja', 'Logic Pro • Pro Tools • UAD • Akustyka', '#06b6d4', '#0891b2', '🎛️'));
fs.writeFileSync(path.join(bioDir, 'instruments.svg'), generateSvg('Instrumentarium & Głos', 'Klarnet • Fortepian • Śpiew Solowy • Organy', '#ec4899', '#be185d', '🎹'));

console.log('All image assets generated successfully!');

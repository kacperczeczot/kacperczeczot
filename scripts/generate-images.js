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

function generateSvg(title, sub, color1, color2) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0b1528" />
      <stop offset="100%" stop-color="#070d1a" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="18%" r="70%">
      <stop offset="0%" stop-color="${color1}" stop-opacity="0.22" />
      <stop offset="70%" stop-color="${color2}" stop-opacity="0.06" />
      <stop offset="100%" stop-color="#070d1a" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <polygon points="400,0 220,500 580,500" fill="${color1}" opacity="0.05"/>
  <g stroke="${color1}" stroke-opacity="0.22" stroke-width="1.2" fill="none">
    <path d="M 50 320 Q 200 280 400 320 T 750 320"/>
    <path d="M 50 348 Q 200 308 400 348 T 750 348"/>
    <path d="M 50 376 Q 200 336 400 376 T 750 376"/>
  </g>
  <text x="400" y="210" font-family="Georgia, 'Times New Roman', serif" font-size="26" fill="#f8fafc" text-anchor="middle">${title}</text>
  <text x="400" y="242" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#7dd3fc" text-anchor="middle" letter-spacing="2.4">${sub.toUpperCase()}</text>
  <rect x="16" y="16" width="768" height="468" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
</svg>`;
}

images.forEach(img => {
  const filePath = path.join(ensemblesDir, img.file);
  fs.writeFileSync(filePath, generateSvg(img.title, img.sub, img.color1, img.color2));
});

fs.writeFileSync(path.join(bioDir, 'conducting.svg'), generateSvg('Warsztat Dyrygencki', 'Orkiestra Symfoniczna & Chór • Partytury', '#38bdf8', '#0369a1'));
fs.writeFileSync(path.join(bioDir, 'studio.svg'), generateSvg('Studio Nagraniowe & Realizacja', 'Logic Pro • Pro Tools • UAD • Akustyka', '#0ea5e9', '#0c4a6e'));
fs.writeFileSync(path.join(bioDir, 'instruments.svg'), generateSvg('Instrumentarium & Głos', 'Klarnet • Fortepian • Śpiew Solowy • Organy', '#7dd3fc', '#0369a1'));

console.log('All image assets generated successfully!');

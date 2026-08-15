/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        stage: {
          black: '#070709',
          obsidian: '#0e0e12',
          surface: '#15141a',
          surfaceHover: '#1e1c24',
          border: 'rgba(226, 186, 100, 0.15)',
          borderStrong: 'rgba(226, 186, 100, 0.35)',
          gold: '#e2ba64',
          goldLight: '#f6d289',
          goldDark: '#997327',
          champagne: '#faecd0',
          velvet: '#1a141e',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(226, 186, 100, 0.2)',
        'gold-glow-lg': '0 0 60px -10px rgba(226, 186, 100, 0.35)',
        'theatre-spot': '0 20px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(226, 186, 100, 0.15)',
        'subtle-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'spotlight': 'spotlight 8s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'orbit-slow': 'spin 90s linear infinite',
        'spin-reverse-slow': 'spinReverse 110s linear infinite',
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: '0.4', transform: 'translate(-50%, -20px) scale(0.95)' },
          '100%': { opacity: '0.7', transform: 'translate(-50%, 10px) scale(1.05)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        spinReverse: {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
      },
      backgroundImage: {
        'stage-spotlight': 'radial-gradient(circle at 50% 0%, rgba(226, 186, 100, 0.15) 0%, rgba(226, 186, 100, 0.03) 45%, transparent 70%)',
        'gold-gradient': 'linear-gradient(135deg, #f6d289 0%, #e2ba64 50%, #b88a32 100%)',
        'gold-gradient-subtle': 'linear-gradient(135deg, rgba(246, 210, 137, 0.12) 0%, rgba(226, 186, 100, 0.04) 100%)',
      },
    },
  },
  plugins: [],
};

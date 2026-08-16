/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#070d1a',
          900: '#0b1528',
          850: '#0f1d38',
          800: '#142548',
          700: '#1c3464',
          600: '#254784',
        },
        azure: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'ocean-card': '0 8px 30px -6px rgba(2, 6, 23, 0.6), 0 2px 8px -2px rgba(14, 165, 233, 0.1)',
        'ocean-hover': '0 16px 36px -4px rgba(2, 132, 199, 0.25), 0 4px 12px -2px rgba(2, 6, 23, 0.7)',
        'blue-glow': '0 0 35px -5px rgba(14, 165, 233, 0.35)',
      },
    },
  },
  plugins: [],
};

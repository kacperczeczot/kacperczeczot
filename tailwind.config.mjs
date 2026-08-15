/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        stage: {
          dark: '#09090b',
          card: 'rgba(24, 24, 27, 0.75)',
          border: 'rgba(39, 39, 42, 0.8)',
          amber: '#f59e0b',
          gold: '#fbbf24',
          cyan: '#06b6d4',
          glow: 'rgba(245, 158, 11, 0.15)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Cinzel"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-amber': '0 0 35px -5px rgba(245, 158, 11, 0.25)',
        'glow-amber-lg': '0 0 50px -5px rgba(245, 158, 11, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.25)',
        'glow-cyan-lg': '0 0 50px -5px rgba(6, 182, 212, 0.35)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit-slow': 'spin 60s linear infinite',
        'spin-reverse-slow': 'spinReverse 70s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        spinReverse: {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

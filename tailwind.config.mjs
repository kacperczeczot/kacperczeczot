/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        azure: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        navy: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'azure-sm': '0 2px 8px -2px rgba(14, 165, 233, 0.12), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'azure-md': '0 8px 24px -4px rgba(14, 165, 233, 0.15), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        'azure-lg': '0 16px 36px -6px rgba(2, 132, 199, 0.18), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'azure-glow': '0 0 35px -5px rgba(14, 165, 233, 0.25)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 14px 30px -4px rgba(2, 132, 199, 0.15), 0 4px 10px -2px rgba(15, 23, 42, 0.06)',
      },
      backgroundImage: {
        'azure-mesh': 'radial-gradient(at 10% 10%, rgba(186, 230, 253, 0.4) 0px, transparent 50%), radial-gradient(at 90% 10%, rgba(224, 231, 255, 0.4) 0px, transparent 50%), radial-gradient(at 50% 90%, rgba(240, 249, 255, 0.6) 0px, transparent 50%)',
        'azure-gradient': 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
        'azure-gradient-subtle': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      },
    },
  },
  plugins: [],
};

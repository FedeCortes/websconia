/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#00FF88',
        'neon-dim': '#00CC6A',
        dark: '#080D0A',
        'dark-card': '#0F1A13',
        'dark-border': '#1A2E20',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(0,255,136,0.4)',
        'neon-lg': '0 0 40px rgba(0,255,136,0.3)',
      },
    },
  },
  plugins: [],
}

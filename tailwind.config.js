/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        leather: {
          50: '#f7f2ed',
          100: '#eadfd3',
          200: '#d4bea6',
          300: '#bd9c79',
          400: '#a77b4d',
          500: '#8c5e3a',
          600: '#704b2e',
          700: '#543826',
          800: '#3d2a1f',
          900: '#2b1e17',
          950: '#1a120e',
        },
        gold: {
          50: '#fefbea',
          100: '#fff5c5',
          200: '#fee985',
          300: '#fdd446',
          400: '#fcbf1c',
          500: '#e69c08',
          600: '#c47504',
          700: '#9c5308',
          800: '#80400d',
          900: '#6b350f',
          950: '#3f1b05',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Source Sans 3', 'sans-serif'],
      },
      backgroundImage: {
        'leather-pattern': "url('https://images.unsplash.com/photo-1517583010307-3f789911b89c?w=1200&auto=format&fit=crop&q=80')",
      },
    },
  },
  plugins: [],
};
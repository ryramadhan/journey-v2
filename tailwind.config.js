/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      'off-white': '#E8E8E8',
      'gray-dark': '#333333',
      'gray-light': '#999999',
      cream: '#F5F5F0',
    },
    extend: {
      fontSize: {
        display: [
          '72px',
          { lineHeight: '1.1', letterSpacing: '-0.02em' },
        ],
        hero: [
          '48px',
          { lineHeight: '1.2', letterSpacing: '-0.01em' },
        ],
      },
      spacing: {
        section: '120px',
        container: '40px',
      },
      transitionDuration: {
        800: '800ms',
      },
      boxShadow: {
        button: '0 12px 40px rgba(255, 255, 255, 0.08)',
        'button-hover': '0 20px 50px rgba(255, 255, 255, 0.12)',
      },
    },
  },
  plugins: [],
};

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f3f7ef',
          100: '#e3edd9',
          200: '#c8dcb3',
          300: '#a4c684',
          400: '#7faf5a',
          500: '#5d9239',
          600: '#46732a',
          700: '#375a22',
          800: '#2d4a1e',
          900: '#1f3215',
        },
        cream: '#faf8f3',
        ink: '#1a1f1a',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(31, 50, 21, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;

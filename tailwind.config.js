/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        garage: {
          bg: '#0E0F10',
          surface: '#15171A',
          'surface-hover': '#1B1E22',
          text: '#E7E1D7',
          'text-secondary': '#B9B1A6',
          olive: '#7E8A63',
          gold: '#C9B48A',
          border: '#2A2E34',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};

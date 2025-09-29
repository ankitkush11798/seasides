/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-ocean': '#0d47a1',
        'sunset-orange': '#ff8f00',
        'sunny-yellow': '#ffea00',
        'charcoal-gray': '#333333',
        'light-gray': '#f5f5f5'
      },
      textColor: {
        white: '#ffffff !important',
        'force-white': '#ffffff !important'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent'
        }
      };
      addUtilities(newUtilities);
    }
  ]
};

export default config;

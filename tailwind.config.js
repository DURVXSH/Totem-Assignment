/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0E2A32',
          cream: '#FBF9EC',
          accent: '#623120',
          gray: '#99A1AF',
          teal: '#2B8098',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Afacad', 'sans-serif'],
        hero: ['Advent Pro', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'glow': '0px 0px 15px rgba(251, 249, 236, 0.3)',
      }
    },
  },
  plugins: [],
}
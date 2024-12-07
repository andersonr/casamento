/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-green': '#E8F3E8',
        'soft-cream': '#FDF5E6',
        'dark-gray': '#4A4A4A',
        'pale-pink': '#F8D7DA',
        'elegant-pink': '#D4668F'
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive']
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
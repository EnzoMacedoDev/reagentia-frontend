/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#235583',
        secondary: '#2bb89d',
        accent: '#f59e0b',
        danger: '#ef4444',
      },
      fontFamily: {
        kumbh_sans: ['"Kumbh Sans"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}


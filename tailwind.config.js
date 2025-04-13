/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#F5F2ED',
        'dark-blue': '#002B49',
        'dark-green': '#006B54',
        'green-500': '#10B981',
        'green-300': '#6EE7B7',
        'green-100': '#D1FAE5',
        'green-600': '#059669',
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tulsa': "url('/sky-night.gif')",
        'Tulsa1': "url('/Tulsa_1.gif')",
      }

    },
  },
  plugins: [],
}

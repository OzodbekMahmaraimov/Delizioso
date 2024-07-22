/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '3.32px 3.32px 4.99px 0px #3FC66E12',
      }
    },
  },
  plugins: [],
}
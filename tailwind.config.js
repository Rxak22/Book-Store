/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    
    fontFamily: {
      "btb": "battambang",
      "chenla": "chenla",
      "tahoma": "tahoma",
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

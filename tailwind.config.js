const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'onyx-bg': '#181818',
        'light-border': '#383737',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
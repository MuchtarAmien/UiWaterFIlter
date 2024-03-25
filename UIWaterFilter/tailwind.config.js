/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
],
  theme: {
    extend: {
      fontFamily : {
        IBM : ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
]
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#D2E6E4",
          // light: "#63b3ed",
          dark: "#0B7077",
        },
      }
    },
  },
  plugins: [],
}
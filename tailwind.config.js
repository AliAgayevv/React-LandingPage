/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "customNoiseWhite" : "rgb(245, 245, 245)"
      }
    },
  },
  plugins: [],
}
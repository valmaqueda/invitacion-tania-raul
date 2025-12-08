/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          mustard: "#CB9850",
          blush: "#E8C6B6",
          champagne: "#EFE2D6",
          ivory: "#FAF5EE",
          olive: "#B2BB89",
        },
        fontFamily: {
          serif: ['"Playfair Display"', "serif"],
          sans: ['"Helvetica Neue"', "system-ui", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  
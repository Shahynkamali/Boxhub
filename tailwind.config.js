/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FEDE00",
          dark: "#FACD13",
        },
        secondary: {
          DEFAULT: "#0F2F45",
          light: "#234960",
        },
      },
    },
  },
  plugins: [],
};

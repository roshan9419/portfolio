/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      colors: {
        primary: {
          light: '#93c5fd',
          dark: '#1e3a8a',
          DEFAULT: '#2563eb'
        }
      }
    },
  },
  plugins: [],
};

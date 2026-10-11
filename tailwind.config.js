/** @param {string} name */
const token = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        pixel: ['"Press Start 2P"', "monospace"],
      },
      colors: {
        background: token("background"),
        foreground: token("foreground"),
        surface: {
          DEFAULT: token("surface"),
          alt: token("surface-alt"),
        },
        card: token("card"),
        overlay: token("overlay"),
        muted: token("muted"),
        subtle: token("subtle"),
        border: token("border"),
        link: token("link"),
        glow: token("glow"),
        "logo-tile": token("logo-tile"),
        accent: {
          DEFAULT: token("accent"),
          foreground: token("accent-foreground"),
          soft: token("accent-soft"),
          "soft-foreground": token("accent-soft-foreground"),
        },
        brand: {
          linkedin: "#0077B5",
          github: "#2b3137",
          youtube: "#FF0000",
        },
        trophy: {
          gold: "#facc15",
          silver: "#cbd5e1",
          bronze: "#d97706",
          foreground: "#1c1917",
        },
      },
      borderColor: {
        DEFAULT: token("border"),
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.2s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

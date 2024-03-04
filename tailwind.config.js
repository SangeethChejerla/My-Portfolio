/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation:
      {
        "shine": "shine 2s linear infinite",
        "text-gradient": "text-gradient 4s linear infinite",
      },
      "keyframes": {
        "shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          },
        },
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },

    "keyframes": {
      "text-gradient": {
      "from": {
      "backgroundPosition": "200% center"
      }
      }
      }
  },
  plugins: [
    `prettier-plugin-tailwind`,
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
};


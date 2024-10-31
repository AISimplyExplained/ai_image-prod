/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      animation: {
        abox1: "abox1 2s 1s forwards ease-in-out infinite",
        abox2: "abox2 2s 1s forwards ease-in-out infinite",
        abox3: "abox3 2s 1s forwards ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        abox1: {
          "0%": {
            width: "112px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px",
          },
          "12.5%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px",
          },
          "25%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px",
          },
          "37.5%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px",
          },
          "50%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px",
          },
          "62.5%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px",
          },
          "75%": {
            width: "48px",
            height: "112px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "87.5%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "100%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
        },
        abox2: {
          "0%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "12.5%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "25%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "37.5%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "50%": {
            width: "112px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "0px",
          },
          "62.5%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "64px",
          },
          "75%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "64px",
          },
          "87.5%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "64px",
          },
          "100%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "64px",
          },
        },
        abox3: {
          "0%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "64px",
          },
          "12.5%": {
            width: "48px",
            height: "48px",
            marginTop: "0px",
            marginLeft: "64px",
          },
          "25%": {
            width: "48px",
            height: "112px",
            marginTop: "0px",
            marginLeft: "64px",
          },
          "37.5%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "64px",
          },
          "50%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "64px",
          },
          "62.5%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "64px",
          },
          "75%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "64px",
          },
          "87.5%": {
            width: "48px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "64px",
          },
          "100%": {
            width: "112px",
            height: "48px",
            marginTop: "64px",
            marginLeft: "0px",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

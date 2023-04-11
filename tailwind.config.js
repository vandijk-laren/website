/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slideFromTop: "slideFromTop 1s ease 200ms backwards",
        slideFromTop1: "slideFromTop 1s ease 250ms backwards",
        slideFromTop2: "slideFromTop 1s ease 300ms backwards",
        slideFromTop3: "slideFromTop 1s ease 800ms backwards",
        slideFromTop4: "slideFromTop 1s ease 850ms backwards",
        slideFromRight: "slideFromRight 0.8s ease-out 1",
      },
      keyframes: {
        slideFromTop: {
          "0%": { transform: "translateY(-1000px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        slideFromRight: {
          "0%": { transform: "translateY100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      colors: {
        "background-color": "#ffffff",
        "primary-color": "#4b95d9",
        "secondary-color": "#73a831",
        "primary-text-color": "#181c39",
        "secondary-text-color": "#e6ecfc",
      },
    },
  },
  plugins: [],
};

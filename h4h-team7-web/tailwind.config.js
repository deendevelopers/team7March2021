module.exports = {
  purge: ["./components/**/*.tsx", "./layouts/**/*.tsx", "./pages/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          300: "#4db0a2",
          400: "#419488",
        },
        pink: {
          300: "#e04c8f",
          400: "#d4307a",
        },
        indigo: "#4b5ff6",
        brick: "#fe6b54",
        lightbrick: "#fef0ed",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "hsl(0, 0%, 98%)",
      gray: "hsl(0, 0%, 41%)",
      black: "hsl(0, 0%, 8%)",
    },

    extend: {
      fontFamily: {
        sans: ["Epilogue", "sans-sherif"],
      },
    },
  },
  plugins: [],
};

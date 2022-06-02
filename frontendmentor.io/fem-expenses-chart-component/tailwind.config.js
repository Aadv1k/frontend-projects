module.exports = {
  mode: "jit",
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "Helvetica", "system-ui"],
    },

    extend: {
      colors: {
        tomato: "hsl(10, 79%, 65%)",
        cream: "hsl(27, 66%, 92%)",
      },
    },
  },

  plugins: [],
};

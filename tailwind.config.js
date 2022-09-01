module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

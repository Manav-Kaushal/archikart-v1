/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-main": "#F75C03",
        "brand-dark": "#d85204",
        "brand-charcoal": "#333333",
        "brand-grey": "#777",
        "brand-text": "#1f2937",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

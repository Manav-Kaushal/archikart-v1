/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-main": "#f44336",
        "brand-dark": "#e20000",
        "brand-charcoal": "#333333",
        "brand-grey": "#777",
      },
    },
  },
  plugins: [],
};

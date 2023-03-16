/** @type {import('tailwindcss').Config} */

// Settings
const settingsScreens = require("./tailwind.settings.screens");
const settingsFontSizes = require("./tailwind.settings.fontSizes");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
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

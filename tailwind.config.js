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
      backgroundImage: {
        underline1: `url("https://res.cloudinary.com/manavkaushal/image/upload/v1679136142/Projects/archikart.in/underline_1_gwx46f.svg")`,
      },
      colors: {
        "brand-main": "#ff4d30",
        "brand-dark": "#e3432b",
        "brand-charcoal": "#333333",
        "brand-grey": "#595959",
        "brand-text": "#1f2937",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      Background: {
        hero: "url(/src/assets/image-hero-desktop)",
      },
    },
  },
  plugins: [],
};

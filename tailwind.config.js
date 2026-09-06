/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        albert: ["var(--font-albert)"],
        chelsea: ["var(--font-chelsea)"],
       
      },

      animation: {
        'fade-left': "fadeInLeft 1.2s ease forwards",
        'fade-right': "fadeInRight 1.2s ease forwards",
        'fade-up': "fadeInUp 0.6s ease forwards",
      },

    },
  },
  plugins: [],
};
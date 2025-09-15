/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vipHala: ['var(--font-vip-hala)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

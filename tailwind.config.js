/** @type {import('tailwindcss').Config} */
module.exports = {
  // doing this adds all files that end with those .xyz to the tailwind path, allows for tailwind css to style them
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
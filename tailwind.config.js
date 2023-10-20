/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      commissioner: ["Commissioner", "sans-serif"],
    },
    colors: {
      "moderate-cyan": "hsl(176, 50%, 47%)",
      "dark-cyan": "hsl(176, 72%, 28%)",
      black: "hsl(0, 0%, 0%)",
      white: "hsl(0, 0%, 100%)",
      "dark-gray": "hsl(0, 0%, 48%)",
      "light-gray": "hsl(0, 0%, 64%)",
    },
    extend: {
      backgroundImage: {
        "hero-desktop": "url('./images/image-hero-desktop.jpg')",
        "hero-mobile": "url('./images/image-hero-mobile.jpg')",
      },
    },
  },
  plugins: [],
};

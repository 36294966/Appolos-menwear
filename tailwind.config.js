// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(100%)', opacity: 1 },
          '70%': { opacity: 0.2 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        },
      },
      animation: {
        'scroll-left-slow': 'scrollLeft 15s linear infinite',
      },
    },
  },
  plugins: [],
};
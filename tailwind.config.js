// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(100%)', opacity: 1 },
          '70%': { opacity: 0.2 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        }, // <-- Missing brace added here
      },
      animation: {
        'scroll-left-slow': 'scrollLeft 15s linear infinite',
      },
    },
  },
  plugins: [],
};




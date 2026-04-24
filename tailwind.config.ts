/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      animation: {
        gradientMove: "gradientMove 8s ease-in-out infinite alternate",
      },
      keyframes: {
        gradientMove: {
          "0%": { transform: "translate(0%, 0%) scale(1)" },
          "50%": { transform: "translate(-10%, 10%) scale(1.1)" },
          "100%": { transform: "translate(10%, -10%) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
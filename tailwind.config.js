/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Values taken from the live bundle (reference/assets/index.css).
      colors: {
        navy: {
          DEFAULT: "#0a1628",
          mid: "#0f2040",
          light: "#1a3358",
        },
        cyan: {
          DEFAULT: "#00c8e8",
          dim: "#0097b2",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

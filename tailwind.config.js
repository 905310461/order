/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bakery: {
          bg: "#FFF5F6",
          accent: "#FF4D6D",
          ink: "#333333",
          muted: "#666666",
          subtle: "#999999",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', "system-ui", "sans-serif"],
        serif: ['"ZCOOL XiaoWei"', "serif"],
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
      },
      fontSize: {
        "nav": ["0.625rem", { lineHeight: "0.75rem" }],
        "cat": ["0.6875rem", { lineHeight: "0.875rem" }],
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        card: "0 2px 8px -2px rgb(0 0 0 / 0.08)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A5ADF6",
        secondary: "#F5DEA1",
        background: "#2E3A4B",
        text: "#E3E7EB",
      },
      borderRadius: {
        32: "32px",
      },
    },
  },
  plugins: [],
};

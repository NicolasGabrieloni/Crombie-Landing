/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.83)",
      },
      height: {
        128: "900px",
        124: "750px",
      },
      colors: {
        "grey-500": "rgb(111, 112, 115)",
      },
    },
  },
  plugins: [],
};

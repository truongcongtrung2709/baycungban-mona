/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#4D46FA",
        secondary: "#000000",
        gray: "#F4F2F9",
        background: "#ffffff",
      },
      lineHeight: {
        "3xs": "15.16px",
        "2xs": "17.71px",
        xs: "18.19px",
        sm: "20.66px",
        md: "20.72px",
        lg: "21.22px",
        xl: "24.26px",
        "2xl": "27.29px",
        "3xl": "36.38px",
        "4xl": "104.83px",
        "5xl": "109.15px",
      },
      fontSize: {},
    },
  },
  plugins: [],
};

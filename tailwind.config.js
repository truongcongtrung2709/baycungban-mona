/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1512px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#4D46FA",
        black: "#000000",
        white: "#FFFFFF",
        gray: "#F4F2F9",
        "dark-gray": "#979797",
        orange: " #F06336",
        red: "#ff9494",
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

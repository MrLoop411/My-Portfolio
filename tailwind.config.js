/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fafdff",
          100: "#f3fafd",
          200: "#e1f5fe",
          300: "#d0effc",
          400: "#bde5f8",
          500: "#a8daf0",
          600: "#8bcae5",
          700: "#5ab4d7",
          800: "#008cb4",
          900: "#007aa1",
          950: "#163c4b",
        },
        gray: {
          50: "#fcfcfc",
          100: "#f9f9f9",
          200: "#efefef",
          300: "#e8e8e8",
          400: "#e0e0e0",
          500: "#d8d8d8",
          600: "#cecece",
          700: "#bbb",
          800: "#8d8d8d",
          900: "#838383",
          950: "#202020",
        },

        accent: {
          50: "#FAF5F0",
          100: "#F4ECE1",
          200: "#E8D6BF",
          300: "#DDC2A2",
          400: "#D2AF84",
          500: "#C69963",
          600: "#B78343",
          700: "#926835",
          800: "#6C4D28",
          900: "#4B351B",
          950: "#382814",
        },
      },

      animation: {
        slideDown: "slideDown 3s ease-in-out ",
        arrangeDown: "arrangeDown 3s ease-in-out ",
        arrangeDownTwo: "arrangeDownTwo 3s ease-in-out ",
        fadein: "fadein 5s ease-in-out",
        arrangeRight: "arrangeRight 3s ease-in-out ",
        arrangeLeft: "arrangeRight 3s ease-in-out ",
      },

      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateX(50%) ",
            rotate: "-55deg",
          },
        },
        arrangeDown: {
          "0%": { transform: "translateY(-20%)" },
        },
        arrangeDownTwo: {
          "0%": { transform: "translateY(-40%)" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "50%": { opacity: "50" },
          "100%": { opacity: "100" },
        },
        arrangeRight: {
          "0%": { transform: "skew(-15deg, -5deg)" },
        },
        arrangeLeft: {
          "0%": { transform: "skew(15deg, 5deg)" },
        },
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'350px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
      '2xl':'1536px',
    },

    colors:{
      brown: "#130e1d",
      lightBrown: "#211f23",
      darkBrown: "#070114",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#5fb3dd",
      lightCyan: "#88cff0",
      darkCyan: "#007ab3",
      orange: "#9165b5",
      lightOrange: "#8344b8",
      darkOrange: "#6002af",
      grey: "#626965",
      lightGrey: "#8a938e",
      darkGrey: "#3f4441",
    },

    extend: {
      boxShadow:{
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5))",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 240, 0.5)",
        orangeMediumShadow: "10px 10px 200px 150px rgba(203, 79, 240, 0.5)",
      }
    },

    fontFamily:{
      body: ['Josefin Sans'],
      special: ['Roboto Flex'],
    },
  },
  plugins: [],
}


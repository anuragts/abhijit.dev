module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dce8f1",
        secondary: "#D6E6F2",
        third: "#769FCD",
      },
      fontFamily: {
        custom: ["Alata, sans-serif"],
      },
      screens: {
        sm: "450px",

        md: "768px",


        lg: "1350px",
      },
    },
  },
  plugins: [],
};

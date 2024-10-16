/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FAFAFA",
        "off-white": "#F3F3F3",
        primary: "#C80032",
        secondary: "#C80032",
      },
      width: {
        md: "1100px",
      },
      screens: {
        "custom-md": "1100px",
      },
      backgroundImage: {
        "gradient-header":
          "linear-gradient(to top, rgba(0, 0, 0, 0.75) 0.1%, rgba(0, 0, 0, 0) 90%)",
        
      },
    },
  },
  plugins: [],
};

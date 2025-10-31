/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      backgroundImage: {
        library: "url('./src/images/library-img.jpg')", // Adjusted path,
      },
      gradientColorStops: {
        "purple-500": {
          30: "rgba(141, 39, 174, 0.3)",
          50: "rgba(141, 39, 174, 0.5)",
        },
      },
      boxShadow: {
        custom:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      },
      colors: {
        plainpurple: "#8d27ae",
        pink: "#d9176d",
        grey: "#f3f3f3",
        white: "#fff",
        black: "#010101",
        "light-black": "#717171",
      },
      transitionProperty: {
        all: "all 300ms ease-in-out",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        "::-webkit-scrollbar": {
          width: "8px",
        },
        "::-webkit-scrollbar-thumb": {
          background: "linear-gradient(to bottom, #3B82F6, #7C3AED)", // from-blue-500 to-purple-600
          borderRadius: "10px",
          transition: "background 0.3s ease", // Add transition for smoothness
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "linear-gradient(to bottom, #4F46E5, #9333EA)", // Darker gradient on hover
        },
        "::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
      });
    },
  ],
};

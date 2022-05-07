module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Rubik", "sans-serif"],
        body: ["Open Sans", "sans-serif"]
      },
      colors: {
        // These are basically copies of Tailwind CSS's purple color palette. I
        // abstracted this color into a new name called "brand" so that you can
        // plug in your own brand color without having make changes in the code.
        brand: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87"
        }
      }
    }
  },
  plugins: [require("tailwind-scrollbar")]
};

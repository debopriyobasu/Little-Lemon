module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        markazi: ["Markazi Text", "serif"],
      },
      colors: {
        lemongreen: "#495e57",
        lemonyellow: "#f4ce14",
      },
      animation: {
        pulse: "pulse 3s infinite",
      },
    },
  },
  plugins: [],
};

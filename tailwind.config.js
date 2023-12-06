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
        lemonred: "#ee9972",
        lemonpink: "#fbdabb",
        lemonwhite: "#edefee",
        lemonblack: "#333333",
      },
      animation: {
        pulse: "pulse 3s infinite",
      },
    },
  },
  plugins: [],
};

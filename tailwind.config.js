module.exports = {
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      tablet: "768px",
      laptop: "992px",
      desktop: "1200px",
    },
    fontFamily: {
      Outfit: "Outfit",
    },
    extend: {
      backgroundImage: {
        "login-background": "url('src/assets/background/tower.jpg')",
      },
      colors: {
        primary: "var(--color-primary)",
        primary_light: "var(--color-primary-light)",
        primary_dark: "var(--color-primary-dark)",

        secondary: "var(--color-secondary)",
        secondary_dark: "var(--color-secondary-dark)",

        default_light: "var(--color-default-light)",
        default_dark: "var(--color-default-dark)",

        default: "var(--color-default)",
        base_light: "var(--color-base-light)",
        base_dark: "var(--color-base-dark)",

        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

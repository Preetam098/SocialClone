/** @type {import('tailwindcss').Config} */

function customColors(cssVar) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVar}))`;
  };
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "128px",
      },
    },

    extend: {
      colors: {
        neutral: {
          50: customColors("--c-neutral-50"),
          100: customColors("--c-neutral-100"),
          200: customColors("--c-neutral-200"),
          300: customColors("--c-neutral-300"),
          400: customColors("--c-neutral-400"),
          500: customColors("--c-neutral-500"),
          6000: customColors("--c-neutral-600"),
          700: customColors("--c-neutral-700"),
          800: customColors("--c-neutral-800"),
          900: customColors("--c-neutral-900"),
        },
        darkOrange: {
          50: customColors("--c-darkOrange-50"),
          100: customColors("--c-darkOrange-100"),
          200: customColors("--c-darkOrange-200"),
          300: customColors("--c-darkOrange-300"),
          400: customColors("--c-darkOrange-400"),
          500: customColors("--c-darkOrange-500"),
          6000: customColors("--c-darkOrange-600"),
          700: customColors("--c-darkOrange-700"),
          800: customColors("--c-darkOrange-800"),
          900: customColors("--c-darkOrange-900"),
        },
      },
    },
    extend: {},
  },
  
  plugins: [],
}
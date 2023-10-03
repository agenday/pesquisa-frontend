import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'charleston-green': '#282828',
        'auro-metal-saurus': '#837F74',
        ...defaultTheme.colors
      },
      fontFamily: {
        'lufga': ['Lufga', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}


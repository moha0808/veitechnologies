export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fde047', // Solar yellow
          DEFAULT: '#eab308',
          dark: '#ca8a04',
        },
        secondary: {
          light: '#4ade80', // Tech green
          DEFAULT: '#22c55e',
          dark: '#16a34a',
        },
        accent: {
          light: '#38bdf8', // Blue
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        unbounded: ['Unbounded', 'cursive'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

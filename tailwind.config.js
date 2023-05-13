/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      maxHeight: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}


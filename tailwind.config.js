/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'pop': ['Poppins', 'san-seief'],
      }
    },
  },
  plugins: [],
}


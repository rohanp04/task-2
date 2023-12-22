/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    // Specify the files that should be scanned for classes
    content: [
      './dist/**/*.html',
      // Add any other file types or paths that include your Tailwind CSS classes
    ],
  },
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}


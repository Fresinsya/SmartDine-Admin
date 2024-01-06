/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0F2167",
        "non-aktif": "#696767"
      },
      fontFamily: {
        "body": ["Poppins"]
      },
      }
    },

  plugins: [],
}


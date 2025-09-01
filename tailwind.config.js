/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
         molle: ['Molle'],
         test:['Carattere']
      },
    },
  },
  plugins: [],
}
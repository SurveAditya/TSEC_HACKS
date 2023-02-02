/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '600px',
        '100': '598px',  
        '200' : '800px',
      },

      spacing:{
        '128' : '500px',
        '132': '550px',
      },
      margin:{
        '128': '100px',
      }
    },
  },
  plugins: [],
}

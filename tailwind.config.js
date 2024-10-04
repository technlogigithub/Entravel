/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          "DEFAULT":'#081F2D',
          "light":"rgb(8 31 45 / 10%)"
        },
        "gray":{
          "light":"#6D7276",
          "extra-light":"#797979"
        }
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'], 
        display: 'Inter',
      },
      backgroundImage: {
        'hero-pattern': "url('/hero_img.jpg')",
      },
      screens:{
        "3xl":"1920px"
      },
      boxShadow: {
        'sm': '0 -3px 57px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
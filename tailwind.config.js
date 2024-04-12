/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      Mobile: "375px",
      Desktop: "900px"
    },
  
    extend: {  colors: {
      
Strong_Cyan: "hsl(171, 66%, 44%)",
Light_Blue: "hsl(233, 100%, 69%)",
Dark_Grayish_Blue: "hsl(210, 10%, 33%)",
Grayish_Blue: "hsl(201, 11%, 66%)"
    },
 
    },
  },
  plugins: [],
};


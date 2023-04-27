/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '360px',
      'md': '628px',
      'lg': '976px',
      'xl': '1600px',
      '2xl': '2070px',
    },
   
    extend: {
      colors:{
        'grey' : '#d1e0ea',
        'greyblue1' : '	#97b8cf',
        'greyblue2' : '	#99b9d0',
        'blue1' : '#719ebe',
        'GrizzliesBlue' :'#5D76A9',
        
      },
      width: {
        '128': '437px',
      },
      margin: {
        'mr' : '25rem',
      }
    },
  },
  plugins: [],
}

module.exports = {
  content: ['./*.html'],
  mode: 'jit',
    theme: {
      screens: {
        sm: '480px',
        smi: '575px',
        md: '768px',
        lg: '976px',
        slg: '1150px',
        xl: '1440px',
      },
      extend: {
        animation: {
          marquee: 'marquee 25s linear infinite',
          marquee2: 'marquee2 25s linear infinite',
        },
      colors: {
         nav1:'#041735',
         navBtn: 'rgb(255,146,126)',
         navBtn1: 'rgb(255,197,156)',
         navText: '#041735',
         btnCal: '#2845BA',
         sect1: 'rgba(40,69,186,0.1)',
         sectText: '#041735'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
}




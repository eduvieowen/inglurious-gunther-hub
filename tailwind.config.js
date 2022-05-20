module.exports = {
  content: [
    "./scripts/**/*.{html,js}",
    "./index.html"
  ],

  theme: {
    extend: {

      fontFamily: {
        body: ['Nunito']
      },

      boxShadow: {
        'round-b-2': '0px 0px 5px 2px rgb(0,0,0)',
        'round-w-2': '0px 0px 5px 2px rgb(255,255,255)',
      }
      
    },
  },
  
  darkMode: 'class',
  
  plugins: [],
}

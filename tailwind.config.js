/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{html,js}',
  './pages/**/*.{html,js}',
  './index.html',],
  theme: {
    extend: {
      fontFamily:{ 
        'HankenGrotesk':['Hanken-Grotesk']
      },

      colors:{
        'Lightred': 'hsl(0, 100%, 67%)',
        'Lightred-alpha': 'hsla(0, 100%, 67%,0.1)',
        'Orangey-yellow': 'hsl(39, 100%, 56%)',
        'Orangey-yellow-alpha': 'hsla(39, 100%, 56%,0.1)',
        'Greenteal': 'hsl(166, 100%, 37%)',
        'Greenteal-alpha':'hsla(166, 100%, 37%,0.1)',
        'Cobaltblue': 'hsl(234, 85%, 45%)',
        'Cobaltblue-alpha': 'hsla(234, 85%, 45%,0.1)',
        'Light-slate-blue': 'hsl(252, 100%, 67%)',
        'Light-royal-blue':'hsl(241, 81%, 54%)',
        'Violet-blue' : 'hsla(256, 72%, 46%, 1)',
        'Persian-blue': 'hsla(241, 72%, 46%, 0)',
        'White': 'hsl(0, 0%, 100%)',
        'Pale-blue': 'hsl(221, 100%, 96%)',
        'Light-lavender': 'hsl(241, 100%, 89%)',
        'Dark-gray-blue': 'hsl(224, 30%, 27%)',
        'Dark-gray-blue-alpha': 'hsla(224, 30%, 27%,0.1)'

      }
    },
  },
  plugins: [],
}


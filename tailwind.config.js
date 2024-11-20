/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'lime': 'hsl(61, 70%, 52%)',
        'lime-light': 'hsl(61, 66%, 71%)',
        'lime-lightest': 'hsl(60, 87%, 94%)',
        'red': 'hsl(4, 69%, 50%)',
        'white': 'hsl(0, 0%, 100%)',
        'slate-100': 'hsl(202, 86%, 94%)',
        'slate-300': 'hsl(203, 41%, 72%)',
        'slate-500': 'hsl(200, 26%, 54%)',
        'slate-700': 'hsl(200, 24%, 40%)',
        'slate-900': 'hsl(202, 55%, 16%)',
        'slate-1000': 'hsl(201, 64%, 9%)'
      },
    },
    screens: {
      'sm': '500px',
      'md': '600px',
      'lg': '800px',
      'xl': '1000px',
      '2xl': '1200px',
    },
  },
  plugins: [],
}


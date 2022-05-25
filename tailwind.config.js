module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        100: 'hsl(0, 0%, 100%)',
        75: 'hsla(0, 0%, 100%, 0.75)',
        60: 'hsla(0, 0%, 100%, 0.6)',
      },
      'dark-blue': 'hsl(233, 47%, 7%)',
      blue: 'hsl(244, 38%, 16%)',
      violet: {
        100: 'hsl(277, 64%, 61%)',
        75: 'hsla(277, 64%, 61%, 0.75)',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      lexendDeca: ['Lexend Deca', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};

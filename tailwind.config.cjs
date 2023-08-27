const typography = require('@tailwindcss/typography');
const rippleui = require('rippleui');

module.exports = ({
  content: ['./src/**/*.{html,js,svelte,ts}'],
  rippleui: {
    defaultStyle: false,
  },
	theme: {
	  colors: {
      'is-main': '#6E44FF',
      'is-block': '#FB8B24',
      'is-action': '#FFDD00',
      'is-success': '#20C9A2',
      'is-error': '#D20F46',
      'is-warn': '#D95030',
      'onmain': "#F8F32B",
      'onblock': "#FEFAE0",
      'onaction': "#20C9A2",
    },
    fontFamily: {
      header: ['Delius Unicase', 'Serif'],
      general: ['Neucha', 'cursive'],
      highlight: ["Rock Salt"],
    },
    spacing: {
      px: '1px',
      0: '0',
      5: '1rem',
      10: '2.5rem',
      20: '3rem',
      25: '4.5rem',
      30: '6rem',
      60: '12rem',
      120: '24rem',
      vh: '100vh',
      vw: '100vw',
      page: '300vh'
    },
		extend: {
		}
	},

	plugins: [typography, rippleui]
}); 

 

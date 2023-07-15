const typography = require('@tailwindcss/typography');
const konstaConfig = require('konsta/config')

module.exports = konstaConfig({
  content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
	  colors: {
      'main': '#4B4237',
      'blocks': '#D5A021',
      'action': '#EDE7D9',
      'success': '#EAF4D3',
      'error': '#C35831',
      'warning': '#FFE94E',
      'onmain': "#D5A021",
      'onblocks': "#4B4237",
    },
    fontFamily: {
      header: ['Graphik', 'monospace'],
      general: ['Merriweather', 'serif'],
      highlight: ["serif"],
    },
    spacing: {
      px: '1px',
      0: '0',
      5: '1rem',
      10: '2.5rem',
      20: '3rem',
      25: '4.5rem',
      30: '6rem',
      vh: '100vh',
      vw: '100vw',
    },
		extend: {}
	},

	plugins: [typography]
});

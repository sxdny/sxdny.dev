/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		'fontFamily': {
			'heading': ['"DM Mono"', 'sans-serif'],
			'inter' : ['Inter', 'sans-serif'],
		},
		extend: {
			animation: {
				fade: 'fadeOut 5s ease-in-out',
			},
			keyframes: theme => ({
				fadeOut: {
					'0%': { backgroundColor: theme('colors.red.300') },
					'100%': { backgroundColor: theme('colors.transparent') },
				},
			}),
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}

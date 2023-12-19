/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		'fontFamily': {
			'heading': ['"DM Mono"', 'sans-serif'],
			'inter' : ['Inter', 'sans-serif'],
		},
		extend: {
			screens: {
				'lg': '1150px',
				// => @media (min-width: 992px) { ... }
			},
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}

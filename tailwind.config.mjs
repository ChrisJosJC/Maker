/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"maker": "#D71D1E"
			},
			fontFamily: {
				poppins: ["Poppins", "sans"],
				overpass: ["Overpass Variable", "system-ui"]
			},
			animation: {
				'gradient': 'gradient 8s linear infinite',
			},
			keyframes: {
				'gradient': {
					to: { 'background-position': '200% center' },
				}
			}
		},
	},
	plugins: [
		require('@shrutibalasa/tailwind-grid-auto-fit'),
		animations
	],
}
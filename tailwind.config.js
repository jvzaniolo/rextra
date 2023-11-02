import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
}

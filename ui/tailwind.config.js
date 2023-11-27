/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{ts,js,svelte,html}'],
	theme: {
		extend: {},
		screens: {
			sm: '640px',
			md: '1024px',
			lg: '1280px',
		},
	},
	plugins: [],
}

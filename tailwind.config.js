/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class', // ⬅️ PENTING
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			},
		},
	},
	plugins: [],
}

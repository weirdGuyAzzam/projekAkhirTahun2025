{
	import('tailwindcss').Config;
}
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--primary) / <alpha-value>)',
				secondary: 'rgb(var(--secondary) / <alpha-value>)',
				accent: 'rgb(var(--accent) / <alpha-value>)'
			}
		}
	},
	plugins: []
};

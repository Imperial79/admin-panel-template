/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#eff5cc",
				primaryAccent: "#fcdcbd",
				button: "#fb923c",
				scaffold: "#f3f5ec",
				secondary: "#181818",
				border: "#f3f5ec",
			},
		},
	},
	plugins: [],
};

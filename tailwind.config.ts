import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#e35f63",
				secondary: "#e7c4c3",
				// tertiary: "#403d39",
				shadow: "#e1ded3",
				text: "#242833",
				button: "#242833",
				bg: "#f0eee2",
				bgLight: "#fdfcf7",
			},
		},
	},
	plugins: [],
};
export default config;

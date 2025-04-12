/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./lista-presentes.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary": "#AC2367", // rosa-forte - cor principal do tema
				"rosa-forte": "#AC2367", //alias

				"secondary": "#D7506E", // rosa-claro - cor secundária				
				"rosa-claro": "#D7506E", //alias

				// Cores neutras e de apoio
				"terracota": "#FA7053", // cor neutra/destaque quente
				"amarelo-queimado": "#FCCF98", // cor neutra clara
				"amarelo-summer": "#F7AE47", // cor neutra média
				"verde-musgo": "#6D6F4A", // cor neutra escura para textos

				// Que eu escolhi manualmente
				"soft-green": "#E8F3E8",
				"soft-cream": "#FDF5E6",
				"dark-gray": "#4A4A4A",
				"pale-pink": "#F8D7DA",
				"elegant-pink": "#D4668F",
			},
			fontFamily: {
				dancing: ["Dancing Script", "cursive"],
				lato: ["Lato", "sans-serif"],
				raleway: ["Raleway", "sans-serif"],
				opensans: ["Open Sans", "sans-serif"],
				delius: ["Delius", "cursive"],
			},
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};

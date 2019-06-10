import { Environment } from "./model/environment"

import devIcon from './assets/img/dev.jpg'

// global environement variables 
export const environment: Environment = {
	production: false,
	initConfig: {
		navBar: {
			logo: "./assets/img/logo.png",
			links: [
				{
					label: "Accueil",
					path: "/home",
					params: []
				},
				{
					label: "Réalisations",
					path: "/realisations",
					params: []
				},
				{
					label: "Contact",
					path: "/contact",
					params: []
				}
			]
		},
		home: {
			title: "Bienvenue sur mon Portfolio",
			highlight: "Augustin CHINI, jeune ingenieur curieux et passionné",
			welcome: "Diplome a l'ISIMA en 2016. Principalement en contact avec des technologies web (JS, Angular, .NET ...) et des bases de donnees NoSQL. J'ai appris a me specialiser dans ces technologies qui sont aujourd'hui mes domaines d'experise. J'apprend et viens en aide avec plaisir dans l'environement ou j'evolue. Les relations humaines et les echanges au sein de l'equipe sont pour moi crucial pour mener a bien un projet.",
			sections: [
				{
					picture: devIcon,
					alt: "description de logo",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas metus. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eros dui, mattis vitae lorem in, sodales porttitor massa. Curabitur varius quam mauris, eget pellentesque diam pulvinar nec. Nulla facilisi. "
				},
				{
					picture: devIcon,
					alt: "description de logo",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas metus. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. "
				},
				{
					picture: devIcon,
					alt: "description de logo",
					description: "Ut elementum sed sapien a ornare. Vestibulum sed lectus id ipsum facilisis dictum et vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer euismod augue a libero feugiat, nec malesuada urna fermentum. Ut est ipsum, mattis at erat eget, pulvinar co"
				}
			]
		},
		realisations: {
			title: "Mes réalisations",
			sections: [
				{
					id: "dev",
					icon: "./assets/img/dev.jpg",
					displayName: "Développement",
					projects: [
						{
							title: "Mon titre 1",
							description: "Je suis une description",
							icon: "./assets/img/dev.jpg",
							pictures: [
								{
									title: "Le titre d'une photo",
									description: "Je suis une autre descrption",
									source: "./assets/img/dev.jpg"
								},
								{
									title: "Le titre d'une photo",
									description: "Je suis une autre descrption",
									source: "./assets/img/dev.jpg"
								},
								{
									title: "Le titre d'une photo",
									description: "Je suis une autre descrption",
									source: "./assets/img/dev.jpg"
								}
							]
						}
					]
				},
				{
					id: "net",
					icon: "./assets/img/dev.jpg",
					displayName: "Réseaux",
					projects: [
						{
							title: "Mon titre 1",
							description: "Je suis une description",
							icon: "./assets/img/dev.jpg",
							pictures: [
								{
									title: "Le titre d'une photo",
									description: "Je suis une autre descrption",
									source: "./assets/img/dev.jpg"
								},
								{
									title: "Le titre d'une photo",
									description: "Je suis une autre descrption",
									source: "./assets/img/dev.jpg"
								},
								{
									title: "Le titre d'une photo",
									description: "Je suis une autre descrption",
									source: "./assets/img/dev.jpg"
								}
							]
						}
					]
				},
				{
					id: "graph",
					icon: "./assets/img/dev.jpg",
					displayName: "Graphisme",
					projects: [
						{
							title: "Mon titre 1",
							description: "Je suis une description",
							icon: "./assets/img/dev.jpg",
							pictures: [
								{
									title: "Le titre d'une photo",
									description: "Je suis une autre descrption",
									source: "./assets/img/dev.jpg"
								},
								{
									title: "Le titre d'une photo",
									description: "Je suis une autre descrption",
									source: "./assets/img/dev.jpg"
								},
								{
									title: "Le titre d'une photo",
									description: "Je suis une autre descrption",
									source: "./assets/img/dev.jpg"
								}
							]
						}
					]
				}
			]
		}
	}
}

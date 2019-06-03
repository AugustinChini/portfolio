import { Environment } from "./model/environment"

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
			welcome: "Augustin CHINI, un jeune ingénieur en informatique sorti de l’ISIMA en 2016, vous souhaite la bienvenue sur son",
			welcomePicture: "./assets/img/welcom.jpg",
			sections: [
				{
					picture: "./assets/img/dev.jpg",
					alt: "description de logo",
					description: "je suis une description 1"
				},
				{
					picture: "./assets/img/dev.jpg",
					alt: "description de logo",
					description: "je suis une description 2"
				},
				{
					picture: "./assets/img/dev.jpg",
					alt: "description de logo",
					description: "je suis une description 3"
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

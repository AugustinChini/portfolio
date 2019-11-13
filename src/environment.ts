import { Environment } from "./model/environment"

import devIcon from './assets/img/dev.jpg'
import devCategoryLogo from './assets/img/rea-dev.png'
import netCategoryLogo from './assets/img/rea-network.png'
import webCategoryLogo from './assets/img/rea-web.png'
import soleoTmbl from './assets/img/thumbnail-soleo.jpg'
import hotelTmbl from './assets/img/thumbnail-hotel.jpg'
import passerelleTmbl from './assets/img/thumbnail-passerelle.jpg'

// global environement variables 
export const environment: Environment = {
	production: false,
	initConfig: {
		navBar: {
			logo: "./assets/img/logo.png",
			hasHomeLink: true,
			links: [
				{
					label: "Accueil",
					path: "/",
					params: [],
					type: "link"
				},
				{
					label: "CV",
					path: "/cv",
					params: [],
					type: "link"
				},
				{
					label: "Réalisations",
					path: "/realisations",
					params: [],
					type: "link"
				},
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
					description: "Consectetur adipiscing elit. Curabitur vitae egestas metus. amet, consectetur adipiscing elit. Curabitur vitae egestas metus. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. "
				},
				{
					picture: devIcon,
					alt: "description de logo",
					description: "Amet, consectetur adipiscing elit. Curabitur vitae egestas metusUt elementum sed sapien a ornare. Vestibulum sed lectus id ipsum facilisis dictum et vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer euismod augue a libero feugiat, nec malesuada urna fermentum. Ut est ipsum, mattis at erat eget, pulvinar co"
				}
			]
		},
		realisations: {
			title: "Mes réalisations",
			sections: [
				{
					id: "dev",
					icon: devCategoryLogo,
					displayName: "Développement",
					alt: "dev section",
					projects: [
						{
							title: "Mon titre 1",
							description: "- Lors de mon stage de 3 mois dans le carde de mon DUT Services et Réseau de Communication. J'ai créé un site Web pour l'entreprise SOLEO qui est une entreprise de meusure en forage et cavitée. Ce site présente toute la documentation des outils utilisé par l'entreprise ainsi qu'une interface de gestion des clients de l'entreprise (avec stokage de document respectif à chaque client). Ainsi qu'une gestion de contenu par les membres de l'entreprise.",
							icon: "./assets/img/dev.jpg",
							keywords: "HTML - CSS - JavaScript(JQuery) - PHP - MySQL.",
							pictures: [
								{
									title: "Soleo",
									description: "Thumbnail soleo",
									source: soleoTmbl
								},
								{
									title: "Gestion d'hotel",
									description: "Thumbnail hotel",
									source: hotelTmbl
								},
								{
									title: "Association Passerelle",
									description: "Thumbnail passerelle",
									source: passerelleTmbl
								}
							]
						}
					]
				},
				{
					id: "net",
					icon: netCategoryLogo,
					displayName: "Réseaux",
					alt: "reseau section",
					projects: [
						{
							title: "Mon titre 1",
							description: "- Lors de mon stage de 3 mois dans le carde de mon DUT Services et Réseau de Communication. J'ai créé un site Web pour l'entreprise SOLEO qui est une entreprise de meusure en forage et cavitée. Ce site présente toute la documentation des outils utilisé par l'entreprise ainsi qu'une interface de gestion des clients de l'entreprise (avec stokage de document respectif à chaque client). Ainsi qu'une gestion de contenu par les membres de l'entreprise.",
							icon: "./assets/img/dev.jpg",
							keywords: "HTML - CSS - JavaScript(JQuery) - PHP - MySQL.",
							pictures: [
								{
									title: "Gestion d'hotel",
									description: "Thumbnail hotel",
									source: hotelTmbl
								},
								{
									title: "Soleo",
									description: "Thumbnail soleo",
									source: soleoTmbl
								},
								{
									title: "Association Passerelle",
									description: "Thumbnail passerelle",
									source: passerelleTmbl
								}
							]
						}
					]
				},
				{
					id: "graph",
					icon: webCategoryLogo,
					displayName: "Graphisme",
					alt: "graphisme section",
					projects: [
						{
							title: "Mon titre 1",
							description: "- Lors de mon stage de 3 mois dans le carde de mon DUT Services et Réseau de Communication. J'ai créé un site Web pour l'entreprise SOLEO qui est une entreprise de meusure en forage et cavitée. Ce site présente toute la documentation des outils utilisé par l'entreprise ainsi qu'une interface de gestion des clients de l'entreprise (avec stokage de document respectif à chaque client). Ainsi qu'une gestion de contenu par les membres de l'entreprise.",
							icon: "./assets/img/dev.jpg",
							keywords: "HTML - CSS - JavaScript(JQuery) - PHP - MySQL.",
							pictures: [
								{
									title: "Association Passerelle",
									description: "Thumbnail passerelle",
									source: passerelleTmbl
								},
								{
									title: "Soleo",
									description: "Thumbnail soleo",
									source: soleoTmbl
								},
								{
									title: "Gestion d'hotel",
									description: "Thumbnail hotel",
									source: hotelTmbl
								}
							]
						}
					]
				}
			]
		},
		cv: {
			title: "Mon CV",
			subtitle: "",
			description: "Vous pouvez consulter mon CV en ligne ci-dessous, ou bien le telecharger au format PDF en cliquand sur l'icone en bas de page. si vous avez des questions je suis a votre disposition, n'hesitez pas a me contacter et a organiser un entretiens.",
			sections: [
				{
					title: "Enseignements",
					htmlContent: "<h1>Test de contenu</h1>"
				},
				{
					title: "Expériences professionnelles",
					htmlContent: "<h1>Test de contenu</h1>"
				},
				{
					title: "Technologies",
					htmlContent: "<h1>Test de contenu</h1>"
				}
			]
		}
	}
}

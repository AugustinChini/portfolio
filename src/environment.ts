import { Environment } from "./model/environment"
import { FaMobileAlt, FaProjectDiagram, FaLaptopCode, FaDatabase } from 'react-icons/fa';

import mobilePicture from './assets/img/mobile.png'
import databasePicture from './assets/img/database.png'
import laptopCodePicture from './assets/img/laptop-code.png'
import rj45Picture from './assets/img/rj45.png'
import devCategoryLogo from './assets/img/rea-dev.png'
import netCategoryLogo from './assets/img/rea-network.png'
import webCategoryLogo from './assets/img/rea-web.png'
import laptopHomePicture from './assets/img/laptop.png'
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
			title: "Augustin CHINI",
			links: [
				{
					url: "#mobile",
					icon: FaMobileAlt,
					alt: "section mobile"
				}, {
					url: "#dev",
					icon: FaLaptopCode,
					alt: "section développement"
				}, {
					url: "#database",
					icon: FaDatabase,
					alt: "section mobile"
				}, {
					url: "#network",
					icon: FaProjectDiagram,
					alt: "section réseau"
				}
			],
			highlight: "jeune ingenieur curieux et passionné",
			welcome: "Diplome a l'ISIMA en 2016. Principalement en contact avec des technologies web (JS, Angular, .NET ...) et des bases de donnees NoSQL. J'ai appris a me specialiser dans ces technologies qui sont aujourd'hui mes domaines d'experise. J'apprend et viens en aide avec plaisir dans l'environement ou j'evolue. Les relations humaines et les echanges au sein de l'equipe sont pour moi crucial pour mener a bien un projet.",
			picture: laptopHomePicture,
			sections: [
				{
					picture: mobilePicture,
					alt: "description de logo",
					anchor: "mobile",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas metus. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eros dui, mattis vitae lorem in, sodales porttitor massa. Curabitur varius quam mauris, eget pellentesque diam pulvinar nec. Nulla facilisi. "
				},
				{
					picture: laptopCodePicture,
					anchor: "dev",
					alt: "description de logo",
					description: "Consectetur adipiscing elit. Curabitur vitae egestas metus. amet, consectetur adipiscing elit. Curabitur vitae egestas metus. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. "
				},
				{
					picture: databasePicture,
					anchor: "database",
					alt: "description de logo",
					description: "Amet, consectetur adipiscing elit. Curabitur vitae egestas metusUt elementum sed sapien a ornare. Vestibulum sed lectus id ipsum facilisis dictum et vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer euismod augue a libero feugiat, nec malesuada urna fermentum. Ut est ipsum, mattis at erat eget, pulvinar co"
				},
				{
					picture: rj45Picture,
					anchor: "network",
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
							title: "Curabitur vitae egestas metus",
							description: "- Lors de mon stage de 3 mois dans le carde de mon DUT Services et Réseau de Communication. J'ai créé un site Web pour l'entreprise SOLEO qui est une entreprise de meusure en forage et cavitée. Ce site présente toute la documentation des outils utilisé par l'entreprise ainsi qu'une interface de gestion des clients de l'entreprise (avec stokage de document respectif à chaque client). Ainsi qu'une gestion de contenu par les membres de l'entreprise.",
							thumbnail: soleoTmbl,
							keywords: "PYTHON - CSS - JavaScript(JQuery) - PHP - MySQL.",
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
						},
						{
							title: "Nulla facilisi",
							description: "-  De mon stage de 3 mois dans le carde de mon DUT Services et Réseau de Communication. J'ai créé un site Web pour l'entreprise SOLEO qui est une entreprise de meusure en forage et cavitée. Ce site présente toute la documentation des outils utilisé par l'entreprise ainsi qu'une interface de gestion des clients de l'entreprise (avec stokage de document respectif à chaque client). Ainsi qu'une gestion de contenu par les membres de l'entreprise.",
							thumbnail: hotelTmbl,
							keywords: "ANGULAR 2+ - CSS - JavaScript(JQuery) - PHP - MySQL.",
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
						},
						{
							title: "Aliquam erat volutpat",
							description: "- Stage de 3 mois dans le carde de mon DUT Services et Réseau de Communication. J'ai créé un site Web pour l'entreprise SOLEO qui est une entreprise de meusure en forage et cavitée. Ce site présente toute la documentation des outils utilisé par l'entreprise ainsi qu'une interface de gestion des clients de l'entreprise (avec stokage de document respectif à chaque client). Ainsi qu'une gestion de contenu par les membres de l'entreprise.",
							thumbnail: passerelleTmbl,
							keywords: "CSS - JavaScript(JQuery) - PHP - MySQL.",
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
							thumbnail: "./assets/img/dev.jpg",
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
							thumbnail: "./assets/img/dev.jpg",
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
			title: "Augustin CHINI",
			subtitle: "Eleve ingenieur",
			email: "augustin.chini@achini.fr",
			phone: "(+33) 665 12 34 56",
			localisation: {
				name: "Gaithersburg, MD (USA)",
				url: "https://www.google.com/maps/place/Gaithersburg,+Maryland"
			},
			website: "http://achini.fr",
			downloadLink: "./assets/downloads/Curriculum_vitae_V3.1_FR.pdf",
			description: "",
			sections: [
				{
					title: "Enseignements",
					htmlContent:
					`
						<p>&minus; <strong class="d-inline">2009-2018: </strong>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
						<p>&minus; <strong class="d-inline">2009-2018: </strong>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
						<p>&minus; <strong class="d-inline">2009-2018: </strong>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</p>
						<p>&minus; <strong class="d-inline">2009-2018: </strong>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</p>`
				},
				{
					title: "Expériences professionnelles",
					htmlContent:
					`<table class="w-100" style="padding: .3em">
						<tbody>
							<tr>
								<td style="width:50%;border-right:solid 2px #0072d4">
									<strong>&minus; Feb. 2018: Morbi in sem quis dui placerat ornare.</strong>
									<small class="ml-1">Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</small>
									<p class="blue mt-0 ml-1 inter-line"> &rarr; AngularJS, JavaScript, Cordova, Ionic, HTML, C# .NET, WCF</p>
								</td>
								<td style="width:50%">
									<strong>&minus; Feb. 2018: Morbi in sem quis dui placerat ornare.</strong>
									<small class="ml-1">Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</small>
									<p class="blue mt-0 ml-1 inter-line"> &rarr; AngularJS, JavaScript, Cordova, Ionic, HTML, C# .NET, WCF</p>
								</td>
							</tr>
							<tr>
								<td style="width:50%;border-right:solid 2px #0072d4">
									<strong>&minus; Feb. 2018: Morbi in sem quis dui placerat ornare.</strong>
									<small class="ml-1">Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</small>
									<p class="blue mt-0 ml-1 inter-line"> &rarr; AngularJS, JavaScript, Cordova, Ionic, HTML, C# .NET, WCF</p>
								</td>
								<td style="width:50%">
									<strong>&minus; Feb. 2018: Morbi in sem quis dui placerat ornare.</strong>
									<small class="ml-1">Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</small>
									<p class="blue mt-0 ml-1 inter-line"> &rarr; AngularJS, JavaScript, Cordova, Ionic, HTML, C# .NET, WCF</p>
								</td>
							</tr>
							<tr>
								<td style="width:50%;border-right:solid 2px #0072d4">
									<strong>&minus; Feb. 2018: Morbi in sem quis dui placerat ornare.</strong>
									<small class="ml-1">Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</small>
									<p class="blue mt-0 ml-1 inter-line"> &rarr; AngularJS, JavaScript, Cordova, Ionic, HTML, C# .NET, WCF</p>
								</td>
							</tr>
						</tbody>
				  </table>`
				},
				{
					title: "Technologies",
					htmlContent:
					`<table class="w-100" style="padding: .3em">
						<tbody>
							<tr>
								<td style="width:33%;border-right:solid 2px #0072d4;text-align:center">
									<span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
									<strong class="d-inline"> HTML / CSS</strong>
								</td>
								<td style="width:33%;border-right:solid 2px #0072d4;text-align:center">
									<span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
									<strong class="d-inline"> HTML / CSS</strong>
								</td>
								<td style="width:33%;text-align:center">
									<span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
									<strong class="d-inline"> HTML / CSS</strong>
								</td>
							</tr>
							<tr>
								<td style="width:33%;border-right:solid 2px #0072d4;text-align:center">
									<span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
									<strong class="d-inline"> HTML / CSS</strong>
								</td>
								<td style="width:33%;border-right:solid 2px #0072d4;text-align:center">
									<span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
									<strong class="d-inline"> HTML / CSS</strong>
								</td>
								<td style="width:33%;text-align:center">
									<span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
									<strong class="d-inline"> HTML / CSS</strong>
								</td>
							</tr>
							<tr>
								<td style="width:33%;border-right:solid 2px #0072d4;text-align:center">
									<span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
									<strong class="d-inline"> HTML / CSS</strong>
								</td>
								<td style="width:33%;border-right:solid 2px #0072d4;text-align:center">
									<span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
									<strong class="d-inline"> HTML / CSS</strong>
								</td>
								<td style="width:33%;text-align:center">
									<span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
									<strong class="d-inline"> HTML / CSS</strong>
								</td>
							</tr>
						</tbody>
				  </table>`
				}
			]
		}
	}
}

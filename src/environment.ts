import { Environment } from "./model/environment"
import { FaMobileAlt, FaProjectDiagram, FaLaptopCode, FaDatabase } from 'react-icons/fa';

import mobilePicture from './assets/img/mobile.png'
import databasePicture from './assets/img/database.png'
import laptopCodePicture from './assets/img/laptop-code.png'
import rj45Picture from './assets/img/rj45.png'
import mobileCategoryLogo from './assets/img/rea-mobile.png'
import netCategoryLogo from './assets/img/rea-network.png'
import webCategoryLogo from './assets/img/rea-web.png'
import laptopHomePicture from './assets/img/laptop.png'
import soleoTmbl from './assets/img/thumbnail-soleo.jpg'
import zzchatTmbl from './assets/img/thumbnail-zzchat.png'
import hotelTmbl from './assets/img/thumbnail-hotel.jpg'
import passerelleTmbl from './assets/img/thumbnail-passerelle.jpg'
import zzcloudTmbl from './assets/img/thumbnail-zzcloud.png'
import idelizyTmbl from './assets/img/thumbnail-idelizy.png'
import scanTmbl from './assets/img/thumbnail-scan.png'
import cdcsTmbl from './assets/img/thumbnail-cdcs.png'
import anaeeTmbl from './assets/img/thumbnail-anaee.png'
import soleo2 from './assets/img/web1.png'
import soleo1 from './assets/img/web2.png'
import soleo3 from './assets/img/web3.png'
import soleo4 from './assets/img/web4.png'
import zzchat1 from './assets/img/web5.png'
import zzchat2 from './assets/img/web6.png'
import cdcs1 from './assets/img/web7.png'
import cdcs2 from './assets/img/web8.png'
import cdcs3 from './assets/img/web9.png'
import cdcs4 from './assets/img/web10.png'
import anaee1 from './assets/img/web11.png'
import anaee2 from './assets/img/web12.png'
import mobile1 from './assets/img/mob1.png'
import mobile2 from './assets/img/mob2.png'
import mobile3 from './assets/img/mob3.png'
import mobile4 from './assets/img/mob4.png'
import mobile5 from './assets/img/mob5.png'

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
					id: "web",
					icon: webCategoryLogo,
					displayName: "Web",
					alt: "web section",
					projects: [
						{
							title: "CDCS",
							description: "- Depuis Janvier 2019 j’ai eu l’opportunité de partir au États-Unis pour travailler au NIST (National Institute of Standards and Technologies). Il s’agit d’un laboratoire du gouvernement qui mène des travaux de recherches dans des domaines très varier comme la robotique, l’intelligence artificielle, la résistance de matériaux et bien d’autres. J’ai intégré l’équipe CDCS (Configurable Data Curation System) qui maintient une application de stockage et d’échange de données entre différentes équipes de scientifiques à travers le monde. Ce système ne repose pas sur un modèle de donné précis, il est entièrement configurable et s’adapte à chaque domaine scientifique ciblé. Avec l’équipe de développement nous assurions le maintien de l’application, j’ai principalement travaillé sur les implémentations du cœur de l’application en fonction des demandes des clients. J’ai aussi travaillé sur le cycle de release de l’application (script de montée de version, push et tag sur les différents repositories et livraison des package d’application) pour finir j’ai aussi mené à bien plusieurs migrations une première sur les bibliothèques frontend de l’application, et la migration de la base de données MongoDB.",
							thumbnail: cdcsTmbl,
							keywords: "Python(Django) - HTML / CSS - JavaScript(JQuery) - MongoDB.",
							pictures: [
								{
									title: "Material Resource Registry",
									description: "Page d'acuueil d'un site exemple utilisant le coeur CDCS",
									source: cdcs1
								},
								{
									title: "Recherche",
									description: "Outil de recherche de données",
									source: cdcs2
								},
								{
									title: "Detail",
									description: "Page de detail d'une data",
									source: cdcs3
								},
								{
									title: "COVID-19 Data repository",
									description: "Exemple d'utilisation du CDCS pour aider dans les recherches contre le COVID-19",
									source: cdcs4
								}
							]
						},
						{
							title: "ANAEE",
							description: "- Pour clore ma seconde année à l’ISIMA j’ai eu l’opportunité l’intégrer l’INRA (Institut National de la Recherche Agronomique) de Toulouse. Ma mission au sein de l’équipe était d’implémenter une modélisation Mathématique de la concentration de carbone dans le sol et d’intégrer ce modèle a un moteur de simulation (VLE). Une fois cette intégration faite j’ai créé un module Joomla qui exploite l’API REST du moteur de simulation VLE et fait un rendu graphique (tracé de courbes) consultable par la communauté scientifique.",
							thumbnail: anaeeTmbl,
							keywords: "C++ - HTML / CSS - JavaScript(JQuery) - Django REST framework - JOOMLA.",
							pictures: [
								{
									title: "Page d'accueil du projet ANAEE",
									description: "Le projet ANAEE à pour but de regrouper des plateformes de modèlisation afin rendre les recherches plus simple pour les scientifiques.",
									source: anaee1
								},
								{
									title: "Plateforme de simulation",
									description: "Ce site regroupe toute les plateformes de simulations, dont celle sur laquelle j'ai travaillé",
									source: anaee2
								}
							]
						},
						{
							title: "SOLEO Logging",
							description: "- Lors de mon stage de 3 mois dans le carde de mon DUT Services et Réseau de Communication. J'ai créé un site Web pour l'entreprise SOLEO qui est une entreprise de meusure en forage et cavitée. Ce site présente toute la documentation des outils utilisé par l'entreprise ainsi qu'une interface de gestion des clients de l'entreprise (avec stokage de document respectif à chaque client). Ainsi qu'une gestion de contenu par les membres de l'entreprise.",
							thumbnail: soleoTmbl,
							keywords: "PHP - HTML / CSS - JavaScript(JQuery) - MySQL - SFTP.",
							pictures: [
								{
									title: "Galerie d'images",
									description: "Chaque fiche technique des outils de l’entreprise est consultable sur le site.",
									source: soleo1
								},
								{
									title: "Fiches techniques",
									description: "L'entreprise SOLEO souhaitait une galerie photo de ces observations",
									source: soleo2
								},
								{
									title: "Administration",
									description: "Le site est administrable configurable de nouvelles fiches technique peuvent être ajouté est des fichiers peuvent être partagés avec les clients sur un cloud interne.",
									source: soleo3
								},
								{
									title: "Accueil",
									description: "Sur la page d’accueil on retrouve tous les domaines d’action de l’entreprise.",
									source: soleo4
								}
							]
						},
						{
							title: "ZZchat",
							description: "- Lors ma deuxième année à l’ISIMA j’ai créé une application de chat interne à l’école dans le cadre d’un projet encadré par des professeurs. Ce projet m’a permis d’appréhender les premières difficultés liées à des projets temps réel. Ce chat est fait en PHP est m’a aussi permis de comprendre le fonctionnement les cookies et des informations session d’un utilisateur. Ce type de stockage de données en grand volume et sans liens très complexe entre elles m’a amené vers le système de gestion de base de données MongoDB.",
							thumbnail: zzchatTmbl,
							keywords: "PHP - HTML / CSS - JavaScript(JQuery) - MongoDB.",
							pictures: [
								{
									title: "Soleo",
									description: "Thumbnail soleo",
									source: zzchat1
								},
								{
									title: "Gestion d'hotel",
									description: "Thumbnail hotel",
									source: zzchat2
								}
							]
						},
						{
							title: "Gestion Hôtel",
							description: "-  Lors de ma première année en DUT SRC j’ai créé un site de gestion d’un Hôtel encadré par les professeurs ce projet a été la première réalisation d’un projet complet. Il est certes très simpliste mais m’a permis de mettre en application les notions de base de données relationnelles et réfléchir à un modèle de données. Ce site permet aux utilisateurs de réserver des chambres et des tabes au restaurants. Les chambres et tables disponibles pour chaque jour sont rentré par le biais d’une interface d’administration.",
							thumbnail: hotelTmbl,
							keywords: "HTML / CSS - JavaScript - PHP - MySQL.",
							pictures: [
								{
									title: "Gestion d'Hôtel",
									description: "Page d'accueil",
									source: hotelTmbl
								}
							]
						},
						{
							title: "Assotiation Passerelle",
							description: "- Le projet Passerelle est un projet que mon équipe et moi avons mené à bien pour valider mon diplôme de fin d’année. L’association Passerelle vient en aide aux personnes en difficulté notamment en les aidant à trouver un emploi. Le but étant de renouveler le site de l’association Passerelle. Ce projet a été très enrichissant pour moi car il m’a permis de mener à bien un projet qui faisait intervenir diffèrent corps de métiers (graphiste, responsable de communication et développeur web).",
							thumbnail: passerelleTmbl,
							keywords: "HTML / CSS - JavaScript(JQuery)",
							pictures: [
								{
									title: "Association Passerelle",
									description: "Page d'accueil",
									source: passerelleTmbl
								}
							]
						}
					]
				},
				{
					id: "mob",
					icon: mobileCategoryLogo,
					displayName: "Mobile",
					alt: "mobile section",
					projects: [
						{
							title: "CALAOSOFT",
							description: "-  Pour ma dernière année à l’ISIMA j’ai eu la chance d’entrer en stage dans l’entreprise CALAO. Cette entreprise crée des solutions mobiles pour adresser des problèmes que rencontre les professionnels. Les secteurs concernés sont très variés (Santé, merchandising …) et cela grâce a un cœur d’application très modulaire. J’ai été lead développeur dans cette équipe pendant 3ans ma mission consistait à architecturer le cœur de l’application, aider les équipes de dev, et gérer la repartissions des taches pour chaque sprint. Si vous souhaitez plus d’information à propos des applications mobiles crées par calao vous pouvez visitez le site ( https://www.calaosoft.fr/ ou bien https://www.idelizy.fr/).",
							thumbnail: idelizyTmbl,
							keywords: "ANGULAR 2+ - TypeScript - Ionic 4 - HTML / CSS - CouchDB.",
							pictures: []
						},
						{
							title: "VitalScan",
							description: "- Pendant mon temps libre je me suis penché sur un projet d’ORM permettant d’extraire les données d’un type de documents prédéfini (ici une carte vitale). Le projet utilise une expression régulière pour identifier la donnée attendue. Si la donnée scannée correspond à l’expression régulière elle sera envoyée et remplira un formulaire automatiquement. Je voulais voir s’il était possible de fournir ce genre de services plutôt orienté ‘hardware’ dans une application hybride crée avec le framework IONIC. Le résultat a été très concluant et cela en mixant une webview (affichage graphique carte vitale et bouton déclencheur de l’appareil photo) et une vue native (appareil photo + reconnaissance de caractères en temps réel) sur le même écran.",
							thumbnail: scanTmbl,
							keywords: "ABBYY - Tesseract OCR Engine - JAVA - TypeScript.",
							pictures: [
								{
									title: "Association Passerelle",
									description: "Thumbnail passerelle",
									source: mobile4
								},
								{
									title: "Association Passerelle",
									description: "Thumbnail passerelle",
									source: mobile5
								}
							]
						},
						{
							title: "ZZcloud",
							description: "- La direction de mon école d’ingénieur avait le projet d’offrir un espace de stockage personnel pour chaque élève. L’école a choisi la solution open source Owncloud pour répondre à cette demande. Par la suite mon équipe et moi avons soumis l’idée de développer un application mobile gratuite pour permettre aux élèves d’utiliser lors espace de stockage à partir de lors mobile. Nous avons donc développé un client mobile pour Owncloud (un client mobile développé par Owncloud existe déjà sur les stores mais n’est pas gratuit). Le projet à été mené à bien. Il inclus un calendrier, un explorateur du système de fichier Owncloud, le téléchargement et l’upload de fichiers et un visionneur de fichier pour les fichiers les plus communs (pdf, docx, jpeg, cpp, txt, png … ).",
							thumbnail: zzcloudTmbl,
							keywords: "HTML / CSS - ANGULARJS - IONIC v1",
							pictures: [
								{
									title: "Page d'accueil",
									description: "Page d'accueil avec le calendrier, les fichiers recents, et une prise de note.",
									source: mobile1
								},
								{
									title: "Menu latéral",
									description: "Menu lateral",
									source: mobile2
								},
								{
									title: "Page de login",
									description: "Page de login, fonctionnant avec l'authentification IMAP de l'ecole.",
									source: mobile3
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

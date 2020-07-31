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
import imapTmbl from './assets/img/thumbnail-imap.png'
import tradingTmbl from './assets/img/thumbnail-trading.jpg'
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
			highlight: "Jeune ingénieur curieux et passionné",
			welcome: "Diplomé à l'ISIMA en 2016. Principalement en contact avec des technologies web (JS, Angular, .NET ...) et des bases de données NoSQL. J'ai appris à me spėcialiser dans ces technologies qui sont aujourd'hui mes domaines d'expertise. J'apprends et viens en aide avec plaisir dans l'environement où j'évolue. Les relations humaines et les échanges au sein de l'équipe sont pour moi cruciaux pour mener à bien un projet.",
			picture: laptopHomePicture,
			sections: [
				{
					picture: mobilePicture,
					alt: "description de logo",
					anchor: "mobile",
					description: "Mes premières expériences dans le monde du travail et mes premiers projets étaient plus orientés vers des technologies Web comme le PHP Angular ou bien en C# avec de l’ASP.NET. Puis un jour j’ai découvert les applications mobiles hybrides, et j’ai trouvé que c’était une idée géniale. C’est un domaine qui m’a énormément plu, depuis mes débuts avec AngularJS et Ionic Framework puis Angular et Ionic4. Avec le temps mes compétences se sont améliorées. J’ai commencé à travailler sur l’interface entre la partie Web et la partie native de mes applications en créant des plugins Ionic native en JAVA et ObjectiveC permettant le dialogue entre la WebView et la partie native du mobile (notamment avec le Bluetooth et un moteur OCR trop complexe à traiter en JavaScript). Puis toujours intéressé par de nouvelles découvertes je travaille sur une application PWA pour mes besoins personnels avec du React."
				},
				{
					picture: laptopCodePicture,
					anchor: "dev",
					alt: "description de logo",
					description: "Comme dit précédemment dans la section mobile j’adore les technologies Web. J’ai travaillé pendant plus de deux ans avec le Framework Angular, et réalisé quelques projets en utilisant React et TypeScript. Ces technologies Front-end sont avec le temps devenues mon domaine d’expertise et j’ai occupé le rôle de lead développeur, aidant les équipes à résoudre des problèmes, veillant à la qualité du code et créant une architecture modulable et facile à maintenir. J’ai aussi travaillé sur des projets de simulation en C++ pour l’INRA (Institut National de la Recherche Agronomique) et implémenté un modèle de reconstruction 3D Structure for Motion en C++ avec la bibliothèque CSV."
				},
				{
					picture: databasePicture,
					anchor: "database",
					alt: "description de logo",
					description: "Après avoir été diplômé j’avais surtout des connaissances dans le domaine des systèmes de gestion de base de données relationnelles, comme MySQL ou SQlite. Mais par la suite dans les projets pour lesquels j’ai travaillé je me suis petit à petit dirigé vers les le NoSQL. Pendant 3 ans j’ai travaillé avec CouchDB et PouchDB pour leurs facultés de synchronisation mobile. Cette expérience NoSQL m’a permis de comprendre en profondeur comment un moteur de gestion de données NoSQL fonctionne car sur des plateformes comme les mobiles, les ressources sont limitées et impactent très rapidement l’expérience utilisateur. J’ai aussi par la suite beaucoup travaillé avec MongoDB, je me suis chargé d’une migration et des scripts de maintenance du système."
				},
				{
					picture: rj45Picture,
					anchor: "network",
					alt: "description de logo",
					description: "Le réseau n’est pas mon domaine de prédilection, je l’ai choisi en option lors de mes dernières années d’école d’ingénieur. Afin d’apprendre sur un sujet qui est omniprésent mais que je connaissais si peux. J’ai donc dans le cadre de mon diplôme passé la certification CCNA (1-4). Cela m’a permis de comprendre comment internet et les réseaux locaux fonctionnent. Malgré le fait que ce ne soit pas mon axe principal je me sers assez régulièrement des connaissances en réseaux dans mon travail. Ça permet une compréhension plus précise de ce qui se passe lors d’un appel REST par exemple."
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
							description: "- Depuis Janvier 2019 j’ai eu l’opportunité de partir au États-Unis pour travailler au NIST (National Institute of Standards and Technologies). Il s’agit d’un laboratoire du gouvernement qui mène des travaux de recherches dans des domaines très variés comme la robotique, l’intelligence artificielle, la résistance de matériaux et bien d’autres. J’ai intégré l’équipe CDCS (Configurable Data Curation System) qui maintient une application de stockage et d’échange de données entre différentes équipes de scientifiques à travers le monde. Ce système ne repose pas sur un modèle de données précis, il est entièrement configurable et s’adapte à chaque domaine scientifique ciblé. Avec l’équipe de développement nous assurons le maintien de l’application, j’ai principalement travaillé sur les implémentations du cœur de l’application en fonction des demandes des clients. J’ai aussi travaillé sur le cycle de release de l’application (script de montée de version, push et tag sur les différents repositories et livraison des packages d’application) pour finir j’ai aussi mené à bien plusieurs migrations, une première sur les bibliothèques frontend de l’application, et la migration de la base de données MongoDB.",
							thumbnail: cdcsTmbl,
							keywords: "Python(Django) - HTML / CSS - JavaScript(JQuery) - MongoDB.",
							pictures: [
								{
									title: "Material Resource Registry",
									description: "Page d'accueil d'un site exemple utilisant le coeur CDCS",
									source: cdcs1
								},
								{
									title: "Recherche",
									description: "Outil de recherche de données",
									source: cdcs2
								},
								{
									title: "Detail",
									description: "Page de détail d'une data",
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
							description: "- Pour clore ma seconde année à l’ISIMA j’ai eu l’opportunité d’intégrer l’INRA (Institut National de la Recherche Agronomique) de Toulouse. Ma mission au sein de l’équipe était d’implémenter une modélisation Mathématique de la concentration de carbone dans le sol et d’intégrer ce modèle à un moteur de simulation (VLE). Une fois cette intégration faite j’ai créé un module Joomla qui exploite l’API REST du moteur de simulation VLE et fait un rendu graphique (tracé de courbes) consultable par la communauté scientifique.",
							thumbnail: anaeeTmbl,
							keywords: "C++ - HTML / CSS - JavaScript(JQuery) - Django REST framework - JOOMLA.",
							pictures: [
								{
									title: "Page d'accueil du projet ANAEE",
									description: "Le projet ANAEE a pour but de regrouper des plateformes de modèlisation afin de rendre les recherches plus simples pour les scientifiques.",
									source: anaee1
								},
								{
									title: "Plateforme de simulation",
									description: "Ce site regroupe toutes les plateformes de simulations, dont celle sur laquelle j'ai travaillé",
									source: anaee2
								}
							]
						},
						{
							title: "SOLEO Logging",
							description: "- Lors de mon stage de 3 mois dans le cadre de mon DUT Services et Réseau de Communication. J'ai créé un site Web pour l'entreprise SOLEO qui est une entreprise de meusures en forage et cavitée. Ce site présente toute la documentation des outils utilisés par l'entreprise ainsi qu'une interface de gestion des clients de l'entreprise (avec stokage de documents respectifs à chaque client). Ainsi qu'une gestion de contenu par les membres de l'entreprise.",
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
									description: "Le site est administrable configurable, de nouvelles fiches techniques peuvent être ajoutées et des fichiers peuvent être partagés avec les clients sur un cloud interne.",
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
							description: "- Lors ma deuxième année à l’ISIMA j’ai créé une application de chat interne à l’école dans le cadre d’un projet encadré par des professeurs. Ce projet m’a permis d’appréhender les premières difficultés liées à des projets en temps réel. Ce chat est fait en PHP et m’a aussi permis de comprendre le fonctionnement des cookies et des informations session d’un utilisateur. Ce type de stockage de données en grand volume et sans liens très complexe entre elles m’a amené vers le système de gestion de base de données MongoDB.",
							thumbnail: zzchatTmbl,
							keywords: "PHP - HTML / CSS - JavaScript(JQuery) - MongoDB.",
							pictures: [
								{
									title: "Page principale",
									description: "Exemple de discution",
									source: zzchat1
								},
								{
									title: "Page de login",
									description: "Page de login",
									source: zzchat2
								}
							]
						},
						{
							title: "Gestion Hôtel",
							description: "-  Lors de ma première année en DUT SRC j’ai créé un site de gestion d’un Hôtel encadré par les professeurs. Ce projet a été la première réalisation d’un projet complet. Il est certes très simpliste mais m’a permis de mettre en application les notions de base de données relationnelles et réfléchir à un modèle de données. Ce site permet aux utilisateurs de réserver des chambres et des tables au restaurant. Les chambres et tables disponibles pour chaque jour sont rentrés par le biais d’une interface d’administration.",
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
							title: "Association Passerelle",
							description: "- Le projet Passerelle est un projet que mon équipe et moi avons mené à bien pour valider mon diplôme de fin d’année. L’association Passerelle vient en aide aux personnes en difficulté notamment en les aidant à trouver un emploi. Le but étant de renouveler le site de l’association Passerelle. Ce projet a été très enrichissant pour moi car il m’a permis de mener à bien un projet qui faisait intervenir diffèrents corps de métiers (graphiste, responsable de communication et développeur web).",
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
							description: "-  Pour ma dernière année à l’ISIMA j’ai eu la chance d’entrer en stage dans l’entreprise CALAO. Cette entreprise crée des solutions mobiles pour adresser des problèmes que rencontre les professionnels. Les secteurs concernés sont très variés (Santé, merchandising …) et cela grâce à un cœur d’application très modulaire. J’ai été lead développeur dans cette équipe pendant 3 ans, ma mission consistait à architecturer le cœur de l’application, aider les équipes de dev, et gérer la répartitions des tâches pour chaque sprint. Si vous souhaitez plus d’information à propos des applications mobiles crées par calao vous pouvez visitez le site ( https://www.calaosoft.fr/ ou bien https://www.idelizy.fr/).",
							thumbnail: idelizyTmbl,
							keywords: "ANGULAR 2+ - TypeScript - Ionic 4 - HTML / CSS - CouchDB.",
							pictures: []
						},
						{
							title: "VitalScan",
							description: "- Pendant mon temps libre je me suis penché sur un projet d’ORM permettant d’extraire les données d’un type de documents prédéfini (ici une carte vitale). Le projet utilise une expression régulière pour identifier la donnée attendue. Si la donnée scannée correspond à l’expression régulière elle sera envoyée et remplira un formulaire automatiquement. Je voulais voir s’il était possible de fournir ce genre de services plutôt orientés‘hardware’ dans une application hybride crée avec le framework IONIC. Le résultat a été très concluant et cela en mixant une webview (affichage graphique carte vitale et bouton déclencheur de l’appareil photo) et une vue native (appareil photo + reconnaissance de caractères en temps réel) sur le même écran.",
							thumbnail: scanTmbl,
							keywords: "ABBYY - Tesseract OCR Engine - JAVA - TypeScript.",
							pictures: [
								{
									title: "Page de test",
									description: "Résultat d'un scan de carte vital",
									source: mobile4
								},
								{
									title: "Scan",
									description: "Interface de scan, avec zone de capture",
									source: mobile5
								}
							]
						},
						{
							title: "ZZcloud",
							description: "- La direction de mon école d’ingénieur avait le projet d’offrir un espace de stockage personnel pour chaque élève. L’école a choisi la solution open source Owncloud pour répondre à cette demande. Par la suite mon équipe et moi avons soumis l’idée de développer un application mobile gratuite pour permettre aux élèves d’utiliser leurs espace de stockage à partir de leurs mobile. Nous avons donc développé un client mobile pour Owncloud (un client mobile développé par Owncloud existe déjà sur les stores mais n’est pas gratuit). Le projet a été mené à bien. Il inclus un calendrier, un explorateur du système de fichier Owncloud, le téléchargement et l’upload de fichiers et un visionneur de fichiers pour les fichiers les plus communs (pdf, docx, jpeg, cpp, txt, png … ).",
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
									description: "Page de login, fonctionnant avec l'authentification IMAP de l'école.",
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
					alt: "réseau section",
					projects: [
						{
							title: "IMAP connecteur",
							description: "- La direction de mon école d’ingénieur avait le projet d’offrir un espace de stockage personnel pour chaque élève. L’école a choisi la solution open source Owncloud pour répondre à cette demande. Le problème qui a vite été soulevé est que cette solution de cloud a son propre système d’authentification. Ce system fait doublon avec la base de données des élèves de mon école, donc deux login différents deux mots de passe diffèrents à retenir pour les élèves. J’ai donc modifié le système d’authentification d’OwnCloud pour qu’il utilise le serveur IMAP de l’école pour authentifier les élèves de l’école.",
							thumbnail: imapTmbl,
							keywords: "PHP - MySQL - Protocole IMAP",
							pictures: []
						},
						{
							title: "AlgoTrader",
							description: "- Avec des amis nous nous sommes intéressés au trading et plus particulièrement au trading automatisé. Nous avons donc mis en place une plateforme modulaire offrant des outils facilitant le trading. Comme des alertes en fonction de l’état du marché qui envoient des Web notifications sur nos smartphones. Une interface d’accueil de robot-trading qui opère des transactions d’achat set de ventes. Des tests de stratégies dans le passé avec export des gains théoriques pour éprouver et aider à construire une stratégie efficace. Cette plateforme a été codée en NodeJS en TypeScript avec une base de données MongoDB. Pour le front-end il a été réalisé en React. Le backend NodeJS expose uniquement des end points REST qui sont consommés oleo3 par le front-end utilisant une authentification JWT.",
							thumbnail: tradingTmbl,
							keywords: "NodeJS - MongoDB - React - REST / JWT",
							pictures: []
						}
					]
				}
			]
		},
		cv: {
			title: "Augustin CHINI",
			subtitle: "Eleve ingénieur",
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
					htmlContent: `
                        <p>&minus; <strong class="d-inline">2013-2016: </strong>ISIMA Institut Supérieur d'Informatique, de Modélisation et de leurs Applications(63 Clermont-Ferrand).</p>
                        <p>&minus; <strong class="d-inline">2011-2013: </strong>DUT Services et Réseaux de communication(IUT d’Allier, 03 Vichy).</p>
                        <p>&minus; <strong class="d-inline">2008-2011: </strong>Baccalauréat Scientifique, option Science de l’ingénieur (Lycée Jean MONNET, 15 Aurillac).</p>`
				},
				{
					title: "Expériences professionnelles",
					htmlContent: `<table class="w-100" style="padding: .3em">
                        <tbody>
                            <tr>
                                <td style="width:100%;" colspan="2">
                                    <strong>&minus; Février 2019 : Ingénieur développeur au NIST (National Institute of Standards and Technology).</strong>
                                    <small class="ml-1">Maintenance et amélioration du cœur de la plateforme CDCS (The Configurable Data Curation System).</small>
                                    <p class="blue mt-0 ml-1 inter-line"> &rarr; Python, Django, JavaScript(jQuery), MongoDB</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width:50%;border-right:solid 2px #0072d4">
                                    <strong>&minus; 2016 - 2019 : Ingénieur développeur W3Plus.</strong>
                                    <small class="ml-1">Maintenance et évolution du cœur de la plateforme.</small>
                                    <p class="blue mt-0 ml-1 inter-line"> &rarr; Couch/PouchDB, Angular, Ionic 2, Gestion de projet (SCRUM)</p>
                                </td>
                                <td style="width:50%">
                                    <strong>&minus; Avril - Septembre 2016: Stage W3Plus.</strong>
                                    <small class="ml-1">Etude et Réalisation d’une plateforme de création et de gestion d‘applications mobiles modulables.</small>
                                    <p class="blue mt-0 ml-1 inter-line"> &rarr; AngularJS, JavaScript, Cordova, Ionic, HTML, C# .NET, WCF</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width:50%;border-right:solid 2px #0072d4">
                                    <strong>&minus; Avril - Aout 2015 : Stage Institut national de la recherche agronomique.</strong>
                                    <small class="ml-1">Création d’un modèle de simulation du taux de carbone dans le sol.</small>
                                    <p class="blue mt-0 ml-1 inter-line"> &rarr; C++, moteur de simulation VLE</p>
                                    <small class="ml-1">Création d’une application permettant la consultation (tracé de courbes) et la personnalisation en ligne de modèles de simulation.</small>
                                    <p class="blue mt-0 ml-1 inter-line"> &rarr; Joomla, PHP, Web service REST, HTML, CSS, JavaScript (jQuery)</p>
                                </td>
                                <td style="width:50%">
                                    <strong>&minus; Avril - Juillet 2013: Stage SOLEO mesure développement.</strong>
                                    <small class="ml-1">Design et développement du site web de l’entreprise, et d’une interface de gestion des clients.</small>
                                    <p class="blue mt-0 ml-1 inter-line"> &rarr; HTML, CSS, JavaScript(jQuery), PHP, MYSQL</p>
                                    <small class="ml-1">Réalisation de tous les supports de communication papier(Roll up, brochures ...).</small>
                                    <p class="blue mt-0 ml-1 inter-line"> &rarr; Suite Adobe (Photoshop, Illustrator)</p>
                                </td>
                            </tr>
                        </tbody>
                  </table>
                  <h3>Projets scolaires :</h3>
                  <table class="w-100" style="padding: .3em">
                        <tbody>
                            <tr>
                                <td style="width:50%;border-right:solid 2px #0072d4">
                                    <strong>&minus; Troisième  année  ISIMA :</strong>
                                    <small class="ml-1">Création  d’une  Application hybride de gestion de documents sur la solution OwnCloud.</small>
                                    <p class="blue mt-0 ml-1 inter-line"> &rarr; Ionic, Cordova, AngularJs, Owncloud, PHP</p>
                                </td>
                                <td style="width:50%">
                                    <strong>&minus; Deuxième année ISIMA :</strong>
                                    <small class="ml-1">Création d’un script de mise à jour de base de données sur OwnCloud pour connexion IMAP.</small>
                                    <p class="blue mt-0 ml-1 inter-line"> &rarr; PHP, SQLite</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="width:50%;border-right:solid 2px #0072d4">
                                    <strong>&minus; Première année ISIMA :</strong>
                                    <small class="ml-1">Implémentation de l’algorithme de reconstruction 3D (Structure From Motion). </small>
                                    <p class="blue mt-0 ml-1 inter-line"> &rarr; C++, OpenCV, OpenGL</p>
                                </td>
                                <td style="width:50%;">
                                    <strong>&minus; Deuxième année DUT SRC :</strong>
                                    <small class="ml-1">Création et design d’un jeu Space Invador.</small>
                                    <p class="blue mt-0 ml-1 inter-line"> &rarr; Adobe Flash Pro, AS3, Photoshop, Illustrator</p>
                                </td>
                                </tr>
                                <tr>
                                <td style="width:50%">
                                    <strong>&minus; Première année DUT SRC :</strong>
                                    <small class="ml-1">Création et design d’un site web de gestion d’un Hôtel.</small>
                                    <p class="blue mt-0 ml-1 inter-line"> &rarr; HTML, CSS, PHP, MySQL, Suite Adobe</p>
                                </td>
                            </tr>
                        </tbody>
                  </table>`
				},
				{
					title: "Technologies",
					htmlContent: `<table class="w-100" style="padding: .3em">
                        <tbody>
                            <tr>
                                <td style="width:33%;border-right:solid 2px #0072d4;text-align:left">
                                    <span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                    <strong class="d-inline"> HTML / CSS</strong>
                                </td>
                                <td style="width:33%;border-right:solid 2px #0072d4;text-align:left">
                                    <span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;</span><span class="d-inline grey">&#9733;</span>
                                    <strong class="d-inline"> CouchDB / PouchDB</strong>
                                </td>
                                <td style="width:33%;text-align:left">
                                <span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;</span><span class="d-inline grey">&#9733;</span>
                                    <strong class="d-inline"> Python / Django</strong>
                                </td>
                            </tr>
                            <tr>
                                <td style="width:33%;border-right:solid 2px #0072d4;text-align:left">
                                    <span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                    <strong class="d-inline"> JavaScript</strong>
                                </td>
                                <td style="width:33%;border-right:solid 2px #0072d4;text-align:left">
                                    <span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;</span><span class="d-inline grey">&#9733;</span>
                                    <strong class="d-inline"> MongoDB</strong>
                                </td>
                                <td style="width:33%;text-align:left">
                                    <span class="d-inline orange">&#9733;&#9733;&#9733;</span><span class="d-inline grey">&#9733;&#9733;</span>
                                    <strong class="d-inline"> JAVA / ANDROID</strong>
                                </td>
                            </tr>
                            <tr>
                                <td style="width:33%;border-right:solid 2px #0072d4;text-align:left">
                                    <span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 
                                    <strong class="d-inline"> Angular</strong>
                                </td>
                                <td style="width:33%;border-right:solid 2px #0072d4;text-align:left">
                                    <span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;</span><span class="d-inline grey">&#9733;</span>
                                    <strong class="d-inline"> C# / .NET</strong>
                                </td>
                                <td style="width:33%;text-align:left">
                                <span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;</span><span class="d-inline grey">&#9733;</span>
                                    <strong class="d-inline"> Scripting Bash</strong>
                                </td>
                            </tr>
                            <tr>
                                <td style="width:33%;border-right:solid 2px #0072d4;text-align:left">
                                    <span class="d-inline orange">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                    <strong class="d-inline"> Ionic 4</strong>
                                </td>
                                <td style="width:33%;border-right:solid 2px #0072d4;text-align:left">
                                    <span class="d-inline orange">&#9733;&#9733;&#9733;</span><span class="d-inline grey">&#9733;&#9733;</span>
                                    <strong class="d-inline"> React</strong>
                                </td>
                                <td style="width:33%;text-align:left">
                                    <small>Git, TFS, Jenkins, Intellij, VSCode, NodeJS, NPM ...</small>
                                </td>
                            </tr>
                        </tbody>
                  </table>`
				}
			]
		}
	}
}
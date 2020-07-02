import React, { Component } from 'react';

import { environment } from '../../environment'
import { Section } from '../../model/environment'
import mobLaptop from '../../assets/img/mob_laptop.png'

import './home.css';
import { HomeLink } from '../../model/homeLink';

class Home extends Component {

	props: any;

	/**
	 * createSections Create the sections in the main page
	 * @returns React Dom elements
	 */
	private createSections() {
		let sections: Array<JSX.Element> = [];

		environment.initConfig.home.sections.forEach((section: Section, index: number) => {
			let isOdd: boolean = this.isOdd(index);
			sections.push(
				<div key={"section_" + index} id={section.anchor} className={"homeSectionContainer " + (isOdd ? "" : "flexReverse")}>
					<p>{section.description}</p>
					<img src={section.picture} alt={section.alt} />
				</div>
			)
		});

		return sections;
	}

	/**
	 * Create the main page links
	 */
	private createLinks(): React.ReactNode {
		let links: Array<JSX.Element> = [];

		if (environment.initConfig.home.links) {
			links = environment.initConfig.home.links.map(
				(link: HomeLink) => <a key={link.url} href={link.url}>{link.icon(this.props)}</a>
			);
		}

		return links;
	}

	/**
	 * Check if the current table index is odd
	 * @param n current table index
	 */
	private isOdd(n: number): boolean {
		++n; // we're dealing with table index so we add 1 to haven't 0
		return n === 0 || !!(n && (n % 2))
	}

	public render() {
		return (
			<div className="homeContainer">
				<div className="flexHomeHeader">
					<img className="homePicture" src={environment.initConfig.home.picture} alt="home laptop" />
					<div className="mainContainer">
						<h1>{environment.initConfig.home.title}</h1>
						<div className="homeLinksContainer">{this.createLinks()}</div>
						<div className="highlight bold">
							<p>
								{environment.initConfig.home.highlight}
							</p>
						</div>
						<span className="horizontalRuler"></span>
						<p className="welcomeText">{environment.initConfig.home.welcome}</p>
						<img className="mobLaptopPicture" src={mobLaptop} alt="mobile home laptop"></img>
					</div>
				</div>
				{this.createSections()}
			</div >
		);
	}
}

export default Home;
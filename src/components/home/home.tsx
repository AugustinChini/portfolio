import React, { Component } from 'react';

import { environment } from '../../environment'
import { Section } from '../../model/environment'

import './home.css';

class Home extends Component {

	/**
	 * createSections Create the sections in the main page
	 * @returns React Dom elements
	 */
	private createSections() {
		let sections: Array<any> = [];

		environment.initConfig.home.sections.forEach((section: Section, index: number) => {
			let isOdd: boolean = this.isOdd(index);
			sections.push(
				<div className="sectionsContainer whiteBgrd">
					<div className={"imgContainer " + ( isOdd ? "" : "floatRight")}>
						<img src={section.picture} alt={section.alt} />
					</div>

					<div className={"descriptionContainer " + ( isOdd ? "" : "floatRight")}>
						<div className="verticalAlignedContainer">
							<div>
								<p>{section.description}</p>

							</div>
						</div>
					</div>

					<div className={"insideTriangle " + ( isOdd ? "" : "floatRight rot90")}></div>
				</div>
			)
		});

		return sections;
	}

	private isOdd(n: number): boolean {
		++n; // we're dealing with table index so we add 1 to haven't 0
		return n === 0 || !!(n && (n % 2))
	}

	public render() {
		return (
			<div className="container">

				<div className="mainContainer">
					<div className="highlight">
						<p>
							{environment.initConfig.home.highlight}
						</p>
					</div>
					<p>{environment.initConfig.home.welcome}</p>
				</div>
				<div className="orangeBgrd">
					{this.createSections()}
				</div>
			</div >
		);
	}
}

export default Home;
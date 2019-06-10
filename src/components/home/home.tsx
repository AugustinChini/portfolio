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

		environment.initConfig.home.sections.forEach((section: Section) => {
			sections.push(
				<div>
					<div className="sectionsContainer whiteBgrd">
						<div className="imgContainer">
							<img src={section.picture} alt={section.alt} />
						</div>
						<div className="descriptionContainer">
							<p>{section.description}</p>
						</div>
						<div className="insideTriangle"></div>
					</div>
				</div>
			)
		});

		return sections;
	}

	render() {
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
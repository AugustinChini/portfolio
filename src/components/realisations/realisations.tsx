import React, { Component } from 'react';
import './realisations.css';

class Realisations extends Component {
	render() {
		return (
			<div>
				<h3>reaTitle</h3>
				<div className="sectionsBarContainer">
					<div>
						<img />
						<a className="imgLink">section.displayName</a>
					</div>
					<div className="projectsBarContainer">
						<div>
							<img />
							<h3>project.title</h3>
						</div>
					</div>
					<div className="projectContainer">
					</div>
				</div>
			</div>
		);
	}
}

export default Realisations;


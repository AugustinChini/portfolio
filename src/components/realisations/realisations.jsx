import React, { Component } from 'react';
import './realisation.css';

class Realisations extends Component {
	render() {
		return (
			<div>
				<h3>reaTitle</h3>
				<div class="sectionsBarContainer">
					<div>
						<img />
						<a class="imgLink">section.displayName</a>
					</div>
					<div class="projectsBarContainer">
						<div>
							<img />
							<h3>project.title</h3>
						</div>
					</div>
					<div class="projectContainer">
					</div>
				</div>
			</div>
		);
	}
}

export default Realisations;


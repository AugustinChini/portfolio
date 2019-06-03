import React, { Component } from 'react';
import './home.css';

class Home extends Component {

  render() {
	return (

		<div className="container orangeBgrd">

			<div className="mainContainer">
				<p>welcome</p>
				<img />
			</div>

			<div className="whiteBgrd">
				<div className="sectionsContainer whiteBgrd">
					<div className="imgContainer">
						<img />
					</div>
					<div className="descriptionContainer">
						<p>section.description</p>
					</div>
					<div className="insideTriangle"></div>
				</div>
			</div>
		</div >
	);
}
}

export default Home;
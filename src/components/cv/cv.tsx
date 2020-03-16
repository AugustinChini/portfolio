import React, { Component } from 'react';
import './cv.css';
import { environment } from "../../environment";
import DOMPurify from 'dompurify';

class Cv extends Component {

  /**
   * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
   */
  componentDidMount() {
	// get the page container
	let pageContainerElement: any = document.getElementsByClassName("pageContainer")[0];
	
	if (pageContainerElement && pageContainerElement.style) {
		pageContainerElement.style.backgroundColor = "#feae17";
	}

  }

  /**
   * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, 
   * such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
   */
  componentWillUnmount() {
  }


	/**
	 * Render the main sections on the CV
	 * @returns Array<JSX.Element> elements JSX contenant les sections du CV
	 */
	private renderSections(): Array<JSX.Element> {
		let sectionElements: Array<JSX.Element> = [];
		environment.initConfig.cv.sections.forEach((section, index) => {
			sectionElements.push(<div key={"cv_section_" + index}
				className="sectionContainer">
				<div className="sectionTitle white shadow"><h3>{section.title}</h3></div>
				<div className="cvContent" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.htmlContent) }}></div>
			</div>);
		});

		return sectionElements;
	}

	render() {
		return (
			<div className="container">
				<div className="headerGroup">
					<h3 className="cvTitle">{environment.initConfig.cv.title}</h3>
					<div className="cvDescription">{environment.initConfig.cv.description}</div>
				</div>
				{this.renderSections()}
				<div id="download-button-wrapper">
					<div id="download-button">
					<svg className="download-icon" viewBox="0 0 20 20">
							<path d="M15.608,6.262h-2.338v0.935h2.338c0.516,0,0.934,0.418,0.934,0.935v8.879c0,0.517-0.418,0.935-0.934,0.935H4.392c-0.516,0-0.935-0.418-0.935-0.935V8.131c0-0.516,0.419-0.935,0.935-0.935h2.336V6.262H4.392c-1.032,0-1.869,0.837-1.869,1.869v8.879c0,1.031,0.837,1.869,1.869,1.869h11.216c1.031,0,1.869-0.838,1.869-1.869V8.131C17.478,7.099,16.64,6.262,15.608,6.262z M9.513,11.973c0.017,0.082,0.047,0.162,0.109,0.226c0.104,0.106,0.243,0.143,0.378,0.126c0.135,0.017,0.274-0.02,0.377-0.126c0.064-0.065,0.097-0.147,0.115-0.231l1.708-1.751c0.178-0.183,0.178-0.479,0-0.662c-0.178-0.182-0.467-0.182-0.645,0l-1.101,1.129V1.588c0-0.258-0.204-0.467-0.456-0.467c-0.252,0-0.456,0.209-0.456,0.467v9.094L8.443,9.553c-0.178-0.182-0.467-0.182-0.645,0c-0.178,0.184-0.178,0.479,0,0.662L9.513,11.973z"></path>
						</svg>
						<div className="button-text">TELECHARGER</div>
					</div>
					<div id="ballShadow"></div>			
				</div>
			</div>
		);
	}
}

export default Cv;

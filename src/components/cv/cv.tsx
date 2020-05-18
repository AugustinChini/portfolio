import React, { Component } from 'react';
import { FaEnvelopeOpenText, FaSearchLocation, FaPhone, FaLink, FaDownload } from 'react-icons/fa';
import './cv.css';
import profilePicture from '../../assets/img/profile.png'
import { environment } from "../../environment";
import DOMPurify from 'dompurify';
import { AnimationManager } from '../../services/utils';

class Cv extends Component {
	
	private pageContainerElement: any;

    private microAnimationCustomInlineStyle: any = {
        width: '40px',
        height: '28px',
        marginTop: '5px',
        color: '#505050' 
    }

	/**
	 * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
	 */
	componentDidMount() {
		// get the page container
		this.pageContainerElement = document.getElementsByClassName("pageContainer")[0];

		if (this.pageContainerElement && this.pageContainerElement.style) {
			// set the container backgound-color for the CV page
			this.pageContainerElement.style.backgroundColor = "#feae17";
		}

	}

	/**
	 * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, 
	 * such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
	 */
	componentWillUnmount() {
		if (this.pageContainerElement && this.pageContainerElement.style) {
			// undo the backgound-color custom CV page
			this.pageContainerElement.style.backgroundColor = "#fff";
		}
	}

	/**
	 * Open the clicked section
	 * @param event MouseEvent
	 */
	openSection (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		let cvContentElement: HTMLCollectionOf<HTMLElement>;
		console.log(event.currentTarget.classList.value);
		
		// if the current target exists and if it is not active we can open the CV content
		if (event && event.currentTarget && event.currentTarget.classList.value.indexOf('active') === -1) {
			let eventTarget = event.currentTarget;
			cvContentElement = event.currentTarget.getElementsByClassName("cvContent")  as HTMLCollectionOf<HTMLElement>;;

			// show the CV content before the animation begin
			if(cvContentElement && cvContentElement[0]) {
				cvContentElement[0].style.display = "block";
			}

			AnimationManager.getInstance().animate("showCVSection", cvContentElement, {
				opacity: "1",
				height: "400px"
			}, {
				duration: 300,
				complete: () => {
					eventTarget.classList.add("active");
				}
			});
		} else if (event && event.currentTarget && event.currentTarget.classList.value.indexOf('active') !== -1) {
			let eventTarget = event.currentTarget;
			cvContentElement = event.currentTarget.getElementsByClassName("cvContent")  as HTMLCollectionOf<HTMLElement>;;

			AnimationManager.getInstance().animate("showCVSection", cvContentElement, {
				opacity: "0",
				height: "0px"
			}, {
				duration: 300,
				complete: () => {
					// show the CV content before the animation begin
					if(cvContentElement && cvContentElement[0]) {
						cvContentElement[0].style.display = "none";
					}
					eventTarget.classList.remove("active");
				}
			});
		}
	}


	/**
	 * Render the main sections on the CV
	 * @returns Array<JSX.Element> elements JSX contenant les sections du CV
	 */
	private renderSections(): Array<JSX.Element> {
		let sectionElements: Array<JSX.Element> = [];
		environment.initConfig.cv.sections.forEach((section, index) => {
			sectionElements.push(<div key={"cv_section_" + index}
				className="sectionContainer"
				onClick={this.openSection}>
				<div className="sectionTitle white shadow"><h3>{section.title}</h3></div>
				<div className="cvContent" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.htmlContent) }}></div>
			</div>);
		});

		return sectionElements;
	}

	render() {
		return (
			<div className="cvPageContainer">
				<div className="headerGroup">
					<div className="profileDescription">
						<h3 className="cvTitle">{environment.initConfig.cv.title}</h3>
						<span className="cvSubTitle">{environment.initConfig.cv.subtitle}</span>
						<div className="cvDescription">{environment.initConfig.cv.description}</div>
						<div className="contactContainer">
							<FaEnvelopeOpenText /> <a href={"mailto:" + environment.initConfig.cv.email}>{environment.initConfig.cv.email}</a>
						</div>
						<div className="contactContainer">
							<FaPhone /> <a href={"tel:" + environment.initConfig.cv.phone}>{environment.initConfig.cv.phone}</a>
						</div>
						<div className="contactContainer">
							<FaSearchLocation /> {environment.initConfig.cv.localisation}
						</div>
						<div className="contactContainer">
							<FaLink /> <a href={environment.initConfig.cv.website}> {environment.initConfig.cv.website}</a>
						</div>
					</div>
					<div className={"downloadButton orangeBgrd white"}>
						<span>
							<FaDownload style={this.microAnimationCustomInlineStyle} />
						</span>
					</div>
					<img src={profilePicture}/>
				</div>
				
				{this.renderSections()}
			</div>
		);
	}
}

export default Cv;

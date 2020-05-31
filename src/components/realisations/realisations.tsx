import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import './realisations.css';
import { environment } from "../../environment";
import { NavbarEvent } from '../../model/NavbarEvent';
import { RealisationSection, Project } from '../../model/environment';

interface StateInterface { 
	navbarEvent: NavbarEvent, 
	currentDescription: JSX.Element, 
	currentPictures: Array<JSX.Element>, 
	currentTitle: JSX.Element, 
	galleryOpened: boolean 
}

interface PictureGalleryMeta {
	original: string, 
	thumbnail: string, 
	originalAlt?: string,
	thumbnailAlt?: string,
	description?: string
}

class Realisations extends Component {

	public props: any;
	public state: StateInterface;
	private projectPictures: Array<PictureGalleryMeta>

	constructor(props: { navbarListeners: any }) {
		super(props);
		this.props = props;
		this.state = {
			navbarEvent: {
				isSmalScreen: false,
				isScrollTop: true,
				isScrollBottom: false
			},
			currentDescription: <p>Loading...</p>,
			currentTitle: <p></p>,
			currentPictures: [],
			galleryOpened: false
		}
		this.projectPictures = [];
	}

	/**
	 * Called immediately after a component is mounted.
	 */
	componentDidMount() {
		// call the section click function to 'simulate' the click on the first section
		this.handleSectionClick('web');

		// add onNavbarEvent callback on navbar event listeners
		this.props.navbarListeners.push(this.onNavbarEvent);
	}

	componentWillUnmount() {
		// remove onNavbarEvent callback of the navbar event listeners array
		var index = this.props.navbarListeners.indexOf(this.onNavbarEvent);
		if (index > -1) {
			this.props.navbarListeners.splice(index, 1);
		}
	}

	private onNavbarEvent = (event: NavbarEvent) => {
		this.setState({ navbarEvent: event });
	}


	private getSectionClass(): string {
		return !this.state.navbarEvent.isScrollTop ? "notTopScrollCatMargin" : "";
	}

	private getDescriptionClass(): string {
		return !this.state.navbarEvent.isScrollTop ? "notTopScrollPresMargin" : "";
	}

	private toggleGallery = () => {
		this.setState( (prevState: StateInterface) => ({
		  galleryOpened: !prevState.galleryOpened
		}));
	}

	/**
	 * Get the project and set the state with the new selected project
	 * @param project the project object
	 */
	private loadProject: (project: Project, pictureIndex: number) => void = (project: Project) => {
		this.setState({
			currentDescription: this.renderDescriptionBlock(project.title, project.description, project.keywords)
		});
		this.projectPictures = []
		this.setProjectPictures(project);
	}

	/**
	 * Get the section id and set the state with the new description and the new picture regarding to the new selected section
	 * @param id the section id
	 */
	private handleSectionClick: (id: string) => void = (id: string) => {
		let section: RealisationSection | undefined = environment.initConfig.realisations.sections.find((element: RealisationSection) => {
			return element.id === id;
		});

		if (section) {

			// we're displaying the first project of the section (desc and pictures)
			let description: JSX.Element = this.renderDescriptionBlock(section.projects[0].title, section.projects[0].description, section.projects[0].keywords);
			let pictures: Array<JSX.Element> = [];

			section.projects.forEach( (project: Project, index) => {
				pictures.push(<p key={"rea_pic_" + index}><img onClick={this.loadProject.bind(this, project, index)} alt={project.title} src={project.thumbnail} /></p>);
			});

			this.setState({
				currentDescription: description,
				currentPictures: pictures
			});

			// load the projet pictures for the gallery
			this.setProjectPictures(section.projects[0]);
		}

	};

	private setProjectPictures = (project: Project) => {
		project.pictures.forEach(picture => {
			this.projectPictures.push({
				original: picture.source,
				thumbnail: picture.source,
				originalAlt: picture.title,
				thumbnailAlt: picture.title,
				description: picture.description,
			});
		});
	}

	/**
	 * Get the different text element of the current description blocl and render JSX elements
	 * @param title current title
	 * @param description current description
	 * @param keywords current keywords
	 */
	renderDescriptionBlock(title: string, description: string, keywords: string): JSX.Element{
		return <div>
				<h3 className="reaTitle">{title}</h3>
				<p>{description}</p>
				<p className='keywords'>{keywords}</p>
				<div id="view-button-wrapper">
					<div onClick={this.toggleGallery} id="view-button">
						<svg className="view-icon" viewBox="0 0 20 20">
							<path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
						</svg>
						<div className="button-text">DETAILS</div>
					</div>
				</div>
			</div>;
	}

	renderSections() {
		let result: Array<JSX.Element> = [];

		environment.initConfig.realisations.sections.forEach((section: RealisationSection) => {
			result.push(
				<img key={section.id} onClick={this.handleSectionClick.bind(this, section.id)} alt={section.alt} src={section.icon} />
			);
		});

		return result;
	}

	render() {
		return (
			<div>
				<div id="sections" className={this.getSectionClass()}>
					{this.renderSections()}
				</div>
				<div id="pictures">
					{this.state.currentPictures}
				</div>
				<div id="presentation" className={this.getDescriptionClass()}>
					<div id="descriptionContainer">
						{this.state.currentDescription}
					</div>
				</div>
				{this.state.galleryOpened ? <div>
						<button className="close-gallery-button" onClick={this.toggleGallery.bind((this))}>X</button>
						<ImageGallery items={this.projectPictures}/>
					</div> : null}
				
			</div>
		);
	}
}

export default Realisations;


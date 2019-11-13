import React, { Component } from 'react';
import './realisations.css';
import { environment } from "../../environment";
import { NavbarEvent } from '../../model/NavbarEvent';
import { RealisationSection } from '../../model/environment';

class Realisations extends Component {

	public props: any
	public state: { navbarEvent: NavbarEvent, currentDescription: JSX.Element, currentPictures: Array<JSX.Element> }

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
			currentPictures: []
		}

	}

	/**
	 * Called immediately after a component is mounted.
	 */
	componentDidMount() {
		// call the section click function to 'simulate' the click on the first section
		this.handleSectionClick('dev');

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

	/**
	 * Get the section id and set the state with the new description and the new picture regarding to the new selected section
	 */
	private handleSectionClick: (id: string) => void = (id: string) => {
		let section: RealisationSection | undefined = environment.initConfig.realisations.sections.find((element: RealisationSection) => {
			return element.id === id;
		});

		if (section) {

			// we're displaying the first project of the section (desc and pictures)
			let description: JSX.Element = <div><p>{section.projects[0].description}</p><p className='keywords'>{section.projects[0].keywords}</p></div>;
			let pictures: Array<JSX.Element> = [];

			section.projects[0].pictures.forEach( (picture, index) => {
				pictures.push(<p key={"rea_pic_" + index}><img alt={picture.description} src={picture.source} /></p>);
			});

			this.setState({
				currentDescription: description,
				currentPictures: pictures
			});
		}

	};

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
				<div id="corps">
					<div id="sections" className={this.getSectionClass()}>
						{this.renderSections()}
					</div>
					<div id="presentation" className={this.getDescriptionClass()}>
						<div id="descriptionContainer">
							{this.state.currentDescription}
						</div>
					</div>
				</div>
				<div id="pictures">
					{this.state.currentPictures}
				</div>
			</div>
		);
	}
}

export default Realisations;


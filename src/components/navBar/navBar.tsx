import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Utils } from '../../services/utils'
import { environment } from '../../environment'
import { Link as LinkModel } from '../../model/environment'
import navBarLogo from '../../assets/img/logo.png'
import Trianglify from 'trianglify';
import './navBar.css';

class NavBar extends Component {

  // Main banner logo path
  logo: string = environment.initConfig.navBar.logo;
  // Array of the links in the banner
  links: LinkModel[] = environment.initConfig.navBar.links;
  // Operation to make with the variance variable - "add" OR "minus"
  cell_varianceOperation: string = "add";
  // DOM canvas animation ref.
  bgdCanvas: any;
  // Background animation option object
  trianglifyOptions: any = {
    width: 0,
    height: 0,
    cell_size: 60,
    variance: 0.30,
    x_colors: ['#212121', '#383838', '#a3a3a3', '#c9c9c9'],
    y_colors: 'match_x',
    seed: "123"
  };
  // refresh canvas interval
  canvasInterval: any;
  // screen width
  isSmallScreen: boolean = false;
  // component state
  state: any;

  // Create Trianglify instance
  trianglifyPattern: any;

  constructor(props: any) {
    super(props);
    this.state = {
      isMobileMenuActive: false
    }

    // init resize listener for the mobile version
    window.onresize = Utils.debounce( () => {
      this.setScreenWidth();
    }, 500);
    window.onscroll = () => { this.scrollFunction() };

    // Bind the hamburger button chekbox
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  /**
   * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
   */
  componentDidMount() {
    let dynBgdElement = document.getElementById("dyn-bgd")

    this.bgdCanvas = document.getElementById("bgd-canvas");

    this.trianglifyOptions.width = dynBgdElement ? dynBgdElement.offsetWidth : 0;
    this.trianglifyOptions.height = dynBgdElement ? dynBgdElement.offsetHeight : 0;

    this.trianglifyPattern = Trianglify(this.trianglifyOptions);

    this.trianglifyPattern.canvas(this.bgdCanvas);

    this.canvasInterval = setInterval(() => {
      this.refreshCanvas();
    }, 80);

    this.setScreenWidth();
  }

  /**
   * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, 
   * such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
   */
  componentWillUnmount() {
    clearInterval(this.canvasInterval);
  }

  /**
   * Refresh the canvas animation
   */
  refreshCanvas() {
    if (!this.trianglifyOptions.variance) this.trianglifyOptions.variance = 2;

    if (this.trianglifyOptions.variance < 0.5) {
      this.cell_varianceOperation = "add";
    } else if (this.trianglifyOptions.variance > 3) {
      this.cell_varianceOperation = "minus";
    }

    if (this.cell_varianceOperation === "add") {
      this.trianglifyOptions.variance += 0.1;
    } else {
      this.trianglifyOptions.variance -= 0.1;
    }

    this.trianglifyPattern = Trianglify(this.trianglifyOptions);
    this.trianglifyPattern.canvas(this.bgdCanvas);
  }

  /**
   * Set the component State in function of the screen size (tigger Mobile mode) 
   */
  toggleMobileMenu() {
    if (this.state.isMobileMenuActive)
      this.setState({ isMobileMenuActive: false });
    else
      this.setState({ isMobileMenuActive: true });
  }

  /**
   * Set the componemt State with the type of screen (swall/large)
   */
  setScreenWidth() {
    var screenWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
    let state = Object.assign({}, this.state);
    if (screenWidth < 840 && !this.isSmallScreen) {
      state.isSmallScreen = true;
      this.setState(state);
    } else {
      state.isSmallScreen = false;
      state.isMobileMenuActive = false;

      this.setState(state);
    }
  }

  /**
   * Refresh the narBar state in function of the screen size
   */
  scrollFunction() {
    let navBarElt = document.getElementById("navbar");
    let canevasElt = document.getElementById("dyn-bgd");
    let navBarLogoElt = document.getElementById("navBarLogo");
    let linkContainerElt = document.getElementById("linkContainer");
    let menuToggleElt = document.getElementById("menuToggle");

    // TODO use a CSS class instead
    if ( (navBarElt && canevasElt && navBarLogoElt && linkContainerElt && menuToggleElt) && (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) ) {
      navBarElt.style.height = "70px";
      canevasElt.style.top = "-148px";
      navBarLogoElt.style.height = "65px";
      navBarLogoElt.style.top = "3px";
      navBarLogoElt.style.left = "115px";
      linkContainerElt.style.paddingTop = "15px";
      menuToggleElt.style.top = "40px";
    } else if (navBarElt && canevasElt && navBarLogoElt && linkContainerElt && menuToggleElt) {
      canevasElt.style.top = "-68px"
      navBarElt.style.height = "150px";
      navBarLogoElt.style.height = "90px";
      navBarLogoElt.style.top = "32px";
      navBarLogoElt.style.left = "195px";
      linkContainerElt.style.paddingTop = "60px";
      menuToggleElt.style.top = "50px";
    }
  }

  /**
   * Render the component template
   */
  render() {
    return (
      <div id="navbar" className={this.state.isMobileMenuActive ? 'navBarContainer white orangeBgrd shadow expand' : 'navBarContainer white orangeBgrd shadow'}>
        <div id="dyn-bgd">
          <canvas id="bgd-canvas" className="shadow"></canvas>
        </div>
        <Link className="link" to="/"><img id="navBarLogo" src={navBarLogo} className="navBarLogo" alt="Logo d'accueil" /></Link>
        <div id="linkContainer">
          {/* Mobile hamburger menu */}
          <div id="menuToggle">
            <input onChange={this.toggleMobileMenu} checked={this.state.isMobileMenuActive} type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* END Mobile hamburger menu */}
          <div className={!this.state.isMobileMenuActive && this.state.isSmallScreen  ? 'linkCenterContainer hide' : 'linkCenterContainer'}>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/cv">CV</Link>
            <Link className="link" to="/realisations">Realisations</Link>
          </div>
        </div>
      </div >
    );
  }
}

export default NavBar;
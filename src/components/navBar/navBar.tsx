import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { throttle } from "underscore";

import { Screen, ApplicationIdProvider, Waiter } from '../../services/utils'
import { environment } from '../../environment'
import { Link as LinkModel } from '../../model/environment'
import navBarLogo from '../../assets/img/logo.png'
import Trianglify from 'trianglify';
import './navBar.css';
import { NavbarEvent } from '../../model/NavbarEvent';

class NavBar extends Component {

  props: { showHomeLink: boolean, onChange?: (event: NavbarEvent) => void, data: Array<LinkModel>, style?: any };
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
  // scroll bar reach the bottom
  isScrollBottom: boolean = false;
  // component state
  state: any;
  // the navbar instance id
  id: number
  // Create Trianglify instance
  trianglifyPattern: any;
  // store the resize and scroll callback to delete the listeners
  resizeCallback: any;
  scrollCallback: any;

  // usefull DOM selector
  navBarElt: HTMLElement | null = null
  canevasElt: HTMLElement  | null = null
  navBarLogoElt: HTMLElement  | null = null
  linkContainerElt: HTMLElement  | null = null
  menuToggleElt: HTMLElement  | null = null

  constructor(props: { showHomeLink: boolean, onChange: (event: NavbarEvent) => void, data: Array<LinkModel>, style?: string }) {
    super(props);
    this.props = props;
    this.state = {
      isMobileMenuActive: false
    }

    //get id for the navbar instance
    this.id = ApplicationIdProvider.getInstance().getId();

    // init resize listener for the mobile version
    this.resizeCallback = throttle(() => {
      this.setScreenWidth();
    }, 500);
    this.scrollCallback = throttle(() => {
      this.scrollFunction()
    }, 200);
    window.addEventListener('resize', this.resizeCallback);
    window.addEventListener('scroll', this.scrollCallback);

    // Bind the hamburger button chekbox
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  /**
   * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
   */
  componentDidMount() {

    // wait for the dom render (ex. when the navbar is within a modal)
    let waiter = new Waiter(() => { return document.getElementById("dyn-bgd" + this.id) !== undefined }, 500);
    waiter.tellMeWhenItsReady(() => {
      // set all the dom selectors
      this.navBarElt = document.getElementById("navbar");
      this.canevasElt = document.getElementById("dyn-bgd" + this.id);
      this.navBarLogoElt = document.getElementById("navBarLogo");
      this.linkContainerElt = document.getElementById("linkContainer");
      this.menuToggleElt = document.getElementById("menuToggle");
      this.bgdCanvas = document.getElementById("bgd-canvas" + this.id);

      let dynBgdElement = document.getElementById("dyn-bgd" + this.id)

      this.trianglifyOptions.width = dynBgdElement ? dynBgdElement.offsetWidth : 0;
      this.trianglifyOptions.height = dynBgdElement ? dynBgdElement.offsetHeight : 0;

      this.trianglifyPattern = Trianglify(this.trianglifyOptions);

      this.trianglifyPattern.canvas(this.bgdCanvas);

      this.canvasInterval = setInterval(() => {
        this.refreshCanvas();
      }, 80);

      this.setScreenWidth();

      if (this.props.onChange)
        this.props.onChange({
          isScrollTop: true,
          isSmalScreen: this.isSmallScreen,
          isScrollBottom: this.isScrollBottom
        })
    });

  }

  /**
   * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, 
   * such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
   */
  componentWillUnmount() {
    clearInterval(this.canvasInterval);
    window.removeEventListener("scroll", this.scrollCallback);
    window.removeEventListener("resize", this.resizeCallback);
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
    // test if the scrollbar reach the bottom
    if (Screen.getDocHeight() === Screen.getScrollXY()[1] + window.innerHeight) {
      this.isScrollBottom = true;
    } else {
      this.isScrollBottom = false;
    }

    // TODO use a CSS class instead
    if ((this.navBarElt && this.canevasElt && this.navBarLogoElt && this.linkContainerElt && this.menuToggleElt) && (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)) {
      this.navBarElt.style.height = "70px";
      this.canevasElt.style.top = "-148px";
      this.navBarLogoElt.style.height = "65px";
      this.navBarLogoElt.style.top = "3px";
      this.navBarLogoElt.style.left = "115px";
      this.linkContainerElt.style.paddingTop = "15px";
      this.menuToggleElt.style.top = "40px";
      if (this.props.onChange)
        this.props.onChange({
          isSmalScreen: this.isSmallScreen,
          isScrollTop: false,
          isScrollBottom: this.isScrollBottom
        });
    } else if (this.navBarElt && this.canevasElt && this.navBarLogoElt && this.linkContainerElt && this.menuToggleElt) {
      this.canevasElt.style.top = "-68px"
      this.navBarElt.style.height = "150px";
      this.navBarLogoElt.style.height = "90px";
      this.navBarLogoElt.style.top = "32px";
      this.navBarLogoElt.style.left = "195px";
      this.linkContainerElt.style.paddingTop = "60px";
      this.menuToggleElt.style.top = "50px";
      if (this.props.onChange)
        this.props.onChange({
          isSmalScreen: this.isSmallScreen,
          isScrollTop: true,
          isScrollBottom: this.isScrollBottom
        });
    }
  }

  renderNavbarContent(): Array<any> {
    let result: Array<any> = [];
    let links: Array<LinkModel> = this.props.data

    for (let i = 0; i < links.length; ++i) {
      if (links[i].type && links[i].type === "link")
        result.push(<Link key={"link" + i} className="link" to={links[i].path}>{links[i].label}</Link>)
      else
        result.push(<p key={"link" + i}>{links[i].label}</p>)
    }

    return result;
  }

  renderHomeLink() {
    if (this.props.showHomeLink)
      return <Link className="link" to="/"><img id="navBarLogo" src={navBarLogo} className="navBarLogo" alt="Logo d'accueil" /></Link>
    else
      return undefined
  }

  /**
   * Render the component template
   */
  render() {
    return (
      <div id="navbar"
      className={this.state.isMobileMenuActive ? 'navBarContainer white orangeBgrd shadow expand' : 'navBarContainer white orangeBgrd shadow'}
      style={this.props.style}>
        <div id={"dyn-bgd" + this.id} className="dyn-bgd-position">
          <canvas id={"bgd-canvas" + this.id} className="shadow"></canvas>
        </div>
        {this.renderHomeLink()}
        <div id="linkContainer">
          {/* Mobile hamburger menu */}
          <div id="menuToggle">
            <input onChange={this.toggleMobileMenu} checked={this.state.isMobileMenuActive} type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* END Mobile hamburger menu */}
          <div className={!this.state.isMobileMenuActive && this.state.isSmallScreen ? 'linkCenterContainer hide' : 'linkCenterContainer'}>
            {this.renderNavbarContent()}
          </div>
        </div>
      </div >
    );
  }
}

export default NavBar;
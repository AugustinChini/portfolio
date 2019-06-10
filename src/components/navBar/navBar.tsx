import React, { Component } from 'react';
import { environment } from '../../environment'
import { Link } from '../../model/environment'
import navBarLogo from '../../assets/img/logo.png'
import Trianglify from 'trianglify';
import './navBar.css';

class NavBar extends Component {

  // Main banner logo path
  logo: string = environment.initConfig.navBar.logo;
  // Array of the links in the banner
  links: Link[] = environment.initConfig.navBar.links;
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

    window.onresize = () => { this.setScreenWidth(); };

  }

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

  componentWillUnmount() {
    clearInterval(this.canvasInterval);
  }

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

  toggleMobileMenu() {
    if (this.state.isMobileMenuActive)
      this.setState({ isMobileMenuActive: false });
    else
      this.setState({ isMobileMenuActive: true });
  }

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

  render() {
    return (
      <div className={this.state.isMobileMenuActive ? 'navBarContainer white orangeBgrd shadow expand' : 'navBarContainer white orangeBgrd shadow'}>
        <div id="dyn-bgd">
          <canvas id="bgd-canvas" className="shadow"></canvas>
        </div>
        <a className="link"><img src={navBarLogo} className="navBarLogo" alt="Logo d'accueil" /></a>
        <div className="linkContainer">
          {/* Mobile hamburger menu */}
          <div id="menuToggle">
            <input onClick={() => this.toggleMobileMenu()} checked={this.state.isMobileMenuActive} type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* END Mobile hamburger menu */}
          <div className={!this.state.isMobileMenuActive && this.state.isSmallScreen  ? 'linkCenterContainer hide' : 'linkCenterContainer'}>
            <a className="link">Accueil</a>
            <a className="link">CV</a>
            <a className="link">Realisations</a>
          </div>
        </div>
      </div >
    );
  }
}

export default NavBar;
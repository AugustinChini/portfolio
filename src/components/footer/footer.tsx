import React, { Component } from 'react';
import UseAnimations from 'react-useanimations';
import './footer.css';

class Footer extends Component {

    public microAnimationCustomInlineStyle: any = {
        width: '25px',
        paddingLeft: '2px',
        paddingTop: '4px',
        color: '#505050' 
    }

    onContactLinkCliked = () => {

    };

    render() {
        return (
            <div id="footer">
                <div className="footerLine"></div>
                <div className="footerContainer">
                    <div className="siteMapContainer">
                        <p>Pan du site:</p>
                        <ul>
                            <li>Accueil</li>
                            <li>CV</li>
                            <li>Realisations</li>
                        </ul>
                    </div>
                    <div className="contactContainer">
                        <p>Contactez moi :</p>
                        <div className="contactButton orangeBgrd footerContactButton github">
                            <span onClick={this.onContactLinkCliked}>
                                <UseAnimations animationKey="github" style={this.microAnimationCustomInlineStyle} />
                            </span>
                        </div>
                        <div className="contactButton orangeBgrd white footerContactButton">
                            <span onClick={this.onContactLinkCliked}>
                                <UseAnimations animationKey="linkedin" style={this.microAnimationCustomInlineStyle} />
                            </span>
                        </div>
                        <div id="contact-footer-button" className="contactButton orangeBgrd white footerContactButton">
                            <span onClick={this.onContactLinkCliked}>
                                <UseAnimations animationKey="mail" style={this.microAnimationCustomInlineStyle} />    
                            </span>
                        </div>
                    </div>
                    <div className="signatureContainer">
                        <p>Créé par</p>
                        <div className="signature">Augustin CHINI</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
import React, { Component } from 'react';
import './footer.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

class Footer extends Component {

    public microAnimationCustomInlineStyle: any = {
        width: '25px',
        height: '25px',
        marginTop: '2px',
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
                                <FaGithub style={this.microAnimationCustomInlineStyle} />
                            </span>
                        </div>
                        <div className="contactButton orangeBgrd white footerContactButton">
                            <span onClick={this.onContactLinkCliked}>
                                <FaLinkedinIn style={this.microAnimationCustomInlineStyle} />
                            </span>
                        </div>
                        <div id="contact-footer-button" className="contactButton orangeBgrd white footerContactButton">
                            <span onClick={this.onContactLinkCliked}>
                                <FaEnvelope style={this.microAnimationCustomInlineStyle} />
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
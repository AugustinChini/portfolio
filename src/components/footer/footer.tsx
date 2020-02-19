import React, { Component } from 'react';
import './footer.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { modalSignal } from '../../components/app';

class Footer extends Component {

    private microAnimationCustomInlineStyle: any = {
        width: '25px',
        height: '25px',
        marginTop: '2px',
        color: '#505050' 
    }

    onContactLinkCliked = () => {
        modalSignal.send({
            code: 100, // information code
            type: 'open',
            content: 'contact' 
        });
    };

    render() {
        return (
            <div id="footer">
                <div className="footerLine"></div>
                <div className="footerContainer">
                    <div className="siteMapContainer">
                        <p>Pan du site:</p>
                        <ul>
                            <li className="footerLink"><a href="/">Accueil</a></li>
                            <li className="footerLink"><a href="/cv">CV</a></li>
                            <li className="footerLink"><a href="/realisations">Realisations</a></li>
                        </ul>
                    </div>
                    <div className="contactContainer">
                        <p>Contactez moi :</p>
                        <div className="contactButton orangeBgrd footerContactButton github">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AugustinChini">
                                <FaGithub style={this.microAnimationCustomInlineStyle} />
                            </a>
                        </div>
                        <div className="contactButton orangeBgrd white footerContactButton">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/augustin-chini-a32266101/">
                                <FaLinkedinIn style={this.microAnimationCustomInlineStyle} />
                            </a>
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
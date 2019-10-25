import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

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
                        <div className="contactButton orangeBgrd white footerContactButton">
                            <a onClick={this.onContactLinkCliked}>
                                <svg className="footerIcon" viewBox="0 -2 25 25">
                                    <path d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="contactButton orangeBgrd white footerContactButton">
                            <a onClick={this.onContactLinkCliked}>
                                <svg className="footerIcon" viewBox="0 -2 25 25">
                                    <path d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
                                </svg>
                            </a>
                        </div>
                        <div id="contact-footer-button" className="contactButton orangeBgrd white footerContactButton">
                            <a onClick={this.onContactLinkCliked}>
                                <svg className="footerIcon" viewBox="0 -2 25 25">
                                    <path d="M17.659,3.681H8.468c-0.211,0-0.383,0.172-0.383,0.383v2.681H2.341c-0.21,0-0.383,0.172-0.383,0.383v6.126c0,0.211,0.172,0.383,0.383,0.383h1.532v2.298c0,0.566,0.554,0.368,0.653,0.27l2.569-2.567h4.437c0.21,0,0.383-0.172,0.383-0.383v-2.681h1.013l2.546,2.567c0.242,0.249,0.652,0.065,0.652-0.27v-2.298h1.533c0.211,0,0.383-0.172,0.383-0.382V4.063C18.042,3.853,17.87,3.681,17.659,3.681 M11.148,12.87H6.937c-0.102,0-0.199,0.04-0.27,0.113l-2.028,2.025v-1.756c0-0.211-0.172-0.383-0.383-0.383H2.724V7.51h5.361v2.68c0,0.21,0.172,0.382,0.383,0.382h2.68V12.87z M17.276,9.807h-1.533c-0.211,0-0.383,0.172-0.383,0.383v1.755L13.356,9.92c-0.07-0.073-0.169-0.113-0.27-0.113H8.851v-5.36h8.425V9.807z"></path>
                                </svg>
                            </a>
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
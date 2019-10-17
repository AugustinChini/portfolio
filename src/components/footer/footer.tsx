import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

    render() {
        return (
            <div id="footer">
                <div className="footerLine"></div>
                <div className="footerContainer">
                    <div className="siteMapContainer">
                        <p>Pan du site</p>
                        <ul>
                            <li>Accueil</li>
                            <li>CV</li>
                            <li>Realisations</li>
                        </ul>
                    </div>
                    <div className="contactContainer">
                        <p>Contactez moi :</p>
                        <a href="#"><img src="/assets/img/facebook.jpg" /></a>
                        <a href="#"><img src="/assets/img/linkedin.jpg" /></a>
                        <a href="#"><img src="/assets/img/mail.jpg" /></a>
                    </div>
                    <div className="signatureContainer">
                        <p>Créé par</p>
                        <p>Augustin CHINI</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
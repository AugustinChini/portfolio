import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <div class="footerLine"></div>
                <div class="footerContainer">
                    <div class="siteMapContainer">
                        <p>Pan du site</p>
                        <ul>
                            <li>link.label</li>
                        </ul>
                    </div>
                    <div>
                        <p>Contactez moi :</p>
                        <a href="#"><img src="/assets/img/facebook.jpg" /></a>
                        <a href="#"><img src="/assets/img/linkedin.jpg" /></a>
                        <a href="#"><img src="/assets/img/mail.jpg" /></a>
                    </div>
                    <div>
                        <p>Créé par</p>
                        <p>Augustin CHINI</p>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import './contact.css';
import NavBar from '../navBar/navBar';
import { AnimationManager } from "../../services/utils";
import { Link } from '../../model/environment';
import { NavbarEvent } from '../../model/NavbarEvent';

class Contact extends Component<ContactProps> {

    state: any = { isOpen: false };
    props: any;
    customModalStyles: any = {
        modal: ["modal-container"],
        closeButton: ["modal-close-button"]
    }
    title: Link = {
        label: "Contact",
        path: "#",
        type: "none"
    }

    constructor(props: { className: string }) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Called immediately after a component is mounted.
     */
    componentDidMount() {
        // add onNavbarEvent callback on navbar event listeners
        this.props.navbarListeners.push(this.bottomAnimation);
    }

    componentWillUnmount() {
        // remove onNavbarEvent callback of the navbar event listeners array
        var index = this.props.navbarListeners.indexOf(this.bottomAnimation);
        if (index > -1) {
            this.props.navbarListeners.splice(index, 1);
        }
    }

    /**
     * Function called when the textarea is resized, to adjust its height
     * @param event textarea event
     */
    handleChange(event: any) {
        this.setState({ value: event.target.value });
        event.target.style.height = "20px";
        event.target.style.height = (event.target.scrollHeight) + "px";
    }

    /**
     * Function called on the contact form submission
     * @param event Submit event
     */
    handleSubmit(event: any) {
        alert('Un essai a été envoyé : ' + this.state.value);
        event.preventDefault();
    }

    onOpenModal = () => {
        this.setState({ isOpen: true });
    };

    onCloseModal = () => {
        this.setState({ isOpen: false });
    };

    /**
     * Return the rendered navbar if needed
     */
    renderNavbar() {
        if (this.state.isOpen)
            return <NavBar style={{ position: "relative", overflow: "hidden" }} showHomeLink={false} data={[this.title]} />
        else
            return undefined
    }

    /**
     * Fonction called when a narbar event occure and if the scroll bottom is reached trigger the contact fabbutton animation
     * @param event navbar event
     */
    bottomAnimation(event: NavbarEvent) {
        let footerContactButton: HTMLElement | null = document.getElementById("contact-footer-button");
        let contactButton: HTMLElement | null = document.getElementById("contact-button");
        if (footerContactButton && contactButton && event.isScrollBottom) {
            let doc = document;
            let docElem: HTMLElement = doc.documentElement;
            let body: HTMLElement = doc.getElementsByTagName('body')[0];
            let screenWidth = window.innerWidth || docElem.clientWidth || body.clientWidth;

            // translate the absolute contact button to the left ans hide it
            AnimationManager.getInstance().animate("scrollBottom", contactButton, {
                right: (screenWidth - footerContactButton.offsetLeft - 80) + "px",
                opacity: 0
            }, {
                duration: 100
            });

            // show the new fixed contact button
            AnimationManager.getInstance().animate("showFooterButton", footerContactButton, {
                opacity: 1
            }, {
                duration: 800,
            });

        } else if (contactButton && footerContactButton) {

            AnimationManager.getInstance().animate("notScrollBottom", contactButton, {
                right: "50px",
                opacity: 1
            }, {
                duration: 100
            });

            // hide the new fixed contact button
            AnimationManager.getInstance().animate("hideFooterButton", footerContactButton, {
                opacity: 0
            }, {
                duration: 800,
            });
        }
    }

    render() {
        return (
            <div id="contact-button" className={"contactButton orangeBgrd white " + this.props.className}>
                <a onClick={this.onOpenModal}>
                    <svg className="icon" viewBox="0 -2 20 20">
                        <path d="M17.659,3.681H8.468c-0.211,0-0.383,0.172-0.383,0.383v2.681H2.341c-0.21,0-0.383,0.172-0.383,0.383v6.126c0,0.211,0.172,0.383,0.383,0.383h1.532v2.298c0,0.566,0.554,0.368,0.653,0.27l2.569-2.567h4.437c0.21,0,0.383-0.172,0.383-0.383v-2.681h1.013l2.546,2.567c0.242,0.249,0.652,0.065,0.652-0.27v-2.298h1.533c0.211,0,0.383-0.172,0.383-0.382V4.063C18.042,3.853,17.87,3.681,17.659,3.681 M11.148,12.87H6.937c-0.102,0-0.199,0.04-0.27,0.113l-2.028,2.025v-1.756c0-0.211-0.172-0.383-0.383-0.383H2.724V7.51h5.361v2.68c0,0.21,0.172,0.382,0.383,0.382h2.68V12.87z M17.276,9.807h-1.533c-0.211,0-0.383,0.172-0.383,0.383v1.755L13.356,9.92c-0.07-0.073-0.169-0.113-0.27-0.113H8.851v-5.36h8.425V9.807z"></path>
                    </svg>
                </a>
                <Modal open={this.state.isOpen} onClose={this.onCloseModal} classNames={this.customModalStyles}>
                    {this.renderNavbar()}
                    <p className="contact-description">Vous pouvez me joindre a l'adresse suivante: <a href="mailto:augustin.chini@hotmail.fr" target="_top">augustin.chini@hotmail.fr</a>. Ou bien remplir le formulaire suivant:</p>
                    <br />
                    <form className="form-style" onSubmit={this.handleSubmit}>
                        <label>
                            <input type="email"></input>
                            <span>Email:</span>
                        </label>
                        <label>
                            <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                            <span>Message:</span>
                        </label>
                        <input type="submit" value="Envoyer" />
                    </form>
                </Modal>
            </div>
        );
    }
}

export default Contact;

interface ContactProps {
    className?: string
}
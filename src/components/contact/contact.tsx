import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import './contact.css';
import NavBar from '../navBar/navBar';
import { AnimationManager } from "../../services/utils";
import { Link } from '../../model/environment';
import { NavbarEvent } from '../../model/NavbarEvent';
import { FaEnvelope } from 'react-icons/fa';
import { modalSignal } from '../../components/app';
import { Message } from '../../model/message';


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

    private microAnimationCustomInlineStyle: any = {
        width: '47px',
        height: '35px',
        marginTop: '5px',
        color: '#505050' 
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
        // add a listener to the modal signal, if other components want to open the contact modal
        modalSignal.subscribe((message: Message)=>{
            if(message && message.code === 100 && message.type === 'open' && message.content === 'contact') {
                this.onOpenModal();
            }
        });
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
                <span onClick={this.onOpenModal}>
                    <FaEnvelope style={this.microAnimationCustomInlineStyle} />
                </span>
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
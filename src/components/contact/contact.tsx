import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import './contact.css';
import NavBar from '../navBar/navBar';
import iconValid from '../../assets/img/valid.png'
import iconError from '../../assets/img/error.png'
import { AnimationManager } from "../../services/utils";
import { Link } from '../../model/environment';
import { NavbarEvent } from '../../model/NavbarEvent';
import { FaEnvelope } from 'react-icons/fa';
import { modalSignal } from '../../components/app';
import { Message } from '../../model/message';
import { Mailer } from '../../services/mailer';


class Contact extends Component<ContactProps> {
    state: { isConfirmOpen: boolean, isOpen: boolean, isSendMailSuccess: boolean, from: string, body: string } = {
        isOpen: false,
        isConfirmOpen: false,
        isSendMailSuccess: true,
        from: "",
        body: ""
    }
    props: any;
    customModalStyles: any = {
        modal: ["modal-container"],
        closeButton: ["modal-close-button"]
    }
    titleContactModal: Link = {
        label: "Contact",
        path: "#",
        type: "none"
    }

    titleValidationModal: Link = {
        label: "Effectué",
        path: "#",
        type: "none"
    }

    titleErrorModal: Link = {
        label: "Erreur",
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
        modalSignal.subscribe((message: Message) => {
            if (message && message.code === 100 && message.type === 'open' && message.content === 'contact') {
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

        let stateCopy: any = this.state;
        stateCopy[event.target.id.replace('-field', '')] = event.target.value;

        this.setState(stateCopy);

        event.target.style.height = "20px";
        event.target.style.height = (event.target.scrollHeight) + "px";

        // check the fields after the modification to apply the correct classes
        this.checkFields();

    }

    /**
     * Function called on the contact form submission
     * @param event Submit event
     */
    handleSubmit(event: any) {

        if (this.checkFields()) {

            let submitElement: HTMLInputElement = document.getElementById("form-submit") as HTMLInputElement;
            if (submitElement) {
                submitElement.disabled = true;
                submitElement.value = "Veuillez patienter ...";
            }

            Mailer.send(this.state.from, this.state.body)
                .then(() => {
                    this.setState({
                        ...this.state,
                        isOpen: false,
                        isConfirmOpen: true,
                        isSendMailSuccess: true
                    })
                }, () => {
                    this.setState({
                        ...this.state,
                        isOpen: false,
                        isConfirmOpen: true,
                        isSendMailSuccess: false
                    })
                });
        }

        event.preventDefault();
    }

    /**
     * Check all the form fields apply the error css class if needed
     * @returns {boolean} True if the form is valid
     */
    checkFields = (): boolean => {
        if (this.state.from !== "" && this.state.body !== "") {
            let inputField = document.getElementById("body-field");
            if (inputField)
                inputField.classList.remove("error-input");
            inputField = document.getElementById("from-field");
            if (inputField)
                inputField.classList.remove("error-input");

            return true;
        } else if (this.state.body === "" && this.state.from === "") {
            let inputField = document.getElementById("body-field");
            if (inputField)
                inputField.classList.add("error-input");
            inputField = document.getElementById("from-field");
            if (inputField)
                inputField.classList.add("error-input");
        }
        else if (this.state.body === "") {
            let inputField = document.getElementById("body-field");
            if (inputField)
                inputField.classList.add("error-input");
        } else if (this.state.from === "") {
            let inputField = document.getElementById("from-field");
            if (inputField)
                inputField.classList.add("error-input");
        }

        return false;
    }

    onOpenModal = () => {
        this.setState({ ...this.state, isOpen: true });
    };

    onCloseModal = () => {
        this.setState({ ...this.state, isOpen: false });
    };

    onCloseConfirmModal = () => {
        this.setState({ ...this.state, isConfirmOpen: false });
    };

    onOpenConfirmModal = () => {
        this.setState({ ...this.state, isConfirmOpen: true });
    };

    /**
     * Return the rendered navbar if needed
     */
    renderNavbar(link: Link) {
        if (this.state.isOpen || this.state.isConfirmOpen)
            return <NavBar style={{ position: "relative", overflow: "hidden" }} showHomeLink={false} data={[link]} />
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
                    {this.renderNavbar(this.titleContactModal)}
                    <p className="contact-description">Vous pouvez me joindre a l'adresse suivante: <a href="mailto:augustin.chini@hotmail.fr" target="_top">augustin.chini@hotmail.fr</a>. Ou bien remplir le formulaire suivant:</p>
                    <br />
                    <form className="form-style" onSubmit={this.handleSubmit}>
                        <label>
                            <input id="from-field" type="email" onChange={this.handleChange}></input>
                            <span>Email:</span>
                        </label>
                        <label>
                            <textarea id="body-field" onChange={this.handleChange}></textarea>
                            <span>Message:</span>
                        </label>
                        <input id="form-submit" type="submit" value="Envoyer" />
                    </form>
                </Modal>
                <Modal open={this.state.isConfirmOpen} onClose={this.onCloseConfirmModal} classNames={this.customModalStyles}>
                    {this.renderNavbar(this.state.isSendMailSuccess ? this.titleValidationModal : this.titleErrorModal)}
                    <div className="body-container">
                        <img alt="Validation Ok" src={this.state.isSendMailSuccess ? iconValid : iconError}></img>
                        <br />
                        <p className="contact-description">
                            {
                                this.state.isSendMailSuccess ?
                                    <span>Votre message a bien été envoyé, je vous repond vite <span role="img" aria-label="nerd emoji">🤓</span></span> :
                                    <span>Hum <span role="img" aria-label="thoughtful emoji">🤔</span> ... il semblerait qu'il y ait une erreur avec mon serveur mail, j'en suis désolé. Vous pouvez toujours me joindre <a href="mailto:augustin.chini@hotmail.fr" target="_top">ICI</a>.</span>
                            }
                        </p>
                        <button type="button" onClick={this.onCloseConfirmModal}>Fermer</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Contact;

interface ContactProps {
    className?: string
}
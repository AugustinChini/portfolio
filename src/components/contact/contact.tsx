import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import './contact.css';
import NavBar from '../navBar/navBar';
import { Router } from 'react-router';
import { Link } from '../../model/environment';

class Contact extends Component<ContactProps> {

    state: any = { isOpen: false };
    props: any;
    customModalStyles: any=  { 
        modal: ["modal-container"],
        closeButton: ["modal-close-button"]
    }
    title: Link = {
        label: "N'hesitez pas a m'envoyer un message",
        path: "#",
        type: "none"
    }


    constructor(props: { className: string }) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({ value: event.target.value });
        event.target.style.height = "20px";
        event.target.style.height = (event.target.scrollHeight)+"px";
    }

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

    renderNavbar() {
        if(this.state.isOpen)
            return <NavBar showHomeLink={false} data={[this.title]}/>
        else
            return undefined
    }

    render() {
        return (
            <div className={"contactButton orangeBgrd white " + this.props.className}>
                <a onClick={this.onOpenModal}>
                    <svg className="icon" viewBox="0 -2 20 20">
                        <path d="M17.659,3.681H8.468c-0.211,0-0.383,0.172-0.383,0.383v2.681H2.341c-0.21,0-0.383,0.172-0.383,0.383v6.126c0,0.211,0.172,0.383,0.383,0.383h1.532v2.298c0,0.566,0.554,0.368,0.653,0.27l2.569-2.567h4.437c0.21,0,0.383-0.172,0.383-0.383v-2.681h1.013l2.546,2.567c0.242,0.249,0.652,0.065,0.652-0.27v-2.298h1.533c0.211,0,0.383-0.172,0.383-0.382V4.063C18.042,3.853,17.87,3.681,17.659,3.681 M11.148,12.87H6.937c-0.102,0-0.199,0.04-0.27,0.113l-2.028,2.025v-1.756c0-0.211-0.172-0.383-0.383-0.383H2.724V7.51h5.361v2.68c0,0.21,0.172,0.382,0.383,0.382h2.68V12.87z M17.276,9.807h-1.533c-0.211,0-0.383,0.172-0.383,0.383v1.755L13.356,9.92c-0.07-0.073-0.169-0.113-0.27-0.113H8.851v-5.36h8.425V9.807z"></path>
                    </svg>
                </a>
                <Modal open={this.state.isOpen} onClose={this.onCloseModal} classNames={this.customModalStyles}>
                    {this.renderNavbar()}
                    <h2 className="white shadow"></h2>
                    <p>Vous pouvez me joindre a l'adresse suivante: <a href="mailto:augustin.chini@hotmail.fr" target="_top">augustin.chini@hotmail.fr</a>. Ou bien remplir le formulaire suivant:</p>
                        <br />
                    <form className="form-style" onSubmit={this.handleSubmit}>
                        <label>
                            Email:
                                <input type="email"></input>
                        </label>
                        <label>
                            Message:
                                <textarea value={this.state.value} onChange={this.handleChange}></textarea>
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
import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import './contact.css';

class Contact extends Component<ContactProps> {

    state:any = {isOpen: false};
    props = {className: ""};

    onOpenModal = () => {
        this.setState({ isOpen: true });
    };

    onCloseModal = () => {
        this.setState({ isOpen: false });
    };

    render() {
        return (
            <div className={"contactButton orangeBgrd white " + this.props.className}>
                <a onClick={this.onOpenModal}>Contact</a>
                <Modal open={this.state.isOpen} onClose={this.onCloseModal}>
                    <h2>Simple centered modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                        hendrerit risus, sed porttitor quam.
                    </p>
                </Modal>
            </div>
        );
    }
}

export default Contact;

interface ContactProps {
    className?: string
}
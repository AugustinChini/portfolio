import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import './contact.css';

class Contact extends Component<ContactProps> {

    state: any = { isOpen: false };
    props: any;

    constructor() {
        super({ className: "" });
    }

    onOpenModal = () => {
        this.setState({ isOpen: true });
    };

    onCloseModal = () => {
        this.setState({ isOpen: false });
    };

    render() {
        return (
            <div className={"contactButton orangeBgrd white " + this.props.className}>
                <a onClick={this.onOpenModal}>
                <svg viewBox="0 0 32 32" className="icon">
                    <g fill-rule="evenodd" id="icon-svg510">
                        <path d="M19.638 20l-2.218 1.983 0.027-0-0.020 0.017h-3.306l1.697-0.009-2.267-0.011-2.244-1.98h8.331zM20.757 19l3.243-2.9v-8.091c0-0.557-0.455-1.009-1-1.009h-15c-0.552 0-1 0.444-1 1.002v8.198l3.173 2.8h10.583zM25 15.323l0.366-0.323h1.634v12.993c0 0.289-0.121 0.549-0.314 0.732v0l-7.686-6.725h-0.050l8.050-7h-1.634l1.134-1h-1.5v1.323zM6 15.323l-0.366-0.323h-1.634l8.050 7h-0.050l-7.688 6.727c-0.193-0.184-0.312-0.444-0.312-0.734v-12.993h1.634l-1.134-1h-1.5v14.006c0 1.101 0.89 1.994 2.004 1.994h20.993c1.107 0 2.004-0.895 2.004-1.994v-14.006l-3-2.64v-3.36c0-1.104-0.891-2-1.997-2h-4.093l-3.409-3-3.409 3h-4.093c-1.103 0-1.997 0.887-1.997 2v3.36l-3 2.64h1.5l1.5-1.323v2.645zM17.428 6l-1.928-1.7-1.928 1.7h3.856zM25 12.677l1.5 1.323h-1.5v-1.323zM12.5 23h6l7 6h-20l7-6zM9 10v1h13v-1h-13zM9 13v1h13v-1h-13zM9 16v1h13v-1h-13z"></path>
                    </g>
                </svg>
                </a>
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
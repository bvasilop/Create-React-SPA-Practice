import React from 'react';
import '../styles/index.scss';
import contactStyles from './contact.module.scss';

const Contact = (props) =>  (
        <div className={contactStyles.content}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <h2>{props.subtitle}</h2>
            <ul className={contactStyles.contacts}>
                <li >
                    <a href="mailto:bvasilop@gmail.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Send me an Email!">
                        bvasilop@gmail.com
                    </a>
                        </li>
                <li>
                    <a href="https://www.billvas.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Visit my website!">
                        billvas.com
                    </a>
                </li>
            </ul>

        </div>
)
Contact.defaultProps = { // using default props
    title: 'Contact',
    subtitle: 'Contact Info:',
    content: `If you are interested in connecting with me about other projects, I'd love to hear from you!`
};


export default Contact;

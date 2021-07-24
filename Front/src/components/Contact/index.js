// == Import de la lib React
import React from 'react';
// Ajout de la librairie de validation des props
import PropTypes from 'prop-types';


// == Imports locaux
import './styles.scss';

const Contact = ({ descriptions, messages, footermessages }) => (
  <div className="contact">
    <p className="contact_title">Contact</p>
    <div className='contact'>
      <div>
        {messages.map((message) => (
          <p className="contact_message" key={message}>{message}</p>
        ))}
      </div>
      <ul className="contact_descriptions">

        {descriptions.map((description) => (
          <li
            className="contact_description"
            key={description}
          >
            {description}
          </li>
        ))}
      </ul>
      <div>
        {footermessages.map((footermessage) => (
          <p className="contact_message" key={footermessage}>{footermessage}</p>
        ))}
      </div>
    </div>
  </div>

);

// Validation des props
Contact.propTypes = {
  descriptions: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired,
  footermessages: PropTypes.array.isRequired,
};


export default Contact;

// == Import de la lib React
import React from 'react';
// Ajout du composant ContactForm
import Form from './ContactForm';


// Ajout de la librairie de validation des props
import PropTypes from 'prop-types';


// == Imports locaux
import './styles.scss';

const Contact = ({ descriptions, messages }) => (
  <div className="Contact">
    <div className="contact">
      <div>
        <div className="title">Contactez-moi</div>
      </div>
      <div className='contact_div'>
        <div>
          {messages.map((message) => (
            <p className="contact_message" key={message}>{message}</p>
          ))}
        </div>
        <ul className="contact_descriptions">

          <p className="contact_descriptions_text">Idées de projets réalisables :</p>

          {descriptions.map((description) => (
            <li
              className="contact_descriptions_list"
              key={description}
            >
              {description}
            </li>
          ))}
        </ul>
        <div className="footer_contact">
          <p> À Bientôt, <br />
            <span className="contact_footer">Camille</span>
          </p>

        </div>
      </div>
    </div>
    <div className="ContactForm">
      <Form />
    </div>
  </div>
);

// Validation des props
Contact.propTypes = {
  descriptions: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired,
};


export default Contact;

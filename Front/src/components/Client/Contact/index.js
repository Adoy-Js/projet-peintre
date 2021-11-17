// == Import de la lib React
import React from "react";
// Ajout du composant ContactForm
import Form from "./ContactForm";

// Ajout de la librairie de validation des props
import PropTypes from "prop-types";

// == Imports locaux
import "./styles.scss";

const Contact = ({ descriptions, messages }) => (
  <div className="Contact">
    <div className="contact">
      <div>
        <div className="title">Contact</div>
      </div>
      <div className="contact_div">
        <div>
          {messages.map((message) => (
            <p className="contact_message" key={message}>
              {message}
            </p>
          ))}
        </div>
        <br />
        <p className="p">
          Je réalise sur commande :<span className="contact_line"></span>
        </p>

        <ul className="contact_descriptions">
          {descriptions.map((description) => (
            <li className="contact_descriptions_list" key={description}>
              {description}
            </li>
          ))}
        </ul>
        <div>
          <p className="contact_message">
            Le plus important pour moi lors d’un projet, une collaboration ou
            une commande est avant tout la rencontre, l’échange, le partage de
            nos idées afin de créer quelque chose ensemble.
            <br /> A bientôt, Camille
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

// == Import de la lib React
import React from 'react';
// Ajout de la librairie de validation des props
import PropTypes from 'prop-types';


// == Imports locaux
import './styles.scss';

const Contact = ({ descriptions }) => (
  <div>
    <h1>Contact</h1>
    <div>
      
    </div>
    <ul className="descriptions">

      {descriptions.map((description) => (
        <li
          className="description"
          key={description}
        >
          {description}
        </li>
      ))}
    </ul>
  </div>
);

// Validation des props
Contact.propTypes = {
  descriptions: PropTypes.array.isRequired,
};


export default Contact;

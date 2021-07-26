// == Import de la lib React
import React from 'react';
// Ajout de la librairie de validation des props
import PropTypes from 'prop-types';

// == Imports locaux
import './styles.scss';

const Biography = ({ descriptions, messages, footermessages }) => (
  <div className="Contact">
    <div className="contact">
      <p className="contact_title">Biographie</p>
      <div className='contact_div'>
        <div>
          Salut, moi c'est Camille.
        </div>
        <div className="contact_footer">
          Allez salut hein ! <br />
          Camille Paul
        </div>
      </div>
    </div>
  </div>

);

// Validation des props
Biography.propTypes = {
  messages: PropTypes.string.isRequired,
  footermessages: PropTypes.string.isRequired,
};


export default Biography;

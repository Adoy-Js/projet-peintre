// == Import de la lib React
import React from 'react';

// == Imports locaux
import './styles.scss';

const Biography = ({ footerMessages, title, message }) => (
  <div className="Contact">
    <div className="contact">
      <p className="contact_title">{title}</p>
      <div className='contact_div'>
        <div>
          {message}
        </div>
        <div className="contact_footer">
          {footerMessages.map((footerMessage) => (
            <p className="contact_footer_message" key={footerMessage}>{footerMessage}</p>
          ))}
        </div>
      </div>
    </div>
  </div>

);

// Validation des props
Biography.propTypes = {
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  footerMessages: PropTypes.string.isRequired,
};


export default Biography;

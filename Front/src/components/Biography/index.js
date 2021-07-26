// == Import de la lib React
import React from 'react';

// == Imports locaux
import './styles.scss';

const Biography = () => (
  <div className="Contact">
    <div className="contact">
      <p className="contact_title">Biographie</p>
      <div className='contact_div'>
        <div>
          Coucou, moi c'est Camille.
        </div>
        <div className="contact_footer">
          Allez salut hein ! <br />
          signé l'artiste moderne
        </div>
      </div>
    </div>
  </div>

);

export default Biography;

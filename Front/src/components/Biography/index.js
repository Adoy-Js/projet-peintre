// == Import de la lib React
import React from 'react';

// == Imports locaux
import './styles.scss';

const Biography = () => (
  <div className="Biography">
    <div className="biography">
      <p className="contact_title">Biographie</p>
      <div className="biography_div">
        <div>
          Coucou, moi c'est Camille.
        </div>
        <div className="biography_footer">
          Allez salut hein ! <br />
          signé l'artiste moderne
        </div>
      </div>
    </div>
  </div>

);

export default Biography;

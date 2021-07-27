// == Import de la lib React
import React, { useState } from 'react';

import imgPortrait1 from './img/Portrait_1.jpg'
import imgPortrait2 from './img/Portrait_2.jpg'


// == Imports locaux
import './styles.scss';

const Portrait = () => (
  <div>
    <p className="portrait_introPortrait">Pourquoi vous contenter d'un selfie quand le dessin existe ?</p>
    <div className="portrait">
      <div className="portrait_p1">
        <img src={imgPortrait1} alt="portrait" className="portrait_1" />
        <span>
          Dessin au Crayon graphite <br />
          21 x 29,7 cm (A4) <br />
          2018
        </span>
      </div>
      <div className="portrait_p2">
        <img src={imgPortrait2} alt="portrait" className="portrait_2" />
        <span>
          Dessin au Crayon graphite <br />
          21 x 29,7 cm (A4) <br />
          2018
        </span>
      </div>
    </div>
  </div>
);

export default Portrait;

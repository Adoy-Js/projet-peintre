// == Import npm
import React from 'react';

// == Import
import img1 from './Accueil_1.jpg';
import img2 from './Accueil_2.jpg';
import img3 from './Accueil_3.jpg';

import './styles.scss';

// == Composant
const Home = () => (
  <div className="app">
    <div>
      <img src={img1} alt="mer" className="mer" />
      <img src={img2} alt="neige" className="neige" />
      <img src={img3} alt="falaise" className="falaise" />
    </div>
  </div>
);

// == Export
export default Home;

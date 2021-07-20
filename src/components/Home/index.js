// == Import de la lib React
import React from 'react';

// == Import npm

// == Imports locaux
import './styles.scss';
import img1 from './';
import img2 from './img2/Accueil_2.jpg';
import img3 from './img2/Accueil_3.jpg';

const Home = () => (
  <Home className="Home">
    {/*<img src="//" alt="Logo" id="logo" />*/}
    <div className="img-home">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <img src={img1} alt="mer" />
        {/*<img src={img2} alt="hiver" />*/}
        {/*<img src={img3} alt="falaise" />*/}
      </div>
    </div>
  </Home>
);

export default Home;

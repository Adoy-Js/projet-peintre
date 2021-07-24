// == Import npm
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// == Import
import img1 from './Accueil_1.jpg';
import img2 from './Accueil_2.jpg';
import img3 from './Accueil_3.jpg';

import './styles.scss';

// == Composant
const Home = () => (
  <div className="app">
    <h1 className="welcome">Mon nom est Camille PAUL
      <br /> Je souhaite vous montrer qui je suis et vous partager mes voyages à travers mon art</h1>
    <div className="slider">
      <Splide>
        <SplideSlide className="sea">
          <img src={img1} alt="mer" className="sea_image" />
        </SplideSlide>
        <SplideSlide className="snow">
          <img src={img2} alt="neige" />
        </SplideSlide>
        <SplideSlide className="cliff">
          <img src={img3} alt="falaise" />
        </SplideSlide>
      </Splide>
    </div>
  </div>
);

// == Export
export default Home;

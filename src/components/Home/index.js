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
    <Splide>
      <SplideSlide className="mer">
        <img src={img1} alt="mer" />
      </SplideSlide>
      <SplideSlide className="neige">
        <img src={img2} alt="neige" />
      </SplideSlide>
      <SplideSlide className="falaise">
        <img src={img3} alt="falaise" />
      </SplideSlide>
    </Splide>
  </div>
);

// == Export
export default Home;

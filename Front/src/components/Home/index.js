// == Import npm
import React, { PureComponent } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';


// == Import
// import img1 from './Accueil_1.jpg';
// import img2 from './Accueil_2.jpg';
// import img3 from './Accueil_3.jpg';

import './styles.scss';

// == Composant
class Home extends PureComponent {
    state = {
      images: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:5000/about`)
        .then(res => {
          const images = res.data;
          this.setState({ images });
        })
    }

  render() {
    return(
  <div className="app">
    <Splide>
      <SplideSlide className="image">
      { this.state.images.map(image => <li>{image.id}</li>)}
      </SplideSlide>
    </Splide>
  </div>
)}};

// == Export
export default Home;

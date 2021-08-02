// == Import npm
import React, { PureComponent } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';

import './styles.scss';

// == Composant
class Home extends PureComponent {
  state = {
    images: []
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/about`)
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
  }

  render() {
    return (
      <div className="home">
        <div className="welcome">
          <h1>Mon nom est Camille PAUL</h1>
          <h2>
            Je souhaite vous montrer qui je suis et vous partager mes voyages à travers mon art
          </h2>
        </div>

        <div className="app">
        <Splide className="image">
              {this.state.images.map((image) => (
                <SplideSlide className="slide">
                      <img className="image" key={image.id_picture} src={image.image} className="image_slider"/>
                 </SplideSlide>
             ))}
          </Splide>
        </div>
      </div>
    )
  }
};

// == Export
export default Home;


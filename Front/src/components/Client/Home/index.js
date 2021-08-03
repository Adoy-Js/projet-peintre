// == Import npm
import React, { PureComponent } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';

import './styles.scss';

// == Composant
class Home extends PureComponent {
  state = {
    images: [],
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
      <div className="welcome">
        <h1>Anaïs est la meilleure</h1>
        <Carousel autoPlay interval={7000} infiniteLoop showStatus={false}>
        {this.state.images.map(image =>
        <img key={image.id_artist} className="Home_image"src={image.image} className="image_slider"/>)}
      </Carousel>
      </div>
      
    )
  
  }
}


// == Export
export default Home;


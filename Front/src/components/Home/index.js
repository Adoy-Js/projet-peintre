// == Import npm
import React, { PureComponent } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import axios from 'axios';


// == Import
// import img1 from './Accueil_1.jpg';
// import img2 from './Accueil_2.jpg';
// import img3 from './Accueil_3.jpg';

import './styles.scss';

const api = axios.create({
  baseURL: `http://projet-peintre.herokuapp.com/about`
})

// == Composant
<<<<<<< HEAD
const Home = () => (
  <div className="home">
    <div className="welcome">
      Mon nom est Camille PAUL
      <br /> Je souhaite vous montrer qui je suis et vous partager mes voyages à travers mon art
    </div>
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
=======
class Home extends PureComponent {
  state = {
    images: []

  }
  constructor() {
    super();
    api.get('/').then(res => {
      const images = res.data; 
      this.setState({ images: res.data });
    })
  }


  //componentDidMount() {
  // axios.get(`https://projet-peintre.herokuapp.com/about`)
  // .then(res => {
  // const images = res.data;
  //this.setState({ images });
//)
// }

render() {
  return (
    <div className="app">
      <Splide>
        <SplideSlide className="image">
          {this.state.images.map(image => <img key={image.picture_id}>{image.image}</img>)}
        </SplideSlide>
      </Splide>
    </div>
  )
};}
>>>>>>> origin/css

// == Export
export default Home;

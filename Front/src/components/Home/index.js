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

// == Export
export default Home;

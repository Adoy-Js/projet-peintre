// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';


import imgPortrait1 from './img/Portrait_1.jpg'
import imgPortrait2 from './img/Portrait_2.jpg'


// == Imports locaux
import './styles.scss';



class Portrait extends PureComponent {
  state = {
    images: []
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/artwork/portrait`)
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
  }

  render() {
    return (
  <div>
    <p className="portrait_introPortrait">Pourquoi vous contenter d'un selfie quand le dessin existe ?</p>
    <div className="portrait">
      <div className="portrait_p1">
      {this.state.images.map(image => <img className="image" key={image.picture_id} src={image.image} className="image_portrait"></img>)}
        <span>
          Dessin au Crayon graphite <br />
          21 x 29,7 cm (A4) <br />
          2018
        </span>
        </div>
    </div>
  </div>
  )
}
};

export default Portrait;

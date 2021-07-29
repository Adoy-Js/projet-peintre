// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';

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
      <div className="portraits">
        <p>Pourquoi vous contenter d'un selfie quand le dessin existe ?</p>
        <div className="portrait">
          {this.state.images.map(image => <img className="portrait_images" key={image.picture_id} src={image.image}></img>)}
          <span>
            Dessin au Crayon graphite <br />
            21 x 29,7 cm (A4) <br />
            2018
          </span>
        </div>
      </div>
    )
  }
};

export default Portrait;

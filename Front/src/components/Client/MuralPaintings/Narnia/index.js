// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';

import './styles.scss'

class Narnia extends PureComponent {
  state = {
    images: [],
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/artwork/mural-painting/10`)
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
  }

  render() {
    return (
      <div className="mural_paintings">

        <h1>Narnia</h1>

        <div className="mural">
          {this.state.images.map((image) =>
            <div key={image.id_artwork} className="mural_div">
              {image.image.map(img => <img key={img} className="mural_Narnia" src={img} />)}
              <div className="description">{image.description}</div>
            </div>)}
        </div>

      </div >
    )
  }
};

// == Export
export default Narnia;


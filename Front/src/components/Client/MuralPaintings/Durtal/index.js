// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';

import './styles.scss'

class Durtal extends PureComponent {
  state = {
    images: [],
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/artwork/mural-painting/9`)
      .then(res => {
        const images = res.data;
        this.setState({ images });
        
      })
  }

  render() {
    return (
      <div className="mural_paintings">

        <h1 className="title_mural">
          Durtal
        </h1>

        <div className="mural_gallery">
          {this.state.images.map((image) =>
            <div key={image.id_artwork} className="mural_div">
              {image.image.map(img => <img key={img} className="mural_Durtal" src={img} />)}
              <div className="description">{image.description}</div>
            </div>)}
        </div>

      </div >
    )
  }
};

// == Export
export default Durtal;


// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';

// == Imports locaux
import './styles.scss';

class Paintings extends PureComponent {
  state = {
    images: [],
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/artwork/painting`)
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
  }

  render() {
    return (
      <div className="Paintings">

        <h1>
          Peintures
        </h1>

        <h2>Pourquoi vous contenter d'un selfie quand le dessin existe ?</h2>

        <div className="painting_gallery">

          {this.state.images.map(image =>
            <div className="painting_div" key={image.id_artwork}>

              <img className="painting_image" src={image.image}></img>
              <p className="painting_description">{image.name_artwork} {image.format} {image.date}</p>

            </div>)}

        </div>

      </div>
    )
  }
};

// == Export
export default Paintings;

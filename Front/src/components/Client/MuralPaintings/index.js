// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';

// == Imports locaux
import './styles.scss';

class MuralPaintings extends PureComponent {
  state = {
    images: [],
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/artwork/mural-painting`)
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
  }

  render() {
    return (
      <div className="mural_paintings">

        <div className="mural">
          {this.state.images.map((image) => <img className="mural_image" key={image.picture_id} src={image.main_picture}></img>)} 
        </div>

      </div >
    )
  }
};

// == Export
export default MuralPaintings;
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

        <h1 className="title_mural">
          Peinture murales
        </h1>

        <div className="mural_gallery">
          {this.state.images.map((image) => 
          <div className="mural_div">
           <a href={`/artwork/mural-painting/${image.id_artwork}`} className="link_muralPainting"><img className="mural_image" key={image.picture_id} src={image.main_picture}></img>{image.name_artwork}</a>
          </div>)} 
        </div>

      </div >
    )
  }
};

// == Export
export default MuralPaintings;

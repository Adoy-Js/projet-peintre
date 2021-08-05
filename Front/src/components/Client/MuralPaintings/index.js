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
    axios.get(`https://projet-peintre.herokuapp.com/artwork/mural-painting/`)
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
  }

  render() {
    return (
      <div className="mural_paintings">

        <h1>Peintures murales</h1>

        <h2>Quand je n'ai plus assez de peinture je peins plus vite</h2>

        <div className="mural">
          {this.state.images.map((image) =>
            <div className="mural_all">

              <h3 className="mural_title"> {image.name_artwork} </h3>

              <a href={`/artwork/mural-painting/${image.id_artwork}`} className="link_muralPainting"> <img className="mural_image" key={image.picture_id} src={image.main_picture} /></a>

              <div className="mural_information"> {image.place} {image.format} {image.date}</div>

              <hr className="line" />
            </div>
          )}
        </div>

      </div >
    )
  }
};

// == Export
export default MuralPaintings;

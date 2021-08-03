// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';


class Piwakawaka extends PureComponent {
  state = {
    images: [],
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/artwork/mural-painting/11`)
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
  }

  render() {
    return (
      <div className="mural_paintings">

        <h1 className="title_mural">
        Piwakawaka
        </h1>

        <div className="mural_gallery">
          {this.state.images.map((image) =>
            <div className="mural_div">
              <img className="mural_image" key={image.id_artwork} src={image.image} />
              <div className="description">{image.description}</div>
            </div>)}
        </div>

      </div >
    )
  }
};

// == Export
export default Piwakawaka;

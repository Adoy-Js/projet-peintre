// == Import de la lib React
import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

// == Imports locaux
import './styles.scss';

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

        <h1 className="title_mural">
          Narnia
        </h1>

        <div className="mural_gallery">
          {this.state.images.map((image) =>
            <div className="mural_div">
              <img className="mural_image" key={image.id_artwork} src={image.image}></img>
            </div>)}
        </div>

      </div >
    )
  }
};

// == Export
export default Narnia;


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
        <div className="painting">
          {this.state.images.map(image => <img className="painting_image" key={image.picture_id} src={image.image}></img>)}
        </div>
    )
  }
};

  // == Export
  export default Paintings;

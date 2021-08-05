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
      <div className="welcome">
        <h1>Piwakawaka</h1>
        
        {this.state.images.map((image) =>
        <div key={image.id_artwork} className="mural_div">
              {image.image.map(img => <img key={img} className="mural_Piwakawaka" src={img} />)}
              <div className="description">{image.description}</div>
            </div>)}
        
      </div>    
    )
  }
};

// == Export
export default Piwakawaka;

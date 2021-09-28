import React, { PureComponent } from 'react';
import axios from 'axios';

import './styles.scss'

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
      <div>
      {this.state.images.map((image) =>
      <div className="welcome">
       
        <h1 className="title_piwa">
          {image.name_artwork}
        </h1>
        
        
        <div key={image.id_artwork} className="mural_div">
            <div className="Piwaka">
              {image.image.map(img => <img key={img} className="mural_Piwakawaka" src={img} />)}
            </div>
            <div className="description">{image.description}</div>
            </div>

      </div>
      )}
      </div>
    )
  }
}

// == Export
export default Piwakawaka;

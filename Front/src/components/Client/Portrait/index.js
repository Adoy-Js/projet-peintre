// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';

// == Imports locaux
import Footer from '../Footer'
import './styles.scss';

class Portrait extends PureComponent {
  state = {
    images: [],
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/artwork/portrait`)
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
  }

  render() {
    return (
      <div className="Portraits">

      <div className="header_portrait">
      <h1> Portraits</h1>

        <h2> “ Le portrait c’est avant tout une rencontre, une histoire qui se raconte 
            <br />prenant forme spontanément en un instant “</h2>
      </div>
        
        
        <div className="portrait_gallery">
          {this.state.images.map(image =>
          
            <div className="portrait_div" key={image.id_artwork}>
            
              <img className="portrait_image" key={image.picture_id} src={image.image}></img>
              <p className="portrait_description">{image.description} {image.format} {image.date}</p>
              <hr></hr>
          </div> )}
        </div>
<Footer />
      </div >
    )
  }
};

export default Portrait;

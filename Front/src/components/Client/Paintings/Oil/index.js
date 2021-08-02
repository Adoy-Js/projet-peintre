// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';

// == Imports locaux
import './styles.scss';

class Paintings extends PureComponent {
  state = {
    titles: [],
    images: [],
    descriptions: [],
    formats: [],
    dates: [],
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/artwork/painting`)
 .then(res => {
        const images = res.data;
        this.setState({ images });
        const descriptions = res.data;
        this.setState({ descriptions },);
        const formats = res.data;
        this.setState({ formats });
        const dates = res.data;
        this.setState({ dates });
      })
  }

  render() {
    return (
      <div className="Paintings">

        <h1>
          Peintures
        </h1>

        <h2>Pourquoi vous contenter d'un selfie quand le dessin existe ?</h2>

        <div className="painting">
          {this.state.images.map(image => <img className="painting_image" key={image.id_picture} src={image.image}></img>)}
        </div>
        
        <div className="description">
          {this.state.descriptions.map(description => <span className="description" key={description.picture_id}>{description.description}</span>)}
        </div>

        <div className="description">
          {this.state.formats.map(format => <span className="description_format" key={format.picture_id}>{format.format}</span>)}
        </div>

        <div className="description">
          {this.state.dates.map(date => <span className="description_date" key={date.picture_id}>{date.date}</span>)}
        </div>

      </div >
    )
  }
};

  // == Export
  export default Paintings;

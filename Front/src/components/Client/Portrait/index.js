// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';

// == Imports locaux
import './styles.scss';

class Portrait extends PureComponent {
  state = {
    images: [],
    descriptions: [],
    formats: [],
    dates: [],
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/artwork/portrait`)
      .then(res => {
        const images = res.data;
        this.setState({ images });
        const descriptions = res.data;
        this.setState({ descriptions},);
        const formats = res.data;
        this.setState({ formats });
        const dates = res.data;
        this.setState({ dates });
      })
  }

  render() {
    return (
      <div className="portraits">
        <p>Pourquoi vous contenter d'un selfie quand le dessin existe ?</p>
        <div className="portrait">

          {this.state.images.map(image => <img className="portrait_image" key={image.picture_id} src={image.image}></img>)}
          
          {this.state.descriptions.map(description => <span className="portrait_images" key={description.picture_id}>{description.description}</span>)}

          {this.state.formats.map(format => <span className="portrait_format" key={format.picture_id}>{format.format}</span>)}

            {this.state.dates.map(date => <span className="portrait_date" key={date.picture_id}>{date.date}</span>)}

        </div>
      </div>
    )
  }
};

export default Portrait;

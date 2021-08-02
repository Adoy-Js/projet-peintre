// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';

// == Imports locaux
import './styles.scss';

class Paintings extends PureComponent {
  state = {
    formats: [],
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/artwork/painting`)
 .then(res => {
        const descriptions = res.data;
        this.setState({ descriptions });
      })
  }

  render() {
    return (
        <div className="description">
          {this.state.formats.map(format => <span className="description_format" key={format.picture_id}>{format.format}</span>)}
        </div>
    )
  }
};

  // == Export
  export default Paintings;

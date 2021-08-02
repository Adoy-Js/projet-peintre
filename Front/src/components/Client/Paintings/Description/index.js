// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';

// == Imports locaux
import './styles.scss';

class Paintings extends PureComponent {
  state = {
    descriptions: [],
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/artwork/painting`)
 .then(res => {
        const descriptions = res.data;
        this.setState({ descriptions },);
      })
  }

  render() {
    return (
        <div className="description">
          {this.state.descriptions.map(description => <span className="description" key={description.picture_id}>{description.description}</span>)}
        </div>
    )
  }
};

  // == Export
  export default Paintings;

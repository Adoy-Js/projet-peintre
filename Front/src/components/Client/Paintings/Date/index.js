// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';

// == Imports locaux
import './styles.scss';

class Paintings extends PureComponent {
  state = {
    dates: [],
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/artwork/painting`)
 .then(res => {
        const dates = res.data;
        this.setState({ dates });
      })
  }

  render() {
    return (
        <div className="description">
          {this.state.dates.map(date => <span className="description_date" key={date.picture_id}>{date.date}</span>)}
        </div>
    )
  }
};

  // == Export
  export default Paintings;

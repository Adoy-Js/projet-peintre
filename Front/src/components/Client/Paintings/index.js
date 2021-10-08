// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

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
      <div className="Paintings">

        <h1>
          Peintures
        </h1>

        <h2>“ J’aime explorer, m’amuser… 
            <br />me laisser simplement porter par la créativité ”
</h2>

      <nav className="menu_paintings">
        <ul className="menu_links">
          <li className="menu_item"><NavLink to="/artwork/painting" exact>Toutes les peintures</NavLink></li> 
          <li className="menu_item"><NavLink to="/artwork/acrylic-painting" exact>Peintures acryliques</NavLink></li>
          <li className="menu_item"><NavLink to="/artwork/oil-painting" exact>Peintures à l'huile</NavLink></li>
        </ul>
      </nav>

        <div className="painting_gallery">

          {this.state.images.map(image =>
            <div className="painting_div" key={image.id_artwork}>

              <img className="painting_image" src={image.image}></img>
              <p className="painting_description">{image.name_artwork} <br /> {image.format} <br /> {image.date}</p>

            </div>)}

        </div>

      </div>
    )
  }
};

// == Export
export default Paintings;

import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../Footer'


class Paintings extends PureComponent {
  state = {
    images: [],
    title : '',
  }

  componentDidMount() {
    axios.get(`https://projet-peintre.herokuapp.com/artwork/oil-painting`)
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
  }

  render() {
    return (
      <div className="Paintings">

        <h1>
          Peintures à l'huile
        </h1>

        <h2></h2>

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
              <p className="painting_description">{image.name_artwork} {image.format} {image.date}</p>

            </div>)}

        </div>
<Footer />
      </div>
    )
  }
}

// == Export
export default Paintings;

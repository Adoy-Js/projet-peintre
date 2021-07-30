// == Import de la lib React
import React, { PureComponent } from 'react';
import axios from 'axios';

// == Imports locaux
import './styles.scss';

class Paintings extends PureComponent {
  /*state = {
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
        const titles = res.data;
        this.setState({ titles });
      })
  }*/

  render() {
    return (
      /*<div className="Paintings">

        <div className="content_paintings">
          {this.state.titles.map(title => <img className="description_paintings" key={title.picture_id} src={title.title}></img>)}
        </div>

        <div className="content_paintings">
          <div className="image_paintings">
            {this.state.images.map(image => <img className="portrait_image" key={image.picture_id} src={image.image}></img>)}
          </div>
        </div>

        <div>
          {this.state.formats.map(format => <span className="format" key={format.picture_id}>{format.format}</span>)}
        </div>   

        <div>
          {this.state.dates.map(date => <span className="date" key={date.picture_id}>{date.date}</span>)}
    </div> */

      <div className="Paintings">
        <div className="header_paintings" >
          <h1 className="description_header_paintings">Peintures</h1>
          <p className="description_header_paintings">Retrouvez mes peintures à l'huile ainsi qu'à l'acryliques</p>
        </div >

        <nav className="menu_paintings">
          <ul className="menu_links">
            <li className="menu_item">Toutes les peintures</li>
            <li className="menu_item">Peintures acryliques</li>
            <li className="menu_item">Peintures à l'huile d'olive</li>
          </ul>
        </nav>

        <div className="content_paintings">
          <div className="image_paintings">
            <span className="img"></span>
            <p className="description_paintings">Nom du projet</p>
          </div>
          <div className="image_paintings">
            <span className="img"></span>
            <p className="description_paintings">Nom du projet</p>
          </div>
          <div className="image_paintings">
            <span className="img"></span>
            <p className="description_paintings">Nom du projet</p>
          </div>
          <div className="image_paintings">
            <span className="img"></span>
            <p className="description_paintings">Nom du projet</p>
          </div>
        </div>

      </div >
    )
  }
};

  // == Export
  export default Paintings;

// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const paintings = () => (
  <div className="Paintings">

    <div className="header_paintings">
      <h1 className="description_header_paintings">Peintures</h1>
      <p className="description_header_paintings">Retrouvez mes peintures à l'huile ainsi qu'à l'acryliques</p>
    </div>

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

  </div>
);

// == Export
export default paintings;
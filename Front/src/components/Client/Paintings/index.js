//Import de la lib React
import React, { useState, useEffect } from "react";
//Import NPM
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import api from "src/api";

//Import locaux
import "./styles.scss";

const Paintings = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/artwork/painting");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Paintings">
      <h1>Peintures</h1>

      <h2>
        “ J’aime explorer, m’amuser…
        <br /> me laisser simplement porter par la créativité ”
      </h2>

      <nav className="menu_paintings">
        <ul className="menu_links">
          <li className="menu_item">
            <NavLink to="/artwork/painting" exact>
              Toutes les peintures
            </NavLink>
          </li>
          <li className="menu_item">
            <NavLink to="/artwork/painting/acrylic-painting" exact>
              Peintures acryliques
            </NavLink>
          </li>
          <li className="menu_item">
            <NavLink to="/artwork/painting/oil-painting" exact>
              Peintures à l'huile
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="painting_gallery">
        {data.map((image) => (
          <div className="painting_div" key={image.id_artwork}>
            <img className="painting_image" src={image.image}></img>
            <p className="painting_description">
              {image.name_artwork} <br /> {image.format} <br /> {image.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Paintings.propTypes={
// prop1:PropTypes.string
// }

// Paintings.defaultProps={
// prop1:''
// }

export default Paintings;

//Import de la lib React
import React, {useState, useEffect} from "react";
import { useParams, NavLink } from "react-router-dom";
//Import NPM
import api from 'src/api';

//Import locaux
import "./styles.scss";

const Painting = ({ prop1 }) => {
  const [data, setData] = useState([]);
  const {painting_category} = useParams();

  const fetchData = async () => {
    try {
      const response = await api.get(`/artwork/${painting_category}`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="Paintings">
      <h1>Peintures</h1>

      <h2>Pourquoi vous contenter d'un selfie quand le dessin existe ?</h2>

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


export default Painting;

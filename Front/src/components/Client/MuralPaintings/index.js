//Import de la lib React
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
//Import NPM
import api from "src/api";

//Import locaux
import "./styles.scss";

const MuralPaintings = () => {
  const [muralPaintings, setMuralPaintings] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/artwork/mural-painting");
      setMuralPaintings(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mural_paintings">
      <h1>Peintures murales</h1>

      <h2>
        “ Peindre sur un mur, c’est comme peindre sur une toile...
        <br /> mais en plus grand “
      </h2>
      <em className="clickForPicture">Cliquez pour ouvrir le projet</em>
      <div className="mural">
        {muralPaintings.map((muralPainting) => (
          <div className="mural_all" key={muralPainting.id_artwork}>
            <h3 className="mural_title">- {muralPainting.name_artwork} -</h3>
            <h3 className="mural_place">{muralPainting.place}</h3>
            <NavLink
              to={`/artwork/mural-painting/${muralPainting.id_artwork}`}
              className="link_muralPainting"
              exact
            >
              {" "}
              <img
                className="mural_image"
                key={muralPainting.picture_id}
                src={muralPainting.main_picture}
              />
            </NavLink>

            <div className="mural_information">
              {muralPainting.format} <br /> {muralPainting.date}
            </div>

            <hr className="line" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MuralPaintings;

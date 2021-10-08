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

      <h2>Quand je n'ai plus assez de peinture je peins plus vite</h2>

      <div className="mural">
        {muralPaintings.map((muralPainting) => (
          <div className="mural_all" key={muralPainting.id_artwork}>
            <h3 className="mural_title"> {muralPainting.name_artwork} </h3>

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
              {" "}
              {muralPainting.place} {muralPainting.format} {muralPainting.date}
            </div>

            <hr className="line" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MuralPaintings;

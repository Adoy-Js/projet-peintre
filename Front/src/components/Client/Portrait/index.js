//Import de la lib React
import React, { useEffect, useState } from "react";
//Import NPM
import PropTypes from "prop-types";
import api from "src/api";

//Import locaux
import "./styles.scss";

const Portrait = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/artwork/portrait");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Portraits">
      <div className="header_portrait">
        <h1> Portraits</h1>useState
        <h2>Pourquoi vous contenter d'un selfie quand le dessin existe ?</h2>
      </div>

      <div className="portrait_gallery">
        {data.map((image) => (
          <div className="portrait_div" key={image.id_artwork}>
            <img
              className="portrait_image"
              key={image.picture_id}
              src={image.image}
            ></img>
            <p className="portrait_description">
              {image.description} {image.format} {image.date}
            </p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

Portrait.propTypes = {
  prop1: PropTypes.string,
};

Portrait.defaultProps = {
  prop1: "",
};

export default Portrait;
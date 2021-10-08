//Import de la lib React
import React, { useEffect, useState } from "react";
//Import NPM
import api from "src/api";

//Import locaux
import "./styles.scss";

const Portrait = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/artwork/portrait");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="portraits">
      <div className="header_portrait">
        <h1> Portraits</h1>
        <h2>
          "Le portrait c’est avant tout une rencontre, une histoire qui se
          raconte<br /> prenant forme spontanément en un instant"
        </h2>
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

export default Portrait;

//Import de la lib React
import React, { useEffect, useState } from "react";

//Import locaux
import "./styles.scss";
import api from "src/api";

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
        <h1>Portraits</h1>
        <h2>
          "Le portrait c’est avant tout une rencontre, une histoire qui se
          raconte
          <br /> prenant forme spontanément en un instant"
        </h2>
        <em className="clickForPicture">
          Cliquez et maintenez pour agrandir l’image
        </em>
      </div>

      <div className="portrait_gallery">
        {data?.map((image) => (
          <div className="portrait_div" key={image.id_artwork}>
            <img
              className="portrait_image"
              key={image.picture_id}
              src={image.image[0]}
            ></img>
            <p className="portrait_description">
              {image.name_artwork} <br /> {image.format} cm <br /> {image.date}
            </p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portrait;

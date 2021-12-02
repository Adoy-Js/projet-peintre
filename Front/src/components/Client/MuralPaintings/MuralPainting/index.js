//Import de la lib React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//Import NPM
import api from "src/api";
//Import locaux
import "./styles.scss";

const MuralPainting = ({}) => {
  const [muralPainting, setMuralPainting] = useState({});
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await api.get(`/artwork/mural-painting/${id}`);
      setMuralPainting(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  muralPainting?.image?.push(muralPainting.image.shift());
  return (
    <div>
      <div className="mural_paintings">
        <h1 className="title_mural">{muralPainting.name_artwork}</h1>
        <div className="mural_gallery">
          <div key={muralPainting.id_artwork} className="mural_div">
            <Carousel autoPlay infiniteLoop interval="4000" transitionTime="500">
              {muralPainting?.image?.map((img) => (
                <img src={img} key={img} />
              ))}
            </Carousel>
          </div>
          {muralPainting?.description?.map((paragraph, i) => (
            <div className="description" key={i}>
              {paragraph}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MuralPainting;

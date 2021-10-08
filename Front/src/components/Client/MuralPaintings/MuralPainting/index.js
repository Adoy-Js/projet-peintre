//Import de la lib React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Import NPM
import api from "src/api";
import { Carousel } from "react-responsive-carousel";
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
            {muralPainting?.image?.map((img) => (
              <img key={img} className="mural_picture" src={img} />
            ))}
            <div className="description">{muralPainting.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuralPainting;

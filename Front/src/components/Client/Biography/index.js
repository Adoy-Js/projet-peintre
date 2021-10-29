// == Import de la lib React
import React, { useEffect, useState } from "react";
import bioImage from "./img/accueil.jpg";

import api from "src/api";

// == Imports locaux
import "./styles.scss";

const Biography = () => {
  const [biography, setBiography] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/about");
      console.log(response.data);
      setBiography(response.data[0].biography);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Biography">
      <h1>Biographie</h1>
      <div className="biography">
        <img className="bioImage" src={bioImage} alt="biographie"></img>
        <div className="biography_block">
          {biography.map((paragraph)=>(
            <div className="biography_div">
            {paragraph}
          </div>
          ))}
          

        </div>
      </div>
    </div>
  );
};

export default Biography;

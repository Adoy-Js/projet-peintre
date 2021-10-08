// == Import npm
// import React, { PureComponent, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import api from "src/api";

import "./styles.scss";

//Import de la lib React
import React, { useEffect, useState } from "react";

//Import locaux
import "./styles.scss";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchRepoData = async () => {
    try {
      const response = await api.get("/");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepoData();
  }, []);

  return (
    <div className="welcome">
      <a href="/about">
        <h1 className="underline">Camille Paul</h1>
      </a>
      <Carousel autoPlay interval={3000} infiniteLoop showStatus={false}>
        {data.map((result) => (
          <img
            key={result.id_artist}
            className="Home_image"
            src={result.image}
            className="image_slider"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Home;


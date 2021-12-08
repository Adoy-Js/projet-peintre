// import React, { PureComponent, useEffect } from "react";
//Import de la lib React
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import api from "src/api";

//Import locaux
import "./styles.scss";

const Home = () => {
  const [homePicture, setHomePicture] = useState([]);

  const fetchRepoData = async () => {
    try {
      const response = await api.get("/");
      setHomePicture(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepoData();
  }, []);

  const carouselProperties = {
    autoPlay: true,
    infiniteLoop: true,
    interval: "4000",
    transitionTime: "600",
    showStatus: false,
  };

  return (
    <div className="welcome">
      <a href="/about">
        <h1 className="underline">Camille Paul</h1>
      </a>
      <div>
        <Carousel {...carouselProperties}>
          {homePicture.map((result) => (
            <img key={result.id_picture} src={result.image} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;

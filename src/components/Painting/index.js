// == Import de la lib React
import React from 'react';

// == Import npm

// == Imports locaux
import './styles.scss';

const Painting = () => (
  <Painting className="Painting">
    <h1 className="title-category">Peintures</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <h3 className="subtitle-category"><a href="Acryliques"> Peintures Acryliques</a></h3>
    <div className="img-acrylique">
      <img src="../../public/Acrylique 1.jpg" alt="" />
      <img src="../../public/Acrylique 2.jpg" alt="" />
    </div>
    <h3 className="subtitle-category"><a href="Huile">Peintures à l'huile</a></h3>
    <div>
      <img src="../../public/Huile 1.jpg" alt="" />
    </div>
    <h3 className="subtitle-category"><a href="Tout">Toutes les peintures</a></h3>
    <div>
      <img src="../../public/Acrylique 1.jpg" alt="" />
      <img src="../../public/Acrylique 2.jpg" alt="" />
      <img src="../../public/Huile 1.jpg" alt="" />
    </div>
  </Painting>
);

export default Painting;

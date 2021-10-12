// == Import de la lib React
import React, { useState } from 'react';
import axios from 'axios';

// == Imports locaux
import Footer from '../Footer'
import './styles.scss';

const News = () => {

  const [actualitys, setActualitys] = useState([])


  axios.get(`https://projet-peintre.herokuapp.com/news`)
    .then(res => {
      const actualitys = res.data;
      setActualitys(actualitys);
    })

    if (actualitys.length === 0) {
      return (
        <div>
          <h1>Actualités</h1><div className="news">
            <h2>Actualité à venir</h2>
            <div className="news_footer">Camille.</div>
          </div>
        </div>
      )
    }
  
    return (
      <div className="news">
        <h1>Actualités</h1>
        {actualitys.map(actuality => (
          <div className="new" key={actuality.id_news}>
            <h2 className="new_header">{actuality.date} / {actuality.name}</h2>
            <p className="new_article">{actuality.description}</p>
            <img
              className="new_image"
              key={actuality.picture_id}
              src={actuality.image}
            ></img>
            <p>{actuality.place}</p>
          </div>
        ))}
  
      </div>
    );
};

export default News;

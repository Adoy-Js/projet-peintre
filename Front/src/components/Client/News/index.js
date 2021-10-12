// == Import de la lib React
import React, { useState } from 'react';
import axios from 'axios';

// == Imports locaux
import Footer from '../Footer'
import './styles.scss';

const News = () => {

  const [data, setData] = useState([])


  axios.get(`https://projet-peintre.herokuapp.com/news`)
    .then(res => {
      const data = res.data;
      setData({ data });
    })

  return (
    <div className="new">
      <h1>
        Actualité
      </h1>

      <div className="news">
        <div>
          Actualité à venir.
        </div>
        <div className="news_footer">
          Camille
        </div>
      </div>
      <Footer />
    </div>

  )
};

export default News;

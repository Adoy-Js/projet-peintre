// == Import de la lib React
import React from 'react';

// == Imports locaux
import Footer from '../Footer'
import './styles.scss';

const News = () => (
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

);

export default News;

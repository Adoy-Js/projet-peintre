//Import de la lib React
import React, { useEffect, useState } from "react";

import api from "src/api";

//Import locaux
import "./styles.scss";

const News = () => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/news");
      setNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (news.length === 0) {
    return (
      <div>
        <h1>Actualités</h1><div className="news">
          <h2>Actualité à venir</h2>
          <div className="news_footer">Camille</div>
        </div>
      </div>

    )
  }

  return (
    <div className="news">
      <h1>Actualités</h1>
      {news.map((data) => (
        <div className="new" key={data.id_news}>
          <h2 className="new_header">{new Date(data.date).getDate() + '-' + (new Date(data.date).getMonth() + 1) + '-' + new Date(data.date).getFullYear()} {data.place}</h2>
          <p className="new_article">{data.article}</p>
          <img
            className="new_image"
            key={data.picture_id}
            src={data.image}
          ></img>
        </div>
      ))}

    </div>
  );
};

export default News;

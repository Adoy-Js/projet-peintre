//Import de la lib React
import React, { useEffect, useState } from "react";
//Import NPM
import PropTypes from "prop-types";

import api from "src/api";
import { NavLink, Redirect } from "react-router-dom";

// Ajout du composant MenuAdmin
import MenuAdmin from "src/components/Admin/MenuAdmin";
import Home from "src/components/Client/Home";

//Import locaux
import "./styles.scss";

const NewArray = ({ isLogged }) => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/admin/news", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne ?")) {
        const response = await api.delete(`admin/news/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setNews(news.filter((oneNew) => oneNew.id_news !== id));
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return isLogged ? (
    <div>
      <MenuAdmin />
      <div className="arrayArtwork">
        <table>
          <thead className="arrayArtwork_head">
            <tr>
              <th className="arrayArtwork_name">NOM</th>
              <th className="arrayArtwork_delete">SUPPRIMER</th>
            </tr>
          </thead>
          <tbody className="arrayArtwork_body">
            <tr>
              <td className="cell">
                <NavLink to="/admin/news/formNewArray" className="button">
                  +
                </NavLink>
              </td>
            </tr>
          </tbody>
          <tbody>
            {news?.map((data) => (
              <tr key={data.id_news}>
                <td className="category">{data.name_news}</td>

                <td>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(data.id_news);
                    }}
                    className="arrayArtwork_body_delete"
                  >
                    SUPPRIMER
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

NewArray.propTypes = {
  isLogged: PropTypes.bool,
};

NewArray.defaultProps = {
  isLogged: false,
};

export default NewArray;

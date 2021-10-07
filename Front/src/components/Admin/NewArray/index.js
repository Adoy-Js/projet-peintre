//Import de la lib React
import React, { useEffect, useState } from "react";
//Import NPM
import PropTypes from "prop-types";

import api from "src/api";
import { NavLink } from "react-router-dom";

// Ajout du composant MenuAdmin
import MenuAdmin from "src/components/Admin/MenuAdmin";

//Import locaux
import "./styles.scss";

const NewArray = () => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/admin/news", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      setNews(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [news]);

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne ?")) {
        const reponse = await api.delete(`admin/news/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
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
                <NavLink
                  to="/admin/new/formNewArray"
                  className="button"
                >
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
  );
};

NewArray.propTypes = {
  prop1: PropTypes.string,
};

NewArray.defaultProps = {
  prop1: "",
};

export default NewArray;

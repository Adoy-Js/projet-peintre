//Import de la lib React
import React, { useEffect, useState } from "react";
import api from "src/api";
//Import locaux
import "./styles.scss";
import PropTypes from "prop-types";
import { NavLink, Redirect } from "react-router-dom";

// Ajout du composant MenuAdmin
import MenuAdmin from "src/components/Admin/MenuAdmin";
import Home from "src/components/Client/Home";

const ArtworkArray = ({ isLogged }) => {
  const [artwork, setArtwork] = useState([]);

  useEffect(() => {
    fetchData();
  }, [artwork]);
  
  const fetchData = async () => {
    try {
      const response = await api.get("/admin/artwork", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setArtwork(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne ?")) {
        const response = await api.delete(`admin/artwork/${id}`, {
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

  return isLogged ? (
    <div>
      <MenuAdmin />
      <div className="arrayArtwork">
        <table>
          <thead className="arrayArtwork_head">
            <tr>
              <th className="arrayArtwork_name">NOM</th>
              <th className="arrayArtwork_category">CATÉGORIE</th>
              <th className="arrayArtwork_delete">SUPPRIMER</th>
            </tr>
          </thead>
          <tbody className="arrayArtwork_body">
            <tr>
              <td className="cell">
                <NavLink
                  to="/admin/artwork/formArtworkArray"
                  className="button"
                >
                  +
                </NavLink>
              </td>
            </tr>
          </tbody>
          <tbody>
            {artwork?.map((artwork) => (
              <tr key={artwork.id_artwork}>
                <td className="category">{artwork.name_artwork}</td>
                <td className="category">{artwork.name_category}</td>

                <td>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(artwork.id_artwork);
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

ArtworkArray.propTypes = {
  isLogged: PropTypes.bool,
};

ArtworkArray.defaultProps = {
  isLogged: false,
};

export default ArtworkArray;

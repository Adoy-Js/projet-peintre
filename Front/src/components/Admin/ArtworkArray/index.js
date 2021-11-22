//Import de la lib React
import React, { useEffect, useState } from "react";
import api from "src/api";
import storage from "src/utils/firebase";
//Import locaux
import "./styles.scss";
import PropTypes from "prop-types";
import { NavLink, Redirect } from "react-router-dom";

// Ajout du composant MenuAdmin
import MenuAdmin from "src/components/Admin/MenuAdmin";
import Home from "src/components/Client/Home";

const ArtworkArray = ({ isLogged }) => {
  const [artworks, setArtworks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/admin/artwork", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setArtworks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id, name, category, images) => {
    console.log(category);
    try {
      if (window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne ?")) {
        const response = await api.delete(`admin/artwork/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        if (category === "mural-painting") {
          for (let i = 0; i < images.length; i++) {
            await storage.ref(`${name}-${i + 1}`).delete();
          }
        } else {
          await storage.ref(`${name}`).delete();
        }
        setArtworks(artworks.filter((artwork) => artwork.id_artwork !== id));
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
              <th className="arrayArtwork_edit">MODIFIER</th>
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
            {artworks?.map((artwork) => (
              <tr key={artwork.id_artwork}>
                <td className="category">{artwork.name_artwork}</td>
                <td className="category">{artwork.name_category}</td>

                <td>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(
                        artwork.id_artwork,
                        artwork.name_artwork,
                        artwork.name_category,
                        artwork.image
                      );
                    }}
                    className="arrayArtwork_body_delete"
                  >
                    SUPPRIMER
                  </button>
                </td>
                <td className="arrayArtwork_body_edit">
                  <NavLink
                    to={`/admin/artwork/EditFormArtworkArray/${artwork.id_artwork}`}
                    className="button"
                  >
                    MODIFIER
                  </NavLink>
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

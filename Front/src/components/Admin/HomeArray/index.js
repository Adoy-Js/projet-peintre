//Import de la lib React
import React, { useState, useEffect } from "react";
import storage from "src/utils/firebase";
//Import NPM
import MenuAdmin from "src/components/Admin/MenuAdmin";

import api from "src/api";
import PropTypes from "prop-types";

//Import locaux
import "./styles.scss";
import { NavLink, Redirect } from "react-router-dom";

const HomeArray = ({ isLogged }) => {
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/admin/home", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      setImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id, name) => {
    try {
      if (window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne ?")) {
        const response = await api.delete(`admin/home/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        await storage.ref(`${name}`).delete();
        setImages(images.filter((image) => image.id_picture !== id));
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return isLogged ? (
    <div>
      <MenuAdmin />
      <div className="arrayHome">
        <table>
          <thead className="arrayHome_head">
            <tr>
              <th className="arrayHome_name">NOM</th>
              <th className="arrayHome_urlPicture">PHOTOS</th>
              <th className="arrayHome_delete">SUPPRIMER</th>
            </tr>
          </thead>
        </table>

        <form className="arrayHome_body">
          <table>
            <tbody className="arrayHome_body">
              <tr>
                <td className="cell">
                  <NavLink to="/admin/home/formHomeArray" className="button">
                    +
                  </NavLink>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>

            <tbody>
              {images?.map((image) => (
                <tr key={image.id_picture}>
                  <td key={image.name_picture}>{image.name_picture}</td>

                  <td key={image.image}>{image.image}</td>

                  <td>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(image.id_picture, image.name_picture);
                      }}
                      className="arrayHome_body_delete"
                    >
                      SUPPRIMER
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

HomeArray.propTypes = {
  isLogged: PropTypes.bool,
};

HomeArray.defaultProps = {
  isLogged: false,
};

export default HomeArray;

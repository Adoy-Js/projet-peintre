//Import de la lib React
import React, { useState } from "react";
//Import NPM
import MenuAdmin from "src/components/Admin/MenuAdmin";
import api from "src/api";

//Import locaux
import "./styles.scss";

const HomeAray = ({ prop1 }) => {

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
  }, [images]);

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne ?")) {
        const reponse = await api.delete(`admin/home/${id}`, {
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
                  <a href="/admin/menu/home/formHomeArray" className="button">
                    +
                  </a>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>

            <tbody>
              {images.map((image) => (
                <tr>
                  <td key={image.name_picture}>{image.name_picture}</td>

                  <td key={image.image}>{image.image}</td>

                  <td>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(image.id_picture);
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
  );
};

export default HomeAray;

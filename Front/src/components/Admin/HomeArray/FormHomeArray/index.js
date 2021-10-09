//Import de la lib React
import React, { useState } from "react";
import api from "src/api";
import { Redirect } from "react-router-dom";
import storage from "src/utils/firebase";
//Import locaux
import "./styles.scss";

const FormHomeArray = ({ prop1 }) => {
  const [name_picture, setNamePicture] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //firebase
    await storage.ref(`${name_picture}`).put(image);

    const urlImage = await storage.ref(`${name_picture}`).getDownloadURL();

    //BDD
    try {
      await api.post(
        "/admin/home",
        {
          name_picture: name_picture,
          image: urlImage,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      alert("contenu ajouté");
      <Redirect to="/admin/artwork" />;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="arrayHomeForm">
      <div className="arrayHomeForm_title">Formulaire accueil</div>
      <form onSubmit={(e) => handleSubmit(e)} className="arrayHomeForm_form">
        <div className="arrayHomeForm_name">
          Nom de la photo d'accueil :
          <input
            onChange={(e) => setNamePicture(e.target.value)}
            id="name_picture"
            value={name_picture}
            className="arrayHomeForm_name_input"
            type="text"
          />
        </div>
        <div className="arrayHomeForm_url">
          <input
            onChange={(e) => setImage(e.target.files[0])}
            id="image"
            placeholder="https://firebasestorage..."
            className="arrayHomeForm_url_input"
            type="file"
            required
          />
        </div>

        <button type="submit" className="arrayHomeForm_ok">
          Valider
        </button>
      </form>
    </div>
  );
};

export default FormHomeArray;

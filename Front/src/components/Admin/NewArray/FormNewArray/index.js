//Import de la lib React
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import storage from "src/utils/firebase";
//Import NPM
import api from "src/api";

//Import locaux
import "./styles.scss";

const FormNewArray = ({ isLogged }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(null);
  const [place, setPlace] = useState("");
  const [image, setImage] = useState(null);
  const [article, setArticle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //firebase
      await storage.ref(`${name}`).put(image);

      const urlImage = await storage.ref(`${name}`).getDownloadURL();

      //BDD
      const response = await api.post(
        "/admin/news",
        {
          name_news: name,
          date: date,
          place: place,
          image: urlImage,
          article: article,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return isLogged ? (
    <div className="arrayArtworkForm">
      <div className="arrayArtworkForm_title">Formulaire oeuvre</div>

      <form onSubmit={(e) => handleSubmit(e)} className="arrayArtworkForm_form">
        <div className="arrayArtworkForm_name">
          Nom de la news :
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
            className="arrayArtworkForm_name_input"
            type="text"
          />
        </div>

        <div className="arrayArtworkForm_informations">
          <div>
            <div className="arrayArtworkForm_date">Date :</div>
            <input
              onChange={(e) => setDate(e.target.value)}
              id="date"
              className="arrayArtworkForm_date_input"
              type="date"
              placeholder="2021"
            />
          </div>

          <div className="arrayArtworkForm_place">
            Lieu :
            <input
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              id="place"
              className="arrayArtworkForm_place_input"
              type="text"
            />
          </div>
        </div>

        <div className="arrayArtworkForm_url">
          <input
            onChange={(e) => setImage(e.target.files[0])}
            id="image"
            className="arrayArtworkForm_url_input"
            type="file"
            name="image"
          />
        </div>

        <div className="arrayArtworkForm_description">
          Article :
          <textarea
            value={article}
            id="description"
            onChange={(e) => setArticle(e.target.value)}
            className="arrayArtworkForm_description_input"
          />
        </div>

        <button type="submit" className="arrayArtworkForm_ok">
          Valider
        </button>
      </form>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

FormNewArray.propTypes = {
  isLogged: PropTypes.bool,
};

FormNewArray.defaultProps = {
  isLogged: false,
};

export default FormNewArray;

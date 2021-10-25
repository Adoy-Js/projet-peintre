//Import de la lib React
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes, { array } from "prop-types";
import storage from "src/utils/firebase";
//Import NPM
import api from "src/api";

//Import locaux
import "./styles.scss";

const FormArtworkArray = ({ isLogged }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(null);
  const [format, setFormat] = useState("");
  const [place, setPlace] = useState("");
  const [categoryName, setCategoryName] = useState("portrait");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState(null);
  const [numberPicture, setNumberPicture] = useState(1);

  const handleSubmit = async (e) => {
    let urlArray = [];
    e.preventDefault();
    try {
      //firebase
      for (const image of images) {
        await storage.ref(`${name}`).put(image);

        const urlImage = await storage.ref(`${name}`).getDownloadURL();

        urlArray.push(urlImage);
      }

      //BDD
      const response = await api.post(
        "/admin/artwork",
        {
          name_artwork: name,
          date: parseInt(date, 10),
          format: format,
          place: place,
          image: urlArray,
          category_name: categoryName,
          description: description,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      alert(response.data.message);
      e.target.reset();
      setFormat("");
      setPlace("");
      setDescription("");
      setName("");
    } catch (error) {
      console.log(error);
    }
  };

  const getFileElement = (number) => {
    let content = [];
    for (let index = 0; index < number; index++) {
      content.push(
        <div className="arrayArtworkForm_url" key={index}>
          <input
            onChange={onChangeFile}
            id="image"
            className="arrayArtworkForm_url_input"
            type="file"
            required
          />
        </div>
      );
    }
    return content;
  };

  const onChangeFile = (e) => {
    let arrayFile = [];
    arrayFile.push(e.target.files[0]);
    setImages(arrayFile);
  };

  const handleCategory = (e) => {
    setCategoryName(e.target.value);
    setNumberPicture(1);
  };

  return isLogged ? (
    <div className="arrayArtworkForm">
      <div className="arrayArtworkForm_title">Formulaire oeuvre</div>

      <form onSubmit={(e) => handleSubmit(e)} className="arrayArtworkForm_form">
        <div className="arrayArtworkForm_name">
          Nom de l'oeuvre :
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
              type="text"
              placeholder="2021"
            />
          </div>

          <div className="arrayArtworkForm_format">
            Format de l'oeuvre :
            <input
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              id="format"
              className="arrayArtworkForm_format_input"
              type="text"
              placeholder="cm x cm"
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

          <div className="arrayArtworkForm_category">
            Choisir la catégorie:
            <select
              className="arrayArtworkForm_category_select"
              value={categoryName}
              onChange={handleCategory}
            >
              <option id="category_name">portrait</option>{" "}
              <option id="category_name">oil-painting</option>
              <option id="category_name">acrylic-painting</option>
              <option id="category_name">mural-painting</option>
            </select>
          </div>
          {categoryName === "mural-painting" && (
            <div className="arrayArtworkForm_numberPicture">
              Choisir le nombre de photo:
              <input
                type="number"
                className="arrayArtworkForm_numberPicture_select"
                value={numberPicture}
                onChange={(e) => setNumberPicture(e.target.value)}
              />
            </div>
          )}
        </div>

        {getFileElement(numberPicture)}
        {categoryName === "mural-painting" && (
          <div className="arrayArtworkForm_description">
            Histoire de l'oeuvre :
            <textarea
              value={description}
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              className="arrayArtworkForm_description_input"
            />
          </div>
        )}

        <button type="submit" className="arrayArtworkForm_ok">
          Valider
        </button>
      </form>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

FormArtworkArray.propTypes = {
  isLogged: PropTypes.bool,
};

FormArtworkArray.defaultProps = {
  isLogged: false,
};

export default FormArtworkArray;

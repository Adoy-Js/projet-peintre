//Import de la lib React
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
//Import NPM
import api from "src/api";

//Import locaux
import "./styles.scss";

const FormArtworkArray = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(null);
  const [format, setFormat] = useState("");
  const [place, setPlace] = useState("");
  const [categoryName, setCategoryName] = useState("portrait");
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(
        "/admin/artwork",
        {
          name_artwork: name,
          date: parseInt(date, 10),
          format: format,
          place: place,
          image: image,
          category_name: categoryName,
          description: description,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      alert("Félicitations, vous avez bien ajouté votre contenu ! :)");
      <Redirect to="/admin/artwork" />;
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
              value={date}
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
              onChange={(e) => setCategoryName(e.target.value)}
            >
              <option id="category_name">portrait</option>{" "}
              <option id="category_name">oil-painting</option>
              <option id="category_name">acrylic-painting</option>
              <option id="category_name">mural-painting</option>
            </select>
          </div>
        </div>

        <div className="arrayArtworkForm_url">
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            id="image"
            className="arrayArtworkForm_url_input"
            placeholder="https://firebasestorage..."
            type="url"
            name="image"
            required
          />
        </div>

        <div className="arrayArtworkForm_description">
          Histoire de l'oeuvre :
          <textarea
            value={description}
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            className="arrayArtworkForm_description_input"
          />
        </div>

        <button type="submit" className="arrayArtworkForm_ok">
          Valider
        </button>
      </form>
    </div>
  );
};

export default FormArtworkArray;

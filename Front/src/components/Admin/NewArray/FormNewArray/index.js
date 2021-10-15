// == Import de la lib React
import axios from "axios";
import React, { useState } from "react";


// == Imports locaux
import './styles.scss';

const FormNewArray = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(null);
  const [place, setPlace] = useState("");
  const [image, setImage] = useState(null);
  const [article, setArticle] = useState("");

  const handleSubmit =  (e) => {
    e.preventDefault();
      axios.post(
        "https://projet-peintre.herokuapp.com/admin/news",
        {
          name_news: name,
          date: date,
          place: place,
          image: image,
          article: article,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            'Content-Type': 'application/json'
          },
        }).then(res => {
          console.log(res.data)
        }).catch(err => {
          console.log(err)
        })
        
      alert('Félicitations, vous avez bien ajouté votre contenu ! :)')
      }

  return(
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
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://firebasestorage..."
            id="image"
            className="arrayArtworkForm_url_input"
            type="text"
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
  );
};

export default FormNewArray;

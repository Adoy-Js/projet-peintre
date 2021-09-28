// == Import de la lib React
import React, { useState } from "react";
import axios from 'axios';

// == Imports locaux
import './styles.scss';

const FormArtworkArray = () => {

  const url = "https://projet-peintre.herokuapp.com/admin/artwork"
  const [data, setData] = useState({
    name: "",
    date: "",
    format: "",
    place: "",
    image: "",
    category_name: "",
    description: ""
  })
  const [values, setValues] = useState();

  function handleChange(evt) {
    const value = evt.target.value;
    setValues(value);
    console.log(values)
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(url, {
      name: "",
      date: "",
      format: "",
      place: "",
      image: "",
      category_name: "",
      description: ""
  },
  {headers: {
    Authorization: "Bearer " + localStorage.getItem('token')
 }},
  ).then(res => {
      console.log(res.data)
    })
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }


  return (
    <div className="arrayArtworkForm">

      <div className="arrayArtworkForm_title">
        Formulaire oeuvre
      </div>

      <form onSubmit={(e) => handleSubmit(e)} className="arrayArtworkForm_form">
        <div className="arrayArtworkForm_name">
          Nom de l'oeuvre :
          <input onChange={(e) => handle(e)} value={data.name} id="name" className="arrayArtworkForm_name_input" type="text" />
        </div>

      <div className="arrayArtworkForm_informations">
          <div>
            <div className="arrayArtworkForm_date">
              Date :
            </div>
            <input value={data.date} onChange={(e) => handle(e)} id="date" className="arrayArtworkForm_date_input" type="text" placeholder="2021" />
          </div>

          <div className="arrayArtworkForm_format">
            Format de l'oeuvre :
            <input value={data.format} onChange={(e) => handle(e)} id="format" className="arrayArtworkForm_format_input" type="text" placeholder="cm x cm" />
          </div>

          <div className="arrayArtworkForm_place">
            Lieu :
            <input value={data.place} onChange={(e) => handle(e)} id="place" className="arrayArtworkForm_place_input" type="text" />
          </div>

          <div value={values} onChange={handleChange} className="arrayArtworkForm_category">
            Choisir la catégorie:
            <select className="arrayArtworkForm_category_select">
              <option id="category_name" value={data.category_name}>Peinture à l'huile</option>
              <option id="category_name" value={data.category_name}>Peinture acrylique</option>
              <option id="category_name" value={data.category_name}>Peinture murale</option>
              <option id="category_name" value={data.category_name}>Portrait</option>
            </select>
          </div>
        </div>

        <div className="arrayArtworkForm_url">
          <input value={data.image} onChange={(e) => handle(e)} id="image" className="arrayArtworkForm_url_input" placeholder="https://firebasestorage..." type="url" name="image" required />
        </div>

        <div className="arrayArtworkForm_description">
          Histoire de l'oeuvre :
          <textarea value={data.description} id="description" onChange={(e) => handle(e)} className="arrayArtworkForm_description_input" />
        </div>

        <button className="arrayArtworkForm_ok">Valider</button>
      </form>
    </div>
  );
};

export default FormArtworkArray;

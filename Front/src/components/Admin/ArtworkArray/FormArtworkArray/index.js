// == Import de la lib React
import React, { useState } from "react";


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
    description: "",
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
      name: data.name,
      date: data.date,
      format: data.format,
      place: data.place,
      image: data.image,
      description: data.description,
    }).then(res => {
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
          Nom :
          <input onChange={(e) => handle(e)} id="name" value={data.name} className="arrayArtworkForm_name_input" type="text" />
        </div>

        <div className="arrayArtworkForm_formTwo">
          <div className="arrayArtworkForm_date">
            Date:
            <input onChange={(e) => handle(e)} id="date" value={data.date} className="arrayArtworkForm_date_input" type="text" placeholder="2021" />
          </div>

          <div className="arrayArtworkForm_format">
            Format de l'oeuvre :
            <input onChange={(e) => handle(e)} id="format" value={data.format} className="arrayArtworkForm_format_input" type="text" placeholder="cm x cm" />
          </div>

          <div className="arrayArtworkForm_place">
            Lieu:
            <input onChange={(e) => handle(e)} id="place" value={data.place} className="arrayArtworkForm_place_input" type="text" />
          </div>

          <div value={values} onChange={handleChange} className="arrayArtworkForm_category">
            Choisir la catégorie:
            <select className="arrayArtworkForm_category_select">
              <option value="Peinture à l'huile">Peinture à l'huile</option>
              <option value="Peinture acrylique">Peinture acrylique</option>
              <option value="Peinture murale">Peinture murale</option>
              <option value="Portrait">Portrait</option>
            </select>
          </div>
        </div>

        <div className="arrayArtworkForm_url">
          <input onChange={(e) => handle(e)} id="image" value={data.image} className="arrayHomeForm_url_input" type="url" placeholder="https://firebasestorage..." required />
        </div>

        <div className="arrayArtworkForm_description">
          Histoire de l'oeuvre :
          <textarea onChange={(e) => handle(e)} id="description" value={data.description} className="arrayArtworkForm_description_input" />
        </div>

        <button className="arrayArtworkForm_ok">Valider</button>
      </form>
    </div>
  );
};

export default FormArtworkArray;

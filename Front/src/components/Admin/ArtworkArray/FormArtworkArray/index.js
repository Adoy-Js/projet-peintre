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
      description: ""
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
          Nom de l'oeuvre :
          <input onChange={(e) => handle(e)} value={data.name} className="arrayArtworkForm_name_input" type="text" />
        </div>
      </form>

      <div className="arrayArtworkForm_informations">
        <form onSubmit={(e) => handleSubmit(e)} className="arrayArtworkForm_formOne">
          <div>
            <div className="arrayArtworkForm_date">
              Date :
            </div>
            <input value={data.date} onChange={(e) => handle(e)} className="arrayArtworkForm_date_input" type="text" placeholder="2021" />
          </div>
        </form>
        <form onSubmit={(e) => handleSubmit(e)} className="arrayArtworkForm_formTwo">
          <div className="arrayArtworkForm_format">
            Format de l'oeuvre :
            <input value={data.format} onChange={(e) => handle(e)} className="arrayArtworkForm_format_input" type="text" placeholder="cm x cm" />
          </div>
          <div className="arrayArtworkForm_place">
            Lieu :
            <input value={data.place} onChange={(e) => handle(e)} className="arrayArtworkForm_place_input" type="text" />
          </div>
        </form>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div value={values} onChange={handleChange} className="arrayArtworkForm_category">
            Choisir la catégorie :
            <select className="arrayArtworkForm_category_select">
              <option value="Peinture à l'huile">Peinture à l'huile</option>
              <option value="Peinture acrylique">Peinture acrylique</option>
              <option value="Peinture murale">Peinture murale</option>
              <option value="Portrait">Portrait</option>
            </select>
          </div>
        </form>

      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="arrayArtworkForm_formThree">

        <div className="arrayArtworkForm_file">
          <input value={data.image} onChange={(e) => handle(e)} className="arrayArtworkForm_file_input" type="file" id="image" name="image" accept="image/png, image/jpeg" />
        </div>

        <div className="arrayArtworkForm_description">
          Histoire de l'oeuvre :
          <textarea value={data.description} onChange={(e) => handle(e)} className="arrayArtworkForm_description_input" />
        </div>

        <button className="arrayArtworkForm_ok">Valider</button>
      </form>
    </div>
  );
};

export default FormArtworkArray;

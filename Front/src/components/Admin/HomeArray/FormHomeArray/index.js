// == Import de la lib React
import axios from "axios";
import React, { useState } from "react";


// == Imports locaux
import './styles.scss';

const FormHomeArray = () => {

  const url = "https://projet-peintre.herokuapp.com/admin/home"
  const [data, setData] = useState({
    name: "",
    image: "",
  })

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(url, {
      name: "",
      image: "",
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
    <div className="arrayHomeForm">
      <div className="arrayHomeForm_title">
        Formulaire accueil
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="arrayHomeForm_form">
        <div className="arrayHomeForm_name">
          Nom de la photo d'accueil :
          <input onChange={(e) => handle(e)} id="name" value={data.name} className="arrayHomeForm_name_input" type="text" />
        </div>
        <div className="arrayHomeForm_file">
          <input onChange={(e) => handle(e)} id="image" value={data.image} className="arrayHomeForm_url_input" type="url" placeholder="https://firebasestorage..." required />
        </div>

        <button className="arrayHomeForm_ok">Valider</button>
      </form>
    </div>
  );
};

export default FormHomeArray;
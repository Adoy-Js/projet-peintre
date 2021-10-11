// == Import de la lib React
import axios from "axios";
import React, { useState } from "react";


// == Imports locaux
import './styles.scss';

const FormHomeArray = () => {

  const url = "https://projet-peintre.herokuapp.com/admin/home"
  const [data, setData] = useState({
    name_picture: "",
    image: "",
  })

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(url, {
      name_picture: data.name_picture,
      image: data.image,
    },
    {headers: {
      Authorization: "Bearer " + localStorage.getItem('token')
   }},).then(res => {
      
      console.log(res.data)
    })
    
  alert('Félicitations, vous avez bien ajouté votre contenu ! :)')
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
      <div className="arrayArtworkForm_previous">
          <a href='/admin/menu/home'>
           ←  
        </a>
        </div>
        <div>
          Formulaire accueil
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="arrayHomeForm_form">
        <div className="arrayHomeForm_name">
          Nom de la photo d'accueil :
          <input onChange={(e) => handle(e)} id="name_picture" value={data.name_picture} className="arrayHomeForm_name_input" type="text" />
        </div>
        <div className="arrayHomeForm_url">
          <input onChange={(e) => handle(e)} id="image" value={data.image} placeholder="https://firebasestorage..." className="arrayHomeForm_url_input" type="url" required />
        </div>

        <button className="arrayHomeForm_ok">Valider</button>
      </form>
    </div>
  );
};

export default FormHomeArray;

// == Import de la lib React
import axios from "axios";
import React, { useState } from "react";


// == Imports locaux
import './styles.scss';

const FormNewArray = () => {

  const url = "https://projet-peintre.herokuapp.com/admin/news"
  const [data, setData] = useState({
    name: "",
    date: "",
    place: "",
    description: "",
    image: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

  axios.post(url, {
    name: data.name,
    date: data.date,
    place: data.place,
    description: data.description,
    image: data.image,
    headers: {
      Authorization: "Bearer " + localStorage.getItem('token')
    }
  })
    .then(res => {
      console.log(res.data)
    }).catch(err => {console.log(err)}
    )
    alert("Félicitations, vous avez bien ajouté votre contenu supplémentaire !")
  }

    function handle(e) {
      const newdata = { ...data }
      newdata[e.target.id] = e.target.value
      setData(newdata)
      console.log(newdata)
    }

  return (
    <div className="arrayNewForm">
      <div className="arrayNewForm_title">
      <div className="arrayArtworkForm_previous">
          <a href='/admin/menu/new'>
           ←  
        </a>
        </div>
        <div>
          Formulaire Actualités
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="arrayNewForm_form">
        <div className="arrayNewForm_name">
          Nom de l'article :
          <input onChange={(e) => handle(e)} value={data.name} id="name" className="arrayNewForm_name_input" type="text" />
        </div>
      

      <div className="arrayNewForm_informations">

          <div>
            <div className="arrayNewForm_date">
              Date :
            </div>
            <input onChange={(e) => handle(e)} value={data.date} id="date" className="arrayNewForm_date_input" type="text" placeholder="2021" />
          </div>

          <div>
            <div className="arrayNewForm_place">
              Lieu :
            </div>
            <input onChange={(e) => handle(e)} value={data.place} id="place" className="arrayNewForm_place_input" type="text" />
          </div>

      </div>
        <div className="arrayNewForm_url">
          <input onChange={(e) => handle(e)} value={data.image} id="image" className="arrayNewForm_url_input" placeholder="https://firebasestorage..." type="url" />
        </div>

        <div className="arrayNewForm_description">
          Article :
          <textarea onChange={(e) => handle(e)} value={data.description} id="description" className="arrayNewForm_description_input" />
        </div>

        <button className="arrayNewForm_ok">Valider</button>
      </form>
    </div>
  );
};

export default FormNewArray;

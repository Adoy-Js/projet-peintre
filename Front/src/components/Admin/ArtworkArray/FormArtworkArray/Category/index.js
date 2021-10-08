// == Import de la lib React
import React from 'react';

// == Import npm

const Category = () => {

  const url = "https://projet-peintre.herokuapp.com/admin/artwork"

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(url, {
      category_name: "",
    },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      },
    ).then(res => {
      console.log(res.data)
    })
    alert('Félicitations, vous avez bien ajouté votre contenu ! :)')
  }

  <form onSubmit={(e) => handleSubmit(e)} className="arrayArtworkForm_form">
    <select className="arrayArtworkForm_category_select">
      <option id="category_name" value={data.category_name}>Peinture à l'huile</option>
      <option id="category_name" value={data.category_name}>Peinture acrylique</option>
      <option id="category_name" value={data.category_name}>Peinture murale</option>
      <option id="category_name" value={data.category_name}>Portrait</option>
    </select>
  </form>

};

export default Category;

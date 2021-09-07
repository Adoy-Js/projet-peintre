// == Import de la lib React
import React, { useState } from 'react';
import axios from "axios";

// == Imports locaux
import './styles.scss';

const DeleteHomeArray = () => {

    const [images, setImages] = useState([]);

  axios({
    method: 'delete',
    url: "https://projet-peintre.herokuapp.com/about"
  }).then(res => {
    const images = res.data;
    setImages(images);
  })

return(
    <div></div>
)
  
};

export default DeleteHomeArray;

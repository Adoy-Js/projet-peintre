import React, { useState } from 'react';
import {useParams} from 'react-router-dom';

import axios from 'axios';

import Footer from '../../Footer'
import './styles.scss'

const MuralPainting = () => {

  const [images, setImages] = useState([]);
  const { id } = useParams();

  axios.get(`https://projet-peintre.herokuapp.com/artwork/mural-painting/${id}`) 
    .then(res => {
      const images = [res.data];
      setImages(images);
    })

    
  return (
    <div>
      {images.map((image) =>
        <div className="welcome">
          <h1 className="title_piwa">{image.name_artwork}</h1>


          <div key={image.id_artwork} className="mural_div">
            <div>
              {image.image.map(img => <img key={img} className="mural_Piwakawaka" src={img} />)}
            </div>
            <div className="description">{image.description}</div>
            <Footer />
          </div>

        </div>
      )}
    </div>
  )
}

// == Export
export default MuralPainting;

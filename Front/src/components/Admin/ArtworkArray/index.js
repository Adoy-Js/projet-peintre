// == Import de la lib React
import React, { useState } from 'react';
import axios from "axios";

// == Imports locaux
import './styles.scss';

const ArtworkArray = () => {

  const url = "https://projet-peintre.herokuapp.com/admin/artwork"
  const [artwork, setArtwork] = useState([]);

  axios({
    method: 'get',
    url,
    headers: {
      Authorization: "Bearer " + localStorage.getItem('token')
   },
  }).then(res => {
    const artwork = res.data;
    setArtwork(artwork);
  })

  function handleDelete( id) {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette ligne ?')){

    axios({
      method: 'delete',
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
     },
    url: `https://projet-peintre.herokuapp.com/admin/artwork/${id}`,
    }).then(res => {
      const artwork = res.data;
      setArtwork(artwork);
    }).catch((err) => { console.log(err) })}
  }

  return (
    <div>
      <div className="arrayArtwork">
        <table>
          <thead className="arrayArtwork_head">
            <tr>
              <th className="arrayArtwork_name">
                NOM
              </th>
              <th className="arrayArtwork_category">
                CATÉGORIE
              </th>
              <th className="arrayArtwork_urlPicture">
                PHOTOS
              </th>
              <th className="arrayArtwork_modify">
                MODIFIER
              </th>
              <th className="arrayArtwork_delete">
                SUPPRIMER
              </th>
            </tr>
          </thead>
        </table>

        <form className="arrayArtwork_body">

          <table>
          <tbody className="arrayArtwork_body">
              <tr>
                <td className="cell"><a href="/admin/menu/artwork/formArtworkArray" className="button">+</a></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              {artwork.map(artwork => (
                <tr>
                  <td key={artwork.name_artwork}>{artwork.name_artwork}</td>
                  <td className="category" key={artwork.name_category}>{artwork.name_category}</td>
                  <td key={artwork.main_picture}>{artwork.main_picture}{artwork.image}</td>

                  <td><button>MODIFIER</button></td>

                  <td><button onClick={(e) => {
                    e.preventDefault()
                    handleDelete(artwork.id_artwork);
                  }} className="arrayArtwork_body_delete">SUPPRIMER</button></td>

                </tr>
              ))}
            </tbody>
            
          </table>
        </form>
      </div>
    </div >

  )
};


export default ArtworkArray;

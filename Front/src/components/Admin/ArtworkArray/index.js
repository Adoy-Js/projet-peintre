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
  }).then(res => {
    const artwork = res.data;
    setArtwork(artwork);
  })

  return (
    <div>
      <div className="arrayArtwork">
        <table>
          <thead className="arrayHome_head">
            <tr>
              <th className="arrayHome_name">
                NOM
              </th>
              <th className="arrayHome_urlPicture">
                PHOTOS
              </th>
              <th className="arrayHome_modify">
                MODIFIER
              </th>
              <th className="arrayHome_delete">
                SUPPRIMER
              </th>
            </tr>
          </thead>
        </table>

        <form className="arrayArtwork_body">

          <table>
            <tbody className="arrayHome_body">
              {artwork.map(artwork => (
                <tr>
                  <td key={artwork.name_artwork}>{artwork.name_artwork}</td>
                  <td key={artwork.name_category}>{artwork.name_category}</td>
                  <td key={artwork.main_picture}>{artwork.main_picture}</td>

                  <td><button>MODIFIER</button></td>

                  <td><button>SUPPRIMER</button></td>

                </tr>
              ))}
            </tbody>
            <tbody className="arrayArtwork_body">
              <tr>
                <td className="cell"><a href="/admin/menu/artwork/formArtworkArray" className="button">+</a></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div >

  )
};


export default ArtworkArray;

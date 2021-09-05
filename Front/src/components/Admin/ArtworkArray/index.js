// == Import de la lib React
import React from 'react';

// == Imports locaux
import './styles.scss';

const ArtworkArray = () => {


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
            <tbody className="arrayArtwork_body">
                <tr className="cellButton">
                  <td className="cell"></td>

                  <td><button>MODIFIER</button></td>

                  <td><button>SUPPRIMER</button></td>
                </tr>
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

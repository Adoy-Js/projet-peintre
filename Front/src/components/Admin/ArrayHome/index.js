// == Import de la lib React
import React from 'react';

// == Import npm

// == Imports locaux
import './styles.scss';

// Ajout du composant FormAddCell
import AddCell from './FormAddCell';


const ArrayHome = () => (
  <div className="arrayH">
    <div>
      <h1>Oeuvre</h1>
      <h1>Accueil</h1>
      <h1>Actualité</h1>
    </div>

    <div className="arrayHome">
      <table>
        <thead className="arrayHome_head">
          <tr>
            <th className="cell_picture">PHOTOS</th>
            <th className="cell_edit">MODIFIER</th>
            <th className="cell_delete">SUPPRIMER</th>
          </tr>
        </thead>
      </table>

      <form className="arrayHome_body">
        <table>
          <tbody className="arrayHome_body">
            <tr>
              <td className="cell_body">coucou</td>
              <td className="cell_body"><input className="cell_body_input_edit" type="submit" value="MODIFIER" /></td>
              <td className="cell_body"><input className="cell_body_input_delete" type="submit" value="SUPPRIMER" /></td>
            </tr>
          </tbody>
        </table>
      </form>

      <form className="arrayHome_body">
        <table>
          <tbody className="arrayHome_body">
            <tr>
              <td className="cell_body">coucou</td>
              <td className="cell_body"><input className="cell_body_input_edit" type="submit" value="MODIFIER" /></td>
              <td className="cell_body"><input className="cell_body_input_delete" type="submit" value="SUPPRIMER" /></td>
            </tr>
          </tbody>
        </table>
      </form>
      <AddCell />
    </div>
  </div >

);

export default ArrayHome;

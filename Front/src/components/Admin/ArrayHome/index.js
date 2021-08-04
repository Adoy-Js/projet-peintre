// == Import de la lib React
import React from 'react';

// == Import npm

// == Imports locaux
import './styles.scss';



const ArrayHome = () => (
  <div className="arrayH">
    <div>
      <a href="" className="arrayH_menu">Oeuvre</a>
      <a href=""  className="arrayH_menu">Accueil</a>
      <a href=""  className="arrayH_menu">Actualité</a>
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
              <td className="cell_body"><button className="cell_body_input_edit" type="submit" value="MODIFIER">MODIFIER</button></td>
              <td className="cell_body"><button className="cell_body_input_delete" type="submit" value="SUPPRIMER">SUPPRIMER</button></td>

            </tr>
          </tbody>
        </table>
      </form>

      <form className="arrayHome_body">
        <table>
          <tbody className="arrayHome_body">
            <tr>
              <td className="cell_body">coucou</td>
              <td className="cell_body"><button className="cell_body_input_edit" type="submit" placeholder="MODIFIER">MODIFIER</button></td>
              <td className="cell_body"><button className="cell_body_input_delete" type="submit" placeholder="SUPPRIMER">SUPPRIMER</button></td>

            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div >

);

export default ArrayHome;

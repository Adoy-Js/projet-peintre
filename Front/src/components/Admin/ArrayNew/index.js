// == Import de la lib React
import React from 'react';

// == Imports locaux
import './styles.scss';



const ArrayNew = () => (
  <div>
    <div className="arrayNew">
      <table>
        <thead className="arrayNew_head">
          <tr>
            <th className="cell_picture">PHOTOS</th>
            <th className="cell_edit">MODIFIER</th>
            <th className="cell_delete">SUPPRIMER</th>
          </tr>
        </thead>
      </table>

      <form className="arrayNew_body">
        <table>
          <tbody className="arrayNew_body">
            <tr>
              <td className="cell_body">coucou</td>
              <td className="cell_body"><button className="cell_body_input_edit" type="submit" value="MODIFIER">MODIFIER</button></td>
              <td className="cell_body"><button className="cell_body_input_delete" type="submit" value="SUPPRIMER">SUPPRIMER</button></td>

            </tr>
          </tbody>
        </table>
      </form>

      <form className="arrayNew_body">
        <table>
          <tbody className="arrayNew_body">
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

export default ArrayNew;

// == Import de la lib React
import React from 'react';

// == Import npm

// == Imports locaux
import './styles.scss';

const ArrayHome = () => (
  <div className="arrayHome">
    <div>
      <h1>Oeuvre</h1>
      <h1>Accueil</h1>
      <h1>Actualité</h1>
    </div>

    <table>
      <thead className="arrayHome_head">
        <tr>
          <th className="arrayHome_head_title">PHOTOS</th>
          <th className="arrayHome_head_title">MODIFIER</th>
          <th className="arrayHome_head_title">SUPPRIMER</th>
        </tr>
      </thead>
    </table>

    <form>
      <table>
        <tbody className="arrayHome_body">
          <tr>
            <td className="arrayHome_body_colummn">coucou</td>
            <td><input className="arrayHome_body_colummn" type="submit" value="Modifier" placeholder="Modifier" /></td>
            <td><input className="arrayHome_body_colummn" type="submit" value="Supprimer" placeholder="Supprimer" /></td>
          </tr>
        </tbody>
      </table>
    </form>

  </div>

);

export default ArrayHome;

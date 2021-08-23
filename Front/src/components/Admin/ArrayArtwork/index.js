// == Import de la lib React
import React from 'react';

// Ajout de la librairie de validation des props
import PropTypes from 'prop-types';


// == Imports locaux
import './styles.scss';



const ArrayArtwork = ({cells, cellTitles}) => (
  <div>
    <div className="arrayArtwork">
      <table>
        <thead className="arrayArtwork_head">
          <tr>
            {cellTitles.map((cellTitle) => (
              <th className="cell_picture" key={cellTitle}>
                {cellTitle}
              </th>
            ))}
          </tr>
        </thead>
      </table>

      <form className="arrayArtwork_body">
      {cells.map((cell) => (
               <td className="cell_body"><button className="cell_body_input_delete" type="submit" value={cells} key={cells}>
                {cells}</button></td>
            ))}
        <table>
          <tbody className="arrayArtwork_body">
            <tr>
             <td className="cell_body">{cell}</td>
              
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div >

);

// Validation des props
ArrayArtwork.propTypes = {
  cell: PropTypes.string.isRequired,
  cellTitles: PropTypes.array.isRequired,
  cellButtons: PropTypes.array.isRequired,
};


export default ArrayArtwork;

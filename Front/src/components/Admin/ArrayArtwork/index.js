// == Import de la lib React
import React from 'react';

// Ajout de la librairie de validation des props
import PropTypes from 'prop-types';


// == Imports locaux
import './styles.scss';



const ArrayArtwork = ({cells, cellTitles, image}) => (
  <div>
    <div className="arrayArtwork">
      <table>
        <thead className="arrayArtwork_head">
          <tr>
            {cellTitles.map((cellTitle) => (
              <th className="cell" key={cellTitle}>
                {cellTitle}
              </th>
            ))}
          </tr>
        </thead>
      </table>

      <form className="arrayArtwork_body">
        <table>
        <td className="cell">{image}</td>
      {cells.map((cell) => (
               <td className="cell"><button type="submit" value={cells} key={cells}>
                {cell}</button></td>
            ))}
        
          <tbody className="arrayArtwork_body">
            <tr>
             <td className="cell"><button>+</button></td>
              
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div >

);

// Validation des props
ArrayArtwork.propTypes = {
  image: PropTypes.string.isRequired,
  cells: PropTypes.string.isRequired,
  cellTitles: PropTypes.array.isRequired,
};


export default ArrayArtwork;

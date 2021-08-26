// == Import de la lib React
import React from 'react';

// Ajout de la librairie de validation des props
import PropTypes from 'prop-types';

// == Imports locaux
import './styles.scss';

const ArrayArtwork = ({ tables, cellTitles, }) => {


  return (
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
            <tbody className="arrayArtwork_body">
              {tables.map((table) => (
                <tr>
                  <td className="cell">{table.image}</td>

                  <td className="cell"><button type="submit" value={table.modifyCell} key={table.id}>
                    {table.modifyCell}</button></td>

                  <td className="cell"><button type="submit" value={table.deleteCell} key={table.id}>
                    {table.deleteCell}</button></td>
                </tr>
              ))}
            </tbody>
            <tbody className="arrayArtwork_body">
              <tr>
                <td className="cell"><a href="/admin/menu/artwork/arrayArtworkForm" className="button">+</a></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div >

  )
};

// Validation des props
ArrayArtwork.propTypes = {
  tables: PropTypes.array.isRequired,
  cellTitles: PropTypes.array.isRequired,
};

export default ArrayArtwork;

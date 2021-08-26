// == Import de la lib React
import React from 'react';

// Ajout de la librairie de validation des props
import PropTypes from 'prop-types';

// == Imports locaux
import './styles.scss';

const ArrayHome = ({ tables, cellTitles, }) => {


  return (
    <div>
      <div className="arrayHome">
        <table>
          <thead className="arrayHome_head">
            <tr>
              {cellTitles.map((cellTitle) => (
                <th className="cell" key={cellTitle}>
                  {cellTitle}
                </th>
              ))}
            </tr>
          </thead>
        </table>

        <form className="arrayHome_body">

          <table>
            <tbody className="arrayHome_body">
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
            <tbody className="arrayHome_body">
              <tr>
                <td className="cell"><a href="/admin/menu/home/arrayHomeForm" className="button">+</a></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div >

  )
};

// Validation des props
ArrayHome.propTypes = {
  tables: PropTypes.array.isRequired,
  cellTitles: PropTypes.array.isRequired,
};

export default ArrayHome;

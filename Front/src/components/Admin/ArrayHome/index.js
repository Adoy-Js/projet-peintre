// == Import de la lib React
import React, { useEffect, useState } from 'react';
import axios from "axios";

// Ajout de la librairie de validation des props
import PropTypes from 'prop-types';

// == Imports locaux
import './styles.scss';

const ArrayHome = ({ tables, cellTitles, }) => {

  const [images, setImages] = useState([]);

  axios({
    method: 'get',
    url: "https://projet-peintre.herokuapp.com/about"
  }).then(res => {
    const images = res.data;
    setImages(images);
  })

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
              {images.map(image => (
                <tr>
                  <td key={image.id_artist} className="cell">{image.image}</td>

                  {tables.map((table) => (
                    <tr>
                  <td className="cell"><button type="submit" value={table.modifyCell} key={table.id}>
                    {table.modifyCell}</button></td>

                  <td className="cell"><button type="submit" value={table.deleteCell} key={table.id}>
                    {table.deleteCell}</button></td>
                    </tr>
                  ))}
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

  );
}
// Validation des props
ArrayHome.propTypes = {
  tables: PropTypes.array.isRequired,
  cellTitles: PropTypes.array.isRequired,
};


export default ArrayHome;

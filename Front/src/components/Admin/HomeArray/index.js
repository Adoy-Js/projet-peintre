// == Import de la lib React
import React, { useState } from 'react';
import axios from "axios";


// == Imports locaux
import './styles.scss';

const HomeArray = () => {

  const [images, setImages] = useState([]);
  const [data, setData] = useState({
    name: "",
    image: "",
  })
  

  axios({
    method: 'get',
    url:"https://projet-peintre.herokuapp.com/admin/home",
  }).then(res => {
    const images = res.data;
    setImages(images);
  })

  function handleClick(e) {
    e.preventDefault();

    axios({
      method: 'patch',
      url:"https://projet-peintre.herokuapp.com/admin/home/:id",
    }).then(res => {
      console.log(res.data)
      setData(data);
  })
  }

  return (
    <div>
      <div className="arrayHome">
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

        <form className="arrayHome_body">

          <table>
            <tbody className="arrayHome_body">
              {images.map(image => (
                <tr>
                  <td key={image.id_artist}>{image.name_picture}</td>

                  <td key={image.image}>{image.image}</td>
                    <td><button onClick={handleClick}>MODIFIER</button></td>

                  <td><button>SUPPRIMER</button></td>

                </tr>
              ))}
            </tbody>
            <tbody className="arrayHome_body">
              <tr>
                <td className="cell"><a href="/admin/menu/home/formHomeArray" className="button">+</a></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div >

  );
}


export default HomeArray;

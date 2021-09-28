// == Import de la lib React
import React, { useState } from 'react';
import axios from "axios";


// == Imports locaux
import './styles.scss';

const HomeArray = () => {

  const [images, setImages] = useState([]);


  axios({
    method: 'get',
    url: "https://projet-peintre.herokuapp.com/admin/home",
    header: localStorage.getItem('token'),
  }).then(res => {
    const images = res.data;
    setImages(images);
  })

  function handleDelete(id) {
  if( window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne ?")){
    axios({
      method: 'delete',
      url: `https://projet-peintre.herokuapp.com/admin/home/${id}`,
    }).then(res => {
      const images = res.data;
      setImages(images);
    }).catch((err) => { console.log(err) })}
  }

  function handleModify(id) {
      axios({
        method: 'patch',
        url: `https://projet-peintre.herokuapp.com/admin/home/${id}`,
      }).then(res => {
        const images = res.data;
        setImages(images);
      }).catch((err) => { console.log(err) })}
    

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
              <tr>
                <td className="cell"><a href="/admin/menu/home/formHomeArray" className="button">+</a></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>

            <tbody>
              {images.map(image => (
                <tr>
                  <td key={image.name_picture}>{image.name_picture}</td>

                  <td key={image.image}>{image.image}</td>

                  <td><button onClick={(e) => {
                    e.preventDefault()
                    handleModify(image.id_picture);
                  }} className="arrayHome_body_modify">MODIFIER</button></td>

                  <td><button onClick={(e) => {
                    e.preventDefault()
                    handleDelete(image.id_picture);
                  }} className="arrayHome_body_delete">SUPPRIMER</button></td>

                </tr>
              ))}
            </tbody>
          </table>
        </form>

      </div>
    </div >

  );
}


export default HomeArray;

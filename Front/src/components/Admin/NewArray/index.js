// == Import de la lib React
import React, { useState } from 'react';
import axios from 'axios';


// == Imports locaux
import './styles.scss';

const ArrayNew = () => {

  const [actualities, setActualities] = useState([]);


  axios({
    method: 'get',
    url: "https://projet-peintre.herokuapp.com/admin/news",
    headers: {
      Authorization: "Bearer " + localStorage.getItem('token')
   },  }).then(res => {
    const actualities = res.data;
    setActualities(actualities);
  })

  function handleDelete( id) {
    if (window.confirm('Êtes-vous sûr de vouloir sup primer cette ligne ?')){

    axios({
      method: 'delete',
      url: `https://projet-peintre.herokuapp.com/admin/news/${id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
     },
    }).then(res => {
      const actualities = res.data;
      setActualities(actualities);
    }).catch((err) => { console.log(err) })}
  }

  return (
    <div>
      <div className="arrayNew">
        <table>
          <thead className="arrayNew_head">
            <tr>
              <th className="arrayNew_name">
                NOM
              </th>
              <th className="arrayNew_delete">
                SUPPRIMER
              </th>
            </tr>
          </thead>
        </table>

        <form className="arrayNew_body">

          <table>
          <tbody className="arrayNew_body">
          
              <tr>
                <td className="arrayNew_cell"><a href="/admin/menu/new/formNewArray" className="button">+</a></td>
                <td></td>
              </tr>
            </tbody>
              {actualities.map(actuality => (
            <tbody className="arrayNew_body">
              <tr>
                <td key={actuality.name_news} className="cell">{actuality.place}</td>

                <td><button onClick={(e) => {
                    e.preventDefault()
                    handleDelete(actualities.id_news);
                  }} className="arrayNew_body_delete">SUPPRIMER</button></td>
              </tr>
            </tbody>
                          ))}

          </table>
        </form>
      </div>
    </div >

  )
};

export default ArrayNew;

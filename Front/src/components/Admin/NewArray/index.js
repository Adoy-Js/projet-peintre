// == Import de la lib React
import React, { useState } from 'react';
import axios from 'axios';


// == Imports locaux
import './styles.scss';

const ArrayNew = () => {

  const [news, setNews] = useState([null]);


  axios({
    method: 'get',
    url: "https://projet-peintre.herokuapp.com/admin/news",
  }).then(res => {
    console.log(res.data)
    setNews(news);
  })


  return (
    <div>
      <div className="arrayNew">
        <table>
          <thead className="arrayNew_head">
            <tr>
              <th className="arrayNew_name">
                NOM
              </th>
              <th className="arrayNew_modify">
                MODIFIER
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
                <td key={news} className="cell">{news}</td>

                <td><button>MODIFIER</button></td>

                <td><button className="arrayNew_body_delete">SUPPRIMER</button></td>
              </tr>
            </tbody>
            <tbody className="arrayNew_body">
              <tr>
                <td className="arrayNew_cell"><a href="/admin/menu/new/formNewArray" className="button">+</a></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div >

  )
};

export default ArrayNew;

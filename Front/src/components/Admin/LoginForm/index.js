import React, { useState } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './styles.scss';

 const LoginForm  = () => {

  const [data, setData] = useState({
    email: '',
    password: '',
    isLogged: false,
  });
  
  const header = 

  function handleSubmit(evt) {
    evt.preventDefault();

    axios.post('https://projet-peintre.herokuapp.com/admin', data, header
      )
      .then(res => {
        localStorage.setItem('token', res.data.token)
        console.log(res);
        console.log(res.data);
        setData({ isLogged: true })
      }).catch(err => {console.log(err)}
      )
  }

  
  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }


    return (
      data.isLogged ? <Redirect to="/admin/menu/artwork" /> :
        <form onSubmit={(e) => handleSubmit(e)} className="Form">

          <div className="Form_label">
            Bienvenue
          </div>
          <div className="Form_connexion">

            <div className="Form_mail">
              <input className="Form_input" id="email" name="mail" type="text" placeholder="E-mail" value={data.email} onChange={(e) => handle(e)} />
            </div>

            <div className="Form_password">
              <input className="Form_input" id="password" name="password" type="password" placeholder="Mot de passe" value={data.password}  onChange={(e) => handle(e)} />
            </div>

            <div className="Form_submit">
              <input className="Form_input" type="submit" value="Connexion" />
            </div>

          </div>
        </form>
    );
  }


export default LoginForm;
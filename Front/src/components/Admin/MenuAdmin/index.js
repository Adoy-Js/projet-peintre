// == Import de la lib React
import React from 'react';

// == Import npm

// == Imports locaux
import './styles.scss';

const menuAdmin = () => {

  const handleDisconnect = () => {
     localStorage.removeItem('token')
     console.log('coucou')
   }

   return (
  <div>
    <li className="array">
      <a href="/admin/menu/artwork" className="array_menu">Oeuvre</a>
      <a href="/admin/menu/home"  className="array_menu">Accueil</a>
      <a href="/admin/menu/new"  className="array_menu">Actualité</a>
      </li>
      <li className="menuAdmin">
      <a onClick={() => handleDisconnect()} href="/" className="link_menu_deconnexion">Déconnexion</a>
  </li>
  </div>

)};

export default menuAdmin;

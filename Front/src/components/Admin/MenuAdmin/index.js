// == Import de la lib React
import React from 'react';

// == Import npm

// == Imports locaux
import './styles.scss';

const menuAdmin = () => (
  <div className="array">
      <a href="/admin/menu/artwork" className="array_menu">Oeuvre</a>
      <a href="/admin/menu/home"  className="array_menu">Accueil</a>
      <a href="/admin/menu/new"  className="array_menu">Actualité</a>
  </div>
);

export default menuAdmin;

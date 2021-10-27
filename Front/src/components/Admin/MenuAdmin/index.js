// == Import de la lib React
import React from 'react';
import { NavLink } from "react-router-dom";
// == Import npm

// == Imports locaux
import './styles.scss';

const menuAdmin = () => (
  <div className="array">
      <NavLink to="/admin/artwork" className="array_menu">Oeuvre</NavLink>
      <NavLink to="/admin/home"  className="array_menu">Accueil</NavLink>
      <NavLink to="/admin/news"  className="array_menu">Actualité</NavLink>
      <NavLink to="/admin/biography" className="array_menu">Biographie</NavLink>
  </div>
);

export default menuAdmin;

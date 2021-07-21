// == Import de la lib React
import React from 'react';
// Ajout du composant LoginForm
import LoginForm from 'src/components/LoginForm';


// == Import npm

// == Imports locaux
import './styles.scss';

const Menu = () => (
  <nav className="link">
    <LoginForm />
    <a className="link_menu">Camille PAUL</a>
    <a className="link_menu">Croquis</a>
    <a className="link_menu">Peintures</a>
    <a className="link_menu">Peintures murales</a>
    <a className="link_menu">Actualités</a>
    <a className="link_menu">Biographie</a>
    <a className="link_menu">Contact</a>
  </nav>
);

export default Menu;

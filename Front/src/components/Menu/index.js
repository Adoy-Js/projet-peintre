// import NPM
import React from 'react';

// == Imports locaux
import './styles.scss';

const Menu = () => (
  <menu className="menu">
    <nav className="link">
      <a className="link_menu_logo" href="/">Camille PAUL</a>
      <a className="link_menu" href="/sketches">Croquis</a>
      <a className="link_menu" href="/portrait">Portrait</a>
      <a className="link_menu" href="/paintings">Peintures</a>
      <a className="link_menu" href="/mural-paintings">Peintures murales</a>
      <a className="link_menu" href="/news">Actualités</a>
      <a className="link_menu" href="/biography">Biographie</a>
      <a className="link_menu" href="/contact">Contact</a>
    </nav>
  </menu>
);

export default Menu;

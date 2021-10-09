// import NPM
import React from 'react'
import { useState } from "react"

// == Imports locaux
import './styles.scss';

function Menu () {

  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  console.log(showLinks);

  return (
    <nav className={`menu ${showLinks ? "show-nav" : "hide-nav"} `}>
      <a href="/" className="item_menu menu_logo"><img className="" src="" alt="" /></a>
      <ul className="links_menu">
        <li className="item_menu slideInDown-2">
          <a href="/" className="link_menu">Accueil</a>
        </li>
        <li className="item_menu slideInDown-3">
          <a href="/artwork/portrait" className="link_menu">Portrait</a>
        </li>
        <li className="item_menu slideInDown-4">
          <a href="/artwork/painting" className="link_menu">Peintures</a>
        </li>
        <li className="item_menu slideInDown-5">
          <a href="/artwork/mural-painting" className="link_menu">Peintures murales</a>
        </li>
        <li className="item_menu slideInDown-6">
          <a href="/news" className="link_menu">Actualités</a>
        </li>
        <li className="item_menu slideInDown-7">
          <a href="/about" className="link_menu">Biographie</a>
        </li>
        <li className="item_menu slideInDown-8">
          <a href="/contact" className="link_menu">Contact</a>
        </li>
        <li className="item_menu slideInDown-8">
          <a href="/admin"><img src="https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/LOGODERNIERsans%20fond%20(1).png?alt=media&token=4b28bdaf-4134-450b-b4ce-62ff9ab52bc6" alt="logo" className="logo" /> </a>
        </li>
      </ul>

      <button className="menu_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>  
      </button> 
    </nav>
  )
}

export default Menu;

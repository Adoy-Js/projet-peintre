// import NPM
import React, { useState } from "react";
import PropTypes from "prop-types";
// == Imports locaux
import "./styles.scss";

const Menu = ({ isLogged, onDisconnect }) => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleDisconnect = () => {
    localStorage.removeItem("token");
    onDisconnect();
  };

  return (
    <nav className={`menu ${showLinks ? "show-nav" : "hide-nav"} `}>
      <a href="/" className="item_menu menu_logo">
        <img className="" src="" alt="" />
      </a>
      <ul className="links_menu">
        <li className="item_menu slideInDown-2">
          <a href="/" className="link_menu">
            Accueil
          </a>
        </li>
        <li className="item_menu slideInDown-3">
          <a href="/artwork/portrait" className="link_menu">
            Portrait
          </a>
        </li>
        <li className="item_menu slideInDown-4">
          <a href="/artwork/painting" className="link_menu">
            Peintures
          </a>
        </li>
        <li className="item_menu slideInDown-5">
          <a href="/artwork/mural-painting" className="link_menu">
            Peintures murales
          </a>
        </li>
        <li className="item_menu slideInDown-6">
          <a href="/news" className="link_menu">
            Actualités
          </a>
        </li>
        <li className="item_menu slideInDown-7">
          <a href="/about" className="link_menu">
            Biographie
          </a>
        </li>
        <li className="item_menu slideInDown-8">
          <a href="/contact" className="link_menu">
            Contact
          </a>
        </li>
        {isLogged && (
          <>
            <li className="item_menu disconnect">
              <a href="/" className="link_menu" onClick={handleDisconnect}>
                Déconnexion
              </a>
            </li>
            <li className="item_menu disconnect">
              <a href="/admin/artwork" className="link_menu">
                Admin
              </a>
            </li>
          </>
        )}
      </ul>

      <button className="menu_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};
Menu.propTypes = {
  isLogged: PropTypes.bool,
  onDisconnect: PropTypes.func,
};

Menu.defaultProps = {
  isLogged: false,
  onDisconnect: () => {},
};

export default Menu;

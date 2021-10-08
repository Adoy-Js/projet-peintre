// import NPM
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
      <NavLink to="/" className="item_menu menu_logo">
        <img className="" src="" alt="" />
      </NavLink>
      <ul className="links_menu">
        <li className="item_menu slideInDown-2">
          <NavLink to="/" className="link_menu">
            Accueil
          </NavLink>
        </li>
        <li className="item_menu slideInDown-3">
          <NavLink to="/artwork/portrait" className="link_menu">
            Portrait
          </NavLink>
        </li>
        <li className="item_menu slideInDown-4">
          <NavLink to="/artwork/painting" className="link_menu">
            Peintures
          </NavLink>
        </li>
        <li className="item_menu slideInDown-5">
          <NavLink to="/artwork/mural-painting" className="link_menu">
            Peintures murales
          </NavLink>
        </li>
        <li className="item_menu slideInDown-6">
          <NavLink to="/news" className="link_menu">
            Actualités
          </NavLink>
        </li>
        <li className="item_menu slideInDown-7">
          <NavLink to="/about" className="link_menu">
            Biographie
          </NavLink>
        </li>
        <li className="item_menu slideInDown-8">
          <NavLink to="/contact" className="link_menu">
            Contact
          </NavLink>
        </li>
        {isLogged && (
          <>
            <li className="item_menu disconnect">
              <NavLink to="/" className="link_menu" onClick={handleDisconnect}>
                Déconnexion
              </NavLink>
            </li>
            <li className="item_menu disconnect">
              <NavLink to="/admin/artwork" className="link_menu">
                Admin
              </NavLink>
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

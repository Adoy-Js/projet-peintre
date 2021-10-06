//Import de la lib React
import React, { useState } from "react";
//Import NPM
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import api from "src/api";



//Import locaux
import "./styles.scss";

const LoginForm = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/admin", {
        email: email,
        password: password,
      });
      if (response.data.userId && response.data.token) {
        setIsLogged(true);
        localStorage.setItem('token', response.data.token)
      } else if (response.data.error) {
        alert(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return isLogged ? (
    <Redirect to ="/admin/artwork" />
  ) : (
    <form onSubmit={handleSubmit} className="Form">
      <div className="Form_label">Bienvenue</div>
      <div className="Form_connexion">
        <div className="Form_mail">
          <input
            className="Form_input"
            name="mail"
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="Form_password">
          <input
            className="Form_input"
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="Form_submit">
          <input className="Form_input" type="submit" value="Connexion" />
        </div>
      </div>
    </form>
  );
};

// LoginForm.propTypes = {
//   email: PropTypes.string,
//   password: PropTypes.string,
//   isLogged: PropTypes.bool,
//   onLogin: PropTypes.func,
// };

// LoginForm.defaultProps = {
//   email: "",
//   password: "",
//   isLogged: false,
//   onLogin: () => {},
// };

export default LoginForm;

import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './styles.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLogged: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const admin = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post(`http://localhost:5000/admin`, admin)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        console.log(res);
        console.log(res.data);
        this.setState({ isLogged: true })
      })
  }

  render() {
    //{this.state.isLogged && (return <Redirect to='/' />)} 
    return (
      this.state.isLogged ? <Redirect to="/" /> :
        <form onSubmit={this.handleSubmit} className="Form">

          <div className="Form_label">
            Bienvenue
          </div>
          <div className="Form_connexion">

            <div className="Form_mail">
              <input className="Form_input" name="mail" type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleEmailChange} />
            </div>

            <div className="Form_password">
              <input className="Form_input" name="password" type="password" placeholder="Mot de passe" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>

            <div className="Form_submit">
              <input className="Form_input" type="submit" value="Connexion" />
            </div>

          </div>
        </form>
    );
  }
}

export default LoginForm;

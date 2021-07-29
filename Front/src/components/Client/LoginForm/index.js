import React from 'react';
import axios from 'axios';

import './styles.scss';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirection: false
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
        const { token } = res.data

        
        if (res.status === 200 ) {
          localStorage.setItem('token', token);
          this.setState({ redirection: true });
        } else {
          console.log(error)
        }
        console.log(res);
        console.log(res.data);
      })
  }

  render() {

    const { redirection } = this.state;
    if(redirection){ 
      <Redirect to ='/admin/artwork' />
     } else { 
      <LoginForm />
    }

    return (
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

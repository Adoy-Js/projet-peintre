import React from 'react';

import './styles.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    this.LoginForm();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <div className="Form_label">
          Connexion
        </div>
        <div className="Form_mail">
          Adresse mail :
          <input className="Form_mail_input" name="mail" type="text" value={this.state.email} onChange={this.handleEmailChange} />
        </div>
        <div className="Form_password">
          Mot de passe :
          <input className="Form_password_input" name="password" type="text" value={this.state.password} onChange={this.handlePasswordChange} />
        </div>
        <div className="Form_submit">
          <input className="Form_submit_input" type="submit" value="Envoyer" />
        </div>
      </form>
    );
  }
}

export default LoginForm;

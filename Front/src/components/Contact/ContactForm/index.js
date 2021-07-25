import React from 'react';

import './styles.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      message: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.LoginForm();
  }

  render() {
    return (
      <div className="contactForm">
        <form onSubmit={this.handleSubmit} className="contactForm_client">
          <div className="contactForm_connexion">

            <div className="contactForm_name">
              <input className="contactForm_input_name" name="name" type="text" placeholder="Nom/Prénom" value={this.state.name} onChange={this.handleNameChange} />
            </div>

            <div className="contactForm_mail">
              <input className="contactForm_input_mail" name="mail" type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleEmailChange} />
            </div>

            <div className="contactForm_message">
              <input className="contactForm_input_message" name="message" type="text" placeholder="Votre message" value={this.state.message} onChange={this.handleMessageChange} />
            </div>

            <div className="contactForm_submit">
              <input className="contactForm_input_submit" type="submit" value="Envoyer" />
            </div>

          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;

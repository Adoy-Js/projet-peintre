import React, { PureComponent } from 'react';
import axios from 'axios';

import './styles.scss';

class ContactForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      firstname: '',
      message: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
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

  handleFirstNameChange(event) {
    this.setState({ firstname: event.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const contact = {
      email: this.state.email,
      name: this.state.name,
      firstname: this.state.firstname,
      message: this.state.message,
    };

    console.log(contact)
    axios.post(`https://projet-peintre.herokuapp.com/contact`, contact)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
 <div className="contactForm">
        <form onSubmit={this.handleSubmit} className="contactForm_client">
          <div className="contactForm_connexion">

            <div className="contactForm_name">
              <input className="contactForm_input_name" name="name" type="text" placeholder="Nom" value={this.state.name} onChange={this.handleNameChange} />
            </div>

            <div className="contactForm_firstName">
              <input className="contactForm_input_firstName" name="firstName" type="text" placeholder="Prénom" value={this.state.firstname} onChange={this.handleFirstNameChange} />
            </div>

            <div className="contactForm_mail">
              <input className="contactForm_input_mail" name="email" type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleEmailChange} />
            </div>

            <div className="contactForm_message">
              <textarea className="contactForm_input_message" name="message" type="textarea" placeholder="Votre message" value={this.state.message} onChange={this.handleMessageChange} />
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

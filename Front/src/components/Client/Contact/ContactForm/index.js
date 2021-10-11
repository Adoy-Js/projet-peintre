//Import de la lib React
import React, { useState } from "react";

//Import locaux
import "./styles.scss";
import api from "src/api";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contact = {
      email: this.state.email,
      name: this.state.name,
      firstname: this.state.firstname,
      message: this.state.message,
    };

    try {
      await api.post(`/contact`, contact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contactForm">
      <form onSubmit={handleSubmit} className="contactForm_client">
        <div className="contactForm_name">
          <input
            className="contactForm_input_name"
            name="name"
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="contactForm_firstName">
          <input
            className="contactForm_input_firstName"
            name="firstName"
            type="text"
            placeholder="Prénom"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="contactForm_mail">
          <input
            className="contactForm_input_mail"
            name="email"
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="contactForm_message">
          <textarea
            className="contactForm_input_message"
            name="message"
            type="textarea"
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="contactForm_submit">
          <input
            className="contactForm_input_submit"
            type="submit"
            value="Envoyer"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

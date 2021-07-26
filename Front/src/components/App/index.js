// == Import npm
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// == Import
// Ajout du composant Menu
import Menu from 'src/components/Menu';
// Ajout du composant LoginForm
import LoginForm from 'src/components/LoginForm';
// Ajout du composant Home
import Home from 'src/components/Home';
// Ajout du composant Footer
import Footer from 'src/components/Footer';
// Ajout du composant Portrait
import Portrait from 'src/components/Portrait';
// Ajout du composant Contact
import Contact from 'src/components/Contact';
// Ajout du composant Biography
import Biography from 'src/components/Biography';

// Ajout du composant contactData
import contactData from 'src/data/contact';


import './styles.scss';


// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <BrowserRouter>
      <Route path="/admin" exact>
        <LoginForm />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/portraits" exact>
        <Portrait />
      </Route>
      <Route path="/contact" exact>
        <Contact
      descriptions={contactData.descriptions} 
      messages={contactData.messages} 
      footermessages={contactData.footermessages} 
        />
      </Route>
      <Route path="/biography" exact>
        <Biography
      messages={contactData.messages} 
      footermessages={contactData.footermessages} 
        />
      </Route>
    </BrowserRouter>
    <Footer />
  </div>
);


// == Export
export default App;

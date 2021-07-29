// == Import npm
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// == Import
// Ajout du composant Menu
import Menu from 'src/components/Client/Menu';
// Ajout du composant Home
import Home from 'src/components/Client/Home';
// Ajout du composant Footer
import Footer from 'src/components/Client/Footer';
// Ajout du composant Portrait
import Portrait from 'src/components/Client/Portrait';
// Ajout du composant Contact
import Contact from 'src/components/Client/Contact';
// Ajout du composant Biography
import Biography from 'src/components/Client/Biography';
// Ajout du composant Sketches
import Sketches from 'src/components/Client/Sketches';


// Ajout du composant LoginForm
import LoginForm from 'src/components/Client/LoginForm';
// Ajout du composant ArrayHome
import ArrayHome from 'src/components/Admin/ArrayHome';




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

      <Route path="/admin/artwork" exact>
        <ArrayHome />
      </Route>

      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/artwork/portrait" exact>
        <Portrait />
      </Route>

      <Route path="/contact" exact>
        <Contact
          descriptions={contactData.descriptions}
          messages={contactData.messages}
          footermessages={contactData.footermessages}
        />
      </Route>
      
      <Route path="/about" exact>
        <Biography />
      </Route>

      <Route path="/artwork/sketches" exact>
        <Sketches />
      </Route>
      
    </BrowserRouter>
    <Footer />
  </div>
);


// == Export
export default App;

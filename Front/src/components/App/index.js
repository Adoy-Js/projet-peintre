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
<<<<<<< HEAD
<<<<<<< HEAD
// Ajout du composant Portrait
import Portrait from 'src/components/Portrait';
=======
>>>>>>> e731ce9ce66e1e2d4a4df275770e14d448979863
// Ajout du composant Contact
import Contact from 'src/components/Contact';
// Ajout du composant Biography
import Biography from 'src/components/Biography';
// Ajout du composant Sketches
import Sketches from 'src/components/Sketches';
// Ajout du composant Portrait
import Portrait from 'src/components/Portrait';



// Ajout du composant contactData
import contactData from 'src/data/contact';
=======
// Ajout du composant LoginForm
import LoginForm from 'src/components/LoginForm';
// Ajout du composant Portrait
import Portrait from 'src/components/Portrait';
>>>>>>> origin/css



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
<<<<<<< HEAD
      <Route path="/contact" exact>
        <Contact
          descriptions={contactData.descriptions}
          messages={contactData.messages}
          footermessages={contactData.footermessages}
        />
      </Route>
      <Route path="/biography" exact>
        <Biography />
      </Route>
      <Route path="/sketches" exact>
        <Sketches />
      </Route>
      <Route path="/portrait" exact>
        <Portrait />
      </Route>
=======
>>>>>>> origin/css
    </BrowserRouter>
    <Footer />
  </div>
);


// == Export
export default App;

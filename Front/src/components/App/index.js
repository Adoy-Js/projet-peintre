// == Import npm
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// == Import
// Ajout du composant Menu
import Menu from 'src/components/Client/Menu';
// Ajout du composant Home
import Home from 'src/components/Client/Home';
// Ajout du composant Paintings
import Paintings from 'src/components/Client/Paintings';
//Ajout du composant MuralPaintings
import MuralPaintings from 'src/components/Client/MuralPaintings';
// Ajout du composant Footer
import Footer from 'src/components/Client/Footer';
// Ajout du composant Portrait
import Portrait from 'src/components/Client/Portrait';
// Ajout du composant News
import News from 'src/components/Client/News';
// Ajout du composant Contact
import Contact from 'src/components/Client/Contact';
// Ajout du composant Biography
import Biography from 'src/components/Client/Biography';
// Ajout du composant Sketches
import Sketches from 'src/components/Client/Sketches';
// Ajout du composant Narnia
import Narnia from 'src/components/Client/MuralPaintings/Narnia';
// Ajout du composant Durtal
import Durtal from 'src/components/Client/MuralPaintings/Durtal';
// Ajout du composant Piwakawaka
import Piwakawaka from 'src/components/Client/MuralPaintings/Piwakawaka';



// Ajout du composant LoginForm
import LoginForm from 'src/components/Admin/LoginForm';
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

      <Route path="/artwork/painting" exact>
        <Paintings />
      </Route>

      <Route path="/artwork/mural-painting" exact>
        <MuralPaintings />
      </Route>

      <Route path="/admin/artwork" exact>
        <ArrayHome />
      </Route>

      <Route path="/news" exact>
        <News />
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

      <Route path="/artwork/sketche" exact>
        <Sketches />
      </Route>

      <Route path="/artwork/mural-painting/10" exact >
        <Narnia />
      </Route>

      <Route path="/artwork/mural-painting/9" exact >
        <Durtal />
      </Route>
      <Route path="/artwork/mural-painting/11" exact >
        <Piwakawaka />
      </Route>
      
    </BrowserRouter>
    <Footer />
  </div>
);


// == Export
export default App;

// == Import npm
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// == Import

//CLIENT
// Ajout du composant Menu
import Menu from 'src/components/Client/Menu';
// Ajout du composant Footer
import Footer from 'src/components/Client/Footer';
// Ajout du composant NotFound
import NotFound from 'src/components/Client/NotFound';
// Ajout du composant Home
import Home from 'src/components/Client/Home';
// Ajout du composant Paintings
import Paintings from 'src/components/Client/Paintings';
//Ajout du composant MuralPaintings
import MuralPaintings from 'src/components/Client/MuralPaintings';
// Ajout du composant Portrait
import Portrait from 'src/components/Client/Portrait';
// Ajout du composant News
import News from 'src/components/Client/News';
// Ajout du composant Contact
import Contact from 'src/components/Client/Contact';
// Ajout du composant Biography
import Biography from 'src/components/Client/Biography';
// Ajout du composant Piwakawaka
import MuralPainting from 'src/components/Client/MuralPaintings/MuralPainting';
// Ajout du composant Oil
import Oil from 'src/components/Client/Paintings/Oil';
// Ajout du composant Acrylic
import Acrylic from 'src/components/Client/Paintings/Acrylic';



//ADMIN
// Ajout du composant LoginForm
import LoginForm from 'src/components/Admin/LoginForm';
// Ajout du composant ArrayHome
import HomeArray from 'src/components/Admin/HomeArray';
// Ajout du composant ArrayArtwork
import ArtworkArray from 'src/components/Admin/ArtworkArray';
// Ajout du composant ArrayNew
import NewArray from 'src/components/Admin/NewArray';
// Ajout du composant ArrayNewForm
import FormNewArray from 'src/components/Admin/NewArray/FormNewArray';
// Ajout du composant ArrayArtworkForm
import FormArtworkArray from 'src/components/Admin/ArtworkArray/FormArtworkArray';
// Ajout du composant ArrayHomeForm
import FormHomeArray from 'src/components/Admin/HomeArray/FormHomeArray';
// Ajout du composant MenuAdmin
import MenuAdmin from 'src/components/Admin/MenuAdmin';






// Ajout du composant contactData
import contactData from 'src/data/contact';
// Ajout du composant array
import arrayData from 'src/data/array';



import './styles.scss';


// == Composant
const App = () => (
  <div className="app">
    <Menu />

    <BrowserRouter>
      <Switch>
        <Route path="/admin/menu">
          <MenuAdmin />
        </Route>

        <Route path="/admin" exact>
          <LoginForm />
        </Route>

        <Route path="/admin/menu/artwork" exact>
          <ArtworkArray
            cellTitles={arrayData.cellTitles} />
        </Route>

        <Route path="/admin/menu/artwork/formArtworkArray" exact>
          <FormArtworkArray />
        </Route>

        <Route path="/admin/menu/home" exact>
          <HomeArray
            cellTitles={arrayData.cellTitles} />
        </Route>

        <Route path="/admin/menu/home/formHomeArray" exact>
          <FormHomeArray />
        </Route>

        <Route path="/admin/menu/new" exact>
          <NewArray
            cellTitles={arrayData.cellTitles} />
        </Route>

        <Route path="/admin/menu/new/formNewArray" exact>
          <FormNewArray />
        </Route>

        <Route path="/artwork/painting" exact>
          <Paintings />
        </Route>

        <Route path="/artwork/mural-painting" exact>
          <MuralPaintings />
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

        <Route path="/artwork/mural-painting/:id" exact >
          <MuralPainting />
        </Route>

        <Route path="/artwork/oil-painting" exact >
          <Oil />
        </Route>

        <Route path="/artwork/acrylic-painting" exact >
          <Acrylic />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>

    <Footer />
  </div>
);


// == Export
export default App;

// == Import npm
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// == Import

//CLIENT
// Ajout du composant Menu
import Menu from 'src/components/Client/Menu';
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
// Ajout du composant Narnia
import Narnia from 'src/components/Client/MuralPaintings/Narnia';
// Ajout du composant Durtal
import Durtal from 'src/components/Client/MuralPaintings/Durtal';
// Ajout du composant Piwakawaka
import Piwakawaka from 'src/components/Client/MuralPaintings/Piwakawaka';
// Ajout du composant Oil
import Oil from 'src/components/Client/Paintings/Oil';
// Ajout du composant Acrylic
import Acrylic from 'src/components/Client/Paintings/Acrylic';



//ADMIN
// Ajout du composant LoginForm
import LoginForm from 'src/components/Admin/LoginForm';
// Ajout du composant ArrayHome
import ArrayHome from 'src/components/Admin/ArrayHome';
// Ajout du composant ArrayArtwork
import ArrayArtwork from 'src/components/Admin/ArrayArtwork';
// Ajout du composant ArrayNew
import ArrayNew from 'src/components/Admin/ArrayNew';
// Ajout du composant ArrayNewForm
import ArrayNewForm from 'src/components/Admin/ArrayNew/ArrayNewForm';
// Ajout du composant ArrayArtworkForm
import ArrayArtworkForm from 'src/components/Admin/ArrayArtwork/ArrayArtworkForm';
// Ajout du composant ArrayHomeForm
import ArrayHomeForm from 'src/components/Admin/ArrayHome/ArrayHomeForm';
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
      <Route path="/admin/menu">
        <MenuAdmin />
      </Route>

      <Route path="/admin" exact>
        <LoginForm />
      </Route>

      <Route path="/admin/menu/artwork" exact>
        <ArrayArtwork 
        tables={arrayData.tables}
        cellTitles={arrayData.cellTitles} />
      </Route>

      <Route path="/admin/menu/artwork/arrayArtworkForm" exact>
        <ArrayArtworkForm  />
      </Route>

      <Route path="/admin/menu/home" exact>
        <ArrayHome
        tables={arrayData.tables}
        cellTitles={arrayData.cellTitles} />
      </Route>

      <Route path="/admin/menu/home/ArrayHomeForm" exact>
        <ArrayHomeForm  />
      </Route>

      <Route path="/admin/menu/new" exact>
        <ArrayNew 
        tables={arrayData.tables}
        cellTitles={arrayData.cellTitles} />
      </Route>

      <Route path="/admin/menu/new/arrayNewForm" exact>
        <ArrayNewForm  />
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

      <Route path="/artwork/mural-painting/9" exact >
        <Narnia />
      </Route>

      <Route path="/artwork/mural-painting/10" exact >
        <Durtal />
      </Route>

      <Route path="/artwork/mural-painting/11" exact >
        <Piwakawaka />
      </Route>

      <Route path="/artwork/oil-painting" exact >
        <Oil />
      </Route>

      <Route path="/artwork/acrylic-painting" exact >
        <Acrylic />
      </Route>

    </BrowserRouter>
  </div>
);


// == Export
export default App;

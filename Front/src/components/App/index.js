// == Import npm
import React from "react";
import { Route, Switch } from "react-router-dom";

// == Import

//CLIENT
// Ajout du composant Menu
import Menu from "src/components/Client/Menu";
// Ajout du composant Home
import Home from "src/components/Client/Home";
// Ajout du composant Paintings
import Paintings from "src/components/Client/Paintings";

import Painting from "src/components/Client/Paintings/Painting";
//Ajout du composant MuralPaintings
import MuralPaintings from "src/components/Client/MuralPaintings";
// Ajout du composant MuralPainting
import MuralPainting from "src/components/Client/MuralPaintings/MuralPainting";
// Ajout du composant Portrait
import Portrait from "src/components/Client/Portrait";
// Ajout du composant News
import News from "src/components/Client/News";
// Ajout du composant Contact
import Contact from "src/components/Client/Contact";
// Ajout du composant Biography
import Biography from "src/components/Client/Biography";

//ADMIN
// Ajout du composant LoginForm
import LoginForm from "src/components/Admin/LoginForm";
// Ajout du composant ArrayHome
import HomeArray from "src/components/Admin/HomeArray";

// Ajout du composant ArrayNew
import NewArray from "src/components/Admin/NewArray";
// Ajout du composant ArrayNewForm
import FormNewArray from "src/components/Admin/NewArray/FormNewArray";
// Ajout du composant ArrayArtworkForm
import FormArtworkArray from "src/components/Admin/ArtworkArray/FormArtworkArray";
// Ajout du composant ArrayHomeForm
import FormHomeArray from "src/components/Admin/HomeArray/FormHomeArray";


// Ajout du composant contactData
import contactData from "src/data/contact";
// Ajout du composant array
import arrayData from "src/data/array";

import NotFound from "src/components/Client/NotFound";

import "./styles.scss";
import ArtworkArray from "src/components/Admin/ArtworkArray";

// == Composant
const App = () => (
  <div className="app">
    <Menu />

    <Switch>

      <Route path="/admin" exact>
        <LoginForm />
      </Route>

      <Route path="/admin/artwork/formArtworkArray" exact>
        <FormArtworkArray />
      </Route>

      <Route path="/admin/artwork" exact>
        <ArtworkArray  />
      </Route>

      <Route path="/admin/home" exact>
        <HomeArray  />
      </Route>

      <Route path="/admin/home/formHomeArray" exact>
        <FormHomeArray />
      </Route>

      <Route path="/admin/news" exact>
        <NewArray />
      </Route>

      <Route path="/admin/new/formNewArray" exact>
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
      <Route path="/artwork/mural-painting/:id" exact>
        <MuralPainting />
      </Route>
      <Route path="/artwork/painting" exact>
        <Paintings />
      </Route>
      <Route path="/artwork/painting/:painting_category" exact>
        <Painting />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;

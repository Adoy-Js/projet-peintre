// == Import npm
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// == Import
// Ajout du composant Menu
import Menu from 'src/components/Menu';
// Ajout du composant Home
import Home from 'src/components/Home';
// Ajout du composant Footer
import Footer from 'src/components/Footer';
// Ajout du composant LoginForm
import LoginForm from 'src/components/LoginForm';

import './styles.scss';

// == Composant
const App = () => (
  <BrowserRouter className="app">
    <Menu />
    <Switch>
      <Route path="/:admin" exact>
        <LoginForm />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter>
);

// == Export
export default App;

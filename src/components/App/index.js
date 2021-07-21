// == Import npm
import React from 'react';

// == Import
// Ajout du composant Menu
import Menu from 'src/components/Menu';
// Ajout du composant Home
import Home from 'src/components/Home';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <Home />
  </div>
);

// == Export
export default App;

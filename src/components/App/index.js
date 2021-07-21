// == Import npm
import React from 'react';

// == Import
// Ajout du composant Menu
import Menu from 'src/components/Menu';
// Ajout du composant Home
import Home from 'src/components/Home';
// Ajout du composant Footer
import Footer from 'src/components/Footer';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;

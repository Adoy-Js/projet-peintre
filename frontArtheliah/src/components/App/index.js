// == Import de la lib React
import React from 'react';
// Ajout du composant Home
import Home from 'src/components/Home';
// Ajout du composant Sketch
import Sketch from 'src/components/Sketch';
// Ajout du composant Portrait
import Portrait from 'src/components/Portrait';
// Ajout du composant Painting
import Painting from 'src/components/Painting';
// Ajout du composant WallPainting
import WallPainting from 'src/components/WallPainting';
// Ajout du composant Biography
import Biography from 'src/components/Biography';
// Ajout du composant New
import New from 'src/components/New';
// Ajout du composant Contact
import Contact from 'src/components/Contact';

// == Imports locaux
import './styles.scss';

const App = () => (
  <div>
    <Home />
    <Sketch />
    <Portrait />
    <Painting />
    <WallPainting />
    <Biography />
    <New />
    <Contact />
  </div>
);

export default App;

// == Import de la lib React
import React from 'react';
import bioImage from './img/accueil.jpg'

// == Imports locaux
import './styles.scss';

const Biography = () => (
  <div className="Biography">
    <h1>Biographie</h1>
    <div className="biography">
      <img className="bioImage" src={bioImage} alt="biographie"></img>
      <div className="biography_block">
        <div className="biography_div">
        Camille Paul est un artiste plasticien français, né à Angers en 1994. Durant son enfance, il développe son don pour le dessin. Il va poursuivre cette passion dans une école professionnelle d’architecture à Angers. Au bout de trois ans, il décide d’intégrer une école d’art et de Design à Bordeaux. L’aventure durera deux ans et le confortera dans son désir de peindre et de créer. Déterminé à vivre et partager son art, il choisit de s’installer à Paris. Curieux et ouvert, très vite, il participe à des expositions collectives. Sa rencontre avec Miss Tic lui fera découvrir le milieu de l’art contemporain et du street art. Pendant trois ans il sera son assistant, avant de s’envoler voyager vers de nouveaux continents. 
          </div>

          <div className="biography_div">
          Depuis 2018 Camille vagabonde entre petites escapades et grands séjours. Une année passée en Nouvelle Zélande et une autre en Australie. Des découvertes, de nouvelles cultures, des rencontres touchantes et inspirantes, l’apprentissage de l’anglais, et la réalisation de nombreux projets picturaux prendront vie. Ce voyage fut aussi une belle découverte sur « soi ». 
          </div>

          <div className="biography_div">
          Il consacre durant son voyage en Australie son temps à la création et la recherche dans son travail personnel. Il fabrique artisanalement ses outils à l’aide de pièces recyclées et expérimente de nouvelles techniques. Pour la couleur, c’est en se baladant dans le bush australien hors des sentiers battus, qu’il trouvera des pigments naturels, ocres, rouges, des bruns… comme les utilisent les peintres aborigènes depuis des millénaires.
          </div>

          <div className="biography_div">
          Son regard sur le monde, la perception des formes et sujets qu’il peint lui deviennent plus familiers. Cet artiste touche à tout, expérimente diverses techniques et processus de création artistique . Crayon, fusain, pastel, pigment, acrylique, peinture à l’huile et bien d’autres matériaux comptent parmi ses moyens d’expression.
          </div>

          <div className="biography_div">
          « J’aime étudier les corps, les visages, les expressions, complexes et mystérieux… Cela me passionne, me questionne. La nature, les animaux, les scènes vivantes ainsi que la musique, sont mes sources d’inspirations quotidiennes. Elles font comme, partie de moi. »
          </div>

        <div className="biography_div">
          Camille PAUL
        </div>
      </div>
    </div>
  </div>

);

export default Biography;

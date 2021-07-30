// == Import de la lib React
import React from 'react';
import bioImage from './img/bio.jpg'

// == Imports locaux
import './styles.scss';

const Biography = () => (
  <div className="Biography">
    <img className="bioImage" src={bioImage} alt="biographie"></img>
    <div className="biography">
      <h1 className="biography_title">Biographie</h1>
      <div>
        <div className="biography_div">
          Camille Paul est un artiste plasticien français, né à Angers en 1994. Durant son enfance, ce jeune artiste développe son don pour le dessin. Il va poursuivre cette passion dans une école professionnelle d’architecture à Angers. Au bout de trois ans, il décide d’intégrer une école d’art et de Design à Bordeaux. L’aventure durera deux ans et le confortera dans son désir de peindre et de créer. Déterminé à vivre de son art, il choisit de s’installer à Paris. Curieux et ouvert, très vite, il participe à des expositions collectives. Sa rencontre avec Miss Tic lui fera découvrir le milieu de l’art contemporain. Il y passera deux années et demi bien remplie, avant de s’envoler voyager vers de nouveaux continents.
          </div>

          <div className="biography_div">
          Le début d’un long voyage commence …
          Depuis 2018 Camille vagabonde entre petite escapade et grand séjour. Une année passée en Nouvelle Zélande et une autre en Australie. Découverte absolument magique, de nouvelles cultures, rencontres magnifiques, de nouveaux paysages, nouvelles couleurs, apprentissage de l’anglais, et la réalisation de nombreux projets picturaux qui y prendront vie, le combleront. Ce voyage fut aussi une belle découverte sur « sois ».
          </div>

          <div className="biography_div">
          Il consacre durant son année en Australie son temps à la création et la recherche dans son travail personnel. Il expérimente avec de nouveaux outils créés artisanalement à partir de pièces recyclées. Pour la couleur, c’est en se baladant dans le bush australien hors des sentiers battus, qu’il trouvera ses propre pigments naturel, des ocres, des rouges, des bruns, du noir et du blanc, comme les utilisent nos frères aborigènes en peinture depuis des millénaires, pour raconter leurs histoires…leur rêves…
          </div>

          <div className="biography_div">
          Sa rencontre avec un de ces peuples Aborigène lui aura littéralement fait ouvrir les yeux sur la vie et la connexion profonde qui nous relie tous ensemble « être vivant spirituel », à notre terre. “Une connexion si intense, vivante et belle, qu'elle marquera à jamais son esprit”
          </div>

          <div className="biography_div">
          Son regard sur le monde, la perception des formes, l’architecture des sujets qu’il dessine et étudie lui devient plus familier. Son travail prend une toute autre dimension . « Les matières, les textures, les couleurs lui parlent d’avantage. Cet artiste touche à tout, expérimente diverses techniques et processus de création artistique . Crayon, fusain, pastel, pigment, acrylique, peinture à l’huile et bien d’autres matériaux comptent parmi ses moyens d’expression.
          </div>

          <div className="biography_div">
          « J’aime étudier le corps humain, les visages, les expressions, complexes parfois et mystérieux… Cela me passionne, me questionne. La nature (végétation, arbres, plantes, nuages, montagnes, roche, eau, feu..) ainsi que les animaux, sont mes sources d’inspirations quotidienne. Elles font comme, partie de moi. »
        </div>
        <div className="biography_footer">
          Allez salut hein ! <br />
          signé l'artiste moderne
        </div>
      </div>
    </div>
  </div>

);

export default Biography;

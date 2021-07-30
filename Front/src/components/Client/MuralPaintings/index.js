// == Import de la lib React
import React from 'react';

// == Imports locaux
import './styles.scss';

const MuralPaintings = () => (
     <div className="Mural_paintings">
        <div className="header_paintings">
          <h1 className="description_header_paintings">Peintures murales</h1>
          <p className="description_header_paintings">Retrouvez mes projets de peintures murales</p>
        </div>

        <div className="content_mural_paintings">
          <div className="image_mural_paintings">
            <span className="img"></span>
            <p className="description_mural_paintings">Nom du projet</p>
          </div>
          <div className="image_mural_paintings">
            <span className="img"></span>
            <p className="description_mural_paintings">Nom du projet</p>
          </div>
          <div className="image_mural_paintings">
            <span className="img"></span>
            <p className="description_mural_paintings">Nom du projet</p>
          </div>
          <div className="image_mural_paintings">
            <span className="img"></span>
            <p className="description_mural_paintings">Nom du projet</p>
          </div>
        </div>
      </div>
    );

// == Export
export default MuralPaintings;

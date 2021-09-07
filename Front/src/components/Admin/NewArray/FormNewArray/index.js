// == Import de la lib React
import React, { useState } from "react";


// == Imports locaux
import './styles.scss';

const formNewArray = () => {

  return (
    <div className="arrayNewForm">
      <div className="arrayNewForm_title">
        Formulaire Actualités
      </div>
      <form className="arrayNewForm_form">
        <div className="arrayNewForm_name">
          Nom de l'article :
          <input className="arrayNewForm_name_input" type="text" />
        </div>
      </form>

      <div className="arrayNewForm_informations">
        
        <form className="arrayNewForm_formOne">
        <div>
          <div className="arrayNewForm_date">
            Date :
          </div>
            <input className="arrayNewForm_date_input" type="text" placeholder="2021" />
        </div>
        </form>

        <form className="arrayNewForm_formTwo">
          <div>
          <div className="arrayNewForm_place">
            Lieu :
          </div>
            <input className="arrayNewForm_place_input" type="text" />
          </div>
        </form>

      </div>
      <form className="arrayNewForm_formThree">
        <div className="arrayNewForm_file">
          <input className="arrayNewForm_file_input" type="file" id="image" name="image" accept="image/png, image/jpeg" />
        </div>

        <div className="arrayNewForm_description">
          Article :
          <textarea className="arrayNewForm_description_input" />
        </div>
      </form>

      <button className="arrayNewForm_ok">Valider</button>
    </div>
  );
};

export default formNewArray;

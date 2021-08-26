// == Import de la lib React
import React, { useState } from "react";
import DatePicker from "react-datepicker";


// == Imports locaux
import './styles.scss';
import "react-datepicker/dist/react-datepicker.css";

const ArrayHomeForm = () => {
  return (
    <div className="arrayHomeForm">
      <div className="arrayHomeForm_title">
        Formulaire accueil
      </div>
      <form className="arrayHomeForm_form">
        <div className="arrayHomeForm_name">
          Nom de la photo d'accueil:
          <input className="arrayHomeForm_name_input" type="text" />
        </div>
      </form>
      <form className="arrayHomeForm_formThree">
        <div className="arrayHomeForm_file">
          <input className="arrayHomeForm_file_input" type="file" id="image" name="image" accept="image/png, image/jpeg" />
        </div>
      </form>

      <button className="arrayHomeForm_ok">Valider</button>
    </div>
  );
};

export default ArrayHomeForm;

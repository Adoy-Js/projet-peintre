// == Import de la lib React
import React, { useState } from "react";
import DatePicker from "react-datepicker";


// == Imports locaux
import './styles.scss';
import "react-datepicker/dist/react-datepicker.css";

const ArrayNewForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="arrayNewForm">
      <div className="arrayNewForm_title">
        Formulaire Actualités
      </div>
      <form className="arrayNewForm_form">
        <div className="arrayNewForm_name">
          Nom de l'oeuvre:
          <input className="arrayNewForm_name_input" type="text" />
        </div>
      </form>

      <div className="arrayNewForm_informations">
        <div className="arrayNewForm_date">
          <div className="arrayNewForm_date_text">
            Date :
          </div>
          <DatePicker className="arrayNewForm_date_input" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <form className="arrayNewForm_formTwo">
          <div className="arrayNewForm_place">
            Lieu:
            <input className="arrayNewForm_place_input" type="text" />
          </div>
        </form>

      </div>
      <form className="arrayNewForm_formThree">
        <div className="arrayNewForm_file">
          <input className="arrayNewForm_file_input" type="file" id="image" name="image" accept="image/png, image/jpeg" />
        </div>

        <div className="arrayNewForm_description">
          Article:
          <input className="arrayNewForm_description_input" type="textarea" />
        </div>
      </form>

      <button className="arrayNewForm_ok">Valider</button>
    </div>
  );
};

export default ArrayNewForm;

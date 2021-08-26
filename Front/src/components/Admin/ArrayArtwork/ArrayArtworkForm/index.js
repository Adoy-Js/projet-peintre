// == Import de la lib React
import React, { useState } from "react";
import DatePicker from "react-datepicker";


// == Imports locaux
import './styles.scss';
import "react-datepicker/dist/react-datepicker.css";

const ArrayArtworkForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="arrayArtworkForm">
      <div className="arrayArtworkForm_title">
        Formulaire oeuvre
      </div>
      <form className="arrayArtworkForm_form">
        <div className="arrayArtworkForm_name">
          Nom de l'oeuvre:
          <input className="arrayArtworkForm_name_input" type="text" />
        </div>
      </form>

      <div className="arrayArtworkForm_informations">
        <div className="arrayArtworkForm_date">
          <div className="arrayArtworkForm_date_text">
            Date :
          </div>
          <DatePicker className="arrayArtworkForm_date_input" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <form className="arrayArtworkForm_formTwo">
          <div className="arrayArtworkForm_format">
            Format de l'oeuvre:
            <input className="arrayArtworkForm_format_input" type="text" placeholder="cm x cm" />
          </div>
          <div className="arrayArtworkForm_place">
            Lieu:
            <input className="arrayArtworkForm_place_input" type="text" />
          </div>
        </form>

        <div className="arrayArtworkForm_category">
          Choisir la catégorie:
          <select className="arrayArtworkForm_category_select">

            <option value="Peinture à l'huile">Peinture à l'huile</option>
            <option value="Peinture acrylique">Peinture acrylique</option>
            <option value="Peinture murale">Peinture murale</option>
            <option value="Portrait">Portrait</option>
          </select>
        </div>

      </div>
      <form className="arrayArtworkForm_formThree">
        <div className="arrayArtworkForm_file">
          <input className="arrayArtworkForm_file_input" type="file" id="image" name="image" accept="image/png, image/jpeg" />
        </div>

        <div className="arrayArtworkForm_description">
          Histoire de l'oeuvre:
          <input className="arrayArtworkForm_description_input" type="textarea" />
        </div>
      </form>

      <button className="arrayArtworkForm_ok">Valider</button>
    </div>
  );
};

export default ArrayArtworkForm;

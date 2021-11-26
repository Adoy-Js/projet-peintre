//Import de la lib React
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
//Import NPM
import PropTypes from "prop-types";
import api from "src/api";
import storage from "src/utils/firebase";

//Import locaux
import "./styles.scss";

const EditFormArtworkArray = ({ isLogged }) => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [oldName, setOldName] = useState("");
  const [date, setDate] = useState(null);
  const [format, setFormat] = useState("");
  const [place, setPlace] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState([]);
  const [numberPicture, setNumberPicture] = useState(null);

  const fetchData = async () => {
    try {
      const response = await api.get(`/admin/artwork/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setName(response.data.name_artwork);
      setOldName(response.data.name_artwork);
      setDate(response.data.date);
      setFormat(response.data.format);
      setPlace(response.data.place);
      setCategoryName(response.data.name_category);
      setDescription(response.data.description);
      setNumberPicture(response.data.image.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let urlArray = [];
      if (images.length) {
        //firebase
        if (categoryName === "mural-painting") {
          let compteur = 1;
          for (const image of images) {
            await storage.ref(`${name}-${compteur}`).put(image);

            // storage.ref(`${oldName}`) &&
            //   (await storage.ref(`${oldName}`).delete());

            const urlImage = await storage
              .ref(`${name}-${compteur}`)
              .getDownloadURL();

            urlArray.push(urlImage);
            compteur++;
          }
        } else {
          await storage.ref(`${name}`).put(images[0]);

          storage.ref(`${oldName}`) &&
            (await storage.ref(`${oldName}`).delete());

          const urlImage = await storage.ref(`${name}`).getDownloadURL();

          urlArray.push(urlImage);
        }
      }

      //BDD
      const response = await api.patch(
        `/admin/artwork/${id}`,
        {
          name_artwork: name,
          date: parseInt(date, 10),
          format: format,
          place: place,
          image: urlArray,
          category_name: categoryName,
          description: description,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      alert(response.data.message);
      e.target.reset();
      setFormat("");
      setPlace("");
      setDescription([]);
      setName("");
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeFile = (e) => {
    setImages([...images, e.target.files[0]]);
    console.log(images);
  };

  const getFileElement = (number) => {
    let content = [];
    for (let index = 0; index < number; index++) {
      content.push(
        <div className="arrayArtworkForm_url" key={index}>
          <input
            onChange={onChangeFile}
            id="image"
            className="arrayArtworkForm_url_input"
            type="file"
          />
        </div>
      );
    }
    return content;
  };

  const onClickAddParagraph = () => {
    let array = [...description];
    array.push("");
    setDescription(array);
  };

  const onClickDeleteParagraph = (e, index) => {
    let array = [...description];
    array.splice(index, 1);
    setDescription(array);
  };

  const onChangeDescription = (e, index) => {
    let array = [...description];
    array[index] = e.target.value;
    setDescription(array);
  };

  return isLogged ? (
    <div className="arrayArtworkForm">
      <div className="arrayArtworkForm_title">Formulaire oeuvre</div>

      <form onSubmit={(e) => handleSubmit(e)} className="arrayArtworkForm_form">
        <div className="arrayArtworkForm_name">
          Nom de l'oeuvre :
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
            className="arrayArtworkForm_name_input"
            type="text"
          />
        </div>

        <div className="arrayArtworkForm_informations">
          <div>
            <div className="arrayArtworkForm_date">Date :</div>
            <input
              onChange={(e) => setDate(e.target.value)}
              id="date"
              className="arrayArtworkForm_date_input"
              type="text"
              placeholder="2021"
              value={date}
            />
          </div>

          <div className="arrayArtworkForm_format">
            Format de l'oeuvre :
            <input
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              id="format"
              className="arrayArtworkForm_format_input"
              type="text"
              placeholder="cm x cm"
            />
          </div>

          <div className="arrayArtworkForm_place">
            Lieu :
            <input
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              id="place"
              className="arrayArtworkForm_place_input"
              type="text"
            />
          </div>

          <div className="arrayArtworkForm_category">
            Choisir la catégorie:
            <select
              className="arrayArtworkForm_category_select"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            >
              <option id="category_name">portrait</option>{" "}
              <option id="category_name">oil-painting</option>
              <option id="category_name">acrylic-painting</option>
              <option id="category_name">mural-painting</option>
            </select>
          </div>
          {categoryName === "mural-painting" && (
            <div className="arrayArtworkForm_numberPicture">
              Choisir le nombre de photo:
              <input
                type="number"
                className="arrayArtworkForm_numberPicture_select"
                value={numberPicture}
                onChange={(e) => setNumberPicture(e.target.value)}
              />
            </div>
          )}
        </div>

        {getFileElement(numberPicture)}
        {categoryName === "mural-painting" &&
          description.map((paragraphe, i) => (
            <div className="arrayArtworkForm_description" key={i}>
              Histoire de l'oeuvre :
              <textarea
                value={paragraphe}
                id="description"
                onChange={(e) => onChangeDescription(e, i)}
                className="arrayArtworkForm_description_input"
              />
              <button
                className="arrayArtworkForm_description_buttonDelete"
                type="button"
                onClick={(e) => onClickDeleteParagraph(e, i)}
                key={i}
              >
                Supprimer le paragraphe
              </button>
            </div>
          ))}
        {categoryName === "mural-painting" && (
          <button
            className="arrayArtworkForm_buttonAddParagraph"
            type="button"
            onClick={onClickAddParagraph}
          >
            Ajouter un paragraphe
          </button>
        )}

        <button type="submit" className="arrayArtworkForm_ok">
          Valider
        </button>
      </form>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

EditFormArtworkArray.propTypes = {
  isLogged: PropTypes.bool,
};

EditFormArtworkArray.defaultProps = {
  isLogged: false,
};

export default EditFormArtworkArray;

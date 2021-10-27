//Import de la lib React
import React, { useEffect, useState } from "react";
import api from "src/api";

// Ajout du composant MenuAdmin
import MenuAdmin from "src/components/Admin/MenuAdmin";

//Import locaux
import "./styles.scss";

const BiographyAdmin = () => {
  const [biography, setBiography] = useState("");
  const [idArtist, setIdArtist] = useState(null);

  const fetchData = async () => {
    try {
      const response = await api.get("/about");
      setBiography(response.data[0].biography);
      setIdArtist(response.data[0].id_artist);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.patch(
        "/admin/biography",
        {
          id_artist: idArtist,
          biography: biography,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="biography">
      <MenuAdmin />
      <h1>Biography</h1>
      <form className="biography_form" onSubmit={handleSubmit}>
        <textarea
          className="biography_form_textarea"
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
        />
        <button className="biography_form_submit" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
};

export default BiographyAdmin;

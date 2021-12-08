const Artist = require("../models/artist");
const Picture = require("../models/picture");

const artistController = {
  getAll: async (req, res, next) => {
    try {
      const results = await Artist.findAll();

      res.json(results);
    } catch (error) {
      console.error(error);
      next();
    }
  },

  getPictureToHome: async (req, res, next) => {
    try {
      const results = await Artist.findPictureToHome();
      res.json(results);
    } catch (error) {
      console.error(error);
      next();
    }
  },

  add: async (req, res, next) => {
    try {
      console.log(req.body);

      //Instenciation et insertion de la nouvelle photo
      const newPicture = new Picture(req.body);

      await newPicture.save();

      res.json({ message: "contenu ajouté !" });
    } catch (error) {
      console.error(error);
      next();
    }
  },

  updateArtist: async (req, res, next) => {
    try {
      const { id_artist, biography } = req.body;

      const artist = await Artist.findOne(id_artist);

      artist.biography = biography;

      await artist.save(1);
      res.json({ message: "contenu modifié" });
    } catch (error) {
      console.error(error);
      next();
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params;
    try {

      Picture.delete(id);

      res.json({ message: "La photo à bien été supprimé" });
    } catch (error) {
      console.error(error);
      next();
    }
  },
};

module.exports = artistController;

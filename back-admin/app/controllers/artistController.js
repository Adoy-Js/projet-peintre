const Artist = require("../models/artist");
const Artist_has_picture = require("../models/artist_has_picture");
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

  update: async (req, res, next) => {
    try {
      const { id } = req.params;

      console.log(id);

      const updatePicture = new Picture(req.body);

      await updatePicture.save(id);
    } catch (error) {
      console.error(error);
      next();
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params;
    try {
      // 1. on retrouve la picture
      const pictureDeleted = await Picture.findOne(id);
      
      pictureDeleted.delete();
      
      res.json({ message: "La photo à bien été supprimé" });
    } catch (error) {
      console.error(error);
      next();
    }
  },
};

module.exports = artistController;

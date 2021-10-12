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

  getOne: async (req, res, next) => {
    const { id } = req.params;

    try {
      const results = await Artist.findOne(id);
      if (results) {
        res.json(results);
      } else {
        next();
      }
    } catch (err) {
      console.error(err);
      next();
    }
  },

  add: async (req, res, next) => {
    try {
      //Instenciation et insertion de la nouvelle photo
      const newPicture = new Picture(req.body);

      const insertPicture = await newPicture.save();

      //Ajout de la relation avec l'artiste dans la table de liaison
      //l'id de lartiste sera toujours 1
      const picture_id = insertPicture.id_picture;

      const new_artist_has_picture = new Artist_has_picture({
        artist_id: 1,
        picture_id,
      });

      new_artist_has_picture.save();

      res.json({message : "contenu ajouté !"})
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
    console.log(id);
    try {
      // 1. on retrouve la picture
      const pictureDeleted = await Picture.findOne(id);
      console.log("result = ", pictureDeleted);
      // 2. on retrouve la ligne correspondante dans artiste_has_picture grace a l'id de la picture
      // const relation_picture = await Artist_has_picture.findByPictureId(id);

      // 3. on supprime tout ça
      //on supprime la relation et non la photo, car elle peut etre utilisée autre part

      pictureDeleted.delete();
      // relation_picture.delete();
      res.json({message : "La photo à bien été supprimé"})
    } catch (error) {
      console.error(error);
      next();
    }
  },
};

module.exports = artistController;

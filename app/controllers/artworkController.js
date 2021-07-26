const Artwork = require("../models/artwork");
const Picture = require("../models/picture");
const Artwork_has_picture = require("../models/artwork_has_picture");

const artworkController = {
  getAllByCategory: async (req, res, next) => {
    const { category } = req.params;

    try {
      const results = await Artwork.findByCategory(category);

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

  getAll: async (req, res, next) => {
    try {
      const results = await Artwork.findAll();

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

  getOne: async (req, res, next) => {
    const { id } = req.params;

    try {
      const results = await Artwork.findOne(id);
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

  getAllPaintings: async (req, res, next) => {
    try {
      const results = await Artwork.findAllPaintings();

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

  addArtwork: async (req, res, next) => {
    try {
      //Instanciation et insertion du nouvel artwork
      const newArtwork = new Artwork({
        name_artwork: req.body.name_artwork,
        date: req.body.date,
        place: req.body.place,
        height: req.body.height,
        width: req.body.width,
        support: req.body.support,
        category_id: req.body.category_id,
        artist_id: req.body.artist_id,
      });

      const insert_artwork = await newArtwork.save();

      //Instanciation et insertion de la nouvelle picture lié à l'artwork
      const newPicture = new Picture({
        name_picture: req.body.name_picture,
        image: req.body.image,
        description: req.body.description,
      });

      const insert_picture = await newPicture.save();

      //Instanciation dans la table de liaison
      const artwork_id = insert_artwork.id_artwork;
      const picture_id = insert_picture.id_picture;
      console.log(artwork_id, picture_id);
      const new_artwork_has_picture = new Artwork_has_picture({
        artwork_id,
        picture_id,
      });

      console.log(new_artwork_has_picture);

      await new_artwork_has_picture.save();
    } catch (error) {
      console.error(error);
      next();
    }
  },

  updateArtwork: async (req, res, next) => {
    try {
      const { id } = req.params;

      //on instancie le nouvel artwork et on l'insert en bdd
      const update_artwork = new Artwork({
        name_artwork: req.body.name_artwork,
        date: req.body.date,
        place: req.body.place,
        height: req.body.height,
        width: req.body.width,
        support: req.body.support,
        category_id: req.body.category_id,
        artist_id: req.body.artist_id,
      });

      const insert_artwork = update_artwork.save(id);

      //si l'admin modifie la photo
      if (req.body.name_picture && req.body.image && req.body.description) {
        //on instancie et insert la nouvelle photo
        const update_picture = new Picture({
          name_picture: req.body.name_picture,
          image: req.body.image,
          description: req.body.description,
        });
        //pour l'update, on a besoin de son id, on va le trouver dans la table de liaison
        const picture_associate = await Artwork_has_picture.findByArtworkId(id);
        const insert_picture = update_picture.save(picture_associate.id);
      }
    } catch (error) {
      console.error(error);
      next();
    }
  },

  deleteArtwork: async (req, res, next) => {
    const { id } = req.params;

    try {
      // 1. on retrouve l'artwork
      const artworkDeleted = await Artwork.findOne(id);

      // 2. on retrouve la ligne correspondante dans artwork_has_picture grace a l'id de la news
      // const relation_picture = await Artwork_has_picture.findByArtworkId(id);

      // 3. on supprime tout ça
      //on supprime la relation et non la photo, car elle peut etre utilisée autre part
      // relation_picture.delete();
     
      await Artwork.delete(artworkDeleted.id_artwork);
    } catch (error) {
      console.error(error);
      next();
    }
  },
};

module.exports = artworkController;

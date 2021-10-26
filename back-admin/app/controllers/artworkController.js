const Artwork = require("../models/artwork");
const Picture = require("../models/picture");
const Category = require("../models/category");
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
    console.log(req.body);
    try {
      const result = await Category.findIdByName(req.body.category_name);
      const id_category = result.id_category;
      //si on veut ajouter une peinture murale, alors on reçoit plusieurs images et une image principale.
      if (req.body.category_name === "mural-painting") {
        //Instanciation et insertion du nouvel artwork
        const newArtwork = new Artwork({
          name_artwork: req.body.name_artwork,
          date: req.body.date,
          place: req.body.place,
          format: req.body.format,
          description: req.body.description,
          category_id: id_category,
          main_picture: req.body.image[0],
        });

        const insert_artwork = await newArtwork.save();
        //on parcourt le tableau d'image afin de toutes les insérer en base
        for (const image of req.body.image) {
          let compteur = 1;
          //Instanciation et insertion de la nouvelle picture lié à l'artwork
          const newPicture = new Picture({
            name_picture: req.body.name_artwork + "-" + compteur,
            image: image,
            artwork_id: insert_artwork.id_artwork,
          });

          await newPicture.save();

          compteur++;
        }
        //Pour tout ajout d'une oeuvre autre qu'une peinture murale
      } else {
        //Instanciation et insertion du nouvel artwork
        const newArtwork = new Artwork({
          name_artwork: req.body.name_artwork,
          date: req.body.date,
          place: req.body.place,
          format: req.body.format,
          category_id: id_category,
        });

        const insertArtwork = await newArtwork.save();

        //Instanciation et insertion de la nouvelle picture lié à l'artwork
        
        const newPicture = new Picture({
          name_picture: req.body.name_artwork,
          image: req.body.image[0],
          artwork_id: insertArtwork.id_artwork,
        });

        await newPicture.save();
      }

      res.json({ message: "contenu ajouté !" });
    } catch (error) {
      console.error(error);
      next();
    }
  },

  deleteArtwork: async (req, res, next) => {
    const { id } = req.params;
    try {
      await Artwork.delete(id);
      res.json({ message: "Oeuvre supprimée" });
    } catch (error) {
      console.error(error);
      next();
    }
  },
};

module.exports = artworkController;

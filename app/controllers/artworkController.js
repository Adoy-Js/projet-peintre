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
    try {
      const result = await Category.findIdByName(req.body.category_name);
      const id_category = result.id_category;
      console.log(id_category);
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
          artist_id: req.body.artist_id,
        });

        const insert_artwork = await newArtwork.save();
        //on parcourt le tableau d'image afin de toutes les insérer en base
        for (const image of req.body.image) {
          //Instanciation et insertion de la nouvelle picture lié à l'artwork
          const newPicture = new Picture({
            image: image,
          });

          const insert_picture = await newPicture.save();

          //la 1ere image du tableau sera la main_picture
          if (image === req.body.image[0]) {
            // const newArtwork = new Artwork({
            //   name_artwork: req.body.name_artwork,
            //   date: req.body.date,
            //   place: req.body.place,
            //   format: req.body.format,
            //   description: req.body.description,
            //   main_picture : image,
            //   category_id: req.body.category_id,
            //   artist_id: req.body.artist_id,
            // });

            // await newArtwork.save(insert_artwork.id_artwork);
            newArtwork.main_picture = image;
            await newArtwork.save(insert_artwork.id_artwork);
          }

          //Instanciation dans la table de liaison
          const artwork_id = insert_artwork.id_artwork;
          const picture_id = insert_picture.id_picture;
          console.log(artwork_id, picture_id);
          const new_artwork_has_picture = new Artwork_has_picture({
            artwork_id,
            picture_id,
          });

          await new_artwork_has_picture.save();
        }
        //Pour tout ajout d'une oeuvre autre qu'une peinture murale
      } else {
        //Instanciation et insertion du nouvel artwork
        const newArtwork = new Artwork({
          name_artwork: req.body.name_artwork,
          date: req.body.date,
          place: req.body.place,
          format: req.body.format,
          description: req.body.description,
          category_id: id_category,
          artist_id: req.body.artist_id,
        });

        const insert_artwork = await newArtwork.save();

        //Instanciation et insertion de la nouvelle picture lié à l'artwork
        const newPicture = new Picture({
          name_picture: req.body.name_picture,
          image: req.body.image,
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

        await new_artwork_has_picture.save();
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

const Artwork = require("../models/artwork");

const artworkController = {
  getAll: async (req, res, next) => {
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
};

module.exports = artworkController;

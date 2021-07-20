const Artwork = require("../models/artwork");

const artworkController = {
  getAll: async (_, res, next) => {
    try {
      const results = await Artwork.findAll();

      if (results) {
        res.json(results)
      } else {
        next();
      }
    } catch (err) {
      console.error(err);
      next();
    }
  },
};

module.exports = newsController;
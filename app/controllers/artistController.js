const Artist = require("../models/artist");

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
};

module.exports = artistController;

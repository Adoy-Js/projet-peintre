const News = require("../models/news");

const newsController = {
  getAll: async (_, res, next) => {
    try {
      const results = await News.findAll();

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

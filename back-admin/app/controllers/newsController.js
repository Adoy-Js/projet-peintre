const News = require("../models/news");

const newsController = {
  getAll: async (_, res, next) => {
    try {
      const results = await News.findAll();

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

  addNews: async (req, res, next) => {
    // const {news:{date, place, description}, picture:{name, image, description}} = req.body;
    //   const { id } = req.user;
    //   if (id !== 1) {
    //       return res.sendStatus(403);
    //   }
    //   const news = req.body;
    //   books.push(news);
    //   res.send('Book added successfully');
  },
};

module.exports = newsController;

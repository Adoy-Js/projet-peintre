const News = require("../models/news");
const Picture = require("../models/picture");
const News_has_picture = require("../models/news_has_picture");

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

  getOne: async (req, res, next)=> {
    const { id } = req.params;

    try {
      const results = await News.findOne(id);
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
    try {
      // on instancie la nouvelle actu
      const newNews = new News({
        date: req.body.date,
        place: req.body.place,
        article: req.body.article,
      });

      // on l'insert dans la base
      const insertNews = await newNews.save();
      console.log(insertNews);
      //si l'actu est accompagnée d'une photo, alors on instancie la photo, on l'insert dans la base
      if (req.body.name_picture || req.body.image || req.body.description) {
        const newPicture = new Picture({
          name_picture: req.body.name_picture,
          image: req.body.image
        });

        const insertPicture = await newPicture.save();

        const news_id = insertNews.id_news;
        const picture_id = insertPicture.id_picture;

        //on insert la relation entre l'actu et la photo dans la table de liaison
        console.log(news_id);
        const new_news_has_picture = new News_has_picture({
          news_id,
          picture_id,
        });

        const insertNews_has_picture = await new_news_has_picture.save();
      }
    } catch (error) {
      console.error(error);
      next();
    }
  },

  updateNews: async (req, res, next) => {
    try {

      const id_news = req.params.id;

      // on instancie la nouvelle actu
      const newNews = new News({
        date: req.body.date,
        place: req.body.place,
        article: req.body.article,
      });

      // on l'insert dans la base
      const insertNews = await newNews.save(id_news);

      //si l'actu est accompagnée d'une photo, alors on instancie la photo, on l'insert dans la base
      if (req.body.name_picture || req.body.image || req.body.description) {
        const newPicture = new Picture({
          name_picture: req.body.name_picture,
          image: req.body.image
        });

        //on la retrouve (ou non) grace a l'id de la news et a la table de liaison
        const picture_associate = await News_has_picture.findByNewsId(id_news);

        console.log(picture_associate);

        //si il y'avait une photo avant l'update
        if(picture_associate){
          const insertPicture = await newPicture.save(picture_associate.picture_id);
        //pas de photo avant l'update
        }else{
          const insertPicture = await newPicture.save();
          const new_news_has_picture = new News_has_picture({
            news_id : id_news,
            picture_id : insertPicture.id_picture,
          });
  
          const insertNews_has_picture = await new_news_has_picture.save();
        }

        
      //et si il update sans photo
      }else{
        const picture_associate = await News_has_picture.findByNewsId(id_news);
        //si y'avait une photo avant l'update
        if(picture_associate){
          News_has_picture.delete(picture_associate.id_news_has_picture);
        }
      }

    } catch (error) {
      console.error(error);
      next();
    }
  },

  deleteNews: async (req, res, next) => {
    const { id } = req.params;

    try {
      // 1. on retrouve la news
      const newsDeleted = await News.findOne(id);
      // 2. on retrouve la ligne correspondante dans news_has_picture grace a l'id de la news
      // const relation_picture = await News_has_picture.findByNewsId(id);

      // 3. on supprime tout ça
      //on supprime la relation et non la photo, car elle peut etre utilisée autre part
      // relation_picture.delete();
      newsDeleted.delete();

    } catch (error) {
      console.error(error);
      next();
    }
  },
};

module.exports = newsController;

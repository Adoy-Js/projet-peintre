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

  add: async (req, res, next) => {
    console.log("je suis dans le controller pour ajouter une photo de l'artiste");
    try {
      //Instenciation et insertion de la nouvelle photo
      const newPicture = new Picture(req.body);

      const insertPicture = await newPicture.save();

      console.log("photo inséré en base");

      //Ajout de la relation avec l'artiste dans la table de liaison
      //l'id de lartiste sera toujours 1
      const artist_id = 1;
      const picture_id = insertPicture.id_picture;
      console.log(insertPicture);
      console.log(`id de la picture : ${picture_id}`);
      const new_artist_has_picture = new Artist_has_picture({
        artist_id: 1,
        picture_id
      });

      new_artist_has_picture.save();

      console.log("relation artiste=>photo inséré en base");
    } catch (error) {
      console.error(error);
      next();
    }
  },

  update:async(res, req, next)=>{
    try {

      const {id} = req.params;

      const updatePicture = new Picture(req.body);

      const results = await updatePicture.save(id)

      
    } catch (error) {
      console.error(error);
      next();
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params;

    try {
      // 1. on retrouve la picture
      const pictureDeleted = await Picture.findOne(id);

      // 2. on retrouve la ligne correspondante dans artiste_has_picture grace a l'id de la picture
      const relation_picture = await Artist_has_picture.findByPictureId(id);

      // 3. on supprime tout ça
      //on supprime la relation et non la photo, car elle peut etre utilisée autre part
      relation_picture.delete();
      pictureDeleted.delete();
    } catch (error) {
      console.error(err);
      next();
    }
  },
};

module.exports = artistController;

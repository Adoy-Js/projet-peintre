const { Router } = require("express");

const router = Router();

const artworkController = require('./controllers/artworkController.js')
const newsController = require ('./controllers/newsController')



//Artwork

router.get('/artwork/:category', artworkController.getAll);
router.get('/artwork/:category/:id', artworkController.getOne);

//News

router.get('/news', newsController.getAll);


//Artist

//router.get('/about', artistController.getBiography);


module.exports = router;
const { Router } = require("express");

const router = Router();

const artworkController = require("./controllers/artworkController.js");
const newsController = require("./controllers/newsController");
const artistController = require("./controllers/artistController");
const adminController = require('./controllers/adminController') 

//Artwork

router.get('/artwork', artworkController.getAll);

router.get("/artwork/:category", artworkController.getAllByCategory);
router.get("/artwork/:category/:id", artworkController.getOne);
router.get('/artwork/paintings', artworkController.getAllPaintings);

//News

router.get("/news", newsController.getAll);

//Artist

router.get("/about", artistController.getAll);



//Admin

router.post('/admin', adminController.login)

router.get('/admin/artwork', artworkController.getAll)

// router.get('/admin/artwork/:category', adminController.isAdmin, artworkController.getAllByCategory);


module.exports = router;
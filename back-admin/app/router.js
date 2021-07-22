const { Router } = require("express");

const router = Router();

const artworkController = require("./controllers/artworkController.js");
const newsController = require("./controllers/newsController");
const artistController = require("./controllers/artistController");
const adminController = require('./controllers/adminController') 

/*     CLIENT       */

//Artwork

router.get('/artwork', artworkController.getAll);

router.get("/artwork/:category", artworkController.getAllByCategory);
router.get("/artwork/:category/:id", artworkController.getOne);
router.get('/artwork/paintings', artworkController.getAllPaintings);

//News

router.get("/news", newsController.getAll);

//Artist

router.get("/about", artistController.getAll);



/*        ADMIN          */

router.post('/admin', adminController.login)

//Artwork

router.get('/admin/artwork', adminController.isAdmin, artworkController.getAll)
// router.get('/admin/artwork/:category', adminController.isAdmin, artworkController.getAllByCategory);
// router.post('/admin/artwork/:category', adminController.isAdmin, artworkController.addArtwork);
// router.delete('/admin/artwork/:category/:id', adminController.isAdmin, artworkController.deleteArtwork);
// router.patch('/admin/artwork/:category/:id', adminController.isAdmin, artworkController.updateArtwork);

//News

// router.get('/admin/news', adminController.isAdmin, newsController.getAll);
// router.post('/admin/news', adminController.isAdmin, newsController.addNews);
// router.delete('/admin/news/:id', adminController.isAdmin, newsController.deleteNews);
// router.patch('/admin/news/:id', adminController.isAdmin, newsController.updateNews);



module.exports = router;
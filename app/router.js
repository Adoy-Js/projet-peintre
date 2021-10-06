const { Router } = require("express");

const router = Router();

//CONTROLLER

const artworkController = require("./controllers/artworkController.js");
const newsController = require("./controllers/newsController");
const artistController = require("./controllers/artistController");
const adminController = require("./controllers/adminController");
const contactController = require("./controllers/contactController");

/*     CLIENT       */

//Accueil
router.get("/", artistController.getAll);

//Artwork

router.get("/artwork/painting", artworkController.getAllPaintings);
router.get("/artwork/:category", artworkController.getAllByCategory);
router.get("/artwork/mural-painting/:id", artworkController.getOne);

//News

router.get("/news", newsController.getAll);

//Artist

router.get("/about", artistController.getAll);


//Contact

router.post("/contact", contactController.sendMessage);

/*        ADMIN          */

router.post("/newAdmin", adminController.addAdmin);
router.post("/admin", adminController.login);

//Artist Picture for home

router.get("/admin/home", adminController.isAdmin, artistController.getAll);
router.get("/admin/home/:id", adminController.isAdmin, artistController.getOne);
router.post("/admin/home", adminController.isAdmin, artistController.add);
router.delete(
  "/admin/home/:id",
  adminController.isAdmin,
  artistController.delete
);
router.patch(
  "/admin/home/:id",
  adminController.isAdmin,
  artistController.update
);

//Artwork

router.get("/admin/artwork", /*adminController.isAdmin,*/ artworkController.getAll);
router.get(
  "/admin/artwork/:id",
  adminController.isAdmin,
  artworkController.getOne
);
router.post(
  "/admin/artwork",
  adminController.isAdmin,
  artworkController.addArtwork
);
router.delete(
  "/admin/artwork/:id",
  adminController.isAdmin,
  artworkController.deleteArtwork
);
router.patch(
  "/admin/artwork/:id",
  adminController.isAdmin,
  artworkController.updateArtwork
);

//News

router.get("/admin/news", adminController.isAdmin, newsController.getAll);
router.get("/admin/news/:id", adminController.isAdmin, newsController.getOne);
router.post("/admin/news", adminController.isAdmin, newsController.addNews);
router.delete(
  "/admin/news/:id",
  adminController.isAdmin,
  newsController.deleteNews
);
router.patch(
  "/admin/news/:id",
  adminController.isAdmin,
  newsController.updateNews
);

module.exports = router;

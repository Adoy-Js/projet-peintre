const { Router } = require("express");

const router = Router();

const newsController = require('./controllers/newsController')

router.get('/news', newsController.getAll)

module.exports = router;
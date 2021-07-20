const { Router } = require("express");

const router = Router();

const sketchController = require('./controllers/sketchController')
const portraitController = require('./controllers/portraitController')
const paintingController = require('./controllers/paintingController')
const muralController = require('./controllers/muralController')
const newsController = require('./controllers/newsController');


//Sketch
router.get('/sketches', sketchController.getAll);
router.get('sketches/:id', sketchController.getOne);

router.post('/sketches', sketchController.add);

router.put('/sketches/:id', sketchController.update);

router.delete('/sketches/:id', sketchController.delete);

//Portrait
router.get('/portraits', portraitController.getAll);
router.get('/portraits/:id', portraitController.getOne);

router.post('/portraits', portraitController.add);

router.put('/portraits/:id', portraitController.update);

router.delete('/portraits/:id', portraitController.delete);

//Peinture 

router.get('/paintings', paintingController.getAll);
router.get('/paintings/:id', paintingController.getOne);
router.get('paintings/:category', paintingController.getByCategory);

router.post('/paintings', paintingController.add);

router.put('/paintings/:id', paintingController.update);

router.delete('/paintings/:id', paintingController.delete);

//Mural

router.get('/mural-paintings', muralController.getAll);
router.get('/mural-paintings/:id', muralController.getOne);

router.post('/mural-paintings', muralController.add);

router.put('/mural-paintings/:id', muralController.update);

router.delete('/mural-paintings/:id', muralController.delete);


//News
router.get('/news', newsController.getAll);
router.get('/news/:id', newsController.getOne);

router.post('/news', newsController.add);

router.put('/news/:id', newsController.update);

router.delete('/news/:id', newsController.delete);



module.exports = router;
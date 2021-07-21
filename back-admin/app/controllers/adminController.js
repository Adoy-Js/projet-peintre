const Artist = require("../models/artist");
const bcrypt = require("bcrypt");
const jwtMiddleware = require("../middleware/jwt");

const adminController = {
  login: async (req, res, next) => {

    console.log("je suis dans admincontroller");

    const submittedEmail = req.body.mail;
    const submittedPassword = req.body.password;

    if (submittedEmail == null ||  submittedPassword == null) {
      return res.status(400).json({ 'error': 'missing parameters' });
    }

    const artistFounded = await Artist.findByMail(submittedEmail);
    console.log(artistFounded);
    const storedPassword = artistFounded.password;

    if (submittedPassword === storedPassword) {
      const token = await jwtMiddleware.generateToken(artistFounded)
      console.log(token);
      res.json({
        'userId' : artistFounded.id_artist,
        'token': token
      });
      next();
    }
    else{
      return res.status(400).json({ 'error': 'bad parameters' });
    }
  },

  // isAdmin: async(req, res, next)=>{

  // }
};

module.exports = adminController;

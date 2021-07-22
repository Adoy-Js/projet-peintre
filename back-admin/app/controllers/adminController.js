const Artist = require("../models/artist");
const bcrypt = require("bcrypt");
const jwtMiddleware = require("../middleware/jwt");
const jwt = require('jsonwebtoken');

const adminController = {
  login: async (req, res, next) => {
    console.log("je suis dans admincontroller");

    const { mail, password } = req.body;

    if (mail == null || password == null) {
      return res.status(400).json({ error: "missing parameters" });
    }

    const artistFounded = await Artist.findByMail(mail);

    const storedPassword = artistFounded.password;

    if (password === storedPassword) {
      const token = await jwtMiddleware.generateToken(artistFounded);
      console.log(token);
      res.json({
        userId: artistFounded.id_artist,
        token: token,
      });
      //res.redirect('/admin/artwork');
    } else {
      return res.status(400).json({ error: "bad parameters" });
    }
  },

  isAdmin: async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, jwtMiddleware.JWT_SIGN_SECRET, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }
          req.user = user;
          next();
          console.log('tout sest bien passé');
      });
  } else {
      res.sendStatus(401);
  }
  },
};

module.exports = adminController;
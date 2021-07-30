const Artist = require("../models/artist");
const bcrypt = require("bcrypt");
const jwtMiddleware = require("../service/jwt");
const jwt = require("jsonwebtoken");

const adminController = {
  login: async (req, res, next) => {
    console.log("je suis dans admincontroller");
    const password = req.body.password;
    const email = req.body.email;

    if (email == null || password == null) {
      return res.status(400).json({ error: "missing parameters" });
    }

    const artistFounded = await Artist.findByMail(email);
    if (artistFounded) {
      console.log(artistFounded);
    }
    
    const storedPassword = artistFounded.password;

    if (password === storedPassword) {
      const token = await jwtMiddleware.generateToken(artistFounded);
      console.log(token);
      res.json({
        userId: artistFounded.id_artist,
        token: token,
      });
      // res.redirect('/admin/artwork');
    } else {
      return res.status(400).json({ error: "bad parameters" });
    }
  },

  isAdmin: async (req, res, next) => {
    console.log("je suis dans isAdmin");
    //next();
    const authHeader = req.headers.Authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, jwtMiddleware.JWT_SIGN_SECRET, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        } else {
          console.log("ça s est bien passé");
          req.user = user;
          next();
        }
      });
    }
  },
};

module.exports = adminController;
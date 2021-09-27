const Artist = require("../models/artist");
const bcrypt = require("bcrypt");
const jwtService = require("../service/jwt");
const jwt = require("jsonwebtoken");

const adminController = {
  addAdmin: async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const salt = 10;

    try {
      bcrypt.hash(password, salt, async function (err, hash) {
        await Artist.save(email, hash);
      });
    } catch (error) {
      console.log(error);
    }
  },

  login: async (req, res, next) => {
    console.log("je suis dans admincontroller");
    const password = req.body.password;
    const email = req.body.email;

    try {
      if (email == null || password == null) {
        return res.status(400).json({ error: "missing parameters" });
      }

      const artistFounded = await Artist.findByMail(email);
      if (artistFounded) {
        console.log(artistFounded);
      }

      if (email !== artistFounded.email) {
        throw new Error("Email faux");
      }

      const compare = await bcrypt.compare(password, artistFounded.password);

      if (compare) {
        res.json({
          userId: artistFounded.id_artist,
          token: jwtService.generateToken(artistFounded),
        });
      } else {
        throw new Error("Mot de passe faux");
      }
    } catch (error) {
      console.log(error);
    }
  },

  isAdmin: async (req, res, next) => {
    
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];
    if (!token) {
      console.log("pas de token");
      res.sendStatus(401);
    } else {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          console.log("mauvais token");
          return res.sendStatus(401);
        } else {
          console.log("bon token");
          req.user = user;
          next();
        }
      });
    }
  },
};

module.exports = adminController;

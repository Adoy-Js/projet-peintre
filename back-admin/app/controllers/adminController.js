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
    const password = req.body.password;
    const email = req.body.email;

    try {
      if (email == null || password == null) {
        return res.json({ error: "remplissez tous les champs" });
      }

      if (email !== process.env.MAIL) {
        return res.json({ error: "email faux" });
      }

      const artistFounded = await Artist.findByMail(email);

      const compare = await bcrypt.compare(password, artistFounded.password);

      if (compare) {
        res.json({
          userId: artistFounded.id_artist,
          token: jwtService.generateToken(artistFounded),
        });
      } else {
        return res.json({ error: "mot de passe faux" });
      }
    } catch (error) {
      console.log(error);
    }
  },

  isAdmin: async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];
    if (!token) {
      res.sendStatus(401);
    } else {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.sendStatus(401);
        } else {
          req.user = user;
          next();
        }
      });
    }
  },
};

module.exports = adminController;

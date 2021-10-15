const jwt = require("jsonwebtoken");

module.exports = {
  generateToken: (artistData) => {
    return jwt.sign(
      {
        id: artistData.id_artist,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );
  },
};
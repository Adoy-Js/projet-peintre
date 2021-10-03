const db = require("../db");

class NoArtistError extends Error {
  constructor(id) {
    super(`No artist found with id ${id}`);
  }
}

class Artist {
  //on référence l'erreur custom en tant que propriété statique du modèle pour pouvoir tester la class d'une erreur dans le contrôleur sans avoir à importer la classe de l'erreur
  NoArtistError = NoArtistError;

  constructor(data = {}) {
    for (const prop in data) {
      this[prop] = data[prop];
    }
  }

  static async save(email, password) {
    try {
      const sqlQuery = {
        text: "INSERT INTO artist(email, password) VALUES ($1,$2) RETURNING id_artist;",
        values: [email, password],
      };

      const { rows } = await db.query(sqlQuery);

      return rows[0];
    } catch (err) {
      console.error(err);
      if (err.detail) {
        throw new Error(err.detail);
      } else {
        throw err;
      }
    }
  }

  static async findAll() {
    try {
      const { rows } = await db.query(
        "SELECT id_artist, id_picture, name_picture, array_agg(image) as image FROM artist JOIN artist_has_picture ON artist_has_picture.artist_id = artist.id_artist JOIN picture ON picture.id_picture = artist_has_picture.picture_id GROUP BY id_artist, id_picture"
      );

      return rows.map((row) => new Artist(row));
    } catch (error) {
      if (error.detail) {
        throw new Error(error.detail);
      } else {
        throw error;
      }
    }
  }

  static async findOne(id) {
    try {
      const sqlQuery = {
        text: "SELECT * FROM picture WHERE id_picture = $1;",
        values: [id],
      };

      const { rows } = await db.query(sqlQuery);

      return rows[0] ? new this(rows[0]) : new Error("not found");
    } catch (err) {
      console.error(err);
      if (err.detail) {
        throw new Error(err.detail);
      } else {
        throw err;
      }
    }
  }

  static async findByMail(mail) {
    try {
      const query = {
        text: `SELECT * from artist WHERE email = $1`,
        values: [mail],
      };
      const { rows } = await db.query(query);

      return new Artist(rows[0]);
    } catch (err) {
      console.error(err);
      if (err.detail) {
        throw new Error(err.detail);
      } else {
        throw err;
      }
    }
  }
}

module.exports = Artist;

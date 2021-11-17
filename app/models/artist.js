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

  async save(id = null) {
    try {
      let sqlQuery;

      if (id) {
        sqlQuery = {
          text: "UPDATE artist SET email=$1, password=$2, biography=$3 WHERE id_artist=$4;",
          values: [this.email, this.password, this.biography, id],
        };
      } else {
        sqlQuery = {
          text: "INSERT INTO artist(email, password, biography) VALUES ($1,$2,$3) RETURNING id_artist;",
          values: [this.email, this.password, this.biography],
        };
      }

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
        "SELECT id_artist, biography, id_picture, name_picture, array_agg(image) as image FROM artist LEFT JOIN picture ON picture.artist_id = artist.id_artist GROUP BY id_artist, id_picture"
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

  static async findPictureToHome() {
    try {
      const { rows } = await db.query(
        "SELECT id_picture, name_picture, image FROM picture WHERE artist_id IS NOT NULL;"
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
        text: "SELECT * FROM artist WHERE id_artist = $1;",
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

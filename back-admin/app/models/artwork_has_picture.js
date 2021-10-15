const pool = require("../db");

class Artwork_has_picture {
  constructor(obj = {}) {
    for (const prop in obj) {
      this[prop] = obj[prop];
    }
  }

  static async findByArtworkId(artwork_id) {
    try {
      const sqlQuery = {
        text: "SELECT * FROM artwork_has_picture WHERE artwork_id = $1;",
        values: [artwork_id],
      };

      const { rows } = await pool.query(sqlQuery);
      if (rows) {
        return rows ? rows.map((row) => new this(row)) : false;
      } else {
        return false;
      }
    } catch (err) {
      console.error(err);
      if (err.detail) {
        throw new Error(err.detail);
      } else {
        throw err;
      }
    }
  }

  async save(id = null) {
    try {
      let sqlQuery;

      sqlQuery = {
        text: "INSERT INTO artwork_has_picture (artwork_id, picture_id) VALUES ($1,$2) RETURNING id_artwork_has_picture;",
        values: [this.artwork_id, this.picture_id],
      };

      const { rows } = await pool.query(sqlQuery);

      this.id = rows[0].id;

      return rows ? true : false;
    } catch (err) {
      console.error(err);
      if (err.detail) {
        throw new Error(err.detail);
      } else {
        throw err;
      }
    }
  }

  async delete(id) {
    try {
      let sqlQuery;

      sqlQuery = {
        text: "DELETE FROM artwork_has_picture WHERE id=$1",
        values: [id],
      };
    } catch (error) {
      console.error(err);
      if (err.detail) {
        throw new Error(err.detail);
      } else {
        throw err;
      }
    }
  }
}

module.exports = Artwork_has_picture;
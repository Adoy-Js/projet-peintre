const pool = require("../db");

class Artist_has_picture {
  constructor(obj = {}) {
    for (const prop in obj) {
      this[prop] = obj[prop];
    }
  }

  static async findByPictureId(picture_id) {
    try {
      const sqlQuery = {
        text: "SELECT * FROM artist_has_picture WHERE id_picture = $1;",
        values: [picture_id],
      };

      if (rows) {
        const { rows } = await pool.query(sqlQuery);

        return rows[0] ? new this(rows[0]) : new Error("not found");
      }else{
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
        text: "INSERT INTO artiste_has_picture (artist_id, picture_id) VALUES ($1,$2) RETURNING id;",
        values: [this.artist_id, this.picture_id],
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
        text: "DELETE FROM news_has_picture WHERE id=$1",
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

module.exports = Artist_has_picture;

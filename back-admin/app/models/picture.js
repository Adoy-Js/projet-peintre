const pool = require("../db");

class Picture {
  constructor(obj = {}) {
    for (const prop in obj) {
      this[prop] = obj[prop];
    }
  }

  static async findOne(id) {
    console.log(id);
    try {
      const sqlQuery = {
        text: "SELECT * FROM picture WHERE id_picture=$1;",
        values: [id],
      };

      const { rows } = await pool.query(sqlQuery);
      const result = new Picture(rows[0]);
      return new Picture(rows[0]);
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

      if (id) {
        sqlQuery = {
          text: "UPDATE picture SET name_picture = $1, image = $2 WHERE id_picture = $3",
          values: [this.name_picture, this.image, id],
        };
      } else {
        sqlQuery = {
          text: "INSERT INTO picture(name_picture, image, artwork_id, artist_id, news_id) VALUES ($1,$2,$3,$4,$5) RETURNING id_picture;",
          values: [this.name_picture, this.image, this.artwork_id, this.artist_id, this.news_id],
        };
      }
      const { rows } = await pool.query(sqlQuery);
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

  async delete() {
    try {
      const id = this.id_picture;
      const sqlQuery = {
        text: "DELETE FROM picture WHERE id_picture = $1",
        values: [id],
      };
      await pool.query(sqlQuery);
      return true;
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

module.exports = Picture;
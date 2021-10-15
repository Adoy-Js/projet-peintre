const pool = require("../db");

class News_has_picture {
  constructor(obj = {}) {
    for (const prop in obj) {
      this[prop] = obj[prop];
    }
  }

  static async findByNewsId(news_id) {
    try {
      const sqlQuery = {
        text: "SELECT * FROM news_has_picture WHERE news_id = $1;",
        values: [news_id],
      };

      const { rows } = await pool.query(sqlQuery);

      if (rows) {
        return rows[0];
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
        text: "INSERT INTO news_has_picture (news_id, picture_id) VALUES ($1,$2) RETURNING id_news_has_picture;",
        values: [this.news_id, this.picture_id],
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

  static async delete(id) {
    try {
      let sqlQuery;

      sqlQuery = {
        text: "DELETE FROM news_has_picture WHERE id_news_has_picture=$1",
        values: [id],
      };

      const { rows } = await pool.query(sqlQuery);
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

module.exports = News_has_picture;
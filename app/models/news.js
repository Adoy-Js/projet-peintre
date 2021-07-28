const pool = require("../db");

class News {
  constructor(obj = {}) {
    for (const prop in obj) {
      this[prop] = obj[prop];
    }
  }

  static async findAll() {
    try {
      const sqlQuery =
        "SELECT * FROM news FULL JOIN news_has_picture ON news_has_picture.news_id = news.id_news FULL JOIN picture ON picture.id_picture = news_has_picture.picture_id;";

      const { rows } = await pool.query(sqlQuery);

      console.log(rows);

      const results = rows.filter((row) => row.id_news !== null);

      return results ? results.map((row) => new this(row)) : false;
    } catch (err) {
      console.error(err);
      if (err.detail) {
        throw new Error(err.detail);
      } else {
        throw err;
      }
    }
  }

  static async findOne(id) {
    try {
      const sqlQuery = {
        text: "SELECT * FROM news WHERE id_news = $1;",
        values: [id],
      };

      const { rows } = await pool.query(sqlQuery);

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

  async save(id = null) {
    try {
      let sqlQuery;

      if (id) {
        sqlQuery = {
          text: "UPDATE news SET date = $1, place = $2, article = $3 WHERE id_news = $4",
          values: [this.date, this.place, this.article, id],
        };
      } else {
        sqlQuery = {
          text: "INSERT INTO news(date, place, article) VALUES ($1,$2,$3) RETURNING id_news;",
          values: [this.date, this.place, this.article],
        };
      }

      const { rows } = await pool.query(sqlQuery);

      this.id_news = rows[0].id_news;

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
      let sqlQuery;

      sqlQuery = {
        text: "DELETE FROM news WHERE id_news=$1",
        values: [this.id_news],
      };
      const { rows } = await pool.query(sqlQuery);
      return true;
    } catch (error) {
      console.error(error);
      if (error.detail) {
        throw new Error(error.detail);
      } else {
        throw error;
      }
    }
  }
}

module.exports = News;

const pool = require("../db");

class News_has_picture {
  constructor(obj = {}) {
    for (const prop in obj) {
      this[prop] = obj[prop];
    }
  }

  // static async findByNewsId(news_id) {
  //   try {
  //     const sqlQuery = {
  //       text: "SELECT * FROM news_has_picture WHERE id_news = $1;",
  //       values: [news_id],
  //     };

  //     if (rows) {
  //       const { rows } = await pool.query(sqlQuery);

  //       return rows ? rows.map((row) => new this(row)) : false;
    
  //     }else{
  //       return false;
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     if (err.detail) {
  //       throw new Error(err.detail);
  //     } else {
  //       throw err;
  //     }
  //   }
  // }

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

module.exports = News_has_picture;

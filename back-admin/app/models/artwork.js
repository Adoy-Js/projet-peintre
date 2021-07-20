const pool = require("../db");

class Artwork {
  constructor(obj = {}) {
    for (const prop in obj) {
      this[prop] = obj[prop];
    }
  }

  static async findByCategory(category) {
    try {
      const query = {
        text: `SELECT * FROM artwork
        JOIN category ON category.id = artwork.category_id 
        JOIN picture ON picture.artwork_id = artwork.id
        WHERE category.name = $1;`,
        values: [category],
      };

      const { rows } = await pool.query(query);

      console.log(rows);

      return rows ? rows.map((row) => new this(row)) : false;
    } catch (error) {
      console.log(error);
    }
  }

  static async findOne(id) {
    try {
      const sqlQuery = {
        text: "SELECT * FROM artwork WHERE id = $1;",
        values: [id],
      };

      const { rows } = await pool.query(sqlQuery);

      return rows ? rows.map((row) => new this(row)) : false;
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
          text: "UPDATE news SET date = $1, place = $2, description = $3 WHERE id = $4",
          values: [this.date, this.place, this.description, id],
        };
      } else {
        sqlQuery = {
          text: "INSERT INTO news(date, place, description) VALUES ($1,$2,$3) RETURNING id;",
          values: [this.date, this.place, this.description],
        };
      }

      const { rows } = await pool.query(sqlQuery);

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
        text: "DELETE FROM artwork WHERE id=$1",
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

module.exports = Artwork;

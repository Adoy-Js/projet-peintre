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
        text: `SELECT * FROM artwork FULL JOIN category ON artwork.category_id = category.id_category FULL JOIN artwork_has_picture ON artwork.id_artwork = artwork_has_picture.artwork_id FULL JOIN picture ON artwork_has_picture.picture_id = picture.id_picture WHERE category.name = $1;`,
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
        text: "SELECT * FROM artwork FULL JOIN artwork_has_picture ON artwork_has_picture.artwork_id = artwork.id_artwork FULL JOIN picture ON picture.id_picture = artwork_has_picture.picture_id WHERE id_artwork = $1;",
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

  static async findAllPaintings() {
    try {
        const {rows} = await db.query(`SELECT * FROM artwork JOIN category ON artwork.category_id = category.id_category JOIN artwork_has_picture ON artwork.id_artwork = artwork_has_picture.artwork_id JOIN picture ON picture.id_picture = artwork_has_picture.picture_id WHERE category.name IN ('oil-painting', 'acrylic_painting')` );

        console.log(rows);

        return rows.map(row => new Artist(row));
    } catch (error) {
        if (error.detail) {
            throw new Error(error.detail);
        } else {
            throw error;
        }
    }
}
}

module.exports = Artwork;

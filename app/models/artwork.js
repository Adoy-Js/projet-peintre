const pool = require("../db");

class Artwork {
  constructor(obj = {}) {
    for (const prop in obj) {
      this[prop] = obj[prop];
    }
  }

  static async findAll() {
    try {
      const query = {

        text: `SELECT id_artwork, name_artwork, name_category, date, place, format, description, main_picture, array_agg(image) as image FROM artwork JOIN category ON artwork.category_id = category.id_category JOIN picture ON artwork.id_artwork = picture.artwork_id GROUP BY artwork.id_artwork, name_category;` 


      };

      const { rows } = await pool.query(query);

      return rows ? rows.map((row) => new this(row)) : false;
    } catch (error) {
      console.log(error);
    }
  }

  static async findByCategory(category) {
    try {
      const query = {
        text: `SELECT id_artwork, name_artwork, date, place, format, description, main_picture, array_agg(image) as image FROM artwork JOIN category ON artwork.category_id = category.id_category JOIN picture ON picture.artwork_id = artwork.id_artwork WHERE category.name_category = $1 AND id_artwork IS NOT NULL GROUP BY id_artwork ORDER BY date DESC;`,
        values: [category],
      };

      const { rows } = await pool.query(query);

      return rows ? rows.map((row) => new this(row)) : false;
    } catch (error) {
      console.log(error);
    }
  }

  static async findOne(id) {
    try {
      const sqlQuery = {
        text: "SELECT id_artwork, name_artwork, date, place, format, description, main_picture, array_agg(image) as image FROM artwork JOIN picture ON artwork.id_artwork = picture.artwork_id WHERE id_artwork = $1 GROUP BY id_artwork;",
        values: [id],
      };

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

  async save(id = null) {
    try {
      let sqlQuery;

      if (id) {
        sqlQuery = {
          text: "UPDATE artwork SET name_artwork=$1, date=$2, place=$3, format=$4, description =$5, main_picture=$6, category_id=$7 WHERE id_artwork = $9",
          values: [
            this.name_artwork,
            this.date,
            this.place,
            this.format,
            this.description,
            this.main_picture,
            this.category_id,
            id,
          ],
        };
      } else {
        sqlQuery = {
          text: "INSERT INTO artwork(name_artwork, date, place, format, description, main_picture, category_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id_artwork;",
          values: [
            this.name_artwork,
            this.date,
            this.place,
            this.format,
            this.description,
            this.main_picture,
            this.category_id,
          ],
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

  static async delete(id) {
    try {
      let sqlQuery;

      sqlQuery = {
        text: "DELETE FROM artwork WHERE id_artwork=$1",
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

  static async findAllPaintings() {
    try {
      const { rows } = await pool.query(
        `SELECT id_artwork, name_artwork, date, place, format, description, name_category, name_picture, image 
        FROM artwork 
        JOIN category ON artwork.category_id = category.id_category  
        JOIN picture ON picture.artwork_id = artwork.id_artwork
        WHERE category.name_category IN ('oil-painting', 'acrylic-painting') 
        ORDER BY date DESC;`
      );

      return rows.map((row) => new Artwork(row));
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
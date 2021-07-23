const pool = require("../db");

class Picture {
  constructor(obj = {}) {
    for (const prop in obj) {
      this[prop] = obj[prop];
    }
  }

  static async findOne(id) {
    try {
      const sqlQuery = {
        text: "SELECT * FROM picture WHERE id = $1;",
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
        console.log("je suis dans le modele Picture ,j'update la nouvelle photo");
        sqlQuery = {
          text: "UPDATE picture SET name_picture = $1, image = $2, description = $3 WHERE id_picture = $4",
          values: [this.name_picture, this.image, this.description, id],
        };
      } else {
        console.log("j'insere la nouvelle photo");
        sqlQuery = {
          text: "INSERT INTO picture(name_picture, image, description) VALUES ($1,$2,$3) RETURNING id_picture;",
          values: [this.name_picture, this.image, this.description],
        };
        
      }
      const { rows } = await pool.query(sqlQuery);

      this.id_picture = rows[0].id_picture;

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

  async delete(id) {
    try {
      let sqlQuery;

      sqlQuery = {
        text: "DELETE FROM picture WHERE id=$1",
        values: [id],
      };
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

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
        console.log(
          "je suis dans le modele Picture ,j'update la nouvelle photo"
        );
        sqlQuery = {
          text: "UPDATE picture SET name_picture = $1, image = $2 WHERE id_picture = $3",
          values: [this.name_picture, this.image+' ', id],
        };
      } else {
        console.log("model : add picture for home");
        sqlQuery = {
          text: "INSERT INTO picture(name_picture, image) VALUES ($1,$2) RETURNING id_picture;",
          values: [this.name_picture, this.image+' ']
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

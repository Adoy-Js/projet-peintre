const db = require("../db");

class Category {
  constructor(data = {}) {
    for (const prop in data) {
      this[prop] = data[prop];
    }
  }

  static async findIdByName(name) {
    try {
      const query = {
        text: `SELECT id_category from category WHERE name_category = $1`,
        values: [name],
      };
      const { rows } = await db.query(query);

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
}

module.exports = Category;

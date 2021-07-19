const pool = require("../db");

class News {

    constructor(obj={}){

        for(const prop in obj){
            this[prop] = obj[prop];
        };
    };

    static async findAll(){

        try{

            const sqlQuery = "SELECT * FROM news;";

            const {rows} = await pool.query(sqlQuery);

            return rows ? rows.map(row=>new this(row)) : false;

        }catch(err){
            console.error(err);
            if (err.detail) {
                throw new Error(err.detail);
            } else {
                throw err;
            } 
        }

    }

}

module.exports = News;
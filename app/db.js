const {Pool} = require('pg');

let pool = new Pool({
    connectionString: process.env.PG_URL
});
if (process.env.NODE_ENV === "production") {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        // on ajoute cette option pour que heroku ne rejette pas les connexions non https à la DB
        ssl: {
            rejectUnauthorized: false
        }
    });
}

//avec un Pool, plus besoin de se connecter avant l'export, c'est géré directement sous le capot par le Pool lui-même

module.exports = pool;
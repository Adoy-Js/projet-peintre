const db = require('../db');


class NoArtistError extends Error {
    constructor(id) {
        super(`No artist found with id ${id}`);
    }
}

class Artist {

    //on référence l'erreur custom en tant que propriété statique du modèle pour pouvoir tester la class d'une erreur dans le contrôleur sans avoir à importer la classe de l'erreur
    NoArtistError = NoArtistError;

    constructor(data={}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {
        try {
            const {rows} = await db.query('SELECT * FROM artist JOIN artist_has_picture ON artist_has_picture.artist_id = artist.id_artist JOIN picture ON picture.id_picture = artist_has_picture.picture_id');

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

module.exports = Artist;
-- Revert projet-peintre:create_table from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE artist_has_picture, artwork_has_picture, news_has_picture, picture, news, artwork, category, artist;

COMMIT;

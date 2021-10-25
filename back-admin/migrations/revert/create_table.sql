-- Revert projet-peintre:create_table from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE news, artwork, picture, category, artist;

COMMIT;

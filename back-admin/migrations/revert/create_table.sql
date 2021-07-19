-- Revert projet-peintre:create_table from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE picture, news, artwork, category, artist;

COMMIT;

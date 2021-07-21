-- Verify projet-peintre:create_table on pg

BEGIN;

-- XXX Add verifications here.
SELECT * FROM artist WHERE false;
SELECT * FROM category WHERE false;
SELECT * FROM artwork WHERE false;
SELECT * FROM news WHERE false;
SELECT * FROM picture WHERE false;
SELECT * FROM news_has_picture WHERE false;
SELECT * FROM artwork_has_picture WHERE false;

ROLLBACK;
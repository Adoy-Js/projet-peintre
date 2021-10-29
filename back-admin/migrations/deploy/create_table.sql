-- Deploy projet-peintre:create_table to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE artist (
  id_artist INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(500) NOT NULL,
  biography TEXT [] NOT NULL
);

CREATE TABLE category (
  id_category INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name_category VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE artwork (
  id_artwork INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name_artwork VARCHAR(50) NOT NULL,
  date INT NOT NULL,
  place VARCHAR(100), 
  format varchar(50),
  description TEXT,
  main_picture TEXT,
  category_id INT REFERENCES category(id_category) 
);

CREATE TABLE news (
  id_news INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name_news VARCHAR(50),
  date TIMESTAMP NOT NULL,
  place VARCHAR(150),
  article TEXT NOT NULL
);

CREATE TABLE picture (
  id_picture INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name_picture VARCHAR(50),
  image text NOT NULL,
  artwork_id INT REFERENCES artwork(id_artwork) ON DELETE CASCADE,
  artist_id INT REFERENCES artist(id_artist) ON DELETE CASCADE,
  news_id INT REFERENCES news(id_news) ON DELETE CASCADE
);

COMMIT;
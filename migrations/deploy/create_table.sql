-- Deploy projet-peintre:create_table to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE artist (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  logo VARCHAR(50),
  biography TEXT,
  mail VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE category (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE artwork (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name_artwork VARCHAR(50) NOT NULL,
  date TIMESTAMP NOT NULL,
  place VARCHAR(100) NOT NULL, 
  height INT NOT NULL,
  width INT NOT NULL,
  support VARCHAR(50) NOT NULL,
  category_id INT REFERENCES category(id),
  artist_id INT REFERENCES artist(id)
);

CREATE TABLE news (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  date TIMESTAMP NOT NULL,
  place VARCHAR(150) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE picture (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name_picture VARCHAR(50),
  image text NOT NULL,
  description TEXT,
  artist_id INT REFERENCES artist(id)
);

CREATE TABLE news_has_picture (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  news_id INT REFERENCES news(id),
  picture_id INT REFERENCES picture(id)
);

CREATE TABLE artwork_has_picture (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  artwork_id INT REFERENCES artwork(id),
  picture_id INT REFERENCES picture(id)
);

COMMIT;
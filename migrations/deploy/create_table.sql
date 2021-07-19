-- Deploy projet-peintre:create_table to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE artist (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  logo VARCHAR(50) NOT NULL,
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
  name VARCHAR(50) NOT NULL,
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
  name VARCHAR(50),
  image text NOT NULL,
  description TEXT,
  news_id INT REFERENCES news(id),
  artwork_id INT REFERENCES artwork(id),
  artist_id INT REFERENCES artist(id)
);

COMMIT;
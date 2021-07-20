INSERT INTO artist (logo, biography, mail, password) 
VAlUES ('logo.png', 'je suis un artiste', 'artiste@gamil.com', 'artist');


INSERT INTO category (name) VALUES 
('sketch'),
('portrait'),
('oil painting'),
('acrylic painting'),
('mural painting');

INSERT INTO artwork (name, date, place, height, width, support, category_id, artist_id) VALUES
('oiseau', '2021-03-19'::TIMESTAMP, 'Angers', 20, 20, 'papier', 1, 1),
('maison', '2020-04-04'::TIMESTAMP, 'Saint-Maximin', 30, 50, 'toile', 3, 1);

INSERT INTO news (date, place, description) VALUES
('2019-05-17'::TIMESTAMP, 'Paris', 'j''ai fait une expo'),
('2019-12-10'::TIMESTAMP, 'Nantes', 'Rencontre entre pro');

INSERT INTO picture (name, image, description, news_id, artwork_id, artist_id) VALUES
('oiseau qui vole', 'oiseau.png', 'quel bel oiseau!', NULL, 1, NULL),
('oiseau qui vole plus', 'oiseau2.png', 'bel oiseau!', NULL, 1, NULL),
('Paris', 'paris.png', 'bel expo !', 1, NULL, NULL);
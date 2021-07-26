INSERT INTO artist (logo, name, biography, mail, password) 
VAlUES ('logo.png', 'Camille', 'je suis un artiste', 'artiste@gmail.com', '1234');


INSERT INTO category (name) VALUES 
('sketch'),
('portrait'),
('oil-painting'),
('acrylic-painting'),
('mural-painting');

INSERT INTO artwork (name_artwork, date, place, height, width, support, category_id, artist_id) VALUES
('oiseau', '2021-03-19'::TIMESTAMP, 'Angers', 20, 20, 'papier', 2, 1),
('bateau', '2021-03-19'::TIMESTAMP, 'Angers', 20, 20, 'papier', 2, 1),
('maison', '2020-04-04'::TIMESTAMP, 'Saint-Maximin', 30, 50, 'toile', 3, 1);

INSERT INTO news (date, place, article) VALUES
('2019-05-17'::TIMESTAMP, 'Paris', 'j''ai fait une expo'),
('2019-12-10'::TIMESTAMP, 'Nantes', 'Rencontre entre pro');

INSERT INTO picture (name_picture, image, description) VALUES
('jimmy', 'sdsd.png', 'bon guitariste'),
('sdff qui vole plus', 'oiseau2.png', 'bel oiseau!'),
('Paris', 'paris.png', 'bel expo !'),
('jimmy', 'data/picture/jimmy.png', 'bon guitariste');

INSERT INTO news_has_picture (news_id, picture_id) VALUES
(1, 3);

INSERT INTO artwork_has_picture (artwork_id, picture_id) VALUES
(1, 1),
(1, 2);

INSERT INTO artist_has_picture (artist_id, picture_id) VALUES
(1,4);
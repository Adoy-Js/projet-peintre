BEGIN;

INSERT INTO artist (name, logo, biography, mail, password) 
VAlUES ('logo.png', 'Camille', 'je suis un artiste', 'artiste@gmail.com', '1234');

INSERT INTO category (name) VALUES 
('sketch'),
('portrait'),
('oil-painting'),
('acrylic-painting'),
('mural-painting');

INSERT INTO artwork (name_artwork, date, place, height, width, description, category_id, artist_id) VALUES
('Sur un air de guitare', 2017, '', 50, 75, 'Technique mixte sur papier Antaimoro', 4, 1),
('Portait homme', 2018, '', 29.7, 21, 'Dessin au Crayon graphite', 2, 1),
('Portait femme', 2018, '', 29.7, 21, 'Dessin au Crayon graphite',2, 1),
('Spirit', 2021, '', 80, 130, 'Pigment naturel et acrylique sur toile de lin naturel', 4, 1),
('Greenstone Hike', 2021, '', 27, 41, 'Peinture à l’huile sur toile de lin naturel', 3, 1),
('Isthmus Peak', 2021, '', 60, 120, 'Peinture à l’huile sur toile de lin naturel', 3, 1),
('Castlemaine Bushes', 2021, '', 40, 40, 'Peinture à l’huile sur toile', 3, 1),
('The Grampians', 2021, '', 70, 52, 'Peinture à l’huile sur toile', 3, 1),
('Projet Durtal', 2019, 'Durtal', 200, 1500, 'Voici la peinture du patrimoine historique de la ville de Durtal que j’ai réalisée en Septembre 2019 dans le jeu de boule du « Petit Tivoli » à Durtal. Représentant le Château, avec le pont fleuri traversant le Loir rejoignant la porte Véron.
On aperçoit dans ce paysage le barrage avec quelques oiseaux dans leur milieu naturel, martin pêcheur, aigrette, quelques canards et oiseaux dans les tours du château …
J’ai réalisé cette peinture sur 3 semaines, entouré d’une ambiance chaleureuse et conviviale.
Je vous invite à lire la photo de l’article de presse paru dans le courrier de l’ouest expliquant davantage l’histoire de ce projet.
', 5, 1),
('Dans le monde imaginaire de Narnia', 2020, 'Australie', 230, 400, 'L’histoire et déroulement du projet :

Tout d’abord, pour commencer nous avons avec Carrie (la Maman) réfléchi aux différents éléments de composition de l’image : un paysage Printanier ensoleillé avec quelques éléments naturels (roche, végétation, fleur), Aslan le lion, et le château.

Je commence alors quelques croquis, puis peins cette petite vignette pour lui donner une idée de la composition et de la palette de couleurs choisis. 
 
Elle sourit… et dit : Ouiii !!! (Excitée)
 
Les tracés sur le mur commencent alors à prendre forme. J’utilise une mine graphite mise au bout de plusieurs petit bout de bambou assemblés ensemble, pour avoir du recul et esquisser.
 
Le lendemain matin avec les enfants nous sortons la peinture des tubes, et je leur montre comment obtenir différentes couleurs à partir des couleurs primaires et de blanc. Un peu de jaune, un peu de bleu, puis un joli vert apparaît, probablement pour la plaine, puis un certain jaune-orangé pour le Lion… Wouahhh (disent les enfants) Incroyable ce qui se passe là sous nos yeux… 
 
Je trempe le pinceau dans la peinture, regarde Nathan, et lui dit : maintenant… c’est parti !
 
Il prend le pinceau, se dirige sur le lion et commence à le peindre. 

Carrie, étonnée, souris, sa réaction inattendue est géniale ! 
Sa fille peu de temps après arrive rejoindre son frère avec une autre couleur sur le mur. Les enfants commencent ainsi la peinture, ils sont excités et concentrés à la fois, c’est beau ce qui se passe, c’est calme et magique …
 
Après un moment ils me laissent, je m’enferme dans sa chambre et continue à peindre.
Personne n’aura réellement idée de ce qu’il se passera, c’est la surprise pour son anniversaire …
Une semaine plus tard, impatient, Nathan ouvrira tout doucement la porte de sa chambre…
Je crois que quelque chose de magique s’est passé… 
                                                                                                       
Un grand merci à Carrie, David et leurs enfants pour leur accueil si chaleureux et cette incroyable expérience tous ensemble.
 
 
Technique : Peinture acrylique sur mur', 5, 1),
('Piwakawaka', 2018, 'Nouvelle-Zélande', 350, 350, 'Voici ma peinture du Piwakawaka, oiseau emblématique de la Nouvelle-Zélande. C’est le nom d’origine que les maoris lui ont attribué. Il est aussi connu sous le nom de Fantail ! 
 
Après avoir étudié et peint une dizaine d’autres oiseaux Néo-zélandais sur les murs des chambres à Kinloch Lodge, le début du voyage commençait pour moi… l''apprentissage de la langue et de leur culture… 
 
 “L’oiseau posé sur la branche, est prêt à s''envoler …”
 
j’ai réalisé cette peinture au courant de l’hiver au milieu des montagnes enneigées durant mon séjour chez Danelle à Glenorchy, un petit village sublime situé au sud de l’île du sud auquel j’accorde une valeur très particulière.
 
La Nouvelle Zélande est absolument fantastique, la richesse et diversité de ses paysages, ses couleurs absolument incroyable, les gens, l’énergie vivante qui émane de leurs terre et toutes ses rencontres m''ont touché profondément …
 
Un grand merci à mon amie Martine (photographe) pour ses jolies photos et toutes ses belles rencontres !
 
 
Technique : Peinture acrylique 
Support : Bardage bois ', 5, 1);

INSERT INTO news (date, place, article) VALUES
('2019-05-17'::TIMESTAMP, 'Paris', 'j''ai fait une expo'),
('2019-12-10'::TIMESTAMP, 'Nantes', 'Rencontre entre pro');

INSERT INTO picture (name_picture, image) VALUES
('Sur un air de guitare', 'data/picture/acrylic-painting/Sur_un_air_de_guitare.jpg'),
('Portrait homme', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/D2.%20Portrait%201.jpg?alt=media&token=5c6e3ad8-8916-4172-b8ab-47eb880c2e35'),
('Portait femme', 'data/picture/portrait/portait_femme.jpg'),
('Camille sur un rocher', 'data/picture/home/camille_sur_rocher.jpg'),
('Camille qui dessine avec un long crayon', 'data/picture/home/camille_crayon.jpg'),
('Chevalet devant une rivière', 'data/picture/home/chevalet_riviere.jpg'),
('Spirit','data/picture/acrylic-painting/spirit.jpg'),
('Greenstone Hike','data/picture/oil-painting/greenstone_hike.jpg'),
('Isthmus Peak','data/picture/acrylic-painting/isthmus_Peak.jpg'),
('Castlemaine Bushes','data/picture/acrylic-painting/data/picture/acrylic-painting/castlemaine_bushes.jpg'),
('The Grampians','data/picture/acrylic-painting/the_grampians.jpg'),
('Atelier', 'data/picture/home/home1.jpg'),
('Porte-manteau', 'data/picture/home/home2.jpg'),
('Matérieu', 'data/picture/home/home3.jpg'),
('durtal1', 'data/picture/mural-painting/durtal1.jpg'),
('durtal2', 'data/picture/mural-painting/durtal2.jpg'),
('durtal3', 'data/picture/mural-painting/durtal3.jpg'),
('durtal4', 'data/picture/mural-painting/durtal4.jpg'),
('narnia1', 'data/picture/mural-painting/narnia1.jpg'),
('narnia2', 'data/picture/mural-painting/narnia2.jpg'),
('narnia3', 'data/picture/mural-painting/narnia3.jpg'),
('narnia4', 'data/picture/mural-painting/narnia4.jpg'),
('narnia5', 'data/picture/mural-painting/narnia5.jpg'),
('narnia6', 'data/picture/mural-painting/narnia6.jpg'),
('narnia7', 'data/picture/mural-painting/narnia7.jpg'),
('narnia8', 'data/picture/mural-painting/narnia8.jpg'),
('narnia9', 'data/picture/mural-painting/narnia9.jpg'),
('narnia10', 'data/picture/mural-painting/narnia10.jpg'),
('narnia11', 'data/picture/mural-painting/narnia11.jpg'),
('narnia12', 'data/picture/mural-painting/narnia12.jpg'),
('piwakawaka1', 'data/picture/mural-painting/piwakawaka1.jpg'),
('piwakawaka2', 'data/picture/mural-painting/piwakawaka2.jpg'),
('piwakawaka3', 'data/picture/mural-painting/piwakawaka3.jpg'),
('piwakawaka4', 'data/picture/mural-painting/piwakawaka4.jpg'),
('piwakawaka5', 'data/picture/mural-painting/piwakawaka5.jpg'),
('piwakawaka6', 'data/picture/mural-painting/piwakawaka6.jpg');

-- INSERT INTO news_has_picture (news_id, picture_id) VALUES
-- (1, 3);

INSERT INTO artwork_has_picture (artwork_id, picture_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 7),
(5, 8),
(6, 9),
(7, 10),
(8, 11),
(9, 15),
(9, 16),
(9, 17),
(9, 18),
(10, 19),
(10, 20),
(10, 21),
(10, 22),
(10, 23),
(10, 24),
(10, 25),
(10, 26),
(10, 27),
(10, 28),
(10, 29),
(10, 30),
(11, 31),
(11, 32),
(11, 33),
(11, 34),
(11, 35),
(11, 36);

INSERT INTO artist_has_picture (artist_id, picture_id) VALUES
(1, 4),
(1, 5),
(1, 6),
(1, 12),
(1, 13),
(1, 14);

COMMIT;
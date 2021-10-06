BEGIN;

-- INSERT INTO artist (email, password) 
-- VAlUES ('camillepaul.pro@gmail.com', '1234');

INSERT INTO category (name_category) VALUES 
('portrait'),
('oil-painting'),
('acrylic-painting'),
('mural-painting');

INSERT INTO picture (name_picture, image) VALUES
('Sur un air de guitare', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/D1.%20Sur%20un%20air%20de%20musique%20HD%202017.jpg?alt=media&token=d9d1e9e3-9e50-4188-91a5-00547c342b83'),
('Portrait homme', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/D2.%20Portrait%201.jpg?alt=media&token=5c6e3ad8-8916-4172-b8ab-47eb880c2e35'),
('Portait femme', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/D3.%20Portrait%202.jpg?alt=media&token=c1525ca6-4be7-4a86-b853-35cbb69c63c5'),
('Camille sur un rocher', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Camille_sur_rocher.jpg?alt=media&token=f8a301d1-3406-4511-a29d-cb5db6c60ffd'),
('Camille qui dessine avec un long crayon', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Camille_crayon.jpg?alt=media&token=89227e25-5195-4ed4-bed8-ad47409a0d18'),
('Chevalet devant une rivière', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Chevalet_riviere.jpg?alt=media&token=932f8e16-7377-4087-a662-37c2062c52e8'),
('Spirit','https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/SPIRIT%20(1).jpg?alt=media&token=2a47b954-20bb-4c45-aa16-9648abdce949'),
('Greenstone Hike','https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/GREENSTONE%20HIKE.jpg?alt=media&token=63a88fa7-970b-4315-ba78-0bb17dac4032'),
('Isthmus Peak','https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/ISTHMUS%20PEAK.jpg?alt=media&token=48e6c8c8-b1dc-42b1-aea7-3a26db6babd2'),
('Castlemaine Bushes','https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/BUSH%20PAINTING%20.jpg?alt=media&token=f450dcc3-1dad-440a-8968-ac1d90ef9bf5'),
('The Grampians','https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/THE%20GRAMPIANS%20(1).jpg?alt=media&token=78a4c7d1-9c73-426c-88c1-5ff4df57cf00'),
('Atelier', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/1.jpg?alt=media&token=4960c70b-7bc5-4387-beb9-4414569bab67'),
('Porte-manteau', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/3.jpg?alt=media&token=504441c0-3d7c-44cb-b240-980d9dbd20ef'),
('Matériau', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/2.jpg?alt=media&token=5f6d52d1-f236-4e1a-b924-f36cdf0c94c2'),
('durtal1', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Durtal%201.jpg?alt=media&token=c45377d7-ded7-4956-ac13-19b7841f7723'),
('durtal2', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Durtal%202.jpg?alt=media&token=7fc1216d-344d-4e0b-b082-8b822577c83b'),
('durtal3', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Durtal%203.jpg?alt=media&token=247ec0d4-3534-4370-a931-eb84b0f3ba66'),
('durtal4', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Durtal%204.jpg?alt=media&token=705ea6d4-756f-40ea-897a-192d6764fbd2'),
('narnia1', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Narnia%201.jpg?alt=media&token=e4bb17d6-ee20-4d59-9dd9-8ab5525f3b87'),
('narnia2', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Narnia%202.jpg?alt=media&token=a16bd104-5dc4-4bc6-ab37-acc8d8dfc034'),
('narnia3', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Narnia%203.jpg?alt=media&token=784ffa28-93cb-48e4-a381-31abccaf09ca'),
('narnia4', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Narnia%204.jpg?alt=media&token=e83b47ea-6fd3-41a8-bc9b-72155b337560'),
('narnia5', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Narnia%205.jpg?alt=media&token=0c6670bc-b417-487a-bbc9-0ee0060e84b9'),
('narnia6', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Narnia%206.jpg?alt=media&token=65910a2f-2a7c-4560-a3e6-ec464cce8c11'),
('narnia7', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Narnia%207.jpg?alt=media&token=36a979e3-4abf-4284-8fb4-ef01b702cebf'),
('narnia8', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Narnia%208.jpg?alt=media&token=730e374f-b05c-4df8-889a-209dec3ed60d'),
('narnia9', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Narnia%209.jpg?alt=media&token=69d4f8f3-aab3-4ecc-9cd2-1ae00339b86b'),
('narnia10', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Narnia%2010.jpg?alt=media&token=ac67fdb9-910e-458f-83a4-64a32b3ad9e9'),
('narnia11', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Narnia%2011.jpg?alt=media&token=721984b7-9849-4ac3-8351-1eb2121c8a4c'),
('narnia12', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Narnia%2012.jpg?alt=media&token=1436c888-2e98-42c5-b748-9cfcab24ba22'),
('piwakawaka1', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Piwakawaka%201.jpg?alt=media&token=f9c3981f-a70c-4669-9f9c-7d0526cec817'),
('piwakawaka2', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Piwakawaka%202.jpg?alt=media&token=513c1a38-d8ef-4894-8703-2d8e1be87c95'),
('piwakawaka3', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Piwakawaka%20%203.jpg?alt=media&token=abff8ba4-22e2-43f0-a55b-b52a3182e7cd'),
('piwakawaka4', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Piwakawaka%204.jpg?alt=media&token=29afbca6-dc16-490a-a19b-c3b37ed18f21'),
('piwakawaka5', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Piwakawaka%205.jpg?alt=media&token=b4d970bd-70ff-4f7f-983e-c09e7a7ad409'),
('piwakawaka6', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Piwakawaka%206.jpg?alt=media&token=94c41dc5-003c-4422-b1a3-2244bd06e6f4');

INSERT INTO artwork (name_artwork, date, place, format, description, main_picture, category_id, artist_id) VALUES
('Sur un air de guitare', 2017, '','50 x 75 cm', 'Technique mixte sur papier Antaimoro', null, 3, 1),
('Portait homme', 2018, '', '29.7 x 21 cm', 'Dessin au Crayon graphite', null, 1, 1),
('Portait femme', 2018, '', '29.7 x 21 cm', 'Dessin au Crayon graphite',null, 1, 1),
('Spirit', 2021, '', '80 x 130 cm', 'Pigment naturel et acrylique sur toile de lin naturel', null, 3, 1),
('Greenstone Hike', 2021, '', '27 x 41 cm', 'Peinture à l’huile sur toile de lin naturel', null, 2, 1),
('Isthmus Peak', 2021, '', '60 x 120 cm', 'Peinture à l’huile sur toile de lin naturel', null, 2, 1),
('Castlemaine Bushes', 2021, '', '40 x 40 cm', 'Peinture à l’huile sur toile', null, 2, 1),
('The Grampians', 2021, '', '70 x 52 cm', 'Peinture à l’huile sur toile', null, 2, 1),
('Peinture du patrimoine de Durtal', 2019, 'Durtal', '200 x 1500 cm', 'Voici la peinture du patrimoine historique de la ville de Durtal que j’ai réalisée en Septembre 2019 dans le jeu de boule du « Petit Tivoli » à Durtal. Représentant le Château, avec le pont fleuri traversant le Loir rejoignant la porte Véron.
On aperçoit dans ce paysage le barrage avec quelques oiseaux dans leur milieu naturel, martin pêcheur, aigrette, quelques canards et oiseaux dans les tours du château …
J’ai réalisé cette peinture sur 3 semaines, entouré d’une ambiance chaleureuse et conviviale.
Je vous invite à lire la photo de l’article de presse paru dans le courrier de l’ouest expliquant davantage l’histoire de ce projet.
', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Durtal%201.jpg?alt=media&token=c45377d7-ded7-4956-ac13-19b7841f7723', 4, 1),
('Dans le monde imaginaire de Narnia', 2020, 'Australie', '230 x 400 cm', 'L’histoire et déroulement du projet :

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
 
 
Technique : Peinture acrylique sur mur', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Narnia%201.jpg?alt=media&token=e4bb17d6-ee20-4d59-9dd9-8ab5525f3b87', 4, 1),
('Piwakawaka', 2018, 'Nouvelle-Zélande', '350 x 350 cm', 'Voici ma peinture du Piwakawaka, oiseau emblématique de la Nouvelle-Zélande. C’est le nom d’origine que les maoris lui ont attribué. Il est aussi connu sous le nom de Fantail ! 
 
Après avoir étudié et peint une dizaine d’autres oiseaux Néo-zélandais sur les murs des chambres à Kinloch Lodge, le début du voyage commençait pour moi… l''apprentissage de la langue et de leur culture… 
 
 “L’oiseau posé sur la branche, est prêt à s''envoler …”
 
j’ai réalisé cette peinture au courant de l’hiver au milieu des montagnes enneigées durant mon séjour chez Danelle à Glenorchy, un petit village sublime situé au sud de l’île du sud auquel j’accorde une valeur très particulière.
 
La Nouvelle Zélande est absolument fantastique, la richesse et diversité de ses paysages, ses couleurs absolument incroyable, les gens, l’énergie vivante qui émane de leurs terre et toutes ses rencontres m''ont touché profondément …
 
Un grand merci à mon amie Martine (photographe) pour ses jolies photos et toutes ses belles rencontres !
 
 
Technique : Peinture acrylique 
Support : Bardage bois ', 'https://firebasestorage.googleapis.com/v0/b/projet-peintre.appspot.com/o/Projet%20Piwakawaka%201.jpg?alt=media&token=f9c3981f-a70c-4669-9f9c-7d0526cec817', 4, 1);

-- INSERT INTO news (date, place, article) VALUES
-- ('2019-05-17'::TIMESTAMP, 'Paris', 'j''ai fait une expo'),
-- ('2019-12-10'::TIMESTAMP, 'Nantes', 'Rencontre entre pro');



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
(1, 5),
(1, 6),
(1, 12),
(1, 14);

COMMIT;
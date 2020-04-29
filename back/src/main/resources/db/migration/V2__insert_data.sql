INSERT INTO Type_competence(libelle)
VALUES('Front'),('Back'), ('DevOps'),('Fonctionnelle');

INSERT INTO Niveau(niveau)
VALUES (1),(2),(3),(4),(5);

INSERT INTO Consultant (nom, prenom)
VALUES ('Dev1','Dev1'),('Dev2','Dev2'),('Dev3','Dev3'),('Dev4','Dev4'),('Dev5','Dev5'),('Dev6','Dev6'),('Dev7','Dev7'),('Dev8','Dev8'),('Dev9','Dev9'),('Dev10','Dev10');

INSERT INTO Competence(nom,description, type_competence_id)
VALUES
    ('Angular',NULL,1),
    ('Javascript', NULL,1),
    ('HTML/CSS', NULL,1),
    ('.NET', NULL,2),
    ('Python', NULL,2),
    ('C++', NULL,2),
    ('Symfony', NULL,2),
    ('Laravel', NULL,2),
    ('Ruby', NULL,2),
    ('AgularJs', NULL,1),
    ('React', NULL,1),
    ('NodeJS', NULL,2),
    ('VueJS', NULL,1),
    ('MySQL', NULL,2),
    ('Docker', NULL,3),
    ('Jenkins', NULL,3),
    ('AWS', NULL,3),
    ('Magento', NULL,1),
    ('Java',NULL,2),
	('PHP',NULL,2);



/*INSERT INTO Consultant_Competence(consultant_id, competence_id,niveau_id )
VALUES (1,2,1),(1,1,1);*/
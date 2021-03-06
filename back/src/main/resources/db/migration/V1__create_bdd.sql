CREATE TABLE Type_competence(
id INT NOT NULL AUTO_INCREMENT,
libelle VARCHAR(255) NOT NULL,
PRIMARY KEY(id)
)ENGINE=InnoDB;

CREATE TABLE Niveau(
id INT NOT NULL AUTO_INCREMENT,
niveau INT NOT NULL,
PRIMARY KEY(id)
)ENGINE=InnoDB;

CREATE TABLE Consultant(
id INT NOT NULL AUTO_INCREMENT,
nom VARCHAR(255) NOT NULL,
prenom VARCHAR(255) NOT NULL,
PRIMARY KEY(id)
)ENGINE=InnoDB;

CREATE TABLE Competence(
id INT NOT NULL AUTO_INCREMENT,
nom VARCHAR(255) NOT NULL,
description VARCHAR(255),
type_competence_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(type_competence_id) REFERENCES Type_competence(id)
)ENGINE=InnoDB;



CREATE TABLE Consultant_Competence(
id INT NOT NULL AUTO_INCREMENT,
consultant_id INT NOT NULL,
competence_id INT NOT NULL,
niveau_id INT NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(consultant_id) REFERENCES Consultant(id),
FOREIGN KEY(competence_id) REFERENCES Competence(id),
FOREIGN KEY(niveau_id) REFERENCES Niveau(id)
)ENGINE=InnoDB;


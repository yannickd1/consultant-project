package com.altranapp.entities;

import lombok.Data;
import javax.persistence.*;


@Entity
@Table(name = "Competence")
@Data
public class Competence {

    @Id
    @GeneratedValue
    private Long id;
    private String nom;
    private String description;

    @ManyToOne
    private TypeCompetence typeCompetence;
}

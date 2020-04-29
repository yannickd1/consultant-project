package com.altranapp.entities;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "Consultant_Competence")
@Data
public class ConsultantCompetence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Consultant consultant;
    @ManyToOne
    private Competence competence;
    @ManyToOne
    private Niveau niveau;

}

package com.altranapp.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Niveau")
@Data
public class Niveau {

    @Id
    @GeneratedValue
    private Long id;
    private Long niveau;
}

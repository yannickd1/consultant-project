package com.altranapp.entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import org.assertj.core.util.Sets;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Consultant")
@Data
public class Consultant {
    @Id
    @GeneratedValue
    private Long id;
    private String nom;
    private String prenom;


}

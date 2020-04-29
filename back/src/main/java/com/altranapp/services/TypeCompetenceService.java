package com.altranapp.services;


import com.altranapp.entities.TypeCompetence;
import com.altranapp.repositories.TypeCompetenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TypeCompetenceService {

    private TypeCompetenceRepo typeCompetenceRepo;

    @Autowired
    TypeCompetenceService(TypeCompetenceRepo typeCompetenceRepo) {
        this.typeCompetenceRepo = typeCompetenceRepo;
    }

    public List<TypeCompetence> findAllTypeCompetence() {
        return (List<TypeCompetence>) this.typeCompetenceRepo.findAll();
    }

    public Optional<TypeCompetence> findTypeCompetenceById(Long id) {
        return this.typeCompetenceRepo.findById(id);
    }

    public TypeCompetence saveTypeCompetence(TypeCompetence typeCompetence) {
        return this.typeCompetenceRepo.save(typeCompetence);
    }

    public Boolean deleteTypeCompetenceById(Long id) {
        this.typeCompetenceRepo.deleteById(id);
        return this.typeCompetenceRepo.existsById(id);
    }
}

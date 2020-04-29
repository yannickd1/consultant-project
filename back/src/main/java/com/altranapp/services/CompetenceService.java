package com.altranapp.services;

import com.altranapp.entities.Competence;
import com.altranapp.entities.Consultant;
import com.altranapp.entities.TypeCompetence;
import com.altranapp.repositories.CompetenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompetenceService {

    private CompetenceRepo competenceRepo;

    @Autowired
    CompetenceService(CompetenceRepo competenceRepo) {
        this.competenceRepo = competenceRepo;
    }

    public List<Competence> findAllCompetence() {
        return (List<Competence>) this.competenceRepo.findAll();
    }

    public Optional<Competence> findCompetenceById(Long id) {
        return this.competenceRepo.findById(id);
    }

    public Competence saveCompetence(Competence competence) {
        return this.competenceRepo.save(competence);
    }

    public Boolean deleteCompetenceById(Long id) {
        this.competenceRepo.deleteById(id);
        return this.competenceRepo.existsById(id);
    }

    /*public List<Competence> findAllCompetencesByConsultantId(Long idConsultant){
        Consultant consultant = new Consultant();
        consultant.setId(idConsultant);
        return (List<Competence>) competenceRepo.findByConsultant(consultant);
    }*/

}

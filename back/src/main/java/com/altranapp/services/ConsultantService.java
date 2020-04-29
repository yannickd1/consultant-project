package com.altranapp.services;

import com.altranapp.entities.Consultant;
import com.altranapp.repositories.ConsultantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConsultantService {

    private ConsultantRepo consultantRepo;

    @Autowired
    ConsultantService(ConsultantRepo consultantRepo){this.consultantRepo = consultantRepo;}

    public List<Consultant> findAllConsultant() {
        return (List<Consultant>) this.consultantRepo.findAll();
    }

    public Optional<Consultant> findConsultantById(Long id) {
        return this.consultantRepo.findById(id);
    }

    public Consultant saveConsultant(Consultant consultant) {
        return this.consultantRepo.save(consultant);
    }

    public Boolean deleteConsultantById(Long id) {
        this.consultantRepo.deleteById(id);
        return this.consultantRepo.existsById(id);
    }


    public Integer findNbConsultant() {
        return this.consultantRepo.findNbConsultant();
    }

    /*public List<Consultant> findAllConsultantByCompetenceId(Long idCompetence){
        Competence competence = new Competence();
        competence.setId(idCompetence);
        return (List<Consultant>) consultantRepo.findConsultantByCompetences(competence);
    }*/

}

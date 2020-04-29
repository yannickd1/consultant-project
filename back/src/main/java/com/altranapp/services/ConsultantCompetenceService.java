package com.altranapp.services;


import com.altranapp.entities.Competence;
import com.altranapp.entities.Consultant;
import com.altranapp.entities.ConsultantCompetence;
import com.altranapp.entities.Niveau;
import com.altranapp.repositories.CompetenceRepo;
import com.altranapp.repositories.ConsultantCompetenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConsultantCompetenceService {

    private ConsultantCompetenceRepo consultantCompetenceRepo;

    @Autowired
    public ConsultantCompetenceService(ConsultantCompetenceRepo consultantCompetenceRepo){ this.consultantCompetenceRepo = consultantCompetenceRepo;}

    public List<ConsultantCompetence> findAllConsultantCompetence() {
        return (List<ConsultantCompetence>) this.consultantCompetenceRepo.findAll();
    }

    public Optional<ConsultantCompetence> findConsultantCompetenceById(Long id) {
        return this.consultantCompetenceRepo.findById(id);
    }

    public ConsultantCompetence saveConsultantCompetence(ConsultantCompetence consultantCompetence) {
        return this.consultantCompetenceRepo.save(consultantCompetence);
    }

    public Boolean deleteConsultantCompetenceById(Long id) {
        this.consultantCompetenceRepo.deleteById(id);
        return this.consultantCompetenceRepo.existsById(id);
    }

    public List<ConsultantCompetence> findAllCompetencesByConsultantId(Long idConsultant) {
        Consultant consultant = new Consultant();
        consultant.setId(idConsultant);
        return (List<ConsultantCompetence>) consultantCompetenceRepo.findConsultantCompetenceByConsultant_Id(idConsultant);
    }

    public List<ConsultantCompetence> filterBySkillsAndLevel(Long idCompetence, Long idNiveau) {
        return (List<ConsultantCompetence>) this.consultantCompetenceRepo.findSkillsByLevel(idCompetence, idNiveau);
    }

    public Integer findNbConsultantBySkills(Long id){
        return this.consultantCompetenceRepo.findNbConsultantBySkills(id);
    }

    public List<ConsultantCompetence> listSkills(){
        return this.consultantCompetenceRepo.findAllSkills();
    }

}

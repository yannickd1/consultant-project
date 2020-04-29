package com.altranapp.controllers;


import com.altranapp.entities.Competence;
import com.altranapp.entities.Consultant;
import com.altranapp.entities.ConsultantCompetence;
import com.altranapp.entities.Niveau;
import com.altranapp.services.ConsultantCompetenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consultant-competence")
@CrossOrigin(origins="http://localhost:4200")
public class ConsultantCompetenceController {

    private ConsultantCompetenceService consultantCompetenceService;


    @Autowired
    ConsultantCompetenceController(ConsultantCompetenceService consultantCompetenceService){
        this.consultantCompetenceService = consultantCompetenceService;
    }

    public ResponseEntity<List<ConsultantCompetence>> getAllConsultantCompetence(){
        return new ResponseEntity<>(this.consultantCompetenceService.findAllConsultantCompetence(), HttpStatus.OK);
    }


    public ResponseEntity<List<ConsultantCompetence>> getCompetencesByConsultantId(@PathVariable Long idConsultant){
        return new ResponseEntity<>(this.consultantCompetenceService.findAllCompetencesByConsultantId(idConsultant), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<ConsultantCompetence> postConsultantCompetence(@RequestBody ConsultantCompetence consultantCompetence){
        return new ResponseEntity<>(this.consultantCompetenceService.saveConsultantCompetence(consultantCompetence), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<ConsultantCompetence>> getAllCompetencesByConsultant(@RequestParam(required = false) Long idConsultant){
        if(idConsultant == null || idConsultant.equals("")){
            return this.getAllConsultantCompetence();
        }else{
            return this.getCompetencesByConsultantId(idConsultant);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteConsultantCompetenceById(@PathVariable Long id){
        return new ResponseEntity<>(this.consultantCompetenceService.deleteConsultantCompetenceById(id), HttpStatus.OK);
    }

    @GetMapping("/skills")
    public ResponseEntity<List<ConsultantCompetence>>getSkillsByLevel(@RequestParam Long idCompetence, @RequestParam Long idNiveau){
        return new ResponseEntity<>(this.consultantCompetenceService.filterBySkillsAndLevel(idCompetence, idNiveau), HttpStatus.OK);
    }

    @GetMapping("/nbConsultant/{id}")
    public ResponseEntity<Integer> getNbConsultantBySkills(@PathVariable Long id){
        return new ResponseEntity<>(this.consultantCompetenceService.findNbConsultantBySkills(id), HttpStatus.OK);
    }

    @GetMapping("/list")
        public ResponseEntity<List<ConsultantCompetence>>getAllSkillsTeam(){
        return new ResponseEntity<>(this.consultantCompetenceService.listSkills(), HttpStatus.OK);
    }



}

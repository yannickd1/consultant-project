package com.altranapp.controllers;

import com.altranapp.entities.Competence;
import com.altranapp.entities.TypeCompetence;
import com.altranapp.services.CompetenceService;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/competence")
@CrossOrigin(origins = "http://localhost:4200")
public class CompetenceController {

    private CompetenceService competenceService;

    @Autowired
    CompetenceController(CompetenceService competenceService){
        this.competenceService = competenceService;
    }

    @GetMapping("")
    public ResponseEntity<List<Competence>> getAllCompetence(){
        return new ResponseEntity<>(this.competenceService.findAllCompetence(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Competence> getCompetenceById(@PathVariable Long id){
        return new ResponseEntity<>(this.competenceService.findCompetenceById(id).get(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Competence> postCompetence(@RequestBody Competence competence){
        return new ResponseEntity<>(this.competenceService.saveCompetence(competence), HttpStatus.CREATED);
    }

    @PutMapping("")
    public ResponseEntity<Competence> putCompetence(@RequestBody Competence competence){
        return new ResponseEntity<>(this.competenceService.saveCompetence(competence), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteCompetenceById(@PathVariable Long id){
        return new ResponseEntity<>(this.competenceService.deleteCompetenceById(id), HttpStatus.OK);
    }



}

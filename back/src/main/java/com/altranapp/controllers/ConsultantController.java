package com.altranapp.controllers;

import com.altranapp.entities.Consultant;
import com.altranapp.services.ConsultantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/consultant")
@CrossOrigin(origins = "http://localhost:4200")
public class ConsultantController {

    private ConsultantService consultantService;

    @Autowired
    ConsultantController(ConsultantService consultantService){this.consultantService = consultantService; }

   @GetMapping("")
    public ResponseEntity<List<Consultant>> getAllConsultant(){
        return new ResponseEntity<>(this.consultantService.findAllConsultant(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Consultant> getConsultantById(@PathVariable Long id){
        return new ResponseEntity<>(this.consultantService.findConsultantById(id).get(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Consultant> postConsultant(@RequestBody Consultant consultant){
        return new ResponseEntity<>(this.consultantService.saveConsultant(consultant), HttpStatus.CREATED);
    }

    @PutMapping("")
    public ResponseEntity<Consultant> putConsultant(@RequestBody Consultant consultant){
        return new ResponseEntity<>(this.consultantService.saveConsultant(consultant), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteConsultantById(@PathVariable Long id){
        return new ResponseEntity<>(this.consultantService.deleteConsultantById(id), HttpStatus.OK);
    }

    @GetMapping("/nbConsultant")
    public ResponseEntity<Integer> getNbConsultantBySkills(){
        return new ResponseEntity<>(this.consultantService.findNbConsultant(),HttpStatus.OK);
    }


}

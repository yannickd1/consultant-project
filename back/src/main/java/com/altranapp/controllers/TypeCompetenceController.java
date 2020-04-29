package com.altranapp.controllers;

import com.altranapp.entities.TypeCompetence;
import com.altranapp.services.TypeCompetenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/typecompetence")
@CrossOrigin(origins = "http://localhost:4200")
public class TypeCompetenceController {

    private TypeCompetenceService typeCompetenceService;

    @Autowired
    TypeCompetenceController(TypeCompetenceService typeCompetenceService){
        this.typeCompetenceService = typeCompetenceService;
    }

    @GetMapping("")
    public ResponseEntity<List<TypeCompetence>> getAllTypeCompetence(){
        return new ResponseEntity<>(this.typeCompetenceService.findAllTypeCompetence(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TypeCompetence> getTypeCompetenceById(@PathVariable Long id){
        return new ResponseEntity<>(this.typeCompetenceService.findTypeCompetenceById(id).get(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<TypeCompetence> postTypeCompetence(@RequestBody TypeCompetence typeCompetence){
        return new ResponseEntity<>(this.typeCompetenceService.saveTypeCompetence(typeCompetence), HttpStatus.CREATED);
    }

    @PutMapping("")
    public ResponseEntity<TypeCompetence> putTypeCompetence(@RequestBody TypeCompetence typeCompetence){
        return new ResponseEntity<>(this.typeCompetenceService.saveTypeCompetence(typeCompetence), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteTypeCompetenceById(@PathVariable Long id){
        return new ResponseEntity<>(this.typeCompetenceService.deleteTypeCompetenceById(id), HttpStatus.OK);
    }



}

package com.altranapp.controllers;


import com.altranapp.entities.Niveau;
import com.altranapp.services.NiveauService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/niveau")
@CrossOrigin(origins = "http://localhost:4200")
public class NiveauController {

    private NiveauService niveauService;

    @Autowired
    NiveauController(NiveauService niveauService){this.niveauService = niveauService;}

    @GetMapping("")
    public ResponseEntity<List<Niveau>> getAllNiveau(){
        return new ResponseEntity<>(this.niveauService.findAllNiveau(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Niveau> getNiveauById(@PathVariable Long id){
        return new ResponseEntity<>(this.niveauService.findNiveauById(id).get(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Niveau> postNiveau(@RequestBody Niveau niveau){
        return new ResponseEntity<>(this.niveauService.saveNiveau(niveau), HttpStatus.CREATED);
    }

    @PutMapping("")
    public ResponseEntity<Niveau> putNiveau(@RequestBody Niveau niveau){
        return new ResponseEntity<>(this.niveauService.saveNiveau(niveau), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteNiveauById(@PathVariable Long id){
        return new ResponseEntity<>(this.niveauService.deleteNiveauById(id), HttpStatus.OK);
    }



}

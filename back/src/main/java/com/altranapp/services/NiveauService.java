package com.altranapp.services;


import com.altranapp.entities.Niveau;
import com.altranapp.repositories.NiveauRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NiveauService {

    private NiveauRepo niveauRepo;

    @Autowired
    NiveauService(NiveauRepo niveauRepo){this.niveauRepo = niveauRepo;}

    public List<Niveau> findAllNiveau(){
        return (List<Niveau>) this.niveauRepo.findAll();
    }

    public Optional<Niveau> findNiveauById(Long id){
        return this.niveauRepo.findById(id);
    }

    public Niveau saveNiveau(Niveau niveau){
        return this.niveauRepo.save(niveau);
    }

    public Boolean deleteNiveauById(Long id){
        this.niveauRepo.deleteById(id);
        return this.niveauRepo.existsById(id);
    }
}

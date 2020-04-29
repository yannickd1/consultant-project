package com.altranapp.repositories;


import com.altranapp.entities.Niveau;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NiveauRepo extends CrudRepository<Niveau, Long> {
}

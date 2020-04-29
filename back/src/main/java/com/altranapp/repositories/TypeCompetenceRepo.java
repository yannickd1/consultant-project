package com.altranapp.repositories;

import com.altranapp.entities.TypeCompetence;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeCompetenceRepo extends CrudRepository<TypeCompetence, Long> {
}

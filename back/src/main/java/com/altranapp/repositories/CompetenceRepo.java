package com.altranapp.repositories;

import com.altranapp.entities.Competence;
import com.altranapp.entities.Consultant;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompetenceRepo extends CrudRepository<Competence, Long> {

}

package com.altranapp.repositories;

import com.altranapp.entities.Competence;
import com.altranapp.entities.Consultant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsultantRepo extends CrudRepository<Consultant, Long> {

    /*Requête permettant de récupérer le nombr ede consultant par compétence*/
    @Query(value = "SELECT COUNT(id)FROM Consultant", nativeQuery = true)
    Integer findNbConsultant();

}

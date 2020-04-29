package com.altranapp.repositories;

import com.altranapp.entities.Competence;
import com.altranapp.entities.Consultant;
import com.altranapp.entities.Niveau;
import org.springframework.data.jpa.repository.Query;
import com.altranapp.entities.ConsultantCompetence;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;


import java.util.List;

@Repository
public interface ConsultantCompetenceRepo extends CrudRepository<ConsultantCompetence, Long> {


            /*Récupération des compétences d'un consultant par son id*/
            List<ConsultantCompetence> findConsultantCompetenceByConsultant_Id(Long consultant_id);
            
            /*Requête permettant de filtrer les compétences des consultants par leurs niveaux de compétences*/
            @Query(value="SELECT *  FROM Consultant_Competence WHERE competence_id = :competenceId AND niveau_id = :niveauId", nativeQuery = true)
            List<ConsultantCompetence>findSkillsByLevel(@Param("competenceId") Long competenceId, @Param("niveauId") Long niveauId );

            /*Requête permettant de récupérer le nombre de consultant par compétence*/
            @Query(value = "SELECT COUNT(DISTINCT(consultant_id))FROM Consultant_Competence WHERE competence_id = :competenceId", nativeQuery = true)
            Integer findNbConsultantBySkills(@Param("competenceId") Long competenceId);

            /*Requête permettant de récupérer la liste des compétences des consultants*/
            @Query(value = "SELECT * FROM Consultant_Competence", nativeQuery = true)
            List<ConsultantCompetence> findAllSkills();






}

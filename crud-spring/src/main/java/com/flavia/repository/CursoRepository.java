package com.flavia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.flavia.controller.model.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
    
}

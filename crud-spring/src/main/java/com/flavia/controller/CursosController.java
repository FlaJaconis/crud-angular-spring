package com.flavia.controller;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flavia.controller.model.Curso;
import com.flavia.repository.CursoRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cursos")
@AllArgsConstructor // Cria o construtor em segundo plano
//@Component //cria uma instância e gerencia seu ciclo de vida
public class CursosController {

    private final CursoRepository cursoRepository; // usa-se "final" quando não vai mudar a instância
   
    // public CursosController(CursoRepository cursoRepository) {
    //     this.cursoRepository = cursoRepository;
    // }


    @GetMapping //ou @RequestMapping(method= RequestMethod.GET)
    public List<Curso> list(){
        return cursoRepository.findAll(); //findAll = SELECT * - não é boa prática selecionar tudo sem claúsulas "WHERE" (agora é apenas para estudo)
    }
}

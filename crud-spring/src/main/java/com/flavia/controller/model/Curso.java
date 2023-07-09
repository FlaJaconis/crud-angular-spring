package com.flavia.controller.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

//@Getter
//@Setter 
//...ou
@Data //gera get, set e toString
@Entity//Pacote de Persistência JPA - //@Table (name = "NomeTabela") - se a tabela já existir com outro nome diferente da classe
public class Curso {

    @Id //(anotação de chave primária)
    @GeneratedValue(strategy = GenerationType.AUTO) //para incrementar automaticamente
    private Long id;

    @Column(length = 200, nullable = false)// pode não colocar porque é implícito, mas especificar tem mais vantangens como especificar reserva do espaço para os caracteres da informçao(dentro dos parênteses)
    private String nome;

    @Column(length = 10, nullable = false)
    private String categoria;

}

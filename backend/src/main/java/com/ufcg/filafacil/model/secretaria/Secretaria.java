package com.ufcg.filafacil.model.secretaria;

import javax.persistence.*;

@Entity
public class Secretaria {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "nome", unique = true)
    private String nome;

    private String senha;



}

package com.ufcg.filafacil.DTO;

import java.time.LocalDate;

public class LoteDTO {

    private String nomeVacina;

    private int qtdDoses;

    private LocalDate dataDeValidade;

    public int getQtdDoses() {
        return qtdDoses;
    }

    public LocalDate getDataDeValidade() {
        return dataDeValidade;
    }
    public String getNomeVacina() {return nomeVacina;}
  
}
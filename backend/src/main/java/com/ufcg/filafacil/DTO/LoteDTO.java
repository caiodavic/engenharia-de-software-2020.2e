package com.ufcg.filafacil.DTO;

import java.time.LocalDate;

public class LoteDTO {

    private int qtdDoses;

    private LocalDate dataDeValidade;

    public int getQtdDoses() {
        return qtdDoses;
    }

    public LocalDate getDataDeValidade() {
        return dataDeValidade;
    }


}
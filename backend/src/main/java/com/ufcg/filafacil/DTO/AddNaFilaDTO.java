package com.ufcg.filafacil.DTO;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class AddNaFilaDTO {

    private String codigoPosto;

    public AddNaFilaDTO() {
    }

    public String getCodigoPosto() {
        return codigoPosto;
    }
}

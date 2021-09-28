package com.ufcg.filafacil.service;

import com.ufcg.filafacil.DTO.VacinaDTO;
import com.ufcg.filafacil.model.vacina.Vacina;

import java.util.List;

public interface VacinaService {

    public Vacina cadastraVacina(VacinaDTO vacinaDTO);
    public List<Vacina> listaVacina();
    public Vacina getVacinaById(String id);
}

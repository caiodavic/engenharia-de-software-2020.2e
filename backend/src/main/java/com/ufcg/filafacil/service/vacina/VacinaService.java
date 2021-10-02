package com.ufcg.filafacil.service.vacina;

import com.ufcg.filafacil.DTO.VacinaDTO;
import com.ufcg.filafacil.model.vacina.Vacina;

import java.util.List;

public interface VacinaService {

    Vacina cadastraVacina(VacinaDTO vacinaDTO);

    List<Vacina> listaVacina();

    Vacina getVacinaById(String id);
}

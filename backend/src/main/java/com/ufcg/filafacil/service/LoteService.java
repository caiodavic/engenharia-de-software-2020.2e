package com.ufcg.filafacil.service;

import com.ufcg.filafacil.DTO.LoteDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.model.vacina.Lote;

import java.util.List;

public interface LoteService {

    Lote cadastraLote(LoteDTO Lote);

    List<Lote> listaLote();

    Lote getLoteById(long id);

    void alocaPosto(PostoDeVacinacao posto, long id);

    List<Lote> listaLoteDisponiveis();
}

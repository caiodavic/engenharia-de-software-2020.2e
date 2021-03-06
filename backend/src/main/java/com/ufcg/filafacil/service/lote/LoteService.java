package com.ufcg.filafacil.service.lote;

import com.ufcg.filafacil.DTO.LoteDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.model.vacina.Lote;

import java.util.List;

public interface LoteService {

    Lote cadastraLote(LoteDTO Lote);

    List<Lote> listaLote();

    Lote getLoteById(long id);

    void alocaPosto(long idPosto, long id);

    List<Lote> listaLoteDisponiveis();
}

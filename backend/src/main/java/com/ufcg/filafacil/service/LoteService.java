package com.ufcg.filafacil.service;

import com.ufcg.filafacil.DTO.LoteDTO;
import com.ufcg.filafacil.model.vacina.Lote;

import java.util.List;

public interface LoteService {

    public Lote cadastraLote(LoteDTO Lote);

    public List<Lote> listaLote();

    public Lote getLoteById(long id);

    List<Lote> listaLoteDisponiveis();
}

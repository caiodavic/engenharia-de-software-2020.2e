package com.ufcg.filafacil.service;

import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.model.vacina.Lote;

import java.util.List;

public interface PostoDeVacinacaoService {

    PostoDeVacinacao cadastraPostoVacinacao(PostoDeVacinacaoDTO PostoDTO);

    PostoDeVacinacao getPostoById(long id);

    List<PostoDeVacinacao> listaPostoDeVacinacao();

    String alocaLoteNoPosto(long id, long idPosto);

    List<Lote> listaLotesPosto(long idPosto);

    String[] addPacienteNaFila(long idPosto);

    String registrarVacinacao(long idPosto, String senhaVacinacao);
}

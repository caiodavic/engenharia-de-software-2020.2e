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

    int addPacienteNaFila(String codigoPosto);

    String gerarCodigoDoPosto(long idPosto);

//  Precisamos receber também o token do Posto de Vacinação Autenticado no qual essa pessoa está sendo vacinada
    String confirmarVacinacao(int senhaPaciente);
}

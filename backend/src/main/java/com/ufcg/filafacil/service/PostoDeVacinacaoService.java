package com.ufcg.filafacil.service;

import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;

import java.util.List;

public interface PostoDeVacinacaoService {

    PostoDeVacinacao cadastraPostoVacinacao(PostoDeVacinacaoDTO PostoDTO);

    PostoDeVacinacao getPostoById(long id);

    List<PostoDeVacinacao> listaPostoDeVacinacao();
}

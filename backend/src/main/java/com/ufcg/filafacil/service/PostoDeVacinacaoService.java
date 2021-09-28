package com.ufcg.filafacil.service;

import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;

public interface PostoDeVacinacaoService {
    PostoDeVacinacao cadastraPostoVacinacao(PostoDeVacinacaoDTO PostoDTO);
     PostoDeVacinacao getPostoById(long id);
}

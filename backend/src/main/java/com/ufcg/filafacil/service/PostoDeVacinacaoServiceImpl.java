package com.ufcg.filafacil.service;

import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.repository.PostoDeVacinacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class PostoDeVacinacaoServiceImpl implements PostoDeVacinacaoService{

    @Autowired
    private PostoDeVacinacaoRepository postoRepository;

    @Override
    public PostoDeVacinacao cadastraPostoVacinacao(PostoDeVacinacaoDTO postoDTO) {
        Optional <PostoDeVacinacao> posto = postoRepository.findById(postoDTO.getId());
        if(posto.isPresent()) throw new IllegalArgumentException("Id para Posto de Vacinação já utilizado")
    }

    @Override
    public PostoDeVacinacao getPostoById(long id) {
        return this.postoRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Posto não cadastrado"));
    }
}

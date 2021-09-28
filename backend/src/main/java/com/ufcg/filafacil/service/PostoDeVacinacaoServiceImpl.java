package com.ufcg.filafacil.service;

import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.model.vacina.Lote;
import com.ufcg.filafacil.repository.PostoDeVacinacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostoDeVacinacaoServiceImpl implements PostoDeVacinacaoService{

    @Autowired
    private PostoDeVacinacaoRepository postoRepository;

    @Autowired
    private LoteService loteService;

    @Override
    public PostoDeVacinacao cadastraPostoVacinacao(PostoDeVacinacaoDTO postoDTO) {
        Optional <PostoDeVacinacao> posto = postoRepository.findById(postoDTO.getId());
        if(posto.isPresent()) throw new IllegalArgumentException("Posto de Vacinação já cadastrado!");

        PostoDeVacinacao newPosto =  new PostoDeVacinacao(postoDTO.getNome(),
                                                                postoDTO.getEmail(),
                                                                postoDTO.getTelefone(),
                                                                postoDTO.getEnderecoDTO().toEndereco(),
                                                                postoDTO.getId());


        this.salvaPostoDeVacinacao(newPosto);
        return this.getPostoById(postoDTO.getId());
    }

    @Override
    public PostoDeVacinacao getPostoById(long id) {
        return this.postoRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Posto não cadastrado!"));
    }

    @Override
    public List<PostoDeVacinacao> listaPostoDeVacinacao() {
        List<PostoDeVacinacao> postos = postoRepository.findAll();

        if(postos.isEmpty()){
            throw new IllegalArgumentException("Não existem postos de vacinação cadastrados");
        }
        return postos;
    }

    @Override
    public String alocaLoteNoPosto(long id, long idPosto) {
        Lote lote = this.loteService.getLoteById(id);
        if(lote.getPostoDeVacinacao() != null){
            throw new IllegalArgumentException("Lote já alocado anteriormente");
        }

        PostoDeVacinacao posto = this.getPostoById(idPosto);
        posto.addLotesDeVacina(lote);
        loteService.alocaPosto(posto, id);
        this.salvaPostoDeVacinacao(posto);

        String alocado = "Lote " + lote.getId() + "alocado ao posto " + posto.getNome() + ".";
        return alocado;
    }

    private void salvaPostoDeVacinacao(PostoDeVacinacao posto){
        this.postoRepository.save(posto);
    }


}

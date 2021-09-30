package com.ufcg.filafacil.service.posto_vacina;

import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.model.vacina.Lote;
import com.ufcg.filafacil.repository.PostoDeVacinacaoRepository;
import com.ufcg.filafacil.service.lote.LoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
class PostoDeVacinacaoServiceImpl implements PostoDeVacinacaoService {

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
                                                                postoDTO.getId(),
                                                                postoDTO.getSenha());


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
        return postos;
    }

    @Override
    public String alocaLoteNoPosto(long id, long idPosto) {
        Lote lote = this.loteService.getLoteById(id);
        if (lote.getPostoDeVacinacao() != null){
            throw new IllegalArgumentException("Lote já alocado anteriormente");
        }

        PostoDeVacinacao posto = this.getPostoById(idPosto);
        posto.addLotesDeVacina(lote);
        loteService.alocaPosto(posto, id);
        this.salvaPostoDeVacinacao(posto);

        String alocado = "Lote " + lote.getId() + "alocado ao posto " + posto.getNome() + ".";
        return alocado;
    }

    @Override
    public List<Lote> listaLotesPosto(long idPosto) {
        PostoDeVacinacao posto = this.getPostoById(idPosto);
        return posto.getLotesDeVacina();
    }

    @Override
    public Optional<PostoDeVacinacao> findByEmailAndSenha(String email, String senha) {
        return postoRepository.findByEmailAndSenha(email, senha);
    }

    private void salvaPostoDeVacinacao(PostoDeVacinacao posto){
        this.postoRepository.save(posto);
    }
}

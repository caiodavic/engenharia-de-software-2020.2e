package com.ufcg.filafacil.service.posto_vacina;

import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.model.vacina.Lote;
import com.ufcg.filafacil.repository.PostoDeVacinacaoRepository;
import com.ufcg.filafacil.service.lote.LoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
class PostoDeVacinacaoServiceImpl implements PostoDeVacinacaoService {

    @Autowired
    private PostoDeVacinacaoRepository postoRepository;

    @Autowired
    private LoteService loteService;

    @Override
    @Transactional
    public PostoDeVacinacao cadastraPostoVacinacao(PostoDeVacinacaoDTO postoDTO) {
        Optional<PostoDeVacinacao> posto = postoRepository.findById(postoDTO.getId());
        if (posto.isPresent())
            throw new IllegalArgumentException("Posto de Vacinação já cadastrado!");

        PostoDeVacinacao newPosto = new PostoDeVacinacao(postoDTO.getNome(), postoDTO.getEmail(),
                postoDTO.getTelefone(), postoDTO.getEndereco(), postoDTO.getId(), postoDTO.getSenha());


        this.salvaPostoDeVacinacao(newPosto);
        return this.getPostoById(postoDTO.getId());
    }

    @Override
    public PostoDeVacinacao getPostoById(long id) {
        return this.postoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Posto não cadastrado!"));
    }

    @Override
    public List<PostoDeVacinacao> listaPostoDeVacinacao() {
        List<PostoDeVacinacao> postos = postoRepository.findAll();
        return postos;
    }

    @Override
    @Transactional
    public String alocaLoteNoPosto(long id, long idPosto) {
        Lote lote = this.loteService.getLoteById(id);
        if (lote.getPostoDeVacinacao() != -1) {
            throw new IllegalArgumentException("Lote já alocado anteriormente");
        }

        PostoDeVacinacao posto = this.getPostoById(idPosto);
        posto.addLotesDeVacina(lote);
        loteService.alocaPosto(idPosto, id);
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
    @Transactional
    public int addPacienteNaFila(String codigoPosto) {
        PostoDeVacinacao postoDeVacinacao = this.getPostoByCodigo(codigoPosto);
        int senhaPaciente = -1;
        if (postoDeVacinacao.getCodigosPosto().contains(codigoPosto)) {
            if (postoDeVacinacao.getFilaPacientes().size() < postoDeVacinacao.getQtdVacina()) {
                senhaPaciente = postoDeVacinacao.addPacienteNaFila();
                postoDeVacinacao.removerCodigo(codigoPosto);
            } else {
                throw new IllegalArgumentException("Estoque de vacinas finalizado!");
            }
        } else {
            throw new IllegalArgumentException("Codigo inválido!");
        }

        this.salvaPostoDeVacinacao(postoDeVacinacao);

        return senhaPaciente;
    }

    public PostoDeVacinacao getPostoByCodigo(String codigoPosto) {
        List<PostoDeVacinacao> postos = this.listaPostoDeVacinacao();

        for (PostoDeVacinacao p : postos) {
            if(p.getCodigosPosto().contains(codigoPosto)){
                return p;
            }
        }
        throw new IllegalArgumentException("Código inválido");
    }

    @Override
    @Transactional
    // Precisamos receber também o token do Posto de Vacinação Autenticado no qual
    // essa pessoa está sendo vacinada(Estou recebendo o id do Posto diretamente)
    public String confirmarVacinacao(int senhaPaciente, long idPosto) {
        PostoDeVacinacao postoDeVacinacao = this.getPostoById(idPosto);
        String vacinaAplicada = postoDeVacinacao.confirmarVacinacao(senhaPaciente);
        this.salvaPostoDeVacinacao(postoDeVacinacao);
        return vacinaAplicada;
    }

    @Override
    @Transactional
    public String gerarCodigoDoPosto(long idPosto) {
        PostoDeVacinacao postoDeVacinacao = this.getPostoById(idPosto);
        String codigo = postoDeVacinacao.gerarCodigoPosto();
        this.salvaPostoDeVacinacao(postoDeVacinacao);
        return codigo;
    }

    private void salvaPostoDeVacinacao(PostoDeVacinacao posto) {
        this.postoRepository.save(posto);
    }

    @Override
    public Optional<PostoDeVacinacao> findByEmailAndSenha(String email, String senha) {
        return postoRepository.findByEmailAndSenha(email, senha);
    }
}

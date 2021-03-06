package com.ufcg.filafacil.service.posto_vacina;

import com.ufcg.filafacil.DTO.PostoDeVacinacaoDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.model.vacina.Lote;

import java.util.List;
import java.util.Optional;

public interface PostoDeVacinacaoService {

    PostoDeVacinacao cadastraPostoVacinacao(PostoDeVacinacaoDTO PostoDTO);

    PostoDeVacinacao getPostoById(long id);

    List<PostoDeVacinacao> listaPostoDeVacinacao();

    String alocaLoteNoPosto(long id, long idPosto);

    List<Lote> listaLotesPosto(long idPosto);

    int addPacienteNaFila(String codigoPosto);

    String gerarCodigoDoPosto(long idPosto);

    String confirmarVacinacao(int senhaPaciente, long idPosto);

    Optional<PostoDeVacinacao> findByEmailAndSenha(String email, String senha);

    int posicaoAtual(Integer idPosto);

    long getIdPostoByCodigo(String codigoPosto);
}

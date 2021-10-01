package com.ufcg.filafacil.repository;

import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


public interface PostoDeVacinacaoRepository extends JpaRepository<PostoDeVacinacao, Long> {

    Optional<PostoDeVacinacao> findByEmailAndSenha(String email, String senha);
}

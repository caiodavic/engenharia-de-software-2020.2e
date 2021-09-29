package com.ufcg.filafacil.repository;

import com.ufcg.filafacil.model.secretaria.Secretaria;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SecretariaRepository extends JpaRepository<Secretaria, Long> {

    Optional<Secretaria> findByNomeAndSenha(String nome, String senha);
}

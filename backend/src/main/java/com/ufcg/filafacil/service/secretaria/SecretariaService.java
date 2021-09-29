package com.ufcg.filafacil.service.secretaria;

import com.ufcg.filafacil.model.secretaria.Secretaria;

import java.util.Optional;

public interface SecretariaService {

    Optional<Secretaria> findByNomeAndSenha(String nome, String senha);
}

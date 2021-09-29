package com.ufcg.filafacil.service.secretaria;

import com.ufcg.filafacil.model.secretaria.Secretaria;
import com.ufcg.filafacil.repository.SecretariaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
class SecretariaServiceImpl implements SecretariaService {

    @Autowired
    private SecretariaRepository secretariaRepository;

    @Override
    public Optional<Secretaria> findByNomeAndSenha(String nome, String senha) {
        return secretariaRepository.findByNomeAndSenha(nome, senha);
    }
}

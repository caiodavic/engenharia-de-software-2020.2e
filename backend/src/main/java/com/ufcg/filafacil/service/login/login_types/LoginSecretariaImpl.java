package com.ufcg.filafacil.service.login.login_types;

import com.ufcg.filafacil.model.secretaria.Secretaria;
import com.ufcg.filafacil.service.secretaria.SecretariaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginSecretariaImpl implements BasicLoginTypeService {

    @Autowired
    private SecretariaService secretariaService;

    @Override
    public Long verificarCredenciais(String login, String password) throws IllegalArgumentException {
        Optional<Secretaria> secretaria = secretariaService.findByNomeAndSenha(login, password);

        if (secretaria.isEmpty()) {
            throw new IllegalArgumentException();
        }

        return secretaria.get().getId();
    }
}

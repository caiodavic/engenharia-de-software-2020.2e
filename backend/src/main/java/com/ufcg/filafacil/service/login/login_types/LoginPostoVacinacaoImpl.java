package com.ufcg.filafacil.service.login.login_types;

import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.service.posto_vacina.PostoDeVacinacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginPostoVacinacaoImpl implements BasicLoginTypeService {

    @Autowired
    private PostoDeVacinacaoService postoDeVacinacaoService;


    @Override
    public void verificarCredenciais(String login, String password) throws IllegalArgumentException {
        Optional<PostoDeVacinacao> postoDeVacinacao = postoDeVacinacaoService.findByEmailAndSenha(login, password);

        if (postoDeVacinacao.isEmpty()) {
            throw new IllegalArgumentException();
        }
    }
}

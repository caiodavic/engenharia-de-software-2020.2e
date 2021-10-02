package com.ufcg.filafacil.service.login;

import com.ufcg.filafacil.service.login.login_types.BasicLoginTypeService;
import com.ufcg.filafacil.service.login.login_types.LoginPostoVacinacaoImpl;
import com.ufcg.filafacil.service.login.login_types.LoginSecretariaImpl;
import com.ufcg.filafacil.service.token_authentication.TokenAuthenticateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private TokenAuthenticateService tokenService;

    @Autowired
    private LoginSecretariaImpl loginSecretaria;

    @Autowired
    private LoginPostoVacinacaoImpl loginPostoVacinacao;

    @Override
    public String realizarLogin(String login, String senha, String tipoLogin) {
        String tipoLoginUpperCase = tipoLogin.toUpperCase();
        BasicLoginTypeService loginTypeService = loginTypeFactory(tipoLoginUpperCase);
        Long entityId = loginTypeService.verificarCredenciais(login, senha);
        return tokenService.createToken(tipoLoginUpperCase, entityId);
    }

    private BasicLoginTypeService loginTypeFactory(String tipoLogin) {
        if (tipoLogin.equals("SECRETARIA")) {
            return loginSecretaria;
        }

        if (tipoLogin.equals("POSTO_VACINACAO")) {
            return loginPostoVacinacao;
        }

        throw new IllegalArgumentException();
    }

}

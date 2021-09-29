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

    @Override
    public String realizarLogin(String login, String senha, String tipoLogin) {
        BasicLoginTypeService loginTypeService = loginTypeFactory(tipoLogin);
        loginTypeService.verificarCredenciais(login, senha);
        return tokenService.createToken(tipoLogin);
    }

    private BasicLoginTypeService loginTypeFactory(String tipoLogin) {
        if (tipoLogin.equals("SECRETARIA")) {
            return new LoginSecretariaImpl();
        }

        if (tipoLogin.equals("POSTO_VACINACAO")) {
            return new LoginPostoVacinacaoImpl();
        }

        throw new IllegalArgumentException();
    }

}

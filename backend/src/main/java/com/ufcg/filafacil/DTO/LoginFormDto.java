package com.ufcg.filafacil.DTO;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class LoginFormDto {
    private String login;

    private String senha;

    private String tipoLogin;

    public String getLogin() {
        return login;
    }

    public String getSenha() {
        return senha;
    }

    public String getTipoLogin() {
        return tipoLogin;
    }
}

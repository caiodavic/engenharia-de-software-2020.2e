package com.ufcg.filafacil.service.login.login_types;

public interface BasicLoginTypeService {
    void verificarCredenciais (String username, String password) throws IllegalArgumentException;

}

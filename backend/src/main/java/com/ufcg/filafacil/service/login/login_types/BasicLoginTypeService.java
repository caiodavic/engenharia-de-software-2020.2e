package com.ufcg.filafacil.service.login.login_types;

public interface BasicLoginTypeService {
    Long verificarCredenciais (String username, String password) throws IllegalArgumentException;

}

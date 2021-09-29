package com.ufcg.filafacil.service.token_authentication;


import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;

public interface TokenAuthenticateService {
    String createToken(String tipoLogin);

    Authentication getAuthentication(HttpServletRequest request);
}
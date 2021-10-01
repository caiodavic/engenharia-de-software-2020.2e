package com.ufcg.filafacil.utils;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

public class AuthenticatedUtils {

    private AuthenticatedUtils () {
    }

    public static Integer getEntityId() {
        UsernamePasswordAuthenticationToken auth = (UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        return (Integer) auth.getPrincipal();
    }
}

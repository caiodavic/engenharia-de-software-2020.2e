package com.ufcg.filafacil.security;


import com.ufcg.filafacil.service.token_authentication.TokenAuthenticateService;
import org.springframework.context.ApplicationContext;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;


public class JWTAuthenticationFilter extends GenericFilterBean {

    private final TokenAuthenticateService tokenAuthenticateService;

    public JWTAuthenticationFilter(ApplicationContext ctx) {
        this.tokenAuthenticateService = ctx.getBean(TokenAuthenticateService.class);
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain)
            throws IOException, ServletException {

        Authentication authentication = tokenAuthenticateService
                .getAuthentication((HttpServletRequest) request);

        SecurityContextHolder.getContext().setAuthentication(authentication);
        filterChain.doFilter(request, response);

    }

}

package com.ufcg.filafacil.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf().disable().authorizeRequests()
                // Remover o "*" quando for testar com o frontend
                .antMatchers("/*", "/v2/api-docs", "/configuration/**", "/swagger*/**", "/webjars/**")
                .permitAll()
                .antMatchers("/home").permitAll()
                .antMatchers(HttpMethod.POST, "/api/login/").permitAll()
                .anyRequest().authenticated()
                .and()
//                 filtra outras requisições para verificar a presença do JWT no header
                .addFilterBefore(tokenAuthrozationFilter(),
                        UsernamePasswordAuthenticationFilter.class);
    }

    private JWTAuthenticationFilter tokenAuthrozationFilter() throws Exception {
        return new JWTAuthenticationFilter(getApplicationContext());
    }
}

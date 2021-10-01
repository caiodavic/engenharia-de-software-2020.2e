package com.ufcg.filafacil.service.token_authentication;

import com.ufcg.filafacil.service.posto_vacina.PostoDeVacinacaoService;
import com.ufcg.filafacil.service.secretaria.SecretariaService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Service
class TokenAuthenticateServiceImpl implements TokenAuthenticateService {

    private static final long EXPIRATION_TIME = 86_400_000;
    private static final String SECRET = "16bd8dfba2191761b65d5a795806e530";
    private static final String TOKEN_PREFIX = "Bearer";
    private static final String HEADER_STRING = "Authorization";

    @Override
    public String createToken(String tipoLogin, Long entityId) {
        return Jwts.builder()
                .claim("tipoLogin", tipoLogin)
                .claim("entityId", entityId)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }

    @Override
    public Authentication getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(HEADER_STRING);

        if (token != null) {
            Claims claims = Jwts.parser()
                    .setSigningKey(SECRET)
                    .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                    .getBody();

            String tipoLogin = claims.get("tipoLogin",String.class);
            Integer entityId = claims.get("entityId", Integer.class);

            if (tipoLogin != null) {
                List<SimpleGrantedAuthority> authorities = new ArrayList<>();
                authorities.add(new SimpleGrantedAuthority("ROLE_" + tipoLogin.toUpperCase()));
                return new UsernamePasswordAuthenticationToken(entityId, "", authorities);
            }

        }
        return null;
    }
}

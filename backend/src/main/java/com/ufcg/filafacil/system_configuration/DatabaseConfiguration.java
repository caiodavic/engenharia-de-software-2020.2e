package com.ufcg.filafacil.system_configuration;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class DatabaseConfiguration {
    private final Dotenv dotenv = Dotenv.configure()
            .ignoreIfMissing()
            .load();

    @Bean
    public DataSource getDataSource() {
        String DB_URL = dotenv.get("DB_URL");
        String DB_PASSWORD = dotenv.get("DB_PASSWORD");
        String DB_USER = dotenv.get("DB_USERNAME");

        return DataSourceBuilder.create()
                .driverClassName("org.postgresql.Driver")
                .url(DB_URL)
                .username(DB_USER)
                .password(DB_PASSWORD)
                .build();
    }
}

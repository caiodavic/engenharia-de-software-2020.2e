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
        //String DB_URL = dotenv.get("DB_URL");
        //String DB_PASSWORD = dotenv.get("DB_PASSWORD");
        //String DB_USER = dotenv.get("DB_USERNAME");
    	String DB_URL = "jdbc:postgresql://ec2-54-159-35-35.compute-1.amazonaws.com:5432/d4ma0q1parj946\r\n";
        String DB_PASSWORD = "ritprcewbwanqx";
        String DB_USER = "fc7620f6b068e6be980a4d0a59d5f12bf6ffb150121f182d382cd5c83e3c4695";
    	

        return DataSourceBuilder.create()
                .driverClassName("org.postgresql.Driver")
                .url(DB_URL)
                .username(DB_USER)
                .password(DB_PASSWORD)
                .build();
    }
}

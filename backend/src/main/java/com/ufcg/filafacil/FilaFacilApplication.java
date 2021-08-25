package com.ufcg.filafacil;

import com.ufcg.filafacil.system_configuration.DatabaseConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FilaFacilApplication {

	public static void main(String[] args) {
		SpringApplication.run(FilaFacilApplication.class, args);
	}

}

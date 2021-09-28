package com.ufcg.filafacil.repository;

import com.ufcg.filafacil.model.vacina.Vacina;
import org.springframework.data.jpa.repository.JpaRepository;


public interface VacinaRepository extends JpaRepository<Vacina, String> {
}
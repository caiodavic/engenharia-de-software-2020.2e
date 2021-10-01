package com.ufcg.filafacil.repository;

import com.ufcg.filafacil.model.vacina.Vacina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface VacinaRepository extends JpaRepository<Vacina, String> {
}
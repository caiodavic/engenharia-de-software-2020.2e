package com.ufcg.filafacil.repository;

import com.ufcg.filafacil.model.vacina.Lote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


public interface LoteRepository extends JpaRepository<Lote,Long> {
}
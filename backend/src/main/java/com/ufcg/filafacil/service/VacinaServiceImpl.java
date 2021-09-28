package com.ufcg.filafacil.service;

import com.ufcg.filafacil.DTO.VacinaDTO;
import com.ufcg.filafacil.model.posto_vacinacao.PostoDeVacinacao;
import com.ufcg.filafacil.model.vacina.Vacina;
import com.ufcg.filafacil.repository.VacinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VacinaServiceImpl implements  VacinaService{
    @Autowired
    private VacinaRepository vacinaRepository;

    public Vacina cadastraVacina(VacinaDTO vacinaDTO){
        Optional<Vacina> vacina = vacinaRepository.findById(vacinaDTO.getnomeVacina());
        if(vacina.isPresent()) throw new IllegalArgumentException("Vacina já cadastrada!");

        Vacina newVacina=  new Vacina(vacinaDTO.getnomeVacina(),
                vacinaDTO.getDiasEntreDoses(),
                vacinaDTO.getNumDosesNecessarias());


        this.salvaVacina(newVacina);
        return this.getVacinaById(vacinaDTO.getnomeVacina());
    }

    public List<Vacina> listaVacina(){
        List<Vacina> vacinas = vacinaRepository.findAll();
        if(vacinas.isEmpty()){
            throw new IllegalArgumentException("Não existem vacinas cadastradas");
        }

        return vacinas;
    }

    public Vacina getVacinaById(String id){
        return this.vacinaRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Vacina não cadastrada!"));
    }

    private void salvaVacina(Vacina vacina){
        this.vacinaRepository.save(vacina);
    }

}

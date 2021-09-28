package com.ufcg.filafacil.model.posto_vacinacao;

import com.ufcg.filafacil.model.vacina.Lote;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class PostoDeVacinacao {

    @Id
    private long id;

    private String nome;

    private String email;

    private String telefone;

    @OneToMany
    private List<Lote> lotesDeVacina;

    @OneToOne
    private Endereco endereco;

    public PostoDeVacinacao(String nome, String email, String telefone, Endereco endereco, long id){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.lotesDeVacina = new ArrayList<>();

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public List<Lote> getLotesDeVacina() {
        return lotesDeVacina;
    }

    public void setLotesDeVacina(List<Lote> lotesDeVacina) {
        this.lotesDeVacina = lotesDeVacina;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PostoDeVacinacao that = (PostoDeVacinacao) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


}

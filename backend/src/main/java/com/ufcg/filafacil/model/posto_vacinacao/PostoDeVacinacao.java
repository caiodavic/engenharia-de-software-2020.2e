package com.ufcg.filafacil.model.posto_vacinacao;

import com.ufcg.filafacil.model.vacina.Lote;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@Entity
public class PostoDeVacinacao {

    @Id
    private long id;

    private String nome;

    @Column(name = "email", unique = true)
    private String email;

    private String telefone;

    private String senha;

    @OneToMany
    private List<Lote> lotesDeVacina;

    @OneToOne
    private Endereco endereco;

    public PostoDeVacinacao() {
    }

    public PostoDeVacinacao(String nome, String email, String telefone, Endereco endereco, long id, String senha){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.lotesDeVacina = new ArrayList<>();
        this.senha = senha;

    }

    public long getId() {
        return id;
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

    public void addLotesDeVacina(Lote lote) {
        this.lotesDeVacina.add(lote);

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


    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}

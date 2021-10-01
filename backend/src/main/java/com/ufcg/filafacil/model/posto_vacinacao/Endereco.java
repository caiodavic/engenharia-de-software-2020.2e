package com.ufcg.filafacil.model.posto_vacinacao;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cidade;

    private String estado;

    private String bairro;

    private String rua;

    private String numero;

    private String cep;

    private String complemento;

    public Endereco() {
    }

    public Endereco(String cidade, String estado, String bairro, String rua, String numero, String cep,
                    String complemento) {
        super();
        this.cidade = cidade;
        this.estado = estado;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.cep = cep;
        this.complemento = complemento;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Endereco endereco = (Endereco) o;
        return cidade.equals(endereco.cidade) && estado.equals(endereco.estado) && bairro.equals(endereco.bairro) && rua.equals(endereco.rua) && numero.equals(endereco.numero) && cep.equals(endereco.cep) && complemento.equals(endereco.complemento);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cidade, estado, bairro, rua, numero, cep, complemento);
    }
}

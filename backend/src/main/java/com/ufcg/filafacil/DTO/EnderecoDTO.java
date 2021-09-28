package com.ufcg.filafacil.DTO;

import com.ufcg.filafacil.model.posto_vacinacao.Endereco;

public class EnderecoDTO {

    private final String cidade;

    private final String estado;

    private final String bairro;

    private final String rua;

    private final String numero;

    private final String cep;

    private final String complemento;

    public EnderecoDTO(String cidade, String estado, String bairro, String rua, String numero, String cep, String complemento) {
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

    public String getEstado() {
        return estado;
    }

    public String getBairro() {
        return bairro;
    }

    public String getRua() {
        return rua;
    }

    public String getNumero() {
        return numero;
    }

    public String getCep() {
        return cep;
    }

    public String getComplemento() {
        return complemento;
    }

    public Endereco toEndereco() {
        return new Endereco(this.cidade, this.estado, this.bairro, this.rua, this.numero, this.cep, this.complemento);
    }
}

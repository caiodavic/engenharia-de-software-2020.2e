package com.ufcg.filafacil.DTO;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.ufcg.filafacil.model.posto_vacinacao.Endereco;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class EnderecoDTO {

    private String cidade;

    private String estado;

    private String bairro;

    private String rua;

    private String numero;

    private String cep;

    private String complemento;

    public EnderecoDTO() {
    }

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

    @Override
    public String toString() {
        return "EnderecoDTO{" +
                "cidade='" + cidade + '\'' +
                ", estado='" + estado + '\'' +
                ", bairro='" + bairro + '\'' +
                ", rua='" + rua + '\'' +
                ", numero='" + numero + '\'' +
                ", cep='" + cep + '\'' +
                ", complemento='" + complemento + '\'' +
                '}';
    }
}

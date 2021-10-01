package com.ufcg.filafacil.DTO;

import javax.persistence.OneToOne;

public class PostoDeVacinacaoDTO {

    private long id;

    private String nome;

    private String email;

    private String telefone;

    private String senha;

    @OneToOne
    private EnderecoDTO enderecoDTO;

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getTelefone() {
        return telefone;
    }

    public EnderecoDTO getEnderecoDTO() {
        return enderecoDTO;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSenha() {
        return senha;
    }
}

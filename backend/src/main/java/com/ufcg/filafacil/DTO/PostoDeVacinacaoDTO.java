package com.ufcg.filafacil.DTO;

public class PostoDeVacinacaoDTO {

    private long id;

    private String nome;

    private String email;

    private String telefone;

    private String senha;

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


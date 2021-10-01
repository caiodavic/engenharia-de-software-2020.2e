package com.ufcg.filafacil.DTO;


import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class PostoDeVacinacaoDTO {

    private long id;

    private String nome;

    private String email;

    private String telefone;

    private String senha;

    private EnderecoDTO enderecoDTO;

    public PostoDeVacinacaoDTO() {
    }

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

    @Override
    public String toString() {
        return "PostoDeVacinacaoDTO{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", email='" + email + '\'' +
                ", telefone='" + telefone + '\'' +
                ", senha='" + senha + '\'' +
                ", enderecoDTO=" + enderecoDTO +
                '}';
    }
}

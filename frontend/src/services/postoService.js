import axios from 'axios';

const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

export const savePosto = ({
  id,
  nome,
  email,
  telefone,
  senha,
  endereco,
  token,
}) => {
  const savePostoUrl = baseApiUrl + '/api/secretaria/posto';
  return axios.post(
    savePostoUrl,
    { id: parseInt(id), nome, email, telefone, senha, endereco },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const loadPostos = ({ token }) => {
  const loadPostosUrl = baseApiUrl + '/api/secretaria/postos';

  return axios.get(loadPostosUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const alocarLote = ({ idLote, idPosto, token }) => {
  const alocarLoteUrl = baseApiUrl + '/api/secretaria/alocacao';
  return axios.post(
    alocarLoteUrl,
    { idLote, idPosto },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

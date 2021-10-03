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

export const listAllPostos = ({ token }) => {
  const listAllPostosAvailable = baseApiUrl + '/api/secretaria/postos';
  return axios.get(listAllPostosAvailable, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const listLotesFromPosto = ({ token }) => {
  const listLotesUrl = baseApiUrl + '/api/posto/lotes';
  return axios.get(listLotesUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const confirmVaccination = ({ token, senha }) => {
  const confirmVaccinationUrl = baseApiUrl + '/api/posto/confirma';
  return axios.get(confirmVaccinationUrl, {
    params: {
      senha,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getLastSenha = ({ token }) => {
  const getLastSenhaUrl = baseApiUrl + '/api/posto/fila/posicao';
  return axios.get(getLastSenhaUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const generateCode = ({ token }) => {
  const generateCodeUrl = baseApiUrl + '/api/posto/fila';
  return axios.get(generateCodeUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

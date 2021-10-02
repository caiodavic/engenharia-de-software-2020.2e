import axios from 'axios';

const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

export const login = ({ login, senha, tipoLogin }) => {
  const loginUrl = baseApiUrl + '/api/login/';
  let tipoLoginApi = '';

  if (tipoLogin === 'secretaria') {
    tipoLoginApi = 'SECRETARIA';
  } else {
    tipoLoginApi = 'POSTO_VACINACAO';
  }

  return axios.post(loginUrl, { login, senha, tipoLogin: tipoLoginApi });
};

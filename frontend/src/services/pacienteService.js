import axios from 'axios';

const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

export const confirmCode = ({ codigoPosto }) => {
  const confirmCodeUrl = baseApiUrl + '/api/posto/fila';
  return axios.post(confirmCodeUrl, {
    codigoPosto,
  });
};

import axios from "axios";

const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

export const saveLote = ({ nomeVacina, qtdDoses, dataDeValidade, token }) => {
  const saveLoteUrl = baseApiUrl + "/api/secretaria/lote";
  return axios.post(
    saveLoteUrl,
    { nomeVacina, qtdDoses, dataDeValidade },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const listAllLotesAvailable = async ({ token }) => {
  const listAllAvailable = baseApiUrl + "/api/secretaria/lotes/disponiveis";
  return axios.get(listAllAvailable, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

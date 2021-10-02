import axios from "axios";

const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

export const saveVacina = ({
  nomeVacina,
  numDosesNecessarias,
  diasEntreDoses,
  token,
}) => {
  const saveVacinaUrl = baseApiUrl + "/api/secretaria/vacina";
  return axios.post(
    saveVacinaUrl,
    { nomeVacina, numDosesNecessarias, diasEntreDoses },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const listAll = ({ token }) => {
  const listAllVacinaUrl = baseApiUrl + "/api/secretaria/vacinas";
  return axios.get(listAllVacinaUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

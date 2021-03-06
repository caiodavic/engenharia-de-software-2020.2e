import { useState, useEffect } from 'react';
import { saveLote } from '../../../services/loteService';
import { listAll } from '../../../services/vacinaService';
import { useHistory } from 'react-router-dom';
import { getVaccineList } from '../../../services/api';
import {
  PageWrapper,
  PageTitle,
  StyledForm,
  PageContentContainer,
} from '../../../components/shared/CommonStyles';

export default function CreateLot() {
  const [namesList, setNamesList] = useState([]); // lista de opcoes da vacina recebidas pela API
  const [name, setName] = useState('');
  const [qtdDoses, setQtdDosed] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem('token');
  const history = useHistory();
  const today = getToday();

  useEffect(() => {
    loadVaccineNames({ token });
  }, [token]);

  const loadVaccineNames = async () => {
    const { data: vaccines } = await listAll({ token });
    setNamesList(vaccines.map((vac) => vac.nomeVacina));
  };

  const submitInput = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await saveLote({
        token,
        dataDeValidade: expirationDate,
        nomeVacina: name,
        qtdDoses,
      });

      history.push('/admin/alocacao/lote');
    } catch (err) {
      alert('Error ao registrar o novo lote');
    } finally {
      setIsLoading(false);
    }
  };

  function getToday() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    let todayToString = yyyy + '-' + mm + '-' + dd;
    return todayToString;
  }

  return (
    <PageWrapper>
      <PageContentContainer>
        <PageTitle>Cadastrar Lote da Vacina</PageTitle>

        <StyledForm onSubmit={submitInput}>
          <label htmlFor="names">Nome da Vacina: </label>
          <input
            required
            value={name}
            placeholder="Selecione a Fabricante da Vacina"
            onChange={(e) => setName(e.target.value)}
            list="names"
          />
          <datalist id="names">
            {namesList.map((name) => (
              <option value={name} />
            ))}
          </datalist>

          <label htmlFor="qtd-doses">Quantidade de Vacinas: </label>
          <input
            type="number"
            id="doses"
            value={qtdDoses}
            min="1"
            placeholder="Insira a quantidade de vacinas no Lote"
            onChange={(e) => setQtdDosed(e.target.value)}
            required
          />

          <label htmlFor="expiration-date">Data de Validade: </label>
          <input
            type="date"
            id="expiration-date"
            value={expirationDate}
            min={today}
            onChange={(e) => setExpirationDate(e.target.value)}
            required
          />
          <input type="submit" disabled={isLoading} value="Cadastrar Vacina" />
        </StyledForm>
      </PageContentContainer>
    </PageWrapper>
  );
}

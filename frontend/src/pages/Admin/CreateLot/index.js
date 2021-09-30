import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getVaccineList } from '../../../services/api';
import {
  PageWrapper,
  PageTitle,
  StyledForm,
} from '../../../components/shared/CommonStyles';
import UserContext from '../../../contexts/UserContext';
import { useContext } from 'react';

export default function CreateLot() {
  const [namesList, setNamesList] = useState([]); // lista de opcoes da vacina recebidas pela API
  const [name, setName] = useState('');
  const [qtdDoses, setQtdDosed] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(UserContext);
  const today = getToday();

  useEffect(loadVaccineNames, [token]);

  function loadVaccineNames() {
    getToday();
    let vaccines = getVaccineList({ token });
    setNamesList(vaccines.map((vac) => vac.nomeVacina));
  }

  function submitInput(e) {
    e.preventDefault();
    console.log(name, qtdDoses, expirationDate);
  }

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
      <CreateLotWrapper>
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
      </CreateLotWrapper>
    </PageWrapper>
  );
}

const CreateLotWrapper = styled.div`
  width: 800px;
  @media screen and(max-width:800px) {
    max-width: 100vw;
  }
`;

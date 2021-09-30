import styled from 'styled-components';
import { useState } from 'react';
import {
  PageWrapper,
  PageTitle,
  StyledForm,
} from '../../../components/shared/CommonStyles';

export default function RegisterVaccine() {
  const [name, setName] = useState('');
  const [numDoses, setNumDoses] = useState('');
  const [intervalBetweenDoses, setIntervalBetweenDoses] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function submitInput(e) {
    e.preventDefault();

    const body = {
      nomeVacina: name,
      numDosesNecessarias: numDoses,
      diasEntreDoses: intervalBetweenDoses,
    };

    console.log({ body });
  }

  return (
    <PageWrapper>
      <RegisterVaccineWrapper>
        <PageTitle> Cadastrar Vacina </PageTitle>
        <StyledForm onSubmit={submitInput}>
          <label htmlFor="name">Nome da Vacina: </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Insira o nome da fabricante da vacina"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="num-doses">Número de Doses: </label>
          <input
            type="number"
            id="num-doses"
            value={numDoses}
            placeholder="(1-3)"
            min="1"
            max="3"
            onChange={(e) => {
              setNumDoses(e.target.value);
              if (e.target.value === '1') {
                setIntervalBetweenDoses(null);
              }
            }}
            required
          />

          <label htmlFor="interval">Dias Entre as Doses: </label>
          <input
            type="number"
            id="interval"
            disabled={numDoses === '1'}
            placeholder={
              numDoses === '1' ? 'Dose Única' : '( min: 15 - máx: 90 )'
            }
            value={numDoses === '1' ? '' : intervalBetweenDoses}
            onChange={(e) => setIntervalBetweenDoses(e.target.value)}
            required={!(numDoses === 1)}
            min="15"
            max="90"
          />
          <input type="submit" disabled={isLoading} value="Cadastrar" />
        </StyledForm>
      </RegisterVaccineWrapper>
    </PageWrapper>
  );
}

const RegisterVaccineWrapper = styled.div`
  width: 800px;
  @media screen and(max-width:800px) {
    max-width: 100vw;
  }
`;
